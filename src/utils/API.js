import axios from "axios";

export default {
  showUsers: function () {
    return axios.get("https://randomuser.me/api/?results=500&nat=us");
  },
};
