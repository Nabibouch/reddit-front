import { useState, useRef, useEffect } from 'react'
import PrimaryButton from '../Button/PrimaryButton' 
import SecondaryButton from '../Button/SecondaryButton'
import Input from '../Input with label/Input'
import { Plus } from 'lucide-react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditPost() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const fileInputRef = useRef(null)
  const [error, setError] = useState('')
  const [file, setFile] = useState(null);
  const [post, setPost] = useState('')

  const postId = useParams().id.replace(";", "");
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const url = import.meta.env.VITE_API_URL;


  useEffect(() => {
    const fetchData = async () => {
      const bruteData = await axios.get(`${url}/posts/${postId}`)
      const data = bruteData.data.data;
      console.log(data);
      setPost(data);
    } 
    fetchData();
  },[])

 


  const handlesubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!title || !description) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    
    try {
        

        const data = {
            data : {
                title : title,
                contenu : description,
                
            }
        }
        const response = await axios.put(`${url}/posts/${postId}`, data, {
            headers: {
                Authorization : `Bearer ${token}`
        },
      });

      

      navigate('/homepage');
    } catch (err) {
      const message = err.response?.data?.error?.message || 'Erreur inconnue';
      setError(message);
      console.error('Erreur détaillée :', err.response?.data);
    }
  };

  
  

  return (
    <div className="bg-[#161B21] p-6 rounded-2xl w-fit">
      <form onSubmit={handlesubmit} className="flex flex-col gap-4 p-6 rounded-2xl">
        <Input titre="Titre" required={true} onChange={(e) => setTitle(e.target.value)} placeholder={post.title} />

        <Input titre="Description" required={true} onChange={(e) => setDescription(e.target.value)} placeholder={post.contenu} />

        {error && <p className=
        "text-red-500">{error}</p>}

        <div className='flex gap-4'>
          <SecondaryButton title="Annuler" />
          <PrimaryButton name="Poster" type="submit" />
        </div>
      </form>
    </div>
  )
}