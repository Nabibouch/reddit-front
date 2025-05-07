

const SecondaryButton = ({title, use= () => {}}) => {


    return(
        
        <button className="rounded-[28px] px-4 py-2 text-white w-28 border-2 border-[rgb(103_181_175)] hover:bg-amber-50 hover:text-black" onClick={use}>{title}</button>
    )
}

export default SecondaryButton;
