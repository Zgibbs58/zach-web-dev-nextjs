"use client";
import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button
        className="bg-emerald-500 rounded-lg p-1 md:p-2 hover:bg-emerald-600 ease-in-out duration-200 fixed bottom-4 right-4 z-50"
        onClick={() => setChatBoxOpen(true)}
      >
        <Bot size={30} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
