import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", name: "Home" },
    { path: "/gallery", name: "Gallery" },
    { path: "/exhibitions", name: "Exhibitions" },
    { path: "/about", name: "About" },
    { path: "/cv", name: "CV" },
    { path: "/artist-statement", name: "Artist Statement" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Ginni Singh</h2>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Links */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="menu-link"
            onClick={() => setMenuOpen(false)} // Close menu on click
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
