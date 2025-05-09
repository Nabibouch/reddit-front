import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Home, Search, Laptop, Users, Calendar,
  Megaphone, Briefcase, Image, MessageCircle, Mail, User
} from 'lucide-react'

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
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="flex bg-black text-white font-sans">
      <aside className="w-64 bg-gradient-to-b from-zinc-900 to-black p-4 border-r border-zinc-800 h-screen fixed left-0 top-0">
        <h1 className="text-2xl font-bold mb-8 text-purple-500 tracking-wide">Feed</h1>
        <nav className="space-y-2">
          {navItems.map(({ label, icon: Icon, path }) => (
            <div
              key={label}
              onClick={() => navigate(path)}
              className="group flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-zinc-800 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-purple-500/10"
            >
              <Icon size={20} className="text-purple-400 group-hover:text-white transition" />
              <span className="group-hover:text-white text-zinc-300 transition">{label}</span>
            </div>
          ))}
        </nav>
      </aside>

      <main className="ml-64 flex-1 min-h-screen">
        <header className="p-4 sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-zinc-800 flex items-center justify-center shadow-sm">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Recherche..."
              className="w-full bg-zinc-800/80 text-white placeholder-zinc-500 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/70 transition-all"
            />
            <Search className="absolute right-3 top-2.5 text-zinc-400" size={20} />
          </div>
          <div className="absolute right-6 text-zinc-400 hover:text-white cursor-pointer transition-colors">
            <Home size={24} />
          </div>
        </header>

        <section className="p-6 animate-fadeIn">
          <h2 className="text-3xl font-semibold text-purple-500 mb-2">Homepage</h2>
          <p className="text-zinc-400 mb-4">Les publications récentes :</p>
          <div className="h-[1500px]" />
        </section>
      </main>
    </div>
  )
}
