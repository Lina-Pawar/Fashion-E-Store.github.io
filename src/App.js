import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./User/Home/Home";
import ProductDetail from "./components/Products/ProductDetail";
import Login from "./components/LogReg/Login";
import Women from "./User/Women/Women";
import Men from "./User/Men/Men";
import Kids from "./User/Kids/Kids";
import ForgotPass from "./components/LogReg/ForgotPass";
import useToken from "./components/useToken";
import Admin from "./Admin/Admin";

const App = () => {
  const { setToken } = useToken("$$$NULL$$$");
  return (
    <Switch>
      <Route path="/" exact>
        <Login setToken={setToken} />
      </Route>
      <Route path="/passwordrecovery">
        <ForgotPass />
      </Route>
      <Route path="/admin" exact>
        <Admin/>
      </Route>
      <Route path="/products" exact>
        <Admin/>
      </Route>
      <Route path="/customers" exact>
        <Admin/>
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
      <Route path="/men">
        <Men />
      </Route>
      <Route path="/women">
        <Women />
      </Route>
      <Route path="/kids">
        <Kids />
      </Route>
      <Route path="/product">
        <ProductDetail />
      </Route>
    </Switch>
  );
};

export default App;
