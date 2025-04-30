import { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchpost = async () => {
      try {
        const Brutedata = await axios.get('http://localhost:1337/api/posts?populate=Photo', {
          headers: {
            Authorization: 'Bearer 22752cee524b9052ec1c1ab37236a0240d3aed0b10ac85843a726fff3e4958386d150ef83cec967b93973788b70787e9e35db5dc243ff6d4bb88beb5b24a9b92aececf0be64fa00f68804e4b108fccb77ec0048a4c115a0ea124a01628e1f5012eccfbf4f7aa49d2e97c885d76d9ac57606bc76c2fb2d636c73ad88f1d3512ab'
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
