import React from "react";
import "./style.css";

import Inhalt from "./Inhalt";
import { PrüfungProvider } from "./Context";

function App() {
  return (
    <PrüfungProvider>
      <Inhalt />
    </PrüfungProvider>
  );
}

export default App;
