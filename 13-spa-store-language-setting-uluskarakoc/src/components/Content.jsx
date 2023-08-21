import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./Context";



function Content() {
  const { message } = useContext(LanguageContext);

  //if (selectedLanguage === "German") {
  //  setMessage("Hallo Welt");
  //} else if (selectedLanguage === "English") {
  //  setMessage("Hello World");
  //}

  return (
    <div>
      <h2>{message}</h2>;
    </div>
  );
}

export default Content;
