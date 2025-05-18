import { useState, useEffect } from "react"
import axios from "axios"
import TransparentButton from "../Button/TransparentButton"
import { Pencil, Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"


const url = import.meta.env.VITE_API_URL
const old_url = import.meta.env.VITE_API_OLD
const token = localStorage.getItem("token")
const user = JSON.parse(localStorage.getItem("user"));


export default function ProfilePage() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [affiche, setAffiche] = useState("postes")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        console.error("Utilisateur non connecté")
        return
      }

      try {

        const postsRes = await axios.get(`${old_url}/posts?filters[author][id][$eq]=3&populate=author`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const commentsRes = await axios.get(`${url}/commentaires?filters[author][id][$eq]=3&populate=author`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })


        setPosts(postsRes.data.data || [])
        setComments(commentsRes.data.data)
        // setSaved(savedRes.data)
      } catch (error) {
        console.error("Erreur lors du chargement :", error)
      }
    }

    fetchData()
    
  }, [])

  const deletePost = async (postId) => {
    try {
      await axios.delete(`${old_url}/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
      },
    });
    setPosts(prevPosts => prevPosts.filter(post => post.documentId !== postId));

  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
  }
};

  const deleteCom = async (commentaireId) => {
    try {
      await axios.delete(`${old_url}/commentaires/${commentaireId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
      },
    });
    setComments(prevComments => prevComments.filter(com => com.documentId !== commentaireId));


  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
  }
};

const editPost = (id) => {
  navigate(`/editPost/${id}`)

}

const editCom = (id) => {
  navigate(`/editCom/${id}`)

}

  const renderContent = () => {
    if (affiche === "postes") {
      return posts.length ? (
        posts.map((post, index) => (
          <div key={index} className="flex flex-row bg-nightblue-80 text-white p-4 rounded-md w-[300px] justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{post.title || "Titre manquant"}</h3>
              <p>{post.contenu || "Contenu manquant"}</p>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={() => deletePost(post.documentId)} className="cursor-pointer">
                <Trash size={20} />
              </button>
              <button onClick={() => editPost(post.documentId)} className="cursor-pointer">
                <Pencil size={20} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun post</p>
      )
    }

    if (affiche === "commentaires") {
  return comments.length > 0 ? (
    comments.map((comment, index) => (
      <div key={index} className="flex flex-row justify-between bg-nightblue-80 text-white p-4 rounded-md w-[300px]">
          <p>{comment.Contenu}</p>
          <div className="flex flex-col gap-3">
            <button onClick={() => deleteCom(comment.documentId)} className="cursor-pointer">
              <Trash size={20} />
            </button>
            <button onClick={() => editCom(comment.documentId)} className="cursor-pointer">
              <Pencil size={20} />
            </button>
          </div>
      </div>
    ))
  ) : (
    <p>Aucun commentaire</p>
  );
}

    // if (affiche === "saved") {
    //   return saved.length ? (
    //     saved.map((item, index) => (
    //       <div key={index} className="bg-nightblue-80 text-white p-4 rounded-md">
    //         <h3>{item.title || "Poste sans titre"}</h3>
    //       </div>
    //     ))
    //   ) : (
    //     <p>Aucun post enregistré</p>
    //   )
    // }

    return null
  }

  return (
    <div className="flex flex-col gap-6 p-8 text-white w-[600px]">
      <div className="flex flex-col items-center gap-2 font-semibold">
        <div className="flex gap-4">
          <p>{user.username || "USERNAME"}</p>
          <Pencil className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="flex gap-4">
        <TransparentButton
          title="Postes"
          use={() => setAffiche("postes")}
          use2={() => console.log(posts)}
        />
        <TransparentButton
          title="Commentaires"
          use={() => setAffiche("commentaires") }
          use2={() => console.log(comments)}
        />
        {/* <TransparentButton
          title="Enregistrés"
          use={() => setAffiche()}
          color="bg-nightblue text-white hover:bg-gray-80"
        /> */}
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