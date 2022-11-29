/* App.js */
import React from "react";
import { Component } from "react";
import CanvasJSReact from "./canvasjs-3.7.2/canvasjs.react";
import { Navbar } from "../components/reactMenu/navbar";
import "./viewImpact.css";
import { Helmet } from "react-helmet";
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class viewImpact extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {
        text: "Gas cost saved by Trip Number",
      },
      axisY: {
        title: "Gas Cost($)",
        prefix: "$",
      },
      axisX: {
        title: "Trip #'s",
        interval: 2,
        prefix: "Trip #",
      },
      data: [
        {
          type: "line",
          toolTipContent: "Trip #{x}: ${y}",
          dataPoints: [
            { x: 1, y: 14 },
            { x: 2, y: 11 },
            { x: 3, y: 14 },
            { x: 4, y: 12 },
            { x: 5, y: 14 },
            { x: 6, y: 10 },
            { x: 7, y: 18 },
            { x: 8, y: 19 },
            { x: 9, y: 13 },
            { x: 10, y: 14 },
            { x: 11, y: 11 },
            { x: 12, y: 10 },
            { x: 13, y: 15 },
            { x: 14, y: 10 },
            { x: 15, y: 16 },
            { x: 16, y: 10 },
            { x: 17, y: 19.5 },
            { x: 18, y: 13 },
            { x: 19, y: 18 },
            { x: 20, y: 14 },
            { x: 21, y: 19 },
            { x: 22, y: 14 },
            { x: 23, y: 19 },
          ],
        },
      ],
    };
    const co2 = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", // "light1", "dark1", "dark2"
      title: {
        text: "CO2 saved by Trip Number",
      },
      axisY: {
        title: "CO2",
        suffix: " pounds",
      },
      axisX: {
        title: "Trip #'s",
        interval: 2,
        prefix: "Trip #",
      },

      data: [
        {
          type: "line",
          toolTipContent: "Trip #{x}: {y} pounds of CO2 saved",
          dataPoints: [
            { x: 1, y: 14 },
            { x: 2, y: 11 },
            { x: 3, y: 14 },
            { x: 4, y: 12 },
            { x: 5, y: 14 },
            { x: 6, y: 10 },
            { x: 7, y: 18 },
            { x: 8, y: 19 },
            { x: 9, y: 13 },
            { x: 10, y: 14 },
            { x: 11, y: 11 },
            { x: 12, y: 10 },
            { x: 13, y: 15 },
            { x: 14, y: 10 },
            { x: 15, y: 16 },
            { x: 16, y: 10 },
            { x: 17, y: 19.5 },
            { x: 18, y: 13 },
            { x: 19, y: 18 },
            { x: 20, y: 14 },
            { x: 21, y: 19 },
            { x: 22, y: 14 },
            { x: 23, y: 19 },
          ],
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
                { name: "Current Progress", y: 69 },
                { name: "Remaining Goal", y: 31 },
            ],
        },
      ],
    };
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
}

export default viewImpact;
//module.exports = viewImpact;