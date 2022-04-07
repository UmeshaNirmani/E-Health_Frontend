import React, { useState, useEffect } from "react";
//import Chart from "chart.js"; // javascipt plugin for creating charts ***
import { Line } from "react-chartjs-2"; // react plugin used to create charts
import { useDispatch, useSelector } from "react-redux";
import { Card, CardHeader, CardBody, Container, Row, Button } from "reactstrap"; // reactstrap components
import { TextField, Grid } from "@material-ui/core";
import { fetchGraphData } from "../../actions/graphs";
// import {
//   setInitData,
//   chartOptions,
//   parseOptions,
//   getChart1,
//   getChart2,
// } from "variables/charts.js"; // core components ***

const graphConfiguration = {
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "#ccc",
          zeroLineColor: "#ccc",
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
          labelString: "Total Calorie Consumption",
        },
      },
    ],
  },
};

const MyProgress = (props) => {
  const mainContent = React.useRef(null);
  const dispatch = useDispatch();

  const allGraphData = useSelector((state) => state.graphs.allGraphData);
  console.log("allGraphData", allGraphData[0]);
  console.log("allGraphData", allGraphData[1]);

  const [graphLabels, setGraphLabels] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    setGraphLabels(allGraphData[0]);
    setGraphData(allGraphData[1]);
  }, [allGraphData]);

  const [selectedDates, setSelectedDates] = useState({
    StartDate: "",
    EndDate: "",
  });
  const handleChangeStartDate = (e) => {
    selectedDates.StartDate = e.target.value;
  };
  const handleChangeEndDate = (e) => {
    selectedDates.EndDate = e.target.value;
  };
  const handleSubmit = () => {
    setSelectedDates(selectedDates);
    console.log("submit dates", selectedDates);
    dispatch(fetchGraphData(selectedDates));
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Container
          className="mt--7 mb-3 "
          fluid
          style={{ overflowX: "hidden" }}
        >
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow mb-7" fluid>
                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11">
                      <h4 className="mb-0 text-darker">
                        Monthly Calorie Consumption
                      </h4>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  {/* search component */}
                  <Container className="mb-5">
                    <Grid container spacing={2} align="center">
                      <Grid item xs={4}>
                        <TextField
                          type="date"
                          id="StartDate"
                          name="StartDate"
                          label="Start Date"
                          variant="outlined"
                          format={"yyyy-MM-dd"}
                          onChange={(e) => handleChangeStartDate(e)}
                          size="small"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          type="date"
                          id="EndDate"
                          name="EndDate"
                          label="End Date"
                          variant="outlined"
                          format={"yyyy-MM-dd"}
                          onChange={(e) => handleChangeEndDate(e)}
                          size="small"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          color="info"
                          type="submit"
                          style={{ width: "70%", backgroundColor: "#EBB105" }}
                          onClick={() => handleSubmit()}
                        >
                          <div className="font-weight-bold">Search</div>
                        </Button>
                      </Grid>
                    </Grid>
                  </Container>
                  {/* Chart */}

                  {graphLabels &&
                    graphData &&
                    graphData.length > 0 &&
                    graphLabels.length > 0 && (
                      <>
                        {console.log("graphData", graphData)}
                        <Line
                          data={{
                            labels: graphLabels,
                            datasets: [
                              {
                                data: graphData,
                                label: "Date",
                                fill: false,
                                backgroundColor: "#004d00",
                                borderColor: "#004d00",
                                pointBorderWidth: 5,
                                pointBorderColor: "#EBB105",
                                pointStyle: "circle",
                                pointRadius: 0,
                                pointBackgroundColor: "#EBB105",
                                borderWidth: 0,
                              },
                            ],
                          }}
                          options={graphConfiguration}
                          getDatasetAtEvent={(e) => console.log(e)}
                        />
                      </>
                    )}
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyProgress;
