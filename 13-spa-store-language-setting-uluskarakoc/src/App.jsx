import "./App.css";

import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
//import { LanguageContext } from "./components/Context";

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
