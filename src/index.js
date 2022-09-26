import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ContactApp from "./Components/ContactApp";

// CSS
import "./Styles/style.css"
import MyForm from './ControlledComponents/MyForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='content-wrapper'>
    {/* <MyForm /> */}
    <ContactApp />
  </div>
    // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
