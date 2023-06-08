import React from "react";

function Content() {



  return (
    <div>
      <label for="cars">Please Select Your Language:</label>
      <select id="cars">
        <option value="volvo"  >German</option>
        <option value="saab">English</option>
        <option value="vw">Spanish</option>
        <option value="audi" selected>Arabic</option>
        <option value="audi" selected>Turkish</option>
        <option value="audi" selected>French</option>
        <option value="audi" selected>Dutch</option>
        <option value="audi" selected>Russian</option>
      </select>
    </div>
  );
}

export default Content;
