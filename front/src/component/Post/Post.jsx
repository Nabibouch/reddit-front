import { useState } from "react"
import { useParams } from "react-router-dom";



const Post = () => {

    const [posts, setPosts] = useState('');

    const postId = useParams().id.replace(":", "");



    return (
        <h2>Hello world</h2>
    )

}


export default Post;