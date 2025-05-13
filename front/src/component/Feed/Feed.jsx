import { useEffect, useState } from 'react'
import axios from "axios";
import PrimaryButton from '../Button/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const Feed = () => {

  const [community, setCommunity] = useState('');
  const [error, setError] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState('');
  const [documentId, setDocumentId] = useState('');

  const url = import.meta.env.VITE_API_URL ;
  console.log(url)
  const token = localStorage.getItem('token');
  
  const navigate = useNavigate();


  
  useEffect(() => {
    
    const fetchUser = async () => {
      
      if (!token) {
        setError('Utilisateur non connecté')
        return 
      }
      try {
        const res = await axios.get(`${url}/users/me`, {
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
        console.log(res.data)
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    
    const fetchPost = async () => {
      try {
        const Brutedata = await axios.get(`${url}/posts?populate=*`,{
          headers: {
            Authorization : `Bearer ${token}`
          }
        })
        const data = Brutedata.data.data
        console.log(data);
        setPosts(data);
        setDocumentId(data.documentId)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
    fetchPost();
    
    
  },[]);
  
  const redirection = () => {
  
    navigate(`/post/${documentId}`)
  }
  
  const joinCommunity = async () => {
    try {
      
      const response = await axios.put

    } catch (error) {
      console.log(error);
      
    }

  }
  
 
  return(
    <div className='flex flex-col pl-20 gap-2.5 h-full overflow-auto no-scrollbar'>
      <section className='flex flex-col gap-15 w-[510px]'>
        {posts.map((post) =>{ 
          return(
        
          <div key={post.id} onClick={redirection} className='flex flex-col gap-[10px] bg-nightblue hover:brightness-115'>
            <div className='flex flex-row h-[25px] justify-between'>
            <h3 className='text-[16px]'>{post.sub_reddit?.name ?? "Aucune commu"}</h3>
            <PrimaryButton name="Rejoindre" />
            </div>
            <h2 className='text-[20px]'>{post.title}</h2>
            {post.Photo ? (
              <img src={"http://localhost:1337" + post.Photo[0].formats.small.url} alt="image du post" />
            ) : (
              <p>{post.contenu}</p>
            )
            }
            
          </div>
        )})}
        {/* <h2>{posts.title}</h2> */}
        
      </section>
    </div>
  )
}

export default Feed;
