import Input from "../Input with label/Input";


const CreateCommunity = () => {

    return (
        <div className="flex flex-row pl-24">
            <div className="">
                <h1 className="text-darkteal-20 text-3xl">Nouvelle communauté</h1>
                <Input  titre="Nom de la comunauté" required={true}/>
            </div>
        </div>
    )
}

export default CreateCommunity;