import axios from 'axios';

const API_URL = 'http://localhost:8080/api/test/';

const getUserBoard = () => {
  return axios.get(API_URL + 'user');
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin');
};

const UserService = {
  getUserBoard,
  getAdminBoard,
};

export default UserService;
