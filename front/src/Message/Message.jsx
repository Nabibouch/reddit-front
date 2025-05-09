import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Header/header";
import Sidebar from "../Sidebar/sidebar";
import { Send, Image as ImageIcon, Mic } from "lucide-react";

export default function Messagerie() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-manrope">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6">
          <div className="text-center text-gray-500">
          </div>
        </main>
      </div>
    </div>
  );
}
    