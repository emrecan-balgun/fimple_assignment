import { toast } from "react-toastify";

const successNotify = () =>
  toast.success("The transaction is successful, you are being redirected...", {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    pauseOnHover: false,
    theme: "light",
  });


const warningNotify = () =>
  toast.warning("Please fill all the fields", {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    pauseOnHover: false,
    theme: "light",
  });


export {
  successNotify,
  warningNotify,
};
