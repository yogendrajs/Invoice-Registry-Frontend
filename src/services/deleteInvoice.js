import { DELETE_INVOICE_API } from "../constants/api";
import query from "../constants/query";

const deleteInvoice = ({ invoiceId }) => {
  const url = DELETE_INVOICE_API;
  const data = query({ url, method: "DELETE", body: { invoiceId } });
  return data;
};

export default deleteInvoice;
