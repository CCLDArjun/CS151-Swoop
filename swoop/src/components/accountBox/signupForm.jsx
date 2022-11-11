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
import {User} from "./User";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  function setUserAccountInfo(){
    var name = document.getElementById('signUpNameField').value;
    var email = document.getElementById('signUpEmailField').value;
    var firstPassword = document.getElementById('signUpPasswordField').value;
    var confirmPassword = document.getElementById('signUpConfirmPasswordField').value;
    var finalPassword;
    if(firstPassword === confirmPassword && !userMap.has(email)){ // successful account creation
      finalPassword = confirmPassword;
      const currentUser = new User(name, email, finalPassword);
      userMap.set(currentUser.email, currentUser);
      console.log(userMap);
      switchToSignin();
    } else if(userMap.has(email)){
      alert('An account with this email already exists.');
    }
    else{
      alert('Passwords did not match.');
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
      <SubmitButton type="submit" onClick={ setUserAccountInfo }>Signup</SubmitButton>
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