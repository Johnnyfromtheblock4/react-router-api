import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // stato che traccia la modalità
  const [isBudgetModeActive, setIsBudgetModeActive] = useState(false);

  // variabile che inverte la modalità
  const toggleBudgetMode = () => {
    setIsBudgetModeActive(!isBudgetModeActive);
  };
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
        <li>
          <button onClick={toggleBudgetMode}>
            {isBudgetModeActive
              ? "Disattiva Modalità Budget"
              : "Attiva Modalità Budget"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
