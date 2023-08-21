import { useContext } from "react";
import { LanguageContext } from "./Context";

function LanguageChooser() {
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
  const handleLanguageSelect = (e) => {
    console.log(e.target.value);
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <label htmlFor="hallo">Please Select Your Language:</label>
      <select id="hallo" onChange={(e) => handleLanguageSelect(e)}>
        <option value="German">German</option>
        <option value="English">English</option>
        <option value="Russian">Russian</option>
        <option value="Spanish">Spanish</option>
        <option value="Turkish">Turkish</option>
      </select>
    </div>
  );
}

export default LanguageChooser;
