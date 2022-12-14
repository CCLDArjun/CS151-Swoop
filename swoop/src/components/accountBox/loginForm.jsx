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
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const navigate = useNavigate();
  var [inputEmail, setInputEmail] = useState("");
  var [inputPassword, setInputPassword] = useState("");
  async function getUser(email) {
    try{
      axios.get('http://localhost:8080/api/v1/user/' + email)
      .then(function (response){
        console.log(response);
        if(inputEmail === response.data.email && inputPassword === response.data.password){
          if(localStorage.getItem("email") === ""){
            localStorage.setItem("email", email);
          }
          navigate('/home');
        }else if(response.data === ""){
          alert('The account with the inputted email does not exist in our database.');
        }
        else{
          alert('Password was incorrect.')
        }
      })
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input id = 'emailLoginField' type="email" placeholder="Email" onChange={(e) => setInputEmail(e.target.value)}/>
        <Input id = 'passwordLoginField' type="password" placeholder="Password" onChange={(e) => setInputPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={() => {
  
        getUser(inputEmail);
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