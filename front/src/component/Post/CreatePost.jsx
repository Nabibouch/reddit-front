import { useState } from 'react'
import requiredOrNot from '../Input with label/Input'
import PrimaryButton from '../Button/PrimaryButton' 
import Input from '../Input with label/Input'
import { Plus } from 'lucide-react'

export default function CreatePost() {
    return (
        <div className="bg-[#161B21] p-6 rounded-2xl w-fit">
            <div className='flex flex-col gap-4 p-6 rounded-2xl'>
                {/* Titre */}
                 <Input titre="Titre" required={true} />
                    <div className='flex flex-col gap-2'> </div>
            
                <div className='w-[516px] border border-[#9ACECA] px-3 rounded-[50px] h-[200px] flex items-center justify-center'>
                    <h2 className="text-[#9ACECA]">Add Media</h2>
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center cursor-pointer">
                        < Plus className="text-black w-5 h-5" />
                    </div>
                </div>

                <Input titre="Description" required={true} />

                {/* Add Media
                <div onClick={handleClick} className='w-[516px] h-[200px] border border-white rounded-[14px] flex items-center justify-center cursor-pointer bg-[#2c2c2c] text-[#9ACECA]'>
 
                 </div> */}
                <div className='flex gap-4'>
                    <PrimaryButton title="Annuler" />
                    <PrimaryButton title="Poster" />
                </div>
            </div>
        </div>
    )
}


