import React, { useEffect, useState } from "react";
import { ViewProfileNavbar } from "../components/reactMenu/viewProfileNavBar";
import { Text } from "@react-ui-org/react-ui";
import styled from "styled-components";
import "./ViewProfileStyles.css";
import { Helmet } from "react-helmet";
import MovingComponent from "react-moving-text";
import {AwesomeButton} from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

function ViewProfile() {
  var retrievedEmail = localStorage.getItem('email');
  var formattedEmail = retrievedEmail.replaceAll('"', '');
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  async function getUser(email) {
    try{
      axios.get('http://localhost:8080/api/v1/user/' + email)
      .then(function (response){
        setName(response.data.fullName);
        setPassword(response.data.password);
        return response;
      })
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div id="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>View Profile</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Swoop View Profile Page" />
      </Helmet>
      <ViewProfileNavbar/> 
      <MovingComponent
        type="fadeInFromLeft"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="ease-in"
        iteration="1"
        fillMode="none"
      >
        <div class="infoContainer">
          <div id="accountInfoHeader">
            <h1>Account Information</h1>
          </div>
          <div id="accountInfo">
            <div className="userInfo" >Name: {name}</div>
            <div className="userInfo">Email: {formattedEmail}</div>
            <div className="userInfo">Password: {password}</div>
          </div>
        </div>
        <div id="displayButton">
          <MovingComponent
            type="fadeInFromLeft"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none"
          >
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              before={<CgProfile/>}
              type="primary"
              size="medium"
              onPress={(event) => {
                getUser(formattedEmail);
                document.getElementById("accountInfo").style.visibility =
                  "visible";
              }}
            >
              Display
            </AwesomeButton>
          </MovingComponent>
        </div>
      </MovingComponent>
    </div>
  );
}
export default ViewProfile;
