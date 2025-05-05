


const Button = ({fonction= () => {}, name, color, stroke=false}) => {

    function stroke_active() {
        return stroke ? "border border-black" : "" ;
    }

    return(
        <button className={`${color} rounded-[28px] px-4 py-2 hover:bg-white hover:text-black ${stroke_active()}`} onClick={fonction}>{name}</button>
    )
}

export default Button;