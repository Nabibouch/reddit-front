import React from 'react'
import { X } from 'lucide-react'

export default function LabelButtonWithIcon() {
    // const LabelButtonWithIconClick = ({ text = "Label", color  }) => {
        return (
            <button
                className={'group inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 text-gray-800 border border-transparent hover:border-gray-500 transition-colors duration-200'}
            >
                <span
                    className={'flex items-center justify-center rounded-full p-1 bg-gray-300 text-gray-900 group-hover:bg-gray-400'}
                >
                    <X size={14}/>
                </span>
                <span className="font-manrope font-medium">Label</span>
            </button>  
        );
    };
