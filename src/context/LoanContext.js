import { useReducer, createContext } from "react";

const INITIAL_STATE = {
  loanAmount: 0,
  interestRate: 0,
  installmentNumber: 0,
  installmentFrequency: null,
  taxRate: null,
};

export const LoanContext = createContext(INITIAL_STATE);

const LoanReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DETAILS":
      return {
        loanAmount: action.payload.loanAmount,
        interestRate: action.payload.interestRate,
        installmentNumber: action.payload.installmentNumber,
        installmentFrequency: action.payload.installmentFrequency,
        taxRate: action.payload.taxRate,
      };
    default:
      return state;
  }
};

export const LoanContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoanReducer, INITIAL_STATE);

  return (
    <LoanContext.Provider
      value={{
        loanAmount: state.loanAmount,
        interestRate: state.interestRate,
        installmentNumber: state.installmentNumber,
        installmentFrequency: state.installmentFrequency,
        taxRate: state.taxRate,
        dispatch,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};
