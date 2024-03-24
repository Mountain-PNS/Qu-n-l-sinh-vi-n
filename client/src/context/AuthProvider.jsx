import axios from "axios";
import React, { createContext, useCallback, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isErrors, setIsErrors] = useState(false);
  const [user, setUser] = useState(null);
  
    useEffect(() => {
        const data = localStorage.getItem("user");
        try {
            const res = JSON.parse(data);
            setUser(res);
        } catch (error) { 
            console.error("Failed to parse user data from localStorage:", error);
        }
    }, []);
    
  const registeruser = async (user) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/register",
        user
      );
      setIsErrors(data.status);
      localStorage.setItem("user", JSON.stringify(data.message));
    } catch (error) {
      if (error.response) {
        setIsErrors(error.response.data.message);
      }
    }
  };
  const login = async (user) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/signin",
        user
      );
      setIsErrors(data.status);
      localStorage.setItem("user", JSON.stringify(data.message));
    } catch (error) {
      if (error.response) {
        setIsErrors(error.response.data.message);
      }
    }
  };
  const logoutUser = useCallback(() => {
    localStorage.removeItem("User");
    setUser(null);
  }, []);
  return (
    <AuthContext.Provider value={{ registeruser, login, isErrors ,user,logoutUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
