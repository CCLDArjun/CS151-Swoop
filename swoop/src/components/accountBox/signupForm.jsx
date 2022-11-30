import React, { useContext, useEffect, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const sendUserToBackEnd = () => {
    var name = document.getElementById("signUpNameField").value;
    var email = document.getElementById("signUpEmailField").value;
    var firstPassword = document.getElementById("signUpPasswordField").value;
    var confirmPassword = document.getElementById(
      "signUpConfirmPasswordField"
    ).value;
    if (firstPassword === confirmPassword && CheckPassword(firstPassword) === true) {
      try {
        const res = axios.post("http://localhost:8080/api/v1/user", {
          fullName: name,
          email: email,
          password: confirmPassword,
        });
        switchToSignin();
      } catch (err) {
        console.log(err);
      }
    }else if(CheckPassword(firstPassword) === false){
      alert('The inputted password did not contain one of the following: 6-20 characters, at least one numeric digit, one uppercase, and one lowercase letter.')
    } else {
      alert("Passwords did not match.");
    }
  };
  function CheckPassword(inputtxt) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (inputtxt.match(passw)) {
      return true;
    } else {
      return false;
    }
  }

  const [currentUserEmail, setUserEmail] = useState(() => {
    const savedEmail = localStorage.getItem("email");
    const initialValue = savedEmail;
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(currentUserEmail));
  }, [currentUserEmail]);
  return (
    <BoxContainer>
      <FormContainer>
        <Input id="signUpNameField" type="text" placeholder="Full Name" />
        <Input
          id="signUpEmailField"
          type="email"
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Input
          id="signUpPasswordField"
          type="password"
          placeholder="Password"
        />
        <Input
          id="signUpConfirmPasswordField"
          type="password"
          placeholder="Confirm Password"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={sendUserToBackEnd}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
