import axios from "axios";

const url = "http://localhost:5000/browse";

export default {
  getPathContent: async function (path) {
    try {
      const response = await axios.get(url, {
        params: { dirPath: path },
      });
      return response.data;
    } catch (error) {
      return error;
    }
  },
};
