import { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    //Appel API pour récupérer tout les post
    const fetchpost = async () => {
      try {
        const Brutedata = await axios.get('http://localhost:1337/api/posts?populate=*', {
          headers: {
            Authorization: 'Bearer 88668b1d1c4f089bf9f1fd8bc5e4d70f634d1df126fd0c5d882895fa2a83f982c05a2c6a246ba54c305588d4bb313dbcb00715edf899eb132711e066e6dff346307b50c2d97e04e4df5bf2ad672307883b429f05352f70ca9b4621e4ae3c1ded5345d870f25bb115515c428ef4f24c101e690d6dd390115fa34aec3e9634311e'
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
