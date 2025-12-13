import { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Context Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Kelvin",
    email: "kelvin@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
