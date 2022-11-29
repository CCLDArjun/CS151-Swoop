import React, { useState } from "react";
import "./requestRide.css";
import { RiderBox } from "./requestBox";
import { Navbar } from "../components/reactMenu/navbar";
import { BoxContainer } from "./requestBox/common";
import { Helmet } from "react-helmet";
import { MovingComponent } from "react-moving-text";
import { Input } from "../components/accountBox/common";
import AwesomeButtonStyles from "react-awesome-button";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { AiFillCheckSquare } from "react-icons/ai";
import TripAnimation from "../components/images/car_loop.gif";
import TripLoadingAnimation from "../components/images/binoculars.gif";
import axios from "axios";

function requestARide() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [name, driverName] = useState("");
    const [id, driverId] = useState("");
    const [originLat, setOriginLat] = useState("");
    const [originLong, setOriginLong] = useState("");
    const [distance, tripDistance] = useState("");
    const [co2, tripCarbon] = useState("");
    function getTrips() {
        axios.get("http://localhost:8080/api/v1/rider/rides").then((response) => {
            console.log(response)
        })
    }
    function requestSent(){
        alert('Trip request was successful.');
    }
    function foundMatch(startLat, startLong){
        var matchedRide = axios.get(`http://localhost:8080/api/v1/rider/getRides?startLat=${startLat}&startLong=${startLong}`);
        if(matchedRide.length > 0){
            return "Found a Ride!";
        }
        else{
            return "No Rides Found :(";
        }
    }
    function getClosestRide(startLat, startLong){
        axios.get(`http://localhost:8080/api/v1/rider/getRides?startLat=${startLat}&startLong=${startLong}`).then((response) =>
        {
            //var obj = json[0];
            console.log(response)
            //console.log(obj.fullName)
        })
    }

    function getRiderCoords(){
        var originCity = origin.substring(0,origin.indexOf(','));
        originCity = originCity.replaceAll(' ', '-');
        var originState = origin.substring(origin.indexOf(',') + 1, origin.length);
        axios.get(`http://dev.virtualearth.net/REST/v1/Locations/US/${originState}/-/${originCity}/-?&key=AgAaeJSjg0Ofneo6lx_d32lRx0tLue0-yD_xQ4b0YnDzibcjmNkkOvGoWbjslbJR`)
        .then((response) => {
          setOriginLat(response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0]);
          setOriginLong(response.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1]);
          console.log(response);
          setTimeout(function(){getClosestRide(originLat, originLong)}, 5000);
        })
      }
    return (
        <div className="container">
            <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Request Ride</title>
                <link rel="canonical" href="/rider/requestRide" />
                <meta
                    name="description"
                    content="Swoop Get Ride Page"
                />
            </Helmet>
            <Navbar />
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
                        Request A Ride
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
                    <img
                        id="tripAnimation"
                        src={TripAnimation}
                        alt="Car Animation"
                    />
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
                                        placeholder="Current Location"
                                        onChange={(e) => {setOrigin(e.target.value)}}
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
                                        placeholder="Destination"
                                        class="input-field"
                                        onChange={(e) => {setDestination(e.target.value)}}
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
                                onPress={() => {
                                    if(origin.length >0 )
                                    {
                                        getTrips(),
                                        getRiderCoords(),
                                        requestSent(),
                                        setTimeout(function(){document.getElementById("tripBox").style.visibility = "hidden";}, 3000),
                                        setTimeout(function(){
                                            document.getElementById("rideLoadingText").style.visibility = "visible";
                                            document.getElementById("rideLoadingAnimation").style.visibility = "visible";
                                            document.getElementById("loadTripBox").style.visibility = "visible";
                                        }, 
                                        4000)
                                        setTimeout(function(){
                                            document.getElementById("rideLoadingText").style.visibility = "hidden";
                                            document.getElementById("rideLoadingAnimation").style.visibility = "hidden";
                                            document.getElementById("loadTripBox").style.visibility = "hidden";
                                        }, 
                                        14000)
                                        setTimeout(function(){
                                            document.getElementById("matchedTripBox").style.visibility = "visible";
                                            
                                        }, 
                                        15000)
                                    }
                                    else{
                                        alert('Trip request was unsuccessful.');
                                    }
                                    }                                          
                                }
                            >
                                Confirm Request
                            </AwesomeButton>
                        </MovingComponent>
                    </div>
                </div>
            </div>
            
            <div id = "loadTripBox">
                <div id = "rideLoadingText">
                <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="4s"
                    direction="normal"
                    timing="ease-in"
                    iteration="1"
                    fillMode="none"
                    
                >
                    Looking for Rides...
                    <img
                        id="rideLoadingAnimation"
                        src={TripLoadingAnimation}
                        alt="Binoculars Animation"
                    />
                </MovingComponent>

                </div>
            </div>

            <div id = "matchedTripBox">
                <div id = "matchedRideText">
                    <MovingComponent
                        type="fadeInFromBottom"
                        duration="2000ms"
                        delay="4s"
                        direction="normal"
                        timing="ease-in"
                        iteration="1"
                        fillMode="none"
                        
                    >
                    
                    </MovingComponent>
                    
                </div>
            </div>
        </div>
    );
}

export default requestARide;
