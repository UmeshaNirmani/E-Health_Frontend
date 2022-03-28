import React, { useState } from "react";

import Chart from "chart.js"; // javascipt plugin for creating charts ***
import { Line, Bar } from "react-chartjs-2"; // react plugin used to create charts ***
import {
  setInitData,
  chartOptions,
  parseOptions,
  getChart1,
  getChart2,
} from "variables/charts"; // core components ***

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  FormGroup,
  Form,
  Button,
  Row,
  Col,
} from "reactstrap"; // reactstrap components

const graphConfiguration = {
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Dates",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "#142237",
          zeroLineColor: "#142237",
        },
        ticks: {
          callback: function (value) {
            if (!(value % 1)) {
              return value;
            }
          },
          beginAtZero: true,
          steps: 1,
          stepValue: 1,
          // max: 5.2,
        },
        scaleLabel: {
          display: true,
          labelString: "Case count",
        },
      },
    ],
  },
};

const MyProgress = (props) => {
  const [graphLabels, setGraphLabels] = useState([
    "jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ]);
  const [graphData, setGraphData] = useState([1, 2, 3, 8, 5, 6]);

  const mainContent = React.useRef(null);

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Card className="bg-gradient-default shadow">
          <CardHeader className="bg-transparent">
            <Row className="align-items-center">
              <div className="col">
                <h6 className="text-uppercase text-light ls-1 mb-1">
                  Graph Details
                </h6>
                <h2 className="text-white mb-0">{"Case Distribution"}</h2>
              </div>
            </Row>
          </CardHeader>
          <CardBody>
            {/* Chart */}

            <div className="chart">
              <Line
                data={{
                  labels: graphLabels,
                  datasets: [
                    {
                      data: graphData,
                      label: "Cases",
                      fill: false,
                      backgroundColor: "#142237",
                      borderColor: "#142237",
                      pointBorderWidth: 5,

                      pointBorderColor: "white",
                      pointStyle: "circle",
                      pointRadius: 1,
                      pointBackgroundColor: "rgb(255, 255, 255)",
                      borderWidth: 0,
                    },
                  ],
                }}
                options={graphConfiguration}
                getDatasetAtEvent={(e) => console.log(e)}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MyProgress;
