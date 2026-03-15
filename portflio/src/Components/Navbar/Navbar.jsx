import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h3>Sayan'S Portfolio</h3>
        </div>
      <div className="link">
        <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

