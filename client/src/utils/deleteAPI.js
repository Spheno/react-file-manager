import axios from "axios";

let url = "http://localhost:5000/remove";
if (process.env.NODE_ENV === "production") url = process.env.REACT_APP_PROD_URL + "/remove";

export default {
  removeFile: async function (path) {
    try {
      const response = await axios.post(url, { dirPath: path });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
