import axios from "axios";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  "Content-Type": "application/json",
};

const query = ({ url, method="GET", body }) => {
  try {
    if (method === "GET") body = undefined;
    return axios({ url, method, headers, data: body });
  }

  catch(err) {
    console.log(err);
  }
}

export default query;