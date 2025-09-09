import { createContext, useState } from "react";

// creo il contesto
export const BudgetContext = createContext();

// definisco il custom provider
export const BudgetProvider = ({ children }) => {
  // inserisco la variabile di stato
  const [budgetMode, setBudgetMode] = useState(true);

  // restituisco il provider con il valore del contesto
  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetContext;
