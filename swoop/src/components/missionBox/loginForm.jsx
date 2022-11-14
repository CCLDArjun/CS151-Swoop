import React, { useContext } from "react";
//import {FaLeaf} from "swoop/node_modules/react-icons/fa"
//import CircularSlider from "..../node_modules/@fseehawer/react-circular-slider";
import CircularSlider from "@fseehawer/react-circular-slider";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { RiderContext } from "./accountContext";
import {userMap} from "./index";
import { User } from "./User";
import { useNavigate } from "react-router-dom";
export function LoginForm(props) {
  const { switchToSignup } = useContext(RiderContext);
  const navigate = useNavigate();
  return (
    <BoxContainer>
    </BoxContainer>
  );
}