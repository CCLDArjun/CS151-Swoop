import React from "react";
import "./Rider.css";
import { RiderBox } from "./components/riderBox";
import { Navbar } from "./components/reactMenu/navbar";
import CircularSlider from "@fseehawer/react-circular-slider";
import { BoxContainer } from "./components/accountBox/common";
import { TopContainer } from "./components/accountBox/common";
import { FaLeaf } from "react-icons/fa";
import { Helmet } from "react-helmet";
//import { ReactComponent as PowerIcon } from './assets/power.svg';

function Rider() {
  return (
    <div id="riderStyles">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Set Carbon Goals</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="CS151 Final Project - Swoop application"
        />
      </Helmet>
      <Navbar />
      <RiderBox />
      <BoxContainer>
        <div id="circleStyles">
          <CircularSlider
            width={250}
            min={0}
            max={360}
            direction={1}
            knobPosition="top"
            knobColor="#228b22"
            knobSize={40}
            trackColor="#eeeeee"
            label="Carbon Goal(kg)"
            labelColor="#528265"
            progressColorFrom="#8fbc8f"
            progressColorTo="#2e8b57"
            //padding = "4rem"
            valueFontSize="2.5rem"
            verticalOffset="0rem"
          >
            <FaLeaf
              x="11"
              y="11.75"
              width="18px"
              height="18px"
              color="#eeeeee"
            />
          </CircularSlider>
        </div>
      </BoxContainer>
    </div>
  );
}

export default Rider;
