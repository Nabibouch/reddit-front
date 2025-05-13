const TransparentButton = ({
  title,
  isSelected = false,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 
        rounded-full 
        font-semibold
        transition-all duration-200 ease-in-out 
        text-white 
        bg-nightblue
        hover:bg-gray-80 
        active:scale-95 
        shadow-sm 
        focus:outline-none 
        focus:ring-2 focus:ring-offset-2 focus:ring-darkteal80 
        cursor-pointer
        ${isSelected ? 'bg-darkteal60' : ''}
      `}
    >
      {title}
    </button>
  )
}

export default TransparentButton;
