import toast from "react-hot-toast";
const ErrorMessage = () => {
  toast.error("Ooops. Try again!", {
    duration: 2000,
    position: "top-right",
    style: {
      borderRadius: "8px",
      background: "#333",
      color: "#fff",
    },
  });
  return null;
};

export default ErrorMessage;
