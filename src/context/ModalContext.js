import { useReducer, createContext } from "react";

const INITIAL_STATE = {
  isOpenModal: false,
};

export const ModalContext = createContext(INITIAL_STATE);

const ModalReducer = (state, action) => {
  switch (action.type) {
    case "SET_OPEN_MODAL":
      return {
        isOpenModal: action.payload,
      };
    default:
      return state;
  }
};

export const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, INITIAL_STATE);

  return (
    <ModalContext.Provider
      value={{
        isOpenModal: state.isOpenModal,
        dispatch,
      }}
    >
      {" "}
      {children}{" "}
    </ModalContext.Provider>
  );
};

