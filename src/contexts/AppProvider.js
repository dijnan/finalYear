import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
