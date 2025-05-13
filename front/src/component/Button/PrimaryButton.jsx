const PrimaryButton = ({ name, use = () => {}, use2 = () => {}, disabled = false }) => {
  
  const handleClick = () => {

    use();
    use2();
  }

    return (
      <button
        onClick={handleClick}
        disabled={disabled}
        className={`
          bg-[rgb(103,181,175)] 
          text-black 
          font-semibold
          px-6 py-2 
          w-32
          rounded-full
          border border-transparent 
          shadow-sm
          transition-all duration-200 ease-in-out
          hover:brightness-105 
          hover:scale-105 
          active:scale-95
          focus:outline-none 
          focus:ring-2 focus:ring-offset-2 focus:ring-teal-400
          disabled:opacity-50 
          disabled:cursor-not-allowed 
          cursor-pointer
        `}
      >
        {name}
      </button>
    );
  };
  
  export default PrimaryButton;
  
