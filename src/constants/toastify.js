import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function Toastify() {
  const { t } = useTranslation();

  const successNotify = () =>
    toast.success(t("Success notify"), {
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
    toast.warning(t("Warning notify"), {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      pauseOnHover: false,
      theme: "light",
    });

  return { successNotify, warningNotify };
}