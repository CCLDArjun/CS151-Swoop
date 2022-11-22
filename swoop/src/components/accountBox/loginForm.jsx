import React, { useContext } from "react";
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
import { User } from "./User";
import { useNavigate } from "react-router-dom";
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const navigate = useNavigate();
  var userEmail;
  var userPassword;
  function getUserInput(){
    userEmail = document.getElementById('emailLoginField').value;
    userPassword = document.getElementById('passwordLoginField').value;
    if(userMap.has(userEmail) && userPassword === userMap.get(userEmail).password){ // successful Login
      navigate("/home");
    }else{
      alert('Invalid username or password inputted.');
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
      <SubmitButton type="submit" onClick={getUserInput}>Signin</SubmitButton>
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