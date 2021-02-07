import axios from 'axios';
//uses and api to return 20 random users
export default {
  getEmployees: function () {
    return axios.get('https://randomuser.me/api/?results=20&nat=us');
  },
};