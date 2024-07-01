import { Link, useNavigate } from "react-router-dom";

const User = ({user}) => {
    const {name, email,id, company} = user;
    const navigate = useNavigate();

    const handleDetails=()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div className="border-pink-300 rounded-xl border-2 p-5">
            <h1>Name: {name}</h1>
            <h2>company : {company.name}</h2>
            <p>{email}</p>
            <Link to={`/user/${id}`}>show details</Link> <br />
            <button className="border" onClick={handleDetails}>details</button>
        </div>
    );
};

export default User;