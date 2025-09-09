import { NavLink } from "react-router-dom";
import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";

const Navbar = () => {
  // stato che traccia la modalità
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

  // variabile che inverte la modalità
  const toggleBudgetMode = () => {
    setBudgetMode(!budgetMode);
  };

  return (
    <nav className="p-2">
      <ul className="list-unstyled d-flex justify-content-between align-items-center mx-5">
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
          <button onClick={toggleBudgetMode} className="btn btn-info">
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
