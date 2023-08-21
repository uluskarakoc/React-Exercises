import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("German");
  const [message, setMessage] = useState("");

  useEffect(() => {
   if(selectedLanguage === "German"){
    setMessage("Hallo Welt")
   } else if(selectedLanguage === "English"){
    setMessage("Hello World")
   } else if(selectedLanguage === "Russian"){
    setMessage("Hello ")
   }else if(selectedLanguage === "Spanish"){
    setMessage("Hello ")
   }else if(selectedLanguage === "Turkish"){
    setMessage("Hello ")
   }
  }, [selectedLanguage])
  

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage, message, setMessage }}>
      {children}
    </LanguageContext.Provider>
  );
}
