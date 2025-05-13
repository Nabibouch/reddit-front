import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Post () {
  const { documentId } = useParams()
  const [post, setPost] = useState(null)
  const [commentaire, setCommentaire] = useState('')
  const [commentaires, setCommentaires] = useState([])
  const url = import.meta.env.VITE_API_URL
  const token = localStorage.getItem('jwt')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${url}/posts/${documentId}?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setPost(res.data.data)
        setCommentaires(res.data.data.commentaires || [])
      } catch (err) {
        console.error(err)
      }
    };
    fetchPost()
  }, [documentId])

const handleComment = async () => {
    if (!commentaire) return;
    try {
      await axios.post(`${url}/commentaires`, {
        data: {
          contenu: commentaire,
          post: id,
        },
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCommentaires([...commentaires, { contenu: commentaire }]);
      setCommentaire('');
    } catch (err) {
      console.error(err)
    }
  };

  if (!post) return <p>Chargement...</p>;

  return (
    <div className='flex flex-col pl-20 gap-4 w-[510px]'>
      <div className='flex flex-col gap-[10px] bg-nightblue p-4 rounded'>
        <h3 className='text-[16px]'>{post.sub_reddit?.data?.name || "Aucune commu"}</h3>
        <h2 className='text-[20px]'>{post.title}</h2>
        {post.Photo?.[0] ? (
          <img
            src={`${post.Photo[0].formats.thumbnail.url}`}
            alt="post"
          />
        ) : (
          <p>{post.contenu}</p>
        )}
        <p className='text-sm text-gray-300'>Posté par {post.author?.username || "Anonyme"}</p>
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <h3 className='text-lg font-semibold'>Commentaires</h3>
        {commentaires.map((c, i) => (
          <div key={i} className='bg-nightblue p-2 rounded'>
            {c.contenu}
          </div>
        ))}
        <textarea
          className='bg-nightblue text-white p-2 rounded resize-none'
          rows={3}
          placeholder='Ajouter un commentaire...'
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
        />
        <button
          onClick={handleComment}
          className='bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded w-fit'
        >
          Commenter
        </button>
      </div>
    </div>
  );
};

