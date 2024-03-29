import { Tooltip } from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFoods } from "../../actions/caloriecalculator";
import { foodDiaryInputs } from "../../actions/fooddiary";
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

  const allFoods = useSelector((state) => state.caloriecalculator.allFoods);

  useEffect(() => {
    dispatch(fetchAllFoods());
  });

  const initFoodDetails = {
    FoodTableId: "",
    Food: "",
    Servings: "",
    Unit: "",
    UnitCalorieAmount: "",
  };
  const [foodDetails, setFoodDetails] = useState([initFoodDetails]);
  const [totalMealCalorie, setMealTotalCalorie] = useState([]);

  const handleListChangeFoodName = (e, index) => {
    const { name, value } = e.target;
    const list = [...foodDetails];
    list[index][name] = value;

    for (let i = 0; i < allFoods.length; i++) {
      let food = allFoods[i].Food;
      if (food === e.target.value) {
        list[index].FoodTableId = allFoods[i]._id;
        list[index].Unit = allFoods[i].Unit;
        list[index].UnitCalorieAmount = allFoods[i].UnitCalorieAmount;
      }
    }

    if (formRef.current) {
      setFoodDetails(list);
      formRef.current.setFieldValue("FoodDetails", list, false);
      //console.log("list", list);
    }
  };

  const handleListChangeServings = (e, index) => {
    const { name, value } = e.target;
    const list = [...foodDetails];
    list[index][name] = value;

    if (formRef.current) {
      setFoodDetails(list);
      formRef.current.setFieldValue("FoodDetails", list, false);
      //console.log("list", list);
    }
  };

  const handleListBlur = (e, index) => {
    const list = [...foodDetails];
    const totalFoodCalorie = [];

    let total = 0;
    for (let i = 0; i < list.length; i++) {
      total += list[i].UnitCalorieAmount * list[i].Servings;
      totalFoodCalorie.push(total);
    }
    console.log("totalFoodCalorie", totalFoodCalorie);
    console.log("total", total);

    if (formRef.current) {
      setMealTotalCalorie(total);
      formRef.current.setFieldValue("totalMealCalorie", total, false);
      //console.log("list", list);
    }
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
      FoodTableId: "",
      Food: "",
      Servings: "",
      Unit: "",
      UnitCalorieAmount: "",
    });

    if (formRef.current) {
      setFoodDetails(list);
      formRef.current.setFieldValue("FoodDetails", list, false);
    }
  };

  // const validateSchema = Yup.object({
  //   Date: Yup.date().required("* Required"),
  //   MealType: Yup.string().required("* Required"),

  //   Food: Yup.string().required("* Required"),
  //   Servings: Yup.number().required("* Required"),
  // });

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
                      <h4 className="mb-0 text-darker">Enter the Records</h4>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Formik
                    initialValues={{
                      Date: "",
                      MealType: "",
                      FoodDetails: [],
                      totalMealCalorie: "",
                    }}
                    //validationSchema={validateSchema}
                    onSubmit={(values, actions) => {
                      console.log(JSON.stringify(values, null, 2));
                      dispatch(foodDiaryInputs(values));
                      actions.setSubmitting(false);
                      actions.resetForm();
                    }}
                    onReset={() => {
                      setFoodDetails([
                        {
                          FoodTableId: "",
                          Food: "",
                          Servings: "",
                          Unit: "",
                          UnitCalorieAmount: "",
                        },
                      ]);
                      setMealTotalCalorie([]);
                    }}
                    innerRef={formRef}
                  >
                    {(props) => (
                      <Form
                        role="form"
                        onSubmit={props.handleSubmit}
                        onReset={props.handleReset}
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
                                id="MealType"
                                select
                                name="MealType"
                                defaultValue=""
                                label="Select the Meal"
                                variant="outlined"
                                size="small"
                                value={props.values.MealType}
                                onChange={props.handleChange}
                                error={
                                  props.touched.MealType &&
                                  Boolean(props.errors.MealType)
                                }
                                helperText={
                                  props.touched.MealType &&
                                  props.errors.MealType
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
                                      id="Food"
                                      name="Food"
                                      label="Search Food"
                                      variant="outlined"
                                      size="small"
                                      value={x.Food}
                                      onChange={(e) =>
                                        handleListChangeFoodName(e, i)
                                      }
                                      onBlur={(e) => handleListBlur(e, i)}
                                      error={
                                        props.touched.Food &&
                                        Boolean(props.errors.Food)
                                      }
                                      helperText={
                                        props.touched.Food && props.errors.Food
                                      }
                                      style={{
                                        width: "50%",
                                        textAlign: "left",
                                      }}
                                    >
                                      {allFoods.map((index) => (
                                        <MenuItem
                                          key={index._id}
                                          value={index.Food}
                                        >
                                          {index.Food + " " + index.Unit}
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
                                      onChange={(e) =>
                                        handleListChangeServings(e, i)
                                      }
                                      onBlur={(e) => handleListBlur(e, i)}
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
                                              color: "#EBB105",
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
                                          style={{
                                            cursor: "pointer",
                                          }}
                                          onClick={(e) => {
                                            handleAddClick();
                                          }}
                                        >
                                          <i
                                            className="fas fa-plus-circle"
                                            style={{
                                              fontSize: 30,
                                              color: "#EBB105",
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
                          <Label for="TotalCalorie" className="text-darker">
                            Total Calorie: {totalMealCalorie}
                          </Label>
                        </Col>

                        <Col sm={{ size: 8, offset: 3 }}>
                          <Button
                            type="submit"
                            style={{
                              backgroundColor: "#EBB105",
                              border: "none",
                            }}
                          >
                            <div className="font-weight-bold text-white">
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
