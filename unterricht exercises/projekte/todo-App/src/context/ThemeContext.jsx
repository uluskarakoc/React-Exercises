import React, { useState, createContext} from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState('standard');

   return(
    <ThemeProvider.Provider>
      {children}
    </ThemeProvider.Provider>
   )
  }