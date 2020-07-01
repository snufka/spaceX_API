import axios from "axios";

const BASEURL = "https://api.spacexdata.com/v3/launches";
export default {
  search: async function (query) {
    return (await axios.get(BASEURL + query)) + "?limit=20";
  },
};
