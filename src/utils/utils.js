import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const copyText = (text) => {
  // Copia o texto
  navigator.clipboard.writeText(text);
  // Emite o toast
  toast.success("Copiado!", {
    position: "bottom-center",
    autoClose: 1700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide,
    theme: "colored",
  });
};
