import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// step 1 : context 만들기
export const AuthenticationContext = createContext(null);

function AuthenticationProvider({ children }) {
  const [userToken, setUserToken] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUserToken(decoded);
    }
  }, []);

  function login(token) {
    localStorage.setItem("token", token);
    const decoded = jwtDecode(token);
    setUserToken(decoded);
  }

  function logout() {
    localStorage.removeItem("token");
    setUserToken({});
  }

  const isAuthenticated = Date.now() < userToken.exp * 1000;

  return (
    <AuthenticationContext.Provider
      value={{ id: userToken.sub, login, logout, isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationProvider;
