import React, { createContext, useState } from "react";

export const PrüfungContext = createContext();

export function PrüfungProvider({ children }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  return (
    <PrüfungContext.Provider value={{ name, setName, location, setLocation }}>
      {children}
    </PrüfungContext.Provider>
  );
}
