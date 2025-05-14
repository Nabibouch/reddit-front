import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThumbsUp, Smile, Calendar, BookOpen, ChevronDown, Plus } from 'lucide-react';
import axios from 'axios';

export default function Sidebar() {
  const [topicsOpen, setTopicsOpen] = useState(true);
  const [subredditOpen, setSubredditOpen] = useState(false);
  const navigate = useNavigate();
  const iconColor = '#9ACECA';
  const token = localStorage.getItem('jwt');
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/sub-reddits?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setSubreddits(response.data);
      } catch (err) {
        console.error('Walo les subreddits:', err);
      }
    };

    fetchSubreddits();
  }, [token]);

  return (
    <aside className="w-60 h-full bg-nightblue text-white font-manrope flex flex-col justify-between py-6 px-4 border-r border-r-gray">
      <div className="space-y-4">
        <div className="space-y-3">
          <SidebarItem label="Home" bold hideIcon onClick={() => navigate('/home')} />
          <SidebarItem label="Explorer" bold hideIcon onClick={() => navigate('/explorer')} />
          <SidebarItem label="Message" bold hideIcon onClick={() => navigate('/messages')} />
        </div>

        <div className="mt-2">
          <div
            onClick={() => setTopicsOpen(!topicsOpen)}
            className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-[#9ACECA]"
          >
            <span>Communauté officielle</span>
            <ChevronDown size={16} className={`transition-transform ${topicsOpen ? 'rotate-180' : ''}`} />
          </div>

          {topicsOpen && (
            <div className="mt-3 space-y-2 ml-3 text-sm text-gray-300">
              <SidebarItem label="Technologies" icon={<ThumbsUp size={16} color={iconColor} />} onClick={() => navigate('/technologies')} />
              <SidebarItem label="Associations / BDE" icon={<Smile size={16} color={iconColor} />} onClick={() => navigate('/associations')} />
              <SidebarItem label="Événements" icon={<Calendar size={16} color={iconColor} />} onClick={() => navigate('/evenements')} />
              <SidebarItem label="Memes" icon={<BookOpen size={16} color={iconColor} />} onClick={() => navigate('/memes')} />
            </div>
          )}
        </div>

        <div className="mt-2">
          <div
            onClick={() => setSubredditOpen(!subredditOpen)}
            className="flex items-center justify-between text-sm font-semibold cursor-pointer hover:text-[#9ACECA]"
          >
            <span>Mes subreddits</span>
            <ChevronDown size={16} className={`transition-transform ${subredditOpen ? 'rotate-180' : ''}`} />
          </div>

          {subredditOpen && (
            <div className="mt-3 ml-3 space-y-2 text-sm text-gray-300">
              <div
                onClick={() => navigate('/createCommun')}
                className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-white/10 cursor-pointer transition"
              >
                <Plus size={16} color={iconColor} />
                <span>Créer Subreddit</span>
              </div>

              {subreddits?.data?.map((sub) => (
                <div key={sub.id} className="px-2 py-1 rounded hover:bg-white/5 cursor-default">
                  #{sub?.name || 'Sans nom'}
                </div>
              ))}
            </div>
          )}
        </div>
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
