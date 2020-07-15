import axios from "axios";

const url = "http://localhost:5000/download";

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
