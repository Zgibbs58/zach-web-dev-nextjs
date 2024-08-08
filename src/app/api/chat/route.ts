import OpenAI from "openai";
import { ChatCompletionMessageParam } from "ai/prompts";
import {
  LangChainStream,
  StreamingTextResponse,
  Message as VercelChatMessage,
} from "ai";
import { ChatOpenAI } from "@langchain/openai";
import {
  ChatPromptTemplate,
  PromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { getVectorStore } from "@/app/lib/astradb";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((message: VercelChatMessage) =>
        message.role === "user"
          ? new HumanMessage(message.content)
          : new AIMessage(message.content),
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const { stream, handlers } = LangChainStream();

    const retriever = (await getVectorStore()).asRetriever();

    const chatModel = new ChatOpenAI({
      modelName: "gpt-4o-mini",
      streaming: true,
      callbacks: [handlers],
      // verbose: true,
      cache: true,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-4o-mini",
      // verbose: true,
    });

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Given the above conversation, generate a search query to get information relevant to the current question. " +
          "Don't leave out any relevant keywords. Only return the query and no other text.",
      ],
    ]);

    const historyAwareRetriverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a chatbot for Zach Gibbs Web Development website. You impersonate Zach Gibbs. " +
          "Answer the user's questions based on the below context. " +
          "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context within the same site. " +
          "Never link to a website outside of zacharywgibbs.com. Format your messages in markdown format.\n\n" +
          "Context:\n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\nPage content:\n{page_content}",
      ),
      documentSeparator: "\n--------\n",
    });

    const retrivalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetriverChain,
    });

    retrivalChain.invoke({
      input: currentMessageContent,
      chat_history: chatHistory,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

// import OpenAI from "openai";
// import { ChatCompletionMessageParam } from "ai/prompts";
// import { ReadableStream } from "web-streams-polyfill/ponyfill/es2018";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const messages = body.messages;

//     const openai = new OpenAI();

//     const systemMessage: ChatCompletionMessageParam = {
//       role: "system",
//       content:
//         "You are a sarcasm bot. You answer all user questions in a sarcastic way.",
//     };

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       stream: true,
//       messages: [systemMessage, ...messages],
//     });

//     const stream = new ReadableStream({
//       start(controller: ReadableStreamDefaultController) {
//         response.read(
//           (chunk) => {
//             const text = new TextDecoder().decode(chunk);
//             controller.enqueue(text);
//           },
//           () => {
//             controller.close();
//           },
//         );
//       },
//     });

//     return new Response(stream, {
//       headers: { "Content-Type": "text/event-stream" },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: "Internal server error" }), {
//       status: 500,
//     });
//   }
// }
