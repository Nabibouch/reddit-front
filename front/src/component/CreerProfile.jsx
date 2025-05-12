import axios from 'axios';
import { useEffect, useState } from 'react';


const CreerProfile = () => {

    const [users, setUsers] = useState([]);
    const [mail, setMail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [titre, setTitre] = useState();
    const [contenu, setContenu] = useState();
    const [image, setImage] = useState();
    const [com, setCom] = useState();

    const token = import.meta.env.VITE_API_TOKEN;
    useEffect(() => {


        const fetchUser = async () => {
            try {
                const Brutedata = await axios.get("http://localhost:1337/api/users",{
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                });
                const data = Brutedata.data;
                console.log(data);
                setUsers(data);

            } catch (error) {
                console.log(error);
                
            }
        }
        fetchUser();
        

    },[])

    //Voilà un exemple de submit pour crée un user !
    const handleSubmitUser = (e) => {
        e.preventDefault();

        axios.post("http://localhost:1337/api/auth/local/register",{
            headers: {
                Authorization: `Bearer ${token}`
            },
            username,
            mail,
            password
        })
        .catch((err) => {
            console.error('erreur lors de l\' envoie', err);
            
        })
    }
    
    //Exemple de submit pour crée un post
    const handleSubmitpost = (e) => {
        e.preventDefault();

        axios.post("http://localhost:1337/api/posts", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data : {
                titre,
                contenu
            }
        }).catch((err) => {
            console.error("erreur lors de l'envoie", err);
        })
    }

    //Exemple de submit pour enregistrer une image
    const handleSubmitImage = (e) => {
        e.preventDefault();

        axios.post("http://localhost:1337/api/upload", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            image
        })
    }
    
    
    //Exemple de submit pour crée un com 
    const handleSubmitCom = (e) => {
        e.preventDefault();

        axios.post("http://localhost:1337/api/commentaires", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            
        })
    }
    
    
    
    
    
    return(
        <>
            <h1>Créer un nouveau profil ?</h1>
            {users.map((user) => (
                <section key={user.id}>
                    <h3>{user.username}</h3>
                    <h3>{user.email}</h3>
                </section>
            ))}
            {/* <form onSubmit={handleSubmitUser}></form> */}
        </>
    )
}


export default CreerProfile ;