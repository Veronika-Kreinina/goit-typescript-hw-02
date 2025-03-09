import Modal from "react-modal";
import s from "./ImageModal.module.css";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    maxWidth: "80%",
    maxHeight: "80%",
    padding: "0px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
};
Modal.setAppElement("#root");
const ImageModal = ({ modalOpen, closeModal, src, alt }) => {
  return (
    <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles}>
      <img src={src} alt={alt} className={s.item} />
    </Modal>
  );
};
export default ImageModal;
