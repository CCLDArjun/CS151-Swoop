import { DriverNavbar } from "./components/reactMenu/driverNavBar";
import "./driverPageStyles.css";
import { MovingComponent } from "react-moving-text";
import { Helmet } from "react-helmet";
import { Input } from "./components/accountBox/common";
import AwesomeButtonStyles from "react-awesome-button";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { AiFillCheckSquare } from "react-icons/ai";
import TripAnimation from "./components/images/bookTripAnimation.gif";
function Driver() {
  return (
    <div id="container" >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Driver</title>
        <link rel="canonical" href="/driver" />
        <meta name="description" content="Swoop Driver Page" />
      </Helmet>
      <DriverNavbar />
      <div id="tripBox">
        <div id="tripBoxTitle">
          <MovingComponent
            type="fadeInFromTop"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none"
          >
            Set Up A Trip
          </MovingComponent>
        </div>
        <MovingComponent
                  type="fadeInFromLeft"
                  duration="2000ms"
                  delay="1s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  <img
                    id="tripAnimation"
                    src={TripAnimation}
                    alt="Car Animation"
                  />
                </MovingComponent>
        <div id="tripTypeSelection">
          <div id="tripInputContainer">
            <MovingComponent
              type="fadeInFromLeft"
              duration="2000ms"
              delay="1s"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="none"
            >
              <div class="originIcon">
                <MovingComponent
                  type="fadeInFromTop"
                  duration="2000ms"
                  delay="1s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <Input
                    class="input-field"
                    id="tripOrigin"
                    type="text"
                    placeholder="Origin"
                  />
                </MovingComponent>
              </div>
            </MovingComponent>
            <MovingComponent
              type="fadeInFromRight"
              duration="2000ms"
              delay="1s"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="none"
            >
              <div class="input-icons">
                <MovingComponent
                  type="fadeInFromTop"
                  duration="2000ms"
                  delay="1s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <Input
                    id="tripDestination"
                    type="text"
                    placeholder="Destination"
                    class="input-field"
                  />
                </MovingComponent>
              </div>
            </MovingComponent>
          </div>
          <div id="submitButton">
            <MovingComponent
              type="fadeInFromBottom"
              duration="2000ms"
              delay="1s"
              direction="normal"
              timing="ease-in"
              iteration="1"
              fillMode="none"
            >
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                before={<AiFillCheckSquare />}
                type="primary"
                size="medium"
              >
                Plan Trip
              </AwesomeButton>
            </MovingComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Driver;
