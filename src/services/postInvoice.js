import { POST_ALL_INVOICE_API } from "../constants/api";
import query from "../constants/query";

const postInvoice = ({ invoiceData }) => {
  const url = POST_ALL_INVOICE_API;
  const data = query({ url, method: "POST", body: invoiceData });
  return data;
};

export default postInvoice;
