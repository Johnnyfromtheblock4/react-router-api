import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="list-unstyled d-flex">
        <li className="me-3">
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/about">Chi siamo</NavLink>
        </li>
        <li className="me-3">
          <NavLink to="/products">Prodotti</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
