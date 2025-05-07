

const PrimaryButton = ({title, use= () => {}}) => {


    return(
        
        <button className="bg-[rgb(103_181_175)] rounded-[28px] px-4 py-2 text-black w-28 hover:bg-amber-50 hover:text-black" onClick={use}>{title}</button>
    )
}

export default PrimaryButton;
