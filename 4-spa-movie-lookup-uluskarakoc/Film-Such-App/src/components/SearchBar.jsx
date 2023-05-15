import { useEffect, useState } from "react";

function SearchBar({onSearch}) {
  const [inputValue, setInputValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesubmit ausgeführt mit inputvalue", inputValue)
    onSearch(inputValue)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="search for a film"
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}/>
      <button type="submit">Search</button>
    </form>   
  )
}

export default SearchBar