// TabContext.js
import React, { createContext, useState, useContext } from "react";

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [tab, setTab] = useState("");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};
