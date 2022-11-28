import React, { useContext, useEffect } from "react";
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
import {userMap} from "./index";
import { useNavigate } from "react-router-dom";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const navigate = useNavigate();
  var inputEmail;
  var inputPassword;
  var retrievedEmail;
  var retrievedPassword;
  function getUserInput(){
    inputEmail = document.getElementById('emailLoginField').value;
    inputPassword = document.getElementById('passwordLoginField').value;
  }
  async function getUser(email) {
    try {
      const response = await fetch('http://localhost:8080/api/v1/user/' + email,{
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      retrievedEmail = result.email;
      retrievedPassword = result.password;
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  function verifyLogin(){
    if(inputEmail === retrievedEmail && inputPassword === retrievedPassword){ // successful login
        navigate('/home');
    }else if(inputEmail !== retrievedEmail){
      alert('That account was not found in our database.');
    } else{
      alert('Password was incorrect.')
    }
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input id = 'emailLoginField' type="email" placeholder="Email" />
        <Input id = 'passwordLoginField' type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={event =>{
        getUserInput();
        getUser(inputEmail);
        verifyLogin()
      }}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>

  );
}