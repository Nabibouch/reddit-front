import { useState } from "react";

const Input = ({titre, required=false, limit=false, taille, placeholder="Écrivez ici...", id, onChange}) => {

    const width = "w-[300px]";

    function requiredOrNot() {
        return required ? "*" : "";
    }

    function defTaille() {
        if(taille==="grand") return "w-full h-[300px]";
        if(taille==="petit") return "w-[400px]";
        return width;
    }

            
    return(
        <div className="flex flex-col gap-3">
            <label htmlFor={id} className="flex flex-row text-darkteal-20 gap-1">{titre}<span className="text-red-500">{requiredOrNot()}</span></label>
            <textarea  className={`${defTaille()} border border-darkteal-40 px-3 pb-1 pt-1 rounded-[14px] h-[35px] text-shadow-white`} 
            name={id} 
            id={id}
            maxLength={limit || undefined}
            placeholder={placeholder}
            onChange={onChange}
            // defaultValue={titre}
            ></textarea>
        </div>
    );
};

export default Input;
