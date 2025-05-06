import { useState } from 'react'
import requiredOrNot from '../Input with label/Input'
import PrimaryButton from '../Button/PrimaryButton' 
import Input from '../Input with label/Input'

export default function CreatePost() {
    return (
        <div className='flex flex-col gap-4'>
            {/* Titre */}
            <Input titre="Titre" required={true} />
                <div className='flex flex-col gap-2'> </div>
            
            <div className='w-[516px] border border-black px-3 rounded-[50px] h-[200px]'>
                 <h2>Add Media</h2>
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
    )
}


