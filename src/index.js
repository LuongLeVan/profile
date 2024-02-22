import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from './locales/en/translation.json'
import global_vi from './locales/vi/translation.json'

i18next.init({
  interpolation: {
    escape: false
  },
  lng: "en",
  resources: {
    vi: {
      global: global_vi
    },
    en: {
      global: global_en
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <Router>
       <I18nextProvider i18n={i18next}>
         <App />
       </I18nextProvider>
     </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();