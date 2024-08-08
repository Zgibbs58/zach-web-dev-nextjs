"use client";
import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-5 right-5 z-50 rounded-lg bg-emerald-500 p-2 duration-200 ease-in-out hover:bg-emerald-600"
        onClick={() => setChatBoxOpen(true)}
      >
        <Bot color="#ffffff" size={40} />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
