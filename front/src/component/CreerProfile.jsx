import axios from 'axios';
import { useEffect, useState } from 'react';


const CreerProfile = () => {

    const [users, setUsers] = useState([]);
    const [mail, setMail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const Brutedata = await axios.get("http://localhost:1337/api/users",{
                    headers : {
                        Authorization : 'Bearer 88668b1d1c4f089bf9f1fd8bc5e4d70f634d1df126fd0c5d882895fa2a83f982c05a2c6a246ba54c305588d4bb313dbcb00715edf899eb132711e066e6dff346307b50c2d97e04e4df5bf2ad672307883b429f05352f70ca9b4621e4ae3c1ded5345d870f25bb115515c428ef4f24c101e690d6dd390115fa34aec3e9634311e'
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
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:1337/api/auth/local/register",{
            headers: {
                Authorization: 'Bearer 88668b1d1c4f089bf9f1fd8bc5e4d70f634d1df126fd0c5d882895fa2a83f982c05a2c6a246ba54c305588d4bb313dbcb00715edf899eb132711e066e6dff346307b50c2d97e04e4df5bf2ad672307883b429f05352f70ca9b4621e4ae3c1ded5345d870f25bb115515c428ef4f24c101e690d6dd390115fa34aec3e9634311e'
            },
            username,
            mail,
            password
        })
        .then((result) => {
            console.log(result);
            
        }).catch((err) => {
            console.error('erreur lors de l\' envoie', err);
            
        })
    }
    

    return(
        <>
            <h1>Créer un new user ?</h1>
            {users.map((user) => (
                <section key={user.id}>
                    <h3>{user.username}</h3>
                    <h3>{user.email}</h3>
                </section>
            ))}
            <form onSubmit={handleSubmit}></form>
        </>
    )
}


export default CreerProfile ;