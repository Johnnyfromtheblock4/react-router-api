import { createContext, useState } from "react";

// creo il contesto
const BudgetContext = createContext();

// definisco il custom provider
const BudgetProvider = ({ children }) => {
  // inserisco la variabile di stato
  const { budgetMode, setBudgetMode } = useState(true);
};

export default BudgetContext;
