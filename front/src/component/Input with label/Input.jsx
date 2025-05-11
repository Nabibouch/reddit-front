import { useState } from "react";

const Input = ({ title, required = false }) => {
    const [value, setValue] = useState("");
    const [touched, setTouched] = useState(false);

    const isError = required && touched && value.trim() === "";

    return (
        <div className="flex flex-col gap-1 w-full max-w-md">
            <label htmlFor="text" className="text-base font-medium text-gray-800">
                {title} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                id="text"
                name="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => setTouched(true)}
                required={required}
                className={`border rounded-[14px] px-3 py-2 h-[80px] resize-none transition-all duration-200 
                    focus:outline-none focus:ring-2 focus:ring-darkteal-40 
                    ${isError ? "border-red-500" : "border-darkteal-40"}`}
                placeholder="Votre réponse..."
            />
            {isError && (
                <span className="text-sm text-red-500 mt-1">Ce champ est requis.</span>
            )}
        </div>
    );
};

export default Input;
