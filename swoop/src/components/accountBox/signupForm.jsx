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
import axios from "axios";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  // var currentUser;
  const sendUserToBackEnd = () => {
    var name = document.getElementById('signUpNameField').value;
    var email = document.getElementById('signUpEmailField').value;
    var firstPassword = document.getElementById('signUpPasswordField').value;
    var confirmPassword = document.getElementById('signUpConfirmPasswordField').value;
    if(firstPassword === confirmPassword){
      try{
        const res = axios.post('http://localhost:8080/api/v1/user',{
          fullName: name,
          email: email,
          password: confirmPassword
        })
        .then((res) => console.log(res))
        switchToSignin();
      } catch(err){
        console.log(err);
      }
    }else{
      alert('Passwords did not match.')
    }

  }


  return (
    <BoxContainer>
      <FormContainer>
        <Input id = "signUpNameField" type="text" placeholder="Full Name" />
        <Input id = "signUpEmailField" type="email" placeholder="Email" />
        <Input id = "signUpPasswordField" type="password" placeholder="Password" />
        <Input id = "signUpConfirmPasswordField" type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={sendUserToBackEnd}>Signup</SubmitButton>
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