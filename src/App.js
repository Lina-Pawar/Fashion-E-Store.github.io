import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./components/LogReg/Login";
import Register from "./components/LogReg/Register";
import Women from "./pages/Women/Women";
import Men from "./pages/Men/Men";
import Kids from "./pages/Kids/Kids";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
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
    </Switch>
  );
}

export default App;
