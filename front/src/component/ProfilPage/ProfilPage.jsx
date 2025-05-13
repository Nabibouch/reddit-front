import { useState, useEffect } from "react"
import axios from "axios"
// import { useParams } from "react-router-dom"
import TransparentButton from "../Button/TransparentButton"
import { Pencil } from "lucide-react"

//   const { id } = useParams()
const url = import.meta.env.VITE_API_URL
const token = localStorage.getItem("token")

export default function ProfilePage() {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [saved, setSaved] = useState([])
  const [affiche, setAffiche] = useState("postes")

  // const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        console.error("Utilisateur non connecté")
        return
      }

      try {
        // const userRes = await axios.get(`${url}/users/${id}`, {
        const userRes = await axios.get(`${url}/users/me?populate=posts`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const userId = userRes.data.id

        const postsRes = await axios.get(`${url}/users/${userId}?populate=posts`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const commentsRes = await axios.get(`${url}/users/${userId}/comments`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const savedRes = await axios.get(`${url}/users/${userId}/saved`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setUser(userRes.data)
        setPosts(postsRes.data.posts || [])
        setComments(commentsRes.data)
        setSaved(savedRes.data)
      } catch (error) {
        console.error("Erreur lors du chargement :", error)
      }
    }

    fetchData()
  }, [])

  const renderContent = () => {
    if (affiche === "postes") {
      return posts.length ? (
        posts.map((post, index) => (
          <div key={index} className="bg-nightblue-80 text-white p-4 rounded-md">
            <h3 className="text-lg font-semibold">{post.title || "Titre manquant"}</h3>
            <p>{post.content || "Contenu manquant"}</p>
          </div>
        ))
      ) : (
        <p>Aucun post</p>
      )
    }

    if (affiche === "commentaires") {
      return comments.length ? (
        comments.map((comment, index) => (
          <div key={index} className="bg-nightblue-80 text-white p-4 rounded-md">
            <p>{comment.content || "Commentaire vide"}</p>
          </div>
        ))
      ) : (
        <p>Aucun commentaire</p>
      )
    }

    if (affiche === "saved") {
      return saved.length ? (
        saved.map((item, index) => (
          <div key={index} className="bg-nightblue-80 text-white p-4 rounded-md">
            <h3>{item.title || "Poste sans titre"}</h3>
          </div>
        ))
      ) : (
        <p>Aucun post enregistré</p>
      )
    }

    return null
  }

  return (
    <div className="flex flex-col gap-6 p-8 text-white">
      <div className="flex flex-col items-center gap-2 font-semibold">
        <div className="flex gap-4">
          <p>{user.username || "USERNAME"}</p>
          <Pencil className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="flex gap-4">
        <TransparentButton
          title="Postes"
          onClick={() => setAffiche("postes")}
          color="bg-nightblue text-white hover:bg-gray-80"
        />
        <TransparentButton
          title="Commentaires"
          onClick={() => setAffiche("commentaires")}
          color="bg-nightblue text-white hover:bg-gray-80"
        />
        <TransparentButton
          title="Enregistrés"
          onClick={() => setAffiche("saved")}
          color="bg-nightblue text-white hover:bg-gray-80"
        />
      </div>

      <div className="flex flex-col gap-4">
        {renderContent()}
      </div>
    </div>
  )
}


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userRes = await fetch(`http://localhost:1337/api/users/${id}`)
//         const postsRes = await fetch(`http://localhost:1337/api/users/${id}?populate=posts`)
//         const commentsRes = await fetch(`http://localhost:1337/api/users/${id}/comments`)
//         const savedRes = await fetch(`http://localhost:1337/api/users/${id}/saved`)

//         setUser(await userRes.json())
//         const postsData = await postsRes.json()
//         setPosts(postsData.posts || [])
//         setComments(await commentsRes.json())
//         setSaved(await savedRes.json())
//       } catch (error) {
//         console.error("Une erreur est survenue lors du chargement :", error)
//       }
//     }

//     fetchData()
//   }, [id])