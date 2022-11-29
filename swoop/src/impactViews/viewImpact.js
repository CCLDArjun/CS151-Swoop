/* App.js */
import axios from "axios";
import React, { useState } from "react";
import { Component } from "react";
import CanvasJSReact from "./canvasjs-3.7.2/canvasjs.react";
import { Navbar } from "../components/reactMenu/navbar";
import "./viewImpact.css";
import { Helmet } from "react-helmet";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function viewImpact() {
  const [user, setUser] = useState("");
  const [allRides, setRide] = useState("");
  // const [costPoints, setCostPoints] = useState("");
  // const [co2Points, setCO2Points] = useState("");
  var co2Points = []
  var costPoints = []
  graphDataSetup(co2Points, costPoints);
  

  async function getUser() { // { crossDomain: true, headers: {"Access-Control-Allow-Origin": "*"}}
    let res = await axios.get('http://localhost:8080/api/v1/user/' + localStorage.getItem("email").replaceAll('"', ''),);
    res = await axios.get('http://localhost:8080/api/v1/user/' + localStorage.getItem("email").replaceAll('"', ''),)
    setUser(res.data);
    // console.log(res.data);
    // axios.get('http://localhost:8080/api/v1/user/' + localStorage.getItem("email").replaceAll('"',''), ).then((response) => {
    //   setUser(response.data);
    //   console.log("from getUser: " + response.data);
    // })
  }

  async function getRides() { // { crossDomain: true, headers: {"Access-Control-Allow-Origin": "*"}}
    let res = await axios.get('http://localhost:8080/api/v1/rider/rides');
    setRide(res.data);
    // console.log(res.data);
    // axios.get('http://localhost:8080/api/v1/rider/rides').then((response) => {
    //   setRide(response.data);
    // })
  }

  function graphDataSetup(costPoints_, co2Points_) {
    // console.log(user.rides);
    // console.log(allRides["2"]);

    if (user === "" || allRides === "")
      return;

    for (var i = 0; i < user.rides.length; i++) {
      costPoints_.push({ x: i+1, y: (allRides[user.rides[i]].distance / 30) * 5})
      co2Points_.push({ x: i+1, y: allRides[user.rides[i]].CO2 })
    }
  }
  
  
  var values = piChartSetup();
  var currentProgress = values[0], remainingGoal = values[1];

  function piChartSetup() {
    if (user === "" || allRides === "")
      return [0, 0];
    
    const goal = user.carbonGoal;
    var completed = 0.0;

    for (var i=0; i<user.rides.length; i++) {
      completed += allRides[user.rides[i]].CO2;
    }
    if (completed < goal) {
      return [(completed / goal) * 100, 100 * (1 - (completed / goal))];
    }
    return [100, 0]
  }
  

  console.log(costPoints);
  console.log(co2Points);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Gas cost saved by Trip Date",
    },
    axisY: {
      title: "Gas Cost($)",
      prefix: "$",
    },
    axisX: {
      title: "Trip Date(s)",
      interval: 2,
      prefix: "Week ",
    },
    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: ${y}",
        dataPoints: costPoints
      },
    ],
  };
  const co2 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "CO2 saved by Trip Date",
    },
    axisY: {
      title: "CO2",
      suffix: " pounds",
    },
    axisX: {
      title: "Trip Date(s)",
      interval: 2,
      prefix: "Week ",
    },

    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: {y} tons of CO2 saved",
        dataPoints: co2Points,
      },
    ],
  };

  const piChart = {
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Carbon Goal Progress"
    },
    subtitles: [{
      text: "CO2(lbs)",
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      showInLegend: true,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: [
        { name: "Current Progress", y: currentProgress },
        { name: "Remaining Goal", y: remainingGoal },
      ],
    },
    ],
  };

  window.onload = function () {
    getUser();
    getRides();
  //   // setTimeout(function () { getUser() }, 1000);
  //   // setTimeout(function () { getRides() }, 1000);
  //   // setTimeout(function () { graphDataSetup() }, 1000);
  //   getUser();
  //   getRides();
  //   await sleep(1000)
  //   graphDataSetup();
  }
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>View Impact</title>
        <link rel="canonical" href="/home" />
        <meta name="description" content="Swoop View Impact Page" />
      </Helmet>
      <Navbar />
      <div id="gasGraphContainer">
        <CanvasJSChart
          options={options}
        /* onRef={ref => this.chart = ref} */
        />

        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
      <div id="co2GraphContainer">
        <CanvasJSChart
          options={co2}
        /* onRef={ref => this.chart = ref} */
        />
      </div>
      <div id="progressGraphContainer">
        <CanvasJSChart
          options={piChart}
        /* onRef={ref => this.chart = ref} */
        />
      </div>
    </div>
  );
}


export default viewImpact;
//module.exports = viewImpact;