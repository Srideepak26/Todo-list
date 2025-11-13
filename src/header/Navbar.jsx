import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 40px",
    color: "white",
    width: "100%",
    boxSizing: "border-box",
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "white",
  };

  const navLinksStyle = {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "25px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s ease",
  };

  const buttonStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    backgroundColor: "#007bff",
    padding: "6px 12px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  };

  return (
    <nav style={navbarStyle}>

      <div style={logoStyle}>MyWebsite</div>


      <ul style={navLinksStyle}>
        <li><Link to="/home" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/services" style={linkStyle}>Services</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li><Link to="/login" style={buttonStyle} onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
