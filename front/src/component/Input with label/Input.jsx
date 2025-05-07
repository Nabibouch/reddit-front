
const Input = ({titre, required=false}) => {

    function requiredOrNot() {
        if (required)
            return "*";
        return "";
        }

    return(
        <div className="flex flex-col gap-2">
            <h2>{titre}{requiredOrNot()}</h2>
            {/* <input type="text" className="w-[516px] border border-white px-2 rounded-[14px]" /> */}
            <textarea className="w-[516px] border border-black px-3 rounded-[14px] h-[30px]" name="text" id="text"></textarea>
        </div>
    )
}

export default Input;