const PrimaryButton = ({ title, onClick = () => {}, disabled = false }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          bg-[#161B21]
          text-white
          font-semibold
          px-6 py-2 
          w-32
          rounded-full
          border-2 border-[#9ACECA]
          transition-all duration-300 ease-in-out
          hover:bg-[#9ACECA]
          hover:text-[#161B21]
          hover:border-white
          hover:shadow-md
          active:scale-95
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-[#9ACECA]
          disabled:opacity-50
          disabled:cursor-not-allowed
          cursor-pointer
        `}
      >
        {title}
      </button>
    );
  };
  
  export default PrimaryButton;
  
