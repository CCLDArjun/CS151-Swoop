import React from "react";
import { AnimatePresence } from "framer-motion";
import Rider from "./Rider";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
//import "./homePageStyles.css";
import AwesomeButtonStyles from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {GiSteeringWheel, GiPerson} from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Home({ Component, pageProps, router }){
    function routeChange() { 
        let path = "/rider"; 
        navigate(path);
      }
    const navigate = useNavigate();
    return(
        // <AnimatePresence>
        //     <Component key={router.route} {...pageProps} />
        // </AnimatePresence>\
        <div class="container">
            <div class = "center">
                <div id = "driverButtonDiv">
                    <AwesomeButton cssModule={AwesomeButtonStyles} before={<GiSteeringWheel/>} type="secondary" size="medium">Driver</AwesomeButton>
                    <AwesomeButton cssModule={AwesomeButtonStyles} before={<GiPerson/>} type="secondary" size="medium" onPress={routeChange}>Rider</AwesomeButton>
                </div>
                <button></button>

            </div> 
        </div>


    );
}
export default Home;