import axios from "axios";
import React, { useState } from "react";
import "./viewTripsStyles.css";
import { DriverNavbar } from "../components/reactMenu/driverNavBar";
import { Helmet } from "react-helmet";
function ViewTrips() {
  const userEmail = localStorage.getItem("email").replaceAll('"', "");
  const [location, setLocation] = useState("");
  var tripIds = []; // Store the whole trip object so that we have
  var tripStartAndEndLocations = [];
  function getTrips() {
    axios.get("http://localhost:8080/api/v1/rider/rides").then((response) => {
      console.log(response);
      Object.keys(response.data).forEach((trip) => {
        tripIds.push(response.data[trip]);
      });
      console.log(tripIds);
    });
  }
  function createTripContainers(tripsList) {
    for (var i = 0; i < tripsList.length; i++) {
      const newTripContainer = document.createElement("div");
      newTripContainer.className = "tripContainer";
      const newContent = document.createTextNode(`Trip Details`);
      newTripContainer.appendChild(newContent);
      document.getElementById("allTripsContainer").appendChild(newTripContainer);
    }
  }

  function populateTripContainers(tripsList) {
    //tripsList holds the data for each trip
    const parentObject = document.getElementsByClassName("tripContainer");
    [...parentObject].forEach((parent, i) => {
      //Show trip id's
      const tripIdContainer = document.createElement("div");
      tripIdContainer.className = "tripInfoContainer";
      tripIdContainer.innerHTML = `Trip ID: ${tripsList[i].id}`;
      parent.appendChild(tripIdContainer);

      const originContainer = document.createElement("div");
      originContainer.className = "tripInfoContainer";
      var start = tripsList[i].start;
      if(start.includes("-")){
        console.log("SPACE FOUND IN START");
        start = start.replace("-", " ");
      }
      originContainer.innerHTML = `Trip Origin: ${start}`;
      parent.appendChild(originContainer);
      var end = tripsList[i].end;
      if(end.includes("-")){
        end = end.replace("-", " ");
      }
      const destContainer = document.createElement("div");
      destContainer.className = "tripInfoContainer";
      destContainer.innerHTML = `Trip Destination: ${end}`;
      parent.appendChild(destContainer);

      const distanceContainer = document.createElement("div");
      distanceContainer.className = "tripInfoContainer";
      distanceContainer.innerHTML = `Total Trip Distance: ${Math.ceil(tripsList[i].distance) + ' miles'}`;
      parent.appendChild(distanceContainer);

      const co2Container = document.createElement("div");
      co2Container.className = "tripInfoContainer";
      co2Container.innerHTML = `Carbon Footprint: ${Math.ceil(tripsList[i].CO2) + ' pounds'}`;
      parent.appendChild(co2Container);

      const ridersContainer = document.createElement("div");
      ridersContainer.className = "tripInfoContainer";
      var usersString = "";
      for(var j = 0; j < tripsList[i].users.length; j++){
        if(j > 0){
          usersString  += ", " + tripsList[i].users[j].fullName;
        } else {
          usersString  += tripsList[i].users[j].fullName;
        }
        
      }

      ridersContainer.innerHTML = `Trip Occupants: ${usersString}`;
      parent.appendChild(ridersContainer);

    });
  }

  window.onload = function () {
    getTrips();
    setTimeout(function () {
      createTripContainers(tripIds);
    }, 500);
    setTimeout(function () {
      populateTripContainers(tripIds);
    }, 1000);
  };
  //TODO: Create a function that populates each trip container with its respective trip
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>View Trips</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Swoop View Impact Page" />
      </Helmet>
      <DriverNavbar />
      <div id="allTripsContainer">
        
      </div>
    </div>
  );
}
export default ViewTrips;
