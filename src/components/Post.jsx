import { Link } from "react-router-dom";

const post = ({post}) => {
    const {title,id, body} = post;
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>show details</button></Link>
        </div>
    );
};

export default post;

