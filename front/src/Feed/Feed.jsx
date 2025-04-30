import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Home, Search, Laptop, Users, Calendar, Megaphone, Briefcase, Image, MessageCircle, Mail, User} from 'lucide-react';

const navItems = [
  { label: 'Technologies', icon: Laptop, path: '/technologies' },
  { label: 'Associations / BDE', icon: Users, path: '/associations' },
  { label: 'Événements', icon: Calendar, path: '/evenements' },
  { label: 'Annonces', icon: Megaphone, path: '/annonces' },
  { label: 'Stages / Alternances', icon: Briefcase, path: '/stages' },
  { label: 'Memes', icon: Image, path: '/memes' },
  { label: 'Messages', icon: MessageCircle, path: '/messages' },
  { label: 'Contact', icon: Mail, path: '/contact' },
  { label: 'Compte', icon: User, path: '/compte' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      <aside className="w-64 bg-zinc-900 p-4 border-r border-zinc-800">
        <h1 className="text-xl font-semibold mb-8">Feed</h1>
        <nav className="space-y-4">
          {navItems.map(({ label, icon: Icon, path }) => (
            <div
              key={label}
              onClick={() => navigate(path)}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-zinc-700 transition"
            >
              <Icon size={20} />
              <span>{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      <main className="flex-1">
        <header className="p-4 border-b border-zinc-800 flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Recherche"
              className="w-full bg-zinc-800 text-white placeholder-zinc-400 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute right-3 top-2.5 text-zinc-400" size={20} />
          </div>
          <div className="text-zinc-400 hover:text-white cursor-pointer">
            <Home size={24} />
          </div>
        </header>

        <section className="p-6">
          <h2 className="text-2xl font-bold mb-4">Homepage</h2>
          <p className="text-zinc-400">Les publications</p>
        </section>
      </main>
    </div>
  );
}
