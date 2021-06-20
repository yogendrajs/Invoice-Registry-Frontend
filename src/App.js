import { useState, useEffect } from "react";

import Header from "./components/Header";
import Invoice from "./components/Invoice";
import NewItem from "./components/NewItem";

import getAllInvoice from "./services/getInvoice";
import postInvoice from "./services/postInvoice";
import deleteInvoice from "./services/deleteInvoice";

// import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let apiResponse = await getAllInvoice();
      let data = await apiResponse.data;
      setData(data);
    })();
  }, []);

  const toggleAddNewItem = () => setModalOpen((open) => !open);

  const handleSubmit = async (invoiceData) => {
    let updatedInvoicesData = await postInvoice({ invoiceData });
    updatedInvoicesData = await updatedInvoicesData.data;
    setData(updatedInvoicesData);
    toggleAddNewItem();
  };

  const handleDelete = async (invoiceId) => {
    let updatedInvoiceData = await deleteInvoice({ invoiceId });
    updatedInvoiceData = await updatedInvoiceData.data;
    setData(updatedInvoiceData);
  };

  return (
    <div className="App">
      <Header />
      <NewItem
        isModalOpen={isModalOpen}
        toggleAddNewItem={toggleAddNewItem}
        handleSubmit={handleSubmit}
      />
      <Invoice invoiceData={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
