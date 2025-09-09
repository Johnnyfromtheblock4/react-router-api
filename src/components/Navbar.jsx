import { NavLink } from "react-router-dom";
import { useState } from "react";
import BudgetContext from "../context/BudgetContext";

const Navbar = () => {
  // stato che traccia la modalità
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  // variabile che inverte la modalità
  const toggleBudgetMode = () => {
    setBudgetMode(!budgetMode);
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
          <button
            onClick={toggleBudgetMode}
            className="btn btn-outline-secondary"
          >
            {budgetMode
              ? "Disattiva Modalità Budget"
              : "Attiva Modalità Budget"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
