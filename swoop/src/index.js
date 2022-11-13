import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Rider from './Rider';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<App/>}/>
        <Route path='home' element = {<Home/>}/>
        <Route path='/rider' element = {<Rider/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();