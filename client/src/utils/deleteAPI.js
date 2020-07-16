import axios from "axios";

const url = "http://localhost:5000/remove";

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
