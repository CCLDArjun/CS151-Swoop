import axios from "axios";
import React from "react";
import "./viewTripsStyles.css";
import { DriverNavbar } from "../components/reactMenu/driverNavBar";
import { Helmet } from "react-helmet";
function ViewTrips() {
  const userEmail = localStorage.getItem("email").replaceAll('"', "");
  var tripIds = []; // Store the whole trip object so that we have 
  function getTrips() {
    axios.get("http://localhost:8080/api/v1/rider/rides").then((response) => {
      Object.keys(response.data).forEach(trip => {
        if(!tripIds.includes(trip)){
          tripIds.push(response.data[trip]);
        }
      });
      console.log(tripIds);
    });
  }
  function createTripContainers(tripsList){
    for(var i = 0; i < tripsList.length; i++){
      const newTripContainer = document.createElement("div");
      newTripContainer.className = "tripContainer"
      const newContent = document.createTextNode(`Trip Details`);
      newTripContainer.appendChild(newContent);
      document.getElementById("allTripsContainer").appendChild(newTripContainer);
    }
  }
  window.onload = function(){
    getTrips();
    setTimeout(function(){
      createTripContainers(tripIds);
    }, 500);
  }
  //TODO: Create a function that populates each trip container with its respective trip
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>View Trips</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Swoop View Impact Page" />
      </Helmet>
      <DriverNavbar/>
      <div id="allTripsContainer">

      </div>
    </div>
  );
}
export default ViewTrips;