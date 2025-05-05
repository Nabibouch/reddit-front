import { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
 
  const [posts, setPosts] = useState([]);
  const token = import.meta.env.VITE_API_TOKEN;

useEffect(() => {
    const fetchpost = async () => {
        try {
            const Brutedata = await axios.get('http://localhost:1337/api/posts', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = Brutedata.data.data;
            console.log(data);
            setPosts(data);

        } catch (error) {
            console.log(error);
            
        }
    }
    fetchpost()
},[]);



  useEffect(() => {

    //Appel API pour récupérer tout les post
    const fetchpost = async () => {
      try {
        const Brutedata = await axios.get('http://localhost:1337/api/posts?populate=*', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = Brutedata.data.data;
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchpost();
  }, []);

  return (
    <>
      <h2>POSTS</h2>
      {posts.map((post) => (
        <section key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.contenu}</p>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>

          {Array.isArray(post.Photo) && post.Photo.length > 0 && (
            <img
              src={`http://localhost:1337${post.Photo[0].url}`}
              alt={post.Photo[0].name || 'post image'}
              width="300"
            />
          )}
        </section>
      ))}
    </>
  );
};

export default Test;
