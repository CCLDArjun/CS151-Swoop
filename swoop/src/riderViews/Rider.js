import React, { useState } from "react";
import "./Rider.css";
import { RiderBox } from "../components/riderBox";
import { Navbar } from "../components/reactMenu/navbar";
import CircularSlider from "@fseehawer/react-circular-slider";
import { BoxContainer } from "../components/accountBox/common";
import { TopContainer } from "../components/accountBox/common";
import { FaLeaf } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button";
import axios from "axios";
//import { ReactComponent as PowerIcon } from './assets/power.svg';

function Rider() {
  const [riderCarbonGoal, setRiderCarbonGoal] = useState(0);
  const userEmail = localStorage.getItem("email").replaceAll('"', '');
  //TODO: Add carbon goal property to user in backend
  function setUserCarbonGoal(){
    try{
      axios.get(`http://localhost:8080/api/v1/user/setGoal?email=${userEmail}&carbonGoal=${riderCarbonGoal}`).then((result) => {
        console.log(result);
        alert('Your carbon saving goal was successfully set.');
      })
    }catch(err){
      console.log(err);
    }
  }
  function getUserInfo(){
    try{
      axios.get(`http://localhost:8080/api/v1/user/${userEmail}`).then((response) => {
        console.log(response);
      })
    } catch(err){
      console.log(err);
    }
  }
  return (
    <div id="riderStyles">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Set Carbon Goals</title>
        <link rel="canonical" href="/rider/setCarbonGoals" />
        <meta name="description" content="Swoop Set Carbon Goals Page" />
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
            label="Carbon Goal(lb)"
            labelColor="#528265"
            progressColorFrom="#8fbc8f"
            progressColorTo="#2e8b57"
            //padding = "4rem"
            valueFontSize="2.5rem"
            verticalOffset="0rem"
            onChange={(value) => {setRiderCarbonGoal(value), console.log(riderCarbonGoal)}}
          >
            <FaLeaf
              x="11"
              y="11.75"
              width="18px"
              height="18px"
              color="#eeeeee"
            />
          </CircularSlider>
          <div id="setGoalBttn">
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              // before={<CgProfile/>}
              type="primary"
              size="medium"
              onPress={() => {
                setUserCarbonGoal(),
                setTimeout(() => {
                  getUserInfo();
                },200);
              }}
            >
              Set Goal
            </AwesomeButton>
          </div>
        </div>
      </BoxContainer>
    </div>
  );
}

export default Rider;