import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    const navigate = useNavigate();

    const handleGoBak=()=>{
        navigate(-1);
    }

    return (
        <div>
            <h2>User details......</h2>
            <h1>{name}</h1>
            <button onClick={handleGoBak}>go back</button>
        </div>
    );
};

export default UserDetails;