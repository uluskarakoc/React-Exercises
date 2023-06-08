import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("German");
  const [message,setMessage]=useState("Hallo Welt")

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage,message,setMessage }}>
      {children}
    </LanguageContext.Provider>
  );
}
