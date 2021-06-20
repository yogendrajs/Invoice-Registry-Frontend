import ModalPopup from "./ModalPopup";

const NewItem = ({ isModalOpen, toggleAddNewItem, handleSubmit }) => {
  return (
    <div className="position-relative">
      <button onClick={toggleAddNewItem} className="position-absolute end-0 mx-3 btn btn-primary">
        Add New
      </button>
      <ModalPopup show={isModalOpen} handleClose={toggleAddNewItem} handleSubmit={handleSubmit} />
    </div>
  );
};

export default NewItem;
