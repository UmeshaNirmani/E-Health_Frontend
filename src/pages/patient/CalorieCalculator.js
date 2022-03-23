import { Tooltip } from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFoods } from "../../actions/caloriecalculator";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  Button,
  Form,
  Label,
} from "reactstrap";
import { TextField, Grid } from "@material-ui/core";

import { Formik } from "formik";
import * as Yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";

const meals = [
  {
    value: "Breakfast",
    label: "Breakfast",
  },
  {
    value: "Lunch",
    label: "Lunch",
  },
  {
    value: "Dinner",
    label: "Dinner",
  },
  {
    value: "Tea Time",
    label: "Tea Time",
  },
];

const CalorieCalculator = (props) => {
  const mainContent = React.useRef(null);
  const formRef = useRef();
  const dispatch = useDispatch();

  const allFoods = useSelector(
    (FoodName) => FoodName.caloriecalculator.allFoods
  );

  useEffect(() => {
    dispatch(fetchAllFoods());
  });

  const initFoodDetails = {
    SearchFood: "",
    Servings: "",
  };
  const [foodDetails, setFoodDetails] = useState([initFoodDetails]);

  const handleListChange = (e, index) => {
    const { name, value } = e.target;
    // console.log("e target", e.target.name);
    const list = [...foodDetails];
    list[index][name] = value;

    if (formRef.current) {
      setFoodDetails(list);
      formRef.current.setFieldValue("FoodDetails", list, false);
    }
  };
  const handleListBlur = (e, index) => {
    console.log("blur target", e.target);
  };

  const handleRemoveClick = (index) => {
    const list = [...foodDetails];
    list.splice(index, 1);

    if (formRef.current) {
      setFoodDetails(list);
      formRef.current.setFieldValue("FoodDetails", list, false);
    }
  };

  // handle click event of the Add button of comment
  const handleAddClick = () => {
    let list = foodDetails;
    list.push({
      SearchFood: "",
      Servings: "",
    });

    if (formRef.current) {
      setFoodDetails(list);
      formRef.current.setFieldValue("FoodDetails", list, false);
    }
  };

  const validateSchema = Yup.object({
    Date: Yup.date().required("* Required"),
    SelectMeal: Yup.string().required("* Required"),

    SearchFood: Yup.string().required("* Required"),
    // Servings: Yup.number().required("* Required"),
  });

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
              <Card className="shadow mb-7">
                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11">
                      <h4 className="mb-0">Enter the Records</h4>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Formik
                    initialValues={{
                      recordId: null,
                      Date: "",
                      SelectMeal: "",
                      FoodDetails: [],
                    }}
                    validationSchema={validateSchema}
                    onSubmit={(values, actions) => {
                      console.log(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }}
                    onReset={() => {
                      setFoodDetails([
                        {
                          SearchFood: "",
                          Servings: "",
                        },
                      ]);
                    }}
                    innerRef={formRef}
                  >
                    {(props) => (
                      <Form
                        role="form"
                        onSubmit={props.handleSubmit}
                        className="mb-3"
                      >
                        <Container>
                          <Grid container spacing={2} className="mb-3">
                            <Grid item xs={5} align="center">
                              <TextField
                                type="date"
                                id="Date"
                                name="Date"
                                label="Date"
                                variant="outlined"
                                format={"yyyy-MM-dd"}
                                size="small"
                                value={props.values.Date}
                                onChange={props.handleChange}
                                InputLabelProps={{ shrink: true }}
                                error={
                                  props.touched.Date &&
                                  Boolean(props.errors.Date)
                                }
                                helperText={
                                  props.touched.Date && props.errors.Date
                                }
                                style={{ width: "50%" }}
                              />
                            </Grid>
                            <Grid
                              item
                              xs={5}
                              align="center"
                              className="ml--100"
                            >
                              <TextField
                                id="SelectMeal"
                                select
                                name="SelectMeal"
                                defaultValue=""
                                label="Select the Meal"
                                variant="outlined"
                                size="small"
                                value={props.values.SelectMeal}
                                onChange={props.handleChange}
                                error={
                                  props.touched.SelectMeal &&
                                  Boolean(props.errors.SelectMeal)
                                }
                                helperText={
                                  props.touched.SelectMeal &&
                                  props.errors.SelectMeal
                                }
                                style={{
                                  width: "50%",
                                  textAlign: "left",
                                }}
                              >
                                {meals.map((item) => (
                                  <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Grid>
                          </Grid>

                          {foodDetails &&
                            foodDetails.map((x, i) => {
                              return (
                                <Grid container spacing={2} key={i}>
                                  <Grid item xs={5} align="center">
                                    <TextField
                                      select
                                      id="SearchFood"
                                      name="SearchFood"
                                      label="Search Food"
                                      variant="outlined"
                                      size="small"
                                      value={x.SearchFood}
                                      onChange={(e) => handleListChange(e, i)}
                                      onBlur={(e) => handleListBlur(e, i)}
                                      error={
                                        props.touched.SearchFood &&
                                        Boolean(props.errors.SearchFood)
                                      }
                                      helperText={
                                        props.touched.SearchFood &&
                                        props.errors.SearchFood
                                      }
                                      style={{
                                        width: "50%",
                                        textAlign: "left",
                                      }}
                                    >
                                      {allFoods.map((allFood) => (
                                        <MenuItem
                                          key={allFood._id}
                                          value={allFood._id}
                                        >
                                          {allFood.Food}
                                        </MenuItem>
                                      ))}
                                    </TextField>
                                  </Grid>

                                  <Grid item xs={3} className="mb-3">
                                    <TextField
                                      type="number"
                                      id="Servings"
                                      name="Servings"
                                      label="Servings"
                                      variant="outlined"
                                      size="small"
                                      value={x.Servings}
                                      onChange={(e) => handleListChange(e, i)}
                                      onBlur={(e) => handleListChange(e, i)}
                                      error={
                                        props.touched.Servings &&
                                        Boolean(props.errors.Servings)
                                      }
                                      helperText={
                                        props.touched.Servings &&
                                        props.errors.Servings
                                      }
                                      style={{ width: "85%" }}
                                    />
                                  </Grid>

                                  <Grid item xs={1}>
                                    {foodDetails.length !== 1 && (
                                      <Tooltip title="Remove item" arrow>
                                        <div
                                          className="navbar-toggler"
                                          style={{ cursor: "pointer" }}
                                          onClick={(e) => {
                                            handleRemoveClick(i);
                                          }}
                                        >
                                          <i
                                            className="fas fa-minus-circle"
                                            style={{
                                              fontSize: 30,
                                              color: "#fdba2b",
                                            }}
                                          />
                                        </div>
                                      </Tooltip>
                                    )}
                                  </Grid>

                                  <Grid item xs={1}>
                                    {foodDetails.length - 1 === i && (
                                      <Tooltip title="Add more items" arrow>
                                        <div
                                          className="navbar-toggler"
                                          style={{ cursor: "pointer" }}
                                          onClick={(e) => {
                                            handleAddClick();
                                          }}
                                        >
                                          <i
                                            className="fas fa-plus-circle"
                                            style={{
                                              fontSize: 30,
                                              color: "#fdba2b",
                                            }}
                                          />
                                        </div>
                                      </Tooltip>
                                    )}
                                  </Grid>
                                </Grid>
                              );
                            })}
                        </Container>
                        <Col sm={{ offset: 1 }}>
                          <Label for="TotalCalorie">Total Calorie:</Label>
                        </Col>

                        <Col sm={{ size: 8, offset: 3 }}>
                          <Button color="info" type="submit">
                            <div className="font-weight-bold">
                              Save to Food Diary
                            </div>
                          </Button>
                        </Col>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CalorieCalculator;
