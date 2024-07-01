import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div className="mt-8">
            <h3>User........</h3>
            <h2>Our Users: {users.length}</h2>
            <div className="grid grid-cols-3 gap-4">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;