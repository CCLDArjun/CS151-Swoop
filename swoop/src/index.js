import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./homePageViews/HomePage";
import Rider from "./riderViews/Rider";
import OurMission from './ourMissionViews/ourMission';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Driver from "./driverViews/Driver";
import ViewProfile from "./viewProfileViews/ViewProfile";
import ViewImpact from './impactViews/viewImpact';
import ViewTrips from "./viewTripsViews/viewTrips";
import RequestRide from "./requestRideViews/requestRide";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<App/>}/>
        <Route path='home' element = {<Home/>}/>
        <Route path='rider/setCarbonGoals' element = {<Rider/>}/>
        <Route path='/ourMission' element = {<OurMission/>}/>
        <Route path='driver' element = {<Driver/>}/>
        <Route path='viewProfile' element = {<ViewProfile/>}/>
        <Route path='viewImpact' element = {<ViewImpact/>}/>
        <Route path='driver/viewTrips' element = {<ViewTrips/>}/>
        <Route path='rider/requestRide' element = {<RequestRide/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();