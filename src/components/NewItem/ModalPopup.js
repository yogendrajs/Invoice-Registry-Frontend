import { Modal } from "react-bootstrap";
import Inputs from "./Inputs";

const ModalPopup = ({ show, handleClose, handleSubmit }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Add New Item</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Inputs handleSubmit={handleSubmit} />
    </Modal.Body>
  </Modal>
);

export default ModalPopup;
