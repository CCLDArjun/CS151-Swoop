import React from "react";
import { AnimatePresence } from "framer-motion";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "./homePageStyles.css";
import AwesomeButtonStyles from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import {GiSteeringWheel, GiPerson} from "react-icons/gi";
import {useNavigate} from "react-router-dom";
import CircularSlider from "@fseehawer/react-circular-slider";
function Home({ Component, pageProps, router }){
    const navigate = useNavigate();
    const goToRiderPage = () =>{
        let path = '/rider';
        navigate(path);
    }
    return(
        // <AnimatePresence>
        //     <Component key={router.route} {...pageProps} />
        // </AnimatePresence>\
        <div class="container">
                <div id = "driverSection">
                    <div id="driverInfo">
                            <h1>Driver</h1>
                            <div id="driverDescription">
                                <p>This is the list of things a driver can do.</p>
                            </div>
                    </div>
                    <div id="driverButton">   
                        <AwesomeButton cssModule={AwesomeButtonStyles} before={<GiSteeringWheel/>} type="primary" size="medium">Driver</AwesomeButton>
                    </div>
                </div>
                <div id="riderSection">
                    <div id="riderInfo">
                        <h1>Rider</h1>
                        <div id="riderDescription">
                                <p>This is the list of things a rider can do.</p>
                            </div>
                    </div>
                    <div id="riderButton">
                        <AwesomeButton cssModule={AwesomeButtonStyles} before={<GiPerson/>} type="primary" size="medium" onPress={goToRiderPage}>Rider</AwesomeButton>
                    </div>
                </div>
        </div>
        
        
    );
}
export default Home;