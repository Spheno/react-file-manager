import axios from "axios";

const url = "http://localhost:5000/upload";

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
