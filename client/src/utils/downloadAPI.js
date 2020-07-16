import axios from "axios";

let url = "http://localhost:5000/download";
if (process.env.NODE_ENV === "production") url = process.env.REACT_APP_PROD_URL + "/download";

export default {
  downloadFile: async function (path) {
    try {
      const response = await axios({
        url: url + "?dirPath=" + path,
        method: "GET",
        responseType: "blob",
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
