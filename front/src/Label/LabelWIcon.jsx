import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function LabelButtonWithIcon({ text = "Label", onRemove }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="group inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gray-100 text-gray-800 border border-transparent hover:border-gray-500 transition-colors duration-200">
      <button
        onClick={() => {
          setVisible(false);
          if (onRemove) onRemove(); 
        }}
        className="flex items-center justify-center rounded-full p-1 bg-gray-300 text-gray-900 group-hover:bg-gray-400"
      >
        <X size={14} />
      </button>
      <span className="font-manrope font-medium">{text}</span>
    </div>
  );
}
