import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <a className="nav-logo" href="#">LOGO</a>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link link">Home</Link>
                </li>
                <li>
                    <Link to="/Create your blog" className="nav-link link">Create</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
