import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ThumbsUp,
  Smile,
  Calendar,
  BookOpen,
  ChevronDown,
  User,
} from 'lucide-react';

export default function Sidebar() {
  const [topicsOpen, setTopicsOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const navigate = useNavigate();
  const iconColor = '#9ACECA';

  return (
    <aside className="w-60 min-h-screen bg-[#1a1e23] text-white font-manrope flex flex-col justify-between py-6 px-4">
      <div className="space-y-4">
        <div className="space-y-3">
          <SidebarItem label="Home" bold hideIcon onClick={() => navigate('/home')} />
          <SidebarItem label="Explorer" bold hideIcon onClick={() => navigate('/explorer')} />
          <SidebarItem label="Message" bold hideIcon onClick={() => navigate('/messages')} />
        </div>

        <div className="mt-6">
          <div
            onClick={() => setTopicsOpen(!topicsOpen)}
            className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-[#9ACECA]"
          >
            <span>TOPICS</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${topicsOpen ? 'rotate-180' : ''}`}
            />
          </div>

          {topicsOpen && (
            <div className="mt-3 space-y-2 ml-3 text-sm text-gray-300">
              <SidebarItem
               label="Technologies" 
               icon={<ThumbsUp size={16} color={iconColor} />} 
               onClick={() => navigate('/technologies')} 
              />
              <SidebarItem 
              label="Associations / BDE" 
              icon={<Smile size={16} color={iconColor} />} 
              onClick={() => navigate('/associations')} 
              />
              <SidebarItem label="Événements" 
              icon={<Calendar size={16} color={iconColor} />} 
              onClick={() => navigate('/evenements')} 
              />
              <SidebarItem label="Memes" 
              icon={<BookOpen size={16} color={iconColor} />} 
              onClick={() => navigate('/memes')} 
              />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div
          onClick={() => setSettingsOpen(!settingsOpen)}
          className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-[#9ACECA]"
        >
          <span>Paramètres</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${settingsOpen ? 'rotate-180' : ''}`}
          />
        </div>

        {settingsOpen && (
          <div className="ml-3 mt-2">
            <SidebarItem label="Compte" icon={<User size={16} color={iconColor} />} onClick={() => navigate('/compte')} />
          </div>
        )}
      </div>
    </aside>
  );
}

function SidebarItem({ label, icon, bold = false, hideIcon = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-white/10 cursor-pointer transition text-sm"
    >
      {!hideIcon && icon}
      <span className={bold ? 'font-bold' : ''}>{label}</span>
    </div>
  );
}
