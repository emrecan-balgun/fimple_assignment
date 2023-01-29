import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Home />
      <ToastContainer style={{ padding: "12px" }} />
    </>
  );
}

export default App;
