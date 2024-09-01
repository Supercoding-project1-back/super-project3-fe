import React, { createContext, useState, useEffect } from "react";
import fetchUserLocation from "../api/userApi";

// UserContext 생성
export const UserContext = createContext();

// UserProvider 컴포넌트
export const UserProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState("Loading...");

  useEffect(() => {
    const getUserLocation = async () => {
      const location = await fetchUserLocation();
      setUserLocation(location);
    };

    getUserLocation();
  }, []);

  return (
    <UserContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </UserContext.Provider>
  );
};
