import React from "react"

export default function TransparentButton({ title, value, activeTab, setActiveTab, navigateTo, navigate }) {
  const handleClick = () => {
    setActiveTab(value)
    if (navigateTo && navigate) {
      navigate(navigateTo)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={
        `px-4 py-2 rounded-lg transition-colors duration-200 text-white ` +
        `bg-nightblue hover:bg-gray-80 ` +
        (activeTab === value ? 'bg-darkteal60' : '')
      }
    >
      {title}
    </button>
  )
}