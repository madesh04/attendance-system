import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {ToastContainer} from "react-toastify";
import {HashRouter as Router} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ToastContainer position="top-center" autoClose={2000} theme="colored"/>
      <App />
    </Router>
  </React.StrictMode>,
)
