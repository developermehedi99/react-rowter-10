import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Contact = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2 className='text-4xl text-blue-500'>Contact.......</h2>
            <h3>All posts : {posts.length}</h3>
           <div className="grid grid-cols-3 gap-4"> {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }</div>
        </div>
    );
};

export default Contact;