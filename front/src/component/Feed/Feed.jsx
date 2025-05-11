import { useEffect, useState } from 'react'
import axios from "axios";
import PrimaryButton from '../Button/PrimaryButton';

const Feed = () => {

  const [community, setCommunity] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [posts, setPosts] = useState([]);

  const url = import.meta.env.VITE_API_URL;
    const token = import.meta.env.VITE_API_TOKEN;


  useEffect(() => {
    
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
        setImage(data.Photo)
        console.log(data.Photo);
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost();

  },[]);

 
 
 
  return(
    <div className='flex flex-col pl-20 gap-2.5 h-full overflow-auto no-scrollbar'>
      <section className='flex flex-col gap-7 w-[510px]'>
        {posts.map((post) =>{ 
          return(
        
          <div key={post.id} className='flex flex-col gap-[10px] bg-nightblue hover:brightness-115'>
            <div className='flex flex-row h-[25px] justify-between'>
            <h3 className='text-[16px]'>{post.sub_reddit?.name ?? "Aucune commu"}</h3>
            <PrimaryButton name="rejoindre" />
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