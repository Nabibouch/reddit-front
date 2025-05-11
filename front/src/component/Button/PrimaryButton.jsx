

const PrimaryButton = ({name, use= () => {}, use2 = () => {}}) => {

    const handleclick = () => {
        use();
        use2();
    }

    return(
        
        <button className="bg-[rgb(103_181_175)] rounded-[28px] justify-center items-center border border-transparent text-black w-28 hover:border-3 hover:border-darkteal hover:brightness-90 hover:text-black active:brightness-110" onClick={handleclick}>{name}</button>
    )
}

export default PrimaryButton;
