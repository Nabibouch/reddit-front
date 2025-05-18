import React, { useState } from "react"

export default function TransparentButton({ title, use = () => {}, use2 = () => {} }) {
  
  const [activeTab, setActiveTab] = useState(false);
  
  const handleClick = () => {
    setActiveTab(true)
    use()
    use2()
  }

  return (
    <button
      onClick={handleClick}
      className={
        `px-4 py-2 rounded-lg transition-colors duration-200 text-white ` +
        `bg-nightblue hover:bg-gray-80 ` +
        (activeTab === true ? 'bg-darkteal60' : '')
      }
    >
      {title}
    </button>
  )
}