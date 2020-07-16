import axios from "axios";

let url = "http://localhost:5000/upload";
if (process.env.NODE_ENV === "production") url = process.env.REACT_APP_PROD_URL + "/upload";

export default {
  uploadFiles: async function (data) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
