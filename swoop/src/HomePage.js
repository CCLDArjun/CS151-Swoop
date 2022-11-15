import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./homePageStyles.css";
import AwesomeButtonStyles from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { GiSteeringWheel, GiPerson } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import MovingComponent from "react-moving-text";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Navbar } from "./components/reactMenu/navbar";
import { Helmet } from "react-helmet";
import animatedCarGif from "./components/images/carAnimated.gif";
import riderAnimation from "./components/images/riderAnimation.gif";

function Home({ Component, pageProps, router }) {
  const navigate = useNavigate();
  const goToRiderPage = () => {
    let path = "/rider/setCarbonGoals";
    navigate(path);
  };
  setTimeout(function () {
    document.getElementById("driverInfo").style.visibility = "visible";
    document.getElementById("driverButton").style.visibility = "visible";
    document.getElementById("riderInfo").style.visibility = "visible";
    document.getElementById("riderButton").style.visibility = "visible";
    document.getElementById("welcomeHeader").style.visibility = "visible";
  }, 1000);
  const styles = {
    bounce: {
      animation: "x 3s",
      animationName: Radium.keyframes(bounce, "bounce"),
    },
  };
  return (
    // <AnimatePresence>
    //     <Component key={router.route} {...pageProps} />
    // </AnimatePresence>\
    <div class="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Swoop Home Page" />
      </Helmet>
      <Navbar />
      <StyleRoot>
        <div id="welcomeHeader" style={styles.bounce}>
          <MovingComponent
            type="fadeInFromTop"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none"
          >
          Welcome to Swoop
          </MovingComponent>
        </div>
        <div id="driverSection" style={styles.bounce}>
          <div id="driverInfo">
            <div id="driverDescription">
              <div id="driverListContainer">
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
                    id="animatedCar"
                    src={animatedCarGif}
                    alt="animated car"
                  />
                </MovingComponent>
                {/* <StyleRoot>
                    <div id="animatedTest" style={styles.bounce}>
                    </div>
                </StyleRoot>  */}
                {/* <StyleRoot>
                <div class="listAnimation" style={styles.bounce}> */}
                {/* <MovingComponent
                  type="fadeInFromLeft"
                  duration="2000ms"
                  delay="1.2s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  1.Host Carpool Ride
                </MovingComponent>
                <br></br>
                <MovingComponent
                  type="fadeInFromLeft"
                  duration="2000ms"
                  delay="1.4s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  2.View and Set Carbon Emission Goals
                </MovingComponent>
                <br></br>
                <MovingComponent
                  type="fadeInFromLeft"
                  duration="2000ms"
                  delay="1.6s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  3.See Trip Cost Estimations with real-time gas prices
                </MovingComponent> */}
                {/* </div>
              </StyleRoot> */}
              </div>
              <div id="startDrivingLabel">
                <MovingComponent
                  type="fadeInFromLeft"
                  duration="2000ms"
                  delay="1s"
                  direction="normal"
                  timing="ease-in"
                  iteration="1"
                  fillMode="none"
                >
                  Start driving today!
                </MovingComponent>
              </div>
            </div>
          </div>
          <div id="driverButton">
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              before={<GiSteeringWheel />}
              type="primary"
              size="medium"
            >
              Driver
            </AwesomeButton>
          </div>
        </div>
        <div id="riderSection" style={styles.bounce}>
          <div id="riderInfo">
            <div id="riderDescription">
              <div class="listContainer">
                <StyleRoot>
                  <div id="riderListContainer" style={styles.bounce}>
                    <MovingComponent
                      type="fadeInFromRight"
                      duration="2000ms"
                      delay="1.2s"
                      direction="normal"
                      timing="ease-in"
                      iteration="1"
                      fillMode="none"
                    >
                      <img id="riderAnimation" src={riderAnimation} />
                    </MovingComponent>
                    {/* <MovingComponent
                      type="fadeInFromRight"
                      duration="2000ms"
                      delay="1.2s"
                      direction="normal"
                      timing="ease-in"
                      iteration="1"
                      fillMode="none"
                    >
                      1.Request Carpool Ride
                    </MovingComponent>
                    <br></br>
                    <MovingComponent
                      type="fadeInFromRight"
                      duration="2000ms"
                      delay="1.4s"
                      direction="normal"
                      timing="ease-in"
                      iteration="1"
                      fillMode="none"
                    >
                      2.View and Set Carbon Emission Goals
                    </MovingComponent>
                    <br></br>
                    <MovingComponent
                      type="fadeInFromRight"
                      duration="2000ms"
                      delay="1.6s"
                      direction="normal"
                      timing="ease-in"
                      iteration="1"
                      fillMode="none"
                    >
                      3.See Trip Cost Estimations with real-time gas prices
                    </MovingComponent> */}
                  </div>
                  <div id="riderTitle">
                    <MovingComponent
                      type="fadeInFromRight"
                      duration="2000ms"
                      delay="1s"
                      direction="normal"
                      timing="ease-in"
                      iteration="1"
                      fillMode="none"
                    >
                      Book a ride!
                    </MovingComponent>
                  </div>
                </StyleRoot>
              </div>
            </div>
          </div>
          <div id="riderButton">
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              before={<GiPerson />}
              type="primary"
              size="medium"
              onPress={goToRiderPage}
            >
              Rider
            </AwesomeButton>
          </div>
        </div>
      </StyleRoot>
    </div>
  );
}
export default Home;
