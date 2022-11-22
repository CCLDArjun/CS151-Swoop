import React from "react";
import './Rider.css';
import { RiderBox } from './components/riderBox';
import { MissionBox } from './components/missionBox';
import { Navbar } from "./components/reactMenu/navbar";
import CircularSlider from '@fseehawer/react-circular-slider';
import { BoxContainer } from "./components/accountBox/common";
import { TopContainer } from "./components/accountBox/common";
import { FaLeaf } from 'react-icons/fa';
import { Text } from '@react-ui-org/react-ui';
import styled from "styled-components";


//import { ReactComponent as PowerIcon } from './assets/power.svg';

function Rider(){
    return(    
        
        <div id = "riderStyles">
        <Navbar/>
        <MissionBox/>
            <BoxContainer>
                <div id = "missionStyles">
                <span class="Text" >    In the United States, automobiles are the primary source of transportation. There are both financial and environmental key factors with traveling by automobile. Swoop provides clear data visualization for these critical factors for any planned trip. With Swoop, you can see a visual representation of carbon emission levels that will be exerted by a vehicle, the amount of gas exerted, the cost of the trip by using real-time average gas prices, and a side-by-side comparison between the cost of an Uber ride for the planned trip, and the cost of the trip if driven by the user themselves.</span>
                </div>
            </BoxContainer>
        </div>
    );
}
    

export default Rider;