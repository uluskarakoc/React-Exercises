import React, { useState, createContext} from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
   const [theme, setTheme] = useState('standard');
   
const deleteme=()=>{
    
}
   return(
    <ThemeContext.Provider value={{theme,setTheme,changeDelete}}>
      {children}
    </ThemeContext.Provider>
   )
  }

  