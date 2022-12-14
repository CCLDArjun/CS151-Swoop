import { DriverNavbar } from "../components/reactMenu/driverNavBar";
import "./driverPageStyles.css";
import { MovingComponent } from "react-moving-text";
import { Helmet } from "react-helmet";
import { Input } from "../components/accountBox/common";
import AwesomeButtonStyles from "react-awesome-button";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { AiFillCheckSquare } from "react-icons/ai";
import TripAnimation from "../components/images/bookTripAnimation.gif";
import { useState } from "react";
import axios from "axios";

function Driver() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const userEmail = localStorage.getItem("email").replaceAll('"', "");
  var originLat = "";
  var originLong = "";
  var destLat = "";
  var destLong = "";
  var totalDistance = 0;
  var distanceRequestStatus = 0;
  function createTrip(requestStatus) {
    var formattedOrigin = origin.replaceAll(" ", "-");
    var formattedDestination = destination.replaceAll(" ", "-");
    if (requestStatus !== 0) { // only creates the trip if the API request for the distance matrix for the trip was successful
      axios
        .get(
          `http://localhost:8080/api/v1/rider/addRide?email=${userEmail}&start=${formattedOrigin}&end=${formattedDestination}&distance=${totalDistance}&startLat=${originLat}&startLong=${originLong}&endLat=${destLat}&endLong=${destLong}`
        )
        .then((response) => {
          console.log(response);
        });
        alert('Trip creation was successful.');
    } else{
      console.log(requestStatus);
    }
  }
  function getOriginCoords() {
    var originCity = origin.substring(0, origin.indexOf(","));
    originCity = originCity.replaceAll(" ", "-");
    var originState = origin.substring(origin.indexOf(",") + 1, origin.length);
    if (originCity !== "" && originState !== "") {
      axios
        .get(
          `http://dev.virtualearth.net/REST/v1/Locations/US/${originState}/-/${originCity}/-?&key=AgAaeJSjg0Ofneo6lx_d32lRx0tLue0-yD_xQ4b0YnDzibcjmNkkOvGoWbjslbJR`
        )
        .then((response) => {
          console.log(response);
          originLat = response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
          originLong = response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1]
        });
    }
  }
  function getDestCoords() {
    var destCity = destination.substring(0, destination.indexOf(","));
    destCity = destCity.replaceAll(" ", "-");
    var destState = destination.substring(
      destination.indexOf(",") + 1,
      destination.length
    );
    if (destCity !== "" && destState != "") {
      axios
        .get(
          `http://dev.virtualearth.net/REST/v1/Locations/US/${destState}/-/${destCity}/-?&key=AgAaeJSjg0Ofneo6lx_d32lRx0tLue0-yD_xQ4b0YnDzibcjmNkkOvGoWbjslbJR`
        )
        .then((response) => {
          console.log(response);
          destLat = response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0];
          destLong = response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1];
        });
    }
  }
  function calculateDistanceBetweenOriginAndDest() {
      axios
      .get(
        `https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?origins=${originLat},${originLong}&destinations=${destLat},${destLong}&travelMode=driving&key=AgAaeJSjg0Ofneo6lx_d32lRx0tLue0-yD_xQ4b0YnDzibcjmNkkOvGoWbjslbJR`
      )
      .then((response) => {
        console.log(response);
        totalDistance = convertKilometersToMiles(response.data.resourceSets[0].resources[0].results[0].travelDistance);
        console.log("SUCCESSFUL DISTNACE MATRIX");
        distanceRequestStatus = 1;
      });
  }
  function convertKilometersToMiles(kmVal) {
    const conversionFactor = 0.621371;
    const miles = kmVal * conversionFactor;
    return miles;
  }
  return (
    <div id="container">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driver</title>
        <link rel="canonical" href="/driver" />
        <meta name="description" content="Swoop Driver Page" />
      </Helmet>
      <DriverNavbar />
      <div id="tripBox">
        <div id="tripBoxTitle">
          <MovingComponent
            type="fadeInFromTop"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none"
          >
            Set up a Trip
          </MovingComponent>
        </div>
        <MovingComponent
          type="fadeInFromLeft"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none"
        >
          <img id="tripAnimation" src={TripAnimation} alt="Car Animation" />
        </MovingComponent>
        <div id="tripTypeSelection">
          <div id="tripInputContainer">
            <MovingComponent
              type="fadeInFromLeft"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="none"
            >
              <div class="originIcon">
                <MovingComponent
                  type="fadeInFromTop"
                  duration="2000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <Input
                    class="input-field"
                    id="tripOrigin"
                    type="text"
                    placeholder="From?"
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </MovingComponent>
              </div>
            </MovingComponent>
            <MovingComponent
              type="fadeInFromRight"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="none"
            >
              <div class="input-icons">
                <MovingComponent
                  type="fadeInFromTop"
                  duration="2000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <Input
                    id="tripDestination"
                    type="text"
                    placeholder="Where to?"
                    class="input-field"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </MovingComponent>
              </div>
            </MovingComponent>
          </div>
          <div id="submitButton">
            <MovingComponent
              type="fadeInFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="none"
            >
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                before={<AiFillCheckSquare />}
                type="primary"
                size="medium"

                onPress={event => {
                  getOriginCoords(),
                  getDestCoords(),
                  setTimeout(() => {
                    console.log("WAITED 1 SECONDS")
                    calculateDistanceBetweenOriginAndDest();
                  }, 1000),
                  
                  setTimeout(() => {
                    console.log("WAITED 2 SECONDS")
                    createTrip(distanceRequestStatus);
                  }, 2000)
                }}
              >
                Plan Trip
              </AwesomeButton>
            </MovingComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Driver;