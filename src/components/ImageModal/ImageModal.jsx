import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";
ReactModal.setAppElement("#root");

const modalStyles = {
  overlay: {
    backgroundColor: "rgb(0 0 0 / 0.9)",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    border: "none",
    borderRadius: "0px",
    padding: "0",
    width: "fit-content",
    height: "fit-content",
    maxHeight: "90%",
    margin: "auto auto",
  },
};

const ImageModal = ({ isModalOpen, closeModal, image }) => {
  return (
    <div>
      <ReactModal
        style={modalStyles}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        preventScroll={true}
      >
        <img
          style={{
            objectFit: "scale-down",
            borderRadius: "5px",
          }}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </ReactModal>
    </div>
  );
};

export default ImageModal;
