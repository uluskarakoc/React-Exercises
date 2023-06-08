import { useContext } from "react";
import { LanguageContext } from "./Context";

function LanguageChooser() {
  const { selectedLanguage, setSelectedLanguage}=useContext(LanguageContext);
  const handleLanguageSelect=(e)=>{ setSelectedLanguage (e.target.value) }

  return (
    <div>
      <label for="hallo">Please Select Your Language:</label>
      <select id="hallo">
        <option value={selectedLanguage} onChange={handleLanguageSelect}>German</option>
        <option value={selectedLanguage} onChange={handleLanguageSelect}>English</option>
        <option value={selectedLanguage} onChange={handleLanguageSelect}>Russian</option>
        <option value={selectedLanguage} onChange={handleLanguageSelect}>Spanish</option>
        <option value={selectedLanguage} onChange={handleLanguageSelect}>Turkish</option>
      </select>
    </div>
  );
}

export default LanguageChooser;
