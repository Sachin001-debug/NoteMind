import { useState } from "react";
import { Menu, X, ChartBar, Send, Paperclip, LogOut } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chats = [
    { id: 1, title: "Chat 1" },
    { id: 2, title: "Chat 2" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/*Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-[#2b2b2b] text-white w-64 p-5 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-300 z-50`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-xl font-bold">Chats</h2>
          <X onClick={() => setSidebarOpen(false)} className="cursor-pointer" />
        </div>

        <button className="flex items-center gap-2 bg-yellow-500 w-full p-2 rounded mb-4">
          <ChartBar size={18} /> New Chat
        </button>

        <ul className="space-y-2">
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="p-2 hover:bg-yellow-700 rounded cursor-pointer"
            >
              {chat.title}
            </li>
          ))}
        </ul>

        <div className="flex justify-start items-center cursor-pointer hover:text-red-500 gap-2 mt-90">
          <LogOut size={18} />
          Logout
        </div>
        <hr className="text-gray-500 mt-4" />
        <div className="text-gray-400 text-sm mt-4 ">
          NodeMind-AI. All Right Reserved.
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/*Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Top bar */}
        <div className="flex items-center justify-between p-4 bg-red-800 shadow">
          <Menu
            className="md:hidden cursor-pointer text-white"
            onClick={() => setSidebarOpen(true)}
          />
          <h1 className="font-bold text-white text-xl">Roger AI</h1>
        </div>

        {/* Chat messages */}
        <div className="bg-black flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <p className="text-center text-2xl text-white mt-50">
              Start a conversation...
            </p>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 bg-black border-t flex items-center gap-2">
          {/* File upload */}
          <label className="cursor-pointer">
            <Paperclip className="text-red-400" />
            <input type="file" className="hidden" accept="image/*,.pdf" />
          </label>

          {/* Input */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={1}
            className="flex-1 resize-none border bg-white rounded-xl px-3 py-4 outline-none max-h-60 overflow-y-auto"
            placeholder="Ask something..."
          />

          {/* Send */}
          <button className="bg-yellow-500 text-white p-4 cursor-pointer rounded">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
