import DefaultStructure from "../Default structure/DefaultStructure"
import TransparentButton from "../Button/TransparentButton"
import { Pencil } from "lucide-react"

// import Posts from './Posts';
// import Comments from './Comments';
// import Saved from './Saved';

// TODO: A UTILISER

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function ProfilePage() {
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [saved, setSaved] = useState([])
    const [affiche, setAffiche] = useState('')

    const navigate = useNavigate()
    const { id } = useParams()


    const Posts = () => <div>Posts page</div>;
    const Comments = () => <div>Comments page</div>;
    const Saved = () => <div>Saved page</div>;


    /**
     * ROUTES :
     * USERS
     * POSTS
     * COMMENTAIRES
     * 
     * 
     * TU FERAS TES TESTS SUR L'UTILISATEUR N.5 
     * 
     * SI TU AS UNE ERREUR NOT FOUND ALORS QUE LE POST EXISTE UTILISE LE DOCUMENTID A LA PLACE DE L'ID DANS LE GET BY ID (POSTS/:DOCUMENTID)
     */
    // return <h1>COUCOU</h1>

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRes = await fetch(`http://localhost:1337/api/users/${id}`)
                const postsRes = await fetch(`http://localhost:1337/api/users/${id}?populate=posts`)
                const commentsRes = await fetch(`http://localhost:1337/api/users/${id}/comments`)
                const savedRes = await fetch(`http://localhost:1337/api/users/${id}/saved`)

                setUser(await userRes.json())
                setPosts(await postsRes.json())
                setComments(await commentsRes.json())
                setSaved(await savedRes.json())
            } catch (error) {
                console.error("Une erreur est survenue lors du chargement :", error)
            }
        }

        fetchData()
    }, [id])

    return (
        <DefaultStructure>
            <div className="flex flex-col gap-20">
                <div>
                    <div className="flex flex-col items-center gap-2 font-semibold">
                        {/* <UserThumb /> */}
                        <div className="flex gap-4">
                            <p>{user.username || "USERNAME"}</p>
                            <Pencil className="w-5 h-5 text-gray-600 cursor-pointer hover:text-white"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start gap-2">
                    <TransparentButton
                        title="Postes"
                        onClick={setAffiche("postes")}
                        color="bg-nightblue text-white hover:bg-gray-80"
                    />
                    <TransparentButton
                        title="Commentaires"
                        onClick={() => navigate(`/comments?user=${id}`)}
                        color="bg-nightblue text-white hover:bg-gray-80"
                    />
                    <TransparentButton
                        title="Enregistrés"
                        onClick={() => navigate(`/saved?user=${id}`)}
                        color="bg-nightblue text-white hover:bg-gray-80"
                    />
                </div>

            </div>
        </DefaultStructure>
    )
    

}



// export default function ProfilePage() {
//     const [user, setUser] = useState({})
//     const [posts, setPosts] = useState([])
//     const [comments, setComments] = useState([])
//     const [saved, setSaved] = useState([])
//     const [affiche, setAffiche] = useState('')

//     const navigate = useNavigate()
//     const { id } = useParams()


//     const Posts = () => <div>Posts page</div>;
//     const Comments = () => <div>Comments page</div>;
//     const Saved = () => <div>Saved page</div>;


//     /**
//      * ROUTES :
//      * USERS
//      * POSTS
//      * COMMENTAIRES
//      * 
//      * 
//      * TU FERAS TES TESTS SUR L'UTILISATEUR N.5 
//      * 
//      * SI TU AS UNE ERREUR NOT FOUND ALORS QUE LE POST EXISTE UTILISE LE DOCUMENTID A LA PLACE DE L'ID DANS LE GET BY ID (POSTS/:DOCUMENTID)
//      */
//     // return <h1>COUCOU</h1>

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const userRes = await fetch(`http://localhost:1337/api/users/${id}`)
//                 const postsRes = await fetch(`http://localhost:1337/api/users/${id}?populate=posts`)
//                 const commentsRes = await fetch(`http://localhost:1337/api/users/${id}/comments`)
//                 const savedRes = await fetch(`http://localhost:1337/api/users/${id}/saved`)

//                 setUser(await userRes.json())
//                 setPosts(await postsRes.json())
//                 setComments(await commentsRes.json())
//                 setSaved(await savedRes.json())
//             } catch (error) {
//                 console.error("Une erreur est survenue lors du chargement :", error)
//             }
//         }

//         fetchData()
//     }, [id])

//     return (
//         <DefaultStructure>
//             <div className="flex flex-col gap-20">
//                 <div>
//                     <div className="flex flex-col items-center gap-2 font-semibold">
//                         {/* <UserThumb /> */}
//                         <div className="flex gap-4">
//                             <p>{user.username || "USERNAME"}</p>
//                             <Pencil className="w-5 h-5 text-gray-600 cursor-pointer hover:text-white"/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex justify-start gap-2">
//                     <TransparentButton
//                         title="Postes"
//                         onClick={setAffiche("postes")}
//                         color="bg-nightblue text-white hover:bg-gray-80"
//                     />
//                     <TransparentButton
//                         title="Commentaires"
//                         onClick={() => navigate(`/comments?user=${id}`)}
//                         color="bg-nightblue text-white hover:bg-gray-80"
//                     />
//                     <TransparentButton
//                         title="Enregistrés"
//                         onClick={() => navigate(`/saved?user=${id}`)}
//                         color="bg-nightblue text-white hover:bg-gray-80"
//                     />
//                 </div>

//             </div>
//         </DefaultStructure>
//     )
    

// }