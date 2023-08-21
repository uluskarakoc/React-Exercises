import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LanguageContext from "./components/Context";


ReactDOM.render(
  <React.StrictMode>
     <LanguageContext>
      <App />
     </LanguageContext>
  </React.StrictMode>,
  document.getElementById('root')
);
