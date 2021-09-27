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
const customers = async (user) => {
  return axios.post(API_BASE_URL + "Customers" , { ...user });
}
const orderDetails = async (product) => {
  return axios.post(API_BASE_URL + "OrderDetails" , { ...product });
}
const getCart = async (user) => {
  return axios.post(API_BASE_URL + "GetCart" , { ...user });
}
const AddCart = async (user) => {
  return axios.post(API_BASE_URL + "AddCart" , { ...user });
}
const DeleteCart = async (user) => {
  return axios.post(API_BASE_URL + "DeleteCart" , { ...user });
}
const Order = async (user) => {
  return axios.post(API_BASE_URL + "Order" , { ...user });
}
const updateQty = async (user) => {
  return axios.post(API_BASE_URL + "Quantity" , { ...user });
}
const addproduct = async (product) => {
  return axios.post(API_BASE_URL + "AddProduct" , { ...product });
}
const updateProd = async (product) => {
  return axios.post(API_BASE_URL + "EditProduct", { ...product });
};
const deleteProd = async (product) => {
  return axios.post(API_BASE_URL + "DeleteProduct", { ...product });
};
const topProducts = async (data) => {
  return axios.post(API_BASE_URL + "TopProducts", { ...data });
};
const pie = async (data) => {
  return axios.post(API_BASE_URL + "Pie", { ...data });
};
const linegraph = async (data) => {
  return axios.post(API_BASE_URL + "LineGraph", { ...data });
};
// eslint-disable-next-line
export default {
  login, register, userinfo, update, updateUserName, resetPassword, products, customers, orderDetails,
  getCart, AddCart, DeleteCart, Order, updateQty, addproduct, updateProd, deleteProd, topProducts,
  pie, linegraph
};