import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [token, setToken] = useState("");

  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });

  return (
    <AuthContext.Provider
      value={{
        alert,
        setAlert,
        data,
        setData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
