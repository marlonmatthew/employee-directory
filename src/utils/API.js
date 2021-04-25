import axios from "axios";

export default {
  showUsers: function () {
    return axios.get("https://randomuser.me/api/?results=300&nat=us");
  },
};
