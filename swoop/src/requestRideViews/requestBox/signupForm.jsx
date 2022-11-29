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
import {User} from "./User";

export function SignupForm(props) {
  const { switchToSignin } = useContext(RiderContext);
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
        
      </FormContainer>
    </BoxContainer>
  );
}