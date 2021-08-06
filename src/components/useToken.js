import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    return window.localStorage.getItem("fashion-e-store-user");
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    window.localStorage.setItem("fashion-e-store-user", userToken);
    setToken(userToken);
  };

  return { setToken: saveToken, token };
};

export default useToken;
