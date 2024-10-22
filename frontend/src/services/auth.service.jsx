import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password, birthdate) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    birthdate,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + "signin", {
    username,
    password,
  });

  if (response.data.jwtToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getProfile = () => {
  return axios.get("http://localhost:8080/api/user/profile", {
    headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).jwtToken,
    },
  });
};

const AuthService = {
  register,
  login,
  logout,
  getProfile,
};

export default AuthService;
