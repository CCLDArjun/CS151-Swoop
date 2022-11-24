import React from "react";
import { RiderBox } from "../components/riderBox";
import { MissionBox } from "../components/missionBox";
import { Navbar } from "../components/reactMenu/navbar";
import CircularSlider from "@fseehawer/react-circular-slider";
import { BoxContainer } from "../components/accountBox/common";
import { TopContainer } from "../components/accountBox/common";
import { FaLeaf } from "react-icons/fa";
import { Text } from "@react-ui-org/react-ui";
import styled from "styled-components";
import "./ourMissionStyles.css";
import { Helmet } from "react-helmet";
import MovingComponent from "react-moving-text";

function Rider() {
  return (
    <div id="riderStyles">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Mission</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Swoop Our Mission Page" />
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
        <MissionBox />
      </MovingComponent>
      <BoxContainer>
        <MovingComponent
          type="fadeInFromRight"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease-in"
          iteration="1"
          fillMode="none"
        >
          <div id="textContainer">
            <div id="textDescription">
              <span>
                {" "}
                In the United States, automobiles are the primary source of
                transportation. There are both financial and environmental key
                factors with traveling by automobile. Swoop provides clear data
                visualization for these critical factors for any planned trip.
                With Swoop, you can see a visual representation of carbon
                emission levels that will be exerted by a vehicle, the amount of
                gas exerted, the cost of the trip by using real-time average gas
                prices.
              </span>
            </div>
          </div>
        </MovingComponent>
      </BoxContainer>
    </div>
  );
}

export default Rider;
