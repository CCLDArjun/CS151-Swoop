import React from "react";
import { Navbar } from "../components/reactMenu/navbar";
import { Text } from "@react-ui-org/react-ui";
import styled from "styled-components";
import "./ViewProfileStyles.css";
import { Helmet } from "react-helmet";
import MovingComponent from "react-moving-text";

function ViewProfile() {
  return (
    <div id="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>View Profile</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Swoop View Profile Page" />
      </Helmet>
      <Navbar />
      <MovingComponent
        type="fadeInFromLeft"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease-in"
        iteration="1"
        fillMode="none"
      >
        <div id="accountInfoContainer">
          <div id="accountInfoHeader">
            <h1>Account Information</h1>
          </div>
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
        <div id="recentTripsContainer">
          <div id="recentTripsHeader">
            <h1>Recent Trips</h1>
          </div>
        </div>
      </MovingComponent>
    </div>
  );
}
export default ViewProfile;
