import axios from "axios";

let url = "http://localhost:5000/browse";
console.log(process.env.REACT_APP_PROD_URL + "/browse")
if (process.env.NODE_ENV === "production") url = process.env.REACT_APP_PROD_URL + "/browse";

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
