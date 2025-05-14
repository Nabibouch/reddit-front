import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import { ArrowUp, ArrowDown, MessageCircle, Bookmark, Share2 } from 'lucide-react';


export default function Post() {
  const { documentId } = useParams();
  const [post, setPost] = useState(null);
  const [votes, setVotes] = useState(0);
  const [commentaire, setCommentaire] = useState('');
  const [commentaires, setCommentaires] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('jwt');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${url}/posts/${documentId}?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPost(res.data.data);
        setVotes(res.data.data.votes || 0);
        setCommentaires(res.data.data.commentaires || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [documentId]);

  const handleComment = async () => {
    if (!commentaire) return;
    try {
      await axios.post(
        `${url}/commentaires`,
        {
          data: {
            contenu: commentaire,
            post: documentId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCommentaires([...commentaires, { contenu: commentaire }]);
      setCommentaire('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleVote = async (type) => {
    try {
      const newVotes = type === 'up' ? votes + 1 : votes - 1;
      await axios.put(
        `${url}/posts/${documentId}`,
        {
          data: { votes: newVotes },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setVotes(newVotes);
    } catch (err) {
      console.error(`Erreur lors du ${type}vote :`, err);
    }
  };

  if (!post) return <p className="text-white">Chargement...</p>;

  const subreddit = post.sub_reddit?.data?.name || 'Aucune commu';
  const username = post.user?.username || 'Anonyme';
  const photoUrl = post.Photo?.[0]?.formats?.small?.url;

  return (
    <div className="bg-[#161B21] h-screen text-white font-sans overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="flex pt-[70px] h-full">
        <div className="w-[250px] fixed top-[70px] left-0 bottom-0 overflow-y-auto">
          <Sidebar />
        </div>

        <main className="ml-[270px] w-3000 h-full overflow-y-auto px-10 pt-10 pb-10 space-y-8 custom-scroll">
          <div className="bg-[#1F242C] p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between text-[#9ACECA] text-sm mb-2">
              <p>m/{username}</p>
              <p>il y a 1 jour</p>
            </div>

            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{post.contenu}</p>

            {photoUrl && (
              <img
                src={`http://localhost:1337${photoUrl}`}
                alt="post"
                className="rounded-lg object-cover w-full max-h-[400px] mb-4"
              />
            )}

            <div className="flex gap-3 items-center text-[#9ACECA] mt-2">
              <div className="flex items-center gap-1">
                <button onClick={() => handleVote('up')} className="hover:scale-110 transition">
                  <ArrowUp size={16} />
                </button>
                {votes}
                <button onClick={() => handleVote('down')} className="hover:scale-110 transition">
                  <ArrowDown size={16} />
                </button>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={16} />
                {commentaires.length}
              </div>
              <Bookmark size={16} className="ml-auto cursor-pointer" />
              <Share2 size={16} className="cursor-pointer" />
            </div>
          </div>

          <section className="bg-[#1F242C] p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-[#9ACECA] mb-4">Commentaires</h3>

            {commentaires.length === 0 ? (
              <p className="text-gray-400">Aucun commentaire pour le moment.</p>
            ) : (
              commentaires.map((c, i) => (
                <div key={i} className="bg-[#161B21] p-3 rounded mb-2 text-sm">
                  {c.contenu}
                </div>
              ))
            )}

            <textarea
              className="bg-[#161B21] text-white mt-4 w-full p-3 rounded resize-none border border-[#2A2F38] placeholder-gray-400"
              rows={3}
              placeholder="Ajouter un commentaire..."
              value={commentaire}
              onChange={(e) => setCommentaire(e.target.value)}
            />
            <button
              onClick={handleComment}
              className="mt-2 bg-[#9ACECA] text-[#161B21] font-semibold py-2 px-4 rounded hover:brightness-110"
            >
              Commenter
            </button>
          </section>
        </main>

        <div className="w-[30px] hidden lg:block" />
      </div>
    </div>
  );
};

