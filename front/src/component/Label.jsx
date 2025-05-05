import React from 'react'
import { X } from 'lucide-react'

const Label = ({ text, color}) => {
    return (
        <div
            className={' group flex items-center gap2 px-4  py-1 rounded-full text-${color}-800 bg-${color}-100 border border-transparent hover:border-${color}-500 transition-colors duration-200'}
        >
            <button
                className={'hidden group-hover:-flex items-center justify-center rounded-full p-1 bg-${color}-300 text-${color}-900 hover:bg-${color}-400'}
            >
                <X size={14} />
            </button>
        <span className='front-medium'>Label</span>
        </div>
    );
};

export default Label

