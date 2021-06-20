import Header from "./Header";
import Body from "./Body";
import FullDetailsTable from "./FullDetailsTable";

const Invoice = ({ invoiceData = [], handleDelete }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table mt-5">
          <Header />
          <Body invoiceArr={invoiceData} handleDelete={handleDelete} />
        </table>
      </div>
      <FullDetailsTable invoiceData={invoiceData} />
    </>
  );
};

export default Invoice;
