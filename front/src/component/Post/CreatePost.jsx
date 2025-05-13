import { useState, useRef } from 'react'
import PrimaryButton from '../Button/PrimaryButton' 
import SecondaryButton from '../Button/SecondaryButton'
import Input from '../Input with label/Input'
import { Plus } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
  const navigate = useNavigate()
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const fileInputRef = useRef(null)
  const [error, setError] = useState('')

  const token = import.meta.env.VITE_API_TOKEN;

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
    }
  }

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
                description : description
            }
        }
        const response = await axios.post('http://localhost:1337/api/posts', data, {
            headers: {
                Authorization : `Bearer ${token}`
        },
      });
      navigate('/Post');
    } catch (err) {
      const message = err.response?.data?.error?.message || 'Erreur inconnue';
      setError(message);
      console.error('Erreur détaillée :', err.response?.data);
    }
  };

  
  

  return (
    <div className="bg-[#161B21] p-6 rounded-2xl w-fit">
      <form onSubmit={handlesubmit} className="flex flex-col gap-4 p-6 rounded-2xl">
        <Input titre="Titre" required={true} onChange={(e) => setTitle(e.target.value)} />

        <div className={`w-[516px] h-[200px] border border-[#9ACECA] px-3 rounded-[50px] relative overflow-hidden flex items-center justify-center ${image ? '' : 'flex-col cursor-pointer'}`} onClick={!image ? handleUploadClick : undefined}>
          {image ? (
            <>
              <img src={image} alt="Preview" className="w-full h-full object-cover rounded-[50px]" />
              <button type="button" onClick={handleUploadClick} className="absolute top-2 right-2 bg-white text-black text-xs px-3 py-1 rounded-full shadow hover:bg-gray-200 transition z-10">Changer</button>
            </>
          ) : (
            <>
              <h2 className="text-[#9ACECA]">Add Media</h2>
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <Plus className="text-black w-5 h-5" />
              </div>
            </>
          )}
          <input type="file" accept="image/*,video/*" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
        </div>

        <Input titre="Description" required={true} onChange={(e) => setDescription(e.target.value)} />

        {error && <p className=
        "text-red-500">{error}</p>}

        <div className='flex gap-4'>
          <SecondaryButton title="Annuler" />
          <PrimaryButton title="Poster" type="submit" />
        </div>
      </form>
    </div>
  )
}
