import "./App.css";
import AboutMe from "./components/AboutMe";
import Me from "./components/Me";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AboutMe />}>
            <Route path="/me" element={<Me />} />
       
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
