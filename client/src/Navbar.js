import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The Four Way Blogs</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create'>New Blog</Link>
            </div>
        </nav>
    );
};

export default Navbar;
