import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Header/header";
import Sidebar from "../Sidebar/sidebar";
import { Send, Image as ImageIcon, Mic } from "lucide-react";

export default function Messagerie() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState({ name: "Youssef Lrambet" });

  
  return (
    <div className="flex min-h-screen bg-[#1a1e23] text-white font-manrope">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 flex overflow-hidden">
          <div className="w-1/3 border-r border-gray-800 p-4">
            <h2 className="text-lg font-semibold mb-4">Messages</h2>
            <div className="space-y-4 overflow-y-auto h-[calc(100%-2rem)] pr-2">
              <p className="text-gray-500">Aucune conversation :/</p>
            </div>
          </div>
          <div className="flex flex-col w-2/3 p-6">
          {!conversation ? (
            <div className="flex-1 flex items-center justify-center text-gray-500">Selectionner un utilisateurs pour commencer une convesrsation</div>
          ) : (
            <>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-400 mr-4"/>
                <span className="text-lg font-semibold">{conversation.name}</span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                <div className="flex justify-end">
                  <div className="bg-[#9ACECA] text-black px-4 py-2 rounded-2xl max-w-xs">C'est l'heure du ftour Nabil mon fils</div>
                </div>
                <p className="text-center text-xs text-gray-400">00:00</p>
              </div>

              <div className="mt-4">
                <div className="flex items-center bg-[#1B1E20] border border-gray-700 rounded-2xl px-4 py-2">
                  <input type="text" placeholder="Votre message" className="flex-1 bg-transparent outline-none text-white placeholder-gray-500" value={message} onChange={(e) => setMessage(e.target.value)} />
                  <div className="flex items-center space-x-3 ml-2">
                    <ImageIcon className="text-gray-400 cursor-pointer" size={20} />
                    <Mic className="ext-gray-400 cursor-pointer" size={20} />
                    <Send className="text-[#9ACECA] cursor-pointer" size={20} />
                  </div>
                </div>
              </div>
            </>
          )}
          </div>
        </main>
      </div>
    </div>
    
  );
}
    