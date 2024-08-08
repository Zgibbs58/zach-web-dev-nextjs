import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";
import { DataAPIClient, VectorDoc } from "@datastax/astra-db-ts";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collectionName = process.env.ASTRA_DB_COLLECTION || "";

if (!token || !endpoint || !collectionName) {
  throw new Error(
    "Please provide ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, and ASTRA_DB_COLLECTION in .env",
  );
}

export async function getVectorStore() {
  return AstraDBVectorStore.fromExistingIndex(
    new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
    {
      token,
      endpoint,
      collection: collectionName,
      collectionOptions: {
        vector: {
          dimension: 1536,
          metric: "cosine",
        },
      },
    },
  );
}

// export async function getEmbeddingsCollection() {
//   return new AstraDB(token, endpoint).collection(collection);
// }

export async function getEmbeddingsCollection() {
  const client = new DataAPIClient(token);
  const db = client.db(endpoint, { namespace: "default_keyspace" });

  return db.collection(collectionName);
}
