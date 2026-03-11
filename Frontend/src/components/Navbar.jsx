import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li className="list">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="list">
                    <Link to="/about" className="link">About</Link>
                </li>
                <li className="list">
                    <Link to="/contact" className="link">Contact</Link>
                </li>
                <li className="list">
                    <Link to="/service" className="link">Service</Link>
                </li>
                <li className="list">
                    <Link to="/hooks" className="link">Hooks</Link>
                </li>
                <li className="list">
                    <Link to="/todo" className="link">Todo</Link>
                </li>
                <li className="list">
                    <Link to="/login" className="link">Login</Link>
                </li>
                <li className="list">
                    <Link to="/signup" className="link">sign up</Link>
                </li>
                {/* Syntax : <Link to="path">Name</Link> */}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar