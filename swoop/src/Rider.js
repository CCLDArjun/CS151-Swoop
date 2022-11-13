import React from "react";
import { AnimatePresence } from "framer-motion";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "./homePageStyles.css";
import AwesomeButtonStyles from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {GiSteeringWheel, GiPerson} from "react-icons/gi";
import {useNavigate} from "react-router-dom";
import {AccountBox} from "./components/accountBox";
function Rider(){
    return(
       <AccountBox/>
    );
        
}
export default Rider;