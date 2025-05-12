import React from 'react'
import { X } from 'lucide-react'

export  default function  LabelButton({name="Label", use=() =>{}}) {
        return (
            <button
            className={'inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 text-gray-800 border border-transparent hover:border-gray-500 transition-colors duration-200'}
            onClick={use}
            >
                <span className="font-manrope font-medium">{name}</span>
            </button>
        );
    
};

          
 
