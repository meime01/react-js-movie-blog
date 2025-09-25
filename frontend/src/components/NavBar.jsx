import { Link } from "react-router-dom"
import "../css/NavBar.css"

function NavBar(){

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" classNamen="nav-link">Home</Link>
            <Link to="/favorites" classNamen="nav-link">Favorites</Link>
            
        </div>
    </nav>
}

export default NavBar;