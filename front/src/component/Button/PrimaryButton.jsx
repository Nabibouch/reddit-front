

const PrimaryButton = ({title, use= () => {}}) => {


    return(
        
        <button className="bg-[rgb(103_181_175)] rounded-[28px] px-4 py-2 border border-transparent text-black w-28 hover:border-3 hover:border-darkteal hover:text-black active:brightness-110" onClick={use}>{title}</button>
    )
}

export default PrimaryButton;
