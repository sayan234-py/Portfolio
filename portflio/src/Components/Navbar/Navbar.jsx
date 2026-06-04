import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="logo">
        <h3>Sayan Nandi</h3>
      </div>
      <div className="link">
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/projects', label: 'Projects' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={location.pathname === to ? 'active' : ''}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
