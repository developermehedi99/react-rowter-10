import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body, id, userId} = post;
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>user id: {userId}</h2>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;