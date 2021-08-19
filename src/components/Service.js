import axios from "axios";

const API_BASE_URL = "http://localhost:5000/";

const login = async (user) => {
  return axios.post(API_BASE_URL + "LoginUser", { ...user });
};

const register = async (user) => {
  return axios.post(API_BASE_URL + "RegisterUser", { ...user });
};

const userinfo = async (user) => {
  return axios.post(API_BASE_URL + "UserInfo", { ...user });
};

const update = async (user) => {
  return axios.post(API_BASE_URL + "UpdateProfile", { ...user });
};

const updateUserName = async (user) => {
  return axios.post(API_BASE_URL + "UpdateUserName", { ...user });
};

const resetPassword = async (user) => {
  return axios.post(API_BASE_URL + "ResetPassword", { ...user });
};

const products = async (user) => {
  return axios.post(API_BASE_URL + "Products", { ...user });
};

// eslint-disable-next-line
export default { login, register, userinfo, update, updateUserName, resetPassword, products };