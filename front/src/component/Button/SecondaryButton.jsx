

const SecondaryButton = ({name, use= () => {}}) => {


    return(
        
        <button className="rounded-[28px] px-4 py-2 bg-nightblue text-white w-28 border-2 border-[rgb(103_181_175)] hover:brightness-110 active:brightness-130 " onClick={() => use()}>{name}</button>
    )
}

export default SecondaryButton;
