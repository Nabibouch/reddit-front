import { useState } from 'react'
import requiredOrNot from '../Input with label/Input'
import PrimaryButton from '../Button/PrimaryButton' 
import Input from '../Input with label/Input'
import { Plus } from 'lucide-react'
import { useRef } from 'react'
import axios from 'axios'

export default function CreatePost() {
    const [image, setImage] = useState(null)
    const fileInputRef = useRef(null)
    
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
    return (
        <div className="bg-[#161B21] p-6 rounded-2xl w-fit">
            <div className='flex flex-col gap-4 p-6 rounded-2xl'>
                {/* Titre */}
                 <Input titre="Titre" required={true} />
                    <div className='flex flex-col gap-2'> </div>
            
                <div className='w-[516px] border border-[#9ACECA] px-3 rounded-[50px] h-[200px] flex items-center justify-center'>
                    <h2 className="text-[#9ACECA]">Add Media</h2>
                    <div  onClick={handleUploadClick} className="w-5 h- rounded-full bg-white flex items-center justify-center cursor-pointer">
                        < Plus className="text-black w-5 h-5" />
                    </div>
                    <input type="file" accept="image/*,video/*" ref={fileInputRef} className="hidden" onChange={handleFileChange}/>
                    {image && (
                    <div className="w-full h-[150px] mt-4 bg-cover bg-center rounded-[50px]" style={{ backgroundImage: `url(${image})` }} />
                    )}
                </div>

                <Input titre="Description" required={true} />

                <div className='flex gap-4'>
                    <PrimaryButton title="Annuler" />
                    <PrimaryButton title="Poster" />
                </div>
            </div>
        </div>
    )
}


