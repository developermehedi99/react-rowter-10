import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='text-blue-600 font-bold'>
                <Link className='mr-3' to="/">Home</Link>
                <Link className='mr-3' to="/about">About</Link>
                <Link className='mr-3' to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;