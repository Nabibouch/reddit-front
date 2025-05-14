import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle, Search, Home, Bell, MessageCircle, Plus } from 'lucide-react';

export default function Header() {
  const [activeIcon, setActiveIcon] = useState('home');
  const navigate = useNavigate();

  const headerIcons = [
    { name: 'home', icon: <Home size={20} />, route: '/homepage' },
    { name: 'bell', icon: <Bell size={20} />, route: '/notifications' },
    { name: 'chat', icon: <MessageCircle size={20} />, route: '/messages' },
    { name: 'plus', icon: <Plus size={20} />, route: '/CreatePost' },
  ];

  

  const iconClasses = (iconName) =>
    `relative group p-2 rounded-full transition-all duration-200 ease-in-out 
    ${activeIcon === iconName ? 'bg-[#cee6e5]/20 text-[#cee6e5]' : 'hover:bg-white/10 text-white'}`;

  return (
    <nav className="bg-nightblue text-white font-manrope flex items-center justify-between px-6 py-3 shadow-md border-b border-b-gray">
      
      <div className="flex items-center space-x-2 hover:opacity-90 cursor-pointer transition duration-200">
        <UserCircle size={22} />
        <span className="text-sm font-medium">Username</span>
      </div>

      <div className="flex items-center bg-darkteal-20 rounded-full px-4 py-2 w-full max-w-md shadow-inner focus-within:ring-2 ring-offset-2 ring-darkteal-40 hover:bg-darkteal-40">
        <input
          type="text"
          placeholder="Recherche sur Malhetic"
          className="bg-transparent outline-none text-black placeholder:text-gray-700 w-full text-sm"
        />
        <Search
          className="text-gray-700 ml-2 hover:scale-110 transition-transform duration-200 cursor-pointer"
          size={18}
        />
      </div>

      <div className="flex items-center space-x-4">
        {headerIcons.map(({ name, icon, route }) => (
          <button
            key={name}
            onClick={() => {
              setActiveIcon(name);
              navigate(route);
            }}
            className={iconClasses(name)}
            aria-label={name}
          >
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs bg-darkteal-20 text-black rounded px-1 py-0.5 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
            {icon}
          </button>
        ))}
      </div>
    </nav>
  );
}
