// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/admission">Admission</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
