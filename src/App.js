import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./User/Home/Home";
import ProductDetail from "./components/Products/ProductDetail";
import Login from "./components/LogReg/Login";
import ForgotPass from "./components/LogReg/ForgotPass";
import useToken from "./components/useToken";
import Profile from "./User/Home/Profile";
import Admin from "./Admin/Admin";
import Cart from "./User/Home/Cart";
import Category from "./User/Category";
import EditProduct from "./Admin/EditProduct";
import MyOrders from "./User/Home/MyOrders";

const App = () => {
  const { setToken } = useToken("$$$NULL$$$");
  return (
    <Switch>
      <Route path="/" exact>
        <Login setToken={setToken} />
      </Route>
      <Route path="/changepassword">
        <ForgotPass />
      </Route>
      <Route path="/admin" exact>
        <Admin/>
      </Route>
      <Route path="/products" exact>
        <Admin/>
      </Route>
      <Route path="/customers" exact>
        <Admin />
      </Route>
      <Route path="/analytics" exact>
        <Admin/>
      </Route>
      <Route path="/chatbox" exact>
        <Admin/>
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
      <Route path="/product" >
        <ProductDetail />
      </Route>
      <Route path="/profile" >
        <Profile />
      </Route>
      <Route path="/myOrders" >
        <MyOrders />
      </Route>
      <Route path="/category">
        <Category/>
      </Route>
      <Route path="/editproduct">
          <EditProduct />
      </Route>
    </Switch>
  );
};

export default App;
