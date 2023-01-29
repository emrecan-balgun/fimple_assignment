import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { ModalContextProvider } from "./context/ModalContext";
import { LoanContextProvider } from "./context/LoanContext";
import './i18n';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoanContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </LoanContextProvider>
  </React.StrictMode>
);
