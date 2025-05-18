import { useEffect, useState } from "react";
import Input from "../Input with label/Input";
import { PlusCircle, X } from "lucide-react";
import axios from "axios";
import LabelButton from "../Label/Label";
import LabelButtonWithIcon from "../Label/LabelWIcon";
import PrimaryButton from "../Button/PrimaryButton";
import SecondaryButton from "../Button/SecondaryButton";
import { useNavigate } from "react-router-dom";

const CreateCommunity = () => {
    const [showModal, setShowModal] = useState(false);
    const [topics, setTopics ] = useState([]);
    const [choosedTopics, setChoosedTopics] = useState([]);
    const [validateTopics, setValidateTopics] = useState([]);
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();


    const fToken = import.meta.env.VITE_API_TOKEN;
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token')
    const old_url = import.meta.env.VITE_API_OLD
    const navigate = useNavigate();

    const choose = (topic) => {
        const alreadyChoosed = choosedTopics.find((t) => t.id === topic.id);
        if (!alreadyChoosed) setChoosedTopics([...choosedTopics, topic]);
    }

    const deleteTopic = (topic) => {
        setChoosedTopics(choosedTopics.filter((t) => t.id !== topic.id));    
    }
    const deleteValidateTopic = (topic) => {
        setValidateTopics(validateTopics.filter((t) => t.id !== topic.id));
        setChoosedTopics(validateTopics.filter((t) => t.id !== topic.id));  
        
    }

    const validate = () => {
        setValidateTopics([...choosedTopics]);
    }

    const submit = async () => {
        const data = {
            data : {
                name : title,
                description : desc,
                topics : validateTopics.map((t) => t.id)
            }
        }
        try {
            const response = await axios.post(`${url}/sub-reddits?populate=*`, data, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            console.log("envoyé ", response);
            
        } catch (error) {
            console.log(error)
        }
    }

    

    useEffect(() =>{

        const fetchTopics = async () => {
            try {
                const Brutedata =await axios.get(`${url}/topics`,{
                    headers: {
                        Authorization: `Bearer ${fToken}`
                    }
                });
                const data = Brutedata.data.data;
                setTopics(data);
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchTopics();
        

    },[choosedTopics])

    return (
        <>
            <div className="flex flex-row pl-24 gap-8 w-[670px]">
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex items-center">
                        <h1 className="text-darkteal-20 text-3xl">Nouvelle communauté</h1>
                    </div>
                    <Input titre="Nom de la communauté" 
                    required={true} 
                    limit={10} 
                    taille="petit" 
                    id="title" 
                    onChange={(e)=>setTitle(e.target.value)} 
                    />
                    <Input titre="Description" 
                    id="desc" 
                    required={true} 
                    taille="grand" 
                    placeholder="Une nouvelle communauté ? Pourquoi faire ?" 
                    onChange={(e) => setDesc(e.target.value)}
                    />
                    <div className="flex flex-col gap-2">
                    <h2 className="flex text-darkteal-20 text-2xl gap-2 items-center">
                        Ajouter des topics <span className="text-red-500">*</span>
                        <button onClick={() => setShowModal(true)} className="hover:brightness-70">
                            <PlusCircle size={30} />
                        </button>
                    </h2>
                    <div className="flex flex-row gap-1 h-[34px]">
                    {validateTopics.map((t) => (
                        <div key={t.id}>
                        <LabelButtonWithIcon name={t.name} use={() => deleteValidateTopic(t)} />
                        </div>
                    ))}
                    </div>
                    <div className="flex flex-row justify-end gap-1">
                        <SecondaryButton title="Annuler" />
                        <PrimaryButton name="Valider" use={() => submit()} use2={() => navigate('/homepage')}/>
                    </div>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-nightblue p-6 rounded-xl shadow-lg w-[700px] h-[500px] relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-xl font-semibold mb-4 text-darkteal-20">De quoi on parle ?</h2>
                        <div className="flex flex-row justify-center gap-2 h-[200px]">
                            {topics.map((topic) => (
                                <div key={topic.id}>
                                    <LabelButton name={topic.name} use={() => choose(topic)}/>
                                </div>
                                ))}
                        </div>
                        <div className="flex flex-col h-[150px]">
                            <h2 className="text-xl font-semibold mb-4 text-darkteal-20">Topics actuel :</h2>
                            <div className="flex flex-row">
                            {choosedTopics.map((chooseTopic) => (
                                <div key={chooseTopic.id}>
                                    <LabelButtonWithIcon name={chooseTopic.name} use={() => deleteTopic(chooseTopic)}/>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="flex justify-end gap-1">
                            <SecondaryButton title="annuler" use={() => setShowModal(false)}/>
                            <PrimaryButton name="Valider" use={() => validate()} use2={() => setShowModal(false)}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateCommunity;
