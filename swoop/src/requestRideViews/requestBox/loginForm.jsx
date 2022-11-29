import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  RequestButton,
} from "./common";
import { RiderContext } from "./accountContext";
import {userMap} from "./index";
import { User } from "./User";
import { useNavigate } from "react-router-dom";
import { Marginer } from "./marginer";
export function LoginForm(props) {
  const { switchToSignup } = useContext(RiderContext);
  const navigate = useNavigate();
  return (
    <BoxContainer id = "requestContainer">
      <Marginer direction="vertical" margin="1.3em" />
      <FormContainer>
        <Input id = 'currentLocationField' type="fromLocation" placeholder="Pickup Location" /*onChange={(e) => setInputEmail(e.target.value)}*//>
        <Input id = 'destinationField' type="toLocation" placeholder="Dropoff Location" /*onChange={(e) => setInputPassword(e.target.value)}*//>
      </FormContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <RequestButton type="request" onClick={() => {document.getElementById("requestContainer").style.visibility = "hidden"}}>Confirm Request</RequestButton>
    </BoxContainer>
  );
}