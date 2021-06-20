import { GET_ALL_INVOICE_API } from "../constants/api";
import query from "../constants/query";

const getAllInvoice = () => {
  const url = GET_ALL_INVOICE_API;
  const data = query({ url });
  return data;
};

export default getAllInvoice;
