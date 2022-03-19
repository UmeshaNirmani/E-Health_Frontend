// import { Tooltip, makeStyles } from "@material-ui/core";
// import React from "react";
// import {
//   Container,
//   Card,
//   CardHeader,
//   CardBody,
//   Col,
//   Row,
//   Button,
//   Form,
//   Label,
// } from "reactstrap";
// import { TextField, Grid } from "@material-ui/core";

// import { Formik, FieldArray, Field } from "formik";
// import * as Yup from "yup";
// import MenuItem from "@material-ui/core/MenuItem";

// const emptyArray = {
//   SearchFood: "",
//   Servings: "",
// };
// const useStyles = makeStyles((theme) => ({
//   noWrap: {
//     [theme.breakpoints.up("sm")]: {
//       flexWrap: "nowrap",
//     },
//   },
// }));
// const meals = [
//   {
//     value: "Breakfast",
//     label: "Breakfast",
//   },
//   {
//     value: "Lunch",
//     label: "Lunch",
//   },
//   {
//     value: "Dinner",
//     label: "Dinner",
//   },
//   {
//     value: "Tea Time",
//     label: "Tea Time",
//   },
// ];

// const CalorieCalculator = (props) => {
//   const mainContent = React.useRef(null);
//   const classes = useStyles();
//   // const validateSchema = Yup.object({
//   //   Date: Yup.date().required("* Required"),
//   //   SelectMeal: Yup.string().required("* Required"),

//   //   SearchFood: Yup.string().required("* Required"),
//   //   Servings: Yup.number().required("* Required"),
//   // });

//   return (
//     <>
//       <div className="main-content" ref={mainContent}>
//         <Container
//           className="mt--7 mb-3 "
//           fluid
//           style={{ overflowX: "hidden" }}
//         >
//           <Row className="mt-5">
//             <div className="col">
//               <Card className="shadow mb-7">
//                 <CardHeader className="border-0 ">
//                   <div className="row">
//                     <div className="mb-xl-0 col-11">
//                       <h4 className="mb-0">Enter the Records</h4>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardBody>
//                   <Formik
//                     initialValues={{
//                       recordId: null,
//                       Date: "",
//                       SelectMeal: "",
//                       FoodDetails: [emptyArray],
//                     }}
//                     //validationSchema={validateSchema}
//                     onSubmit={(values, actions) => {
//                       console.log(JSON.stringify(values, null, 2));
//                       actions.setSubmitting(false);
//                       actions.resetForm();
//                     }}
//                   >
//                     {(props) => (
//                       <Form
//                         role="form"
//                         onSubmit={props.handleSubmit}
//                         className="mb-3"
//                       >
//                         <Grid container spacing={2}>
//                           <Grid item xs={5} align="center">
//                             <TextField
//                               type="date"
//                               id="Date"
//                               name="Date"
//                               label="Date"
//                               variant="outlined"
//                               format={"yyyy-MM-dd"}
//                               size="small"
//                               value={props.values.Date}
//                               onChange={props.handleChange}
//                               InputLabelProps={{ shrink: true }}
//                               error={
//                                 props.touched.Date && Boolean(props.errors.Date)
//                               }
//                               helperText={
//                                 props.touched.Date && props.errors.Date
//                               }
//                               style={{ width: "50%" }}
//                             />
//                           </Grid>
//                           <Grid item xs={5}>
//                             <TextField
//                               type="text"
//                               id="SelectMeal"
//                               select
//                               name="SelectMeal"
//                               defaultValue=""
//                               label="Select the Meal"
//                               variant="outlined"
//                               size="small"
//                               value={props.values.SelectMeal}
//                               onChange={props.handleChange}
//                               error={
//                                 props.touched.SelectMeal &&
//                                 Boolean(props.errors.SelectMeal)
//                               }
//                               helperText={
//                                 props.touched.SelectMeal &&
//                                 props.errors.SelectMeal
//                               }
//                               style={{ width: "50%" }}
//                             >
//                               {meals.map((option) => (
//                                 <MenuItem
//                                   key={option.value}
//                                   value={option.value}
//                                 >
//                                   {option.label}
//                                 </MenuItem>
//                               ))}
//                             </TextField>
//                           </Grid>
//                         </Grid>

//                         <FieldArray name="FoodDetails">
//                           {(fieldArrayProps) => {
//                             console.log(fieldArrayProps);
//                             const { form, push, remove } = fieldArrayProps;
//                             const { values } = form;
//                             const { FoodDetails } = values;

//                             return (
//                               <>
//                                 {FoodDetails.map((_, index) => (
//                                   <Grid
//                                     container
//                                     spacing={2}
//                                     key={index}
//                                     className={classes.noWrap}
//                                   >
//                                     <Grid item xs={5} align="center">
//                                       <Field
//                                         type="text"
//                                         id="SearchFood"
//                                         name={`FoodDetails.${index}.SearchFood`}
//                                         label="Search Food"
//                                         component={TextField}
//                                         variant="outlined"
//                                         size="small"
//                                         // value={props.values.SearchFood}
//                                         onChange={props.handleChange}
//                                         error={
//                                           props.touched.SearchFood &&
//                                           Boolean(props.errors.SearchFood)
//                                         }
//                                         helperText={
//                                           props.touched.SearchFood &&
//                                           props.errors.SearchFood
//                                         }
//                                         style={{ width: "50%" }}
//                                       />
//                                     </Grid>

//                                     <Grid
//                                       item
//                                       xs={3}
//                                       className="mb-3"
//                                       // style={{ outline: "solid #000 1px" }}
//                                     >
//                                       <Field
//                                         type="number"
//                                         id="Servings"
//                                         name={`FoodDetails[${index}]Servings`}
//                                         label="Servings"
//                                         variant="outlined"
//                                         component={TextField}
//                                         size="small"
//                                         // value={props.values.Servings}
//                                         onChange={props.handleChange}
//                                         error={
//                                           props.touched.Servings &&
//                                           Boolean(props.errors.Servings)
//                                         }
//                                         helperText={
//                                           props.touched.Servings &&
//                                           props.errors.Servings
//                                         }
//                                         style={{ width: "85%" }}
//                                       />
//                                     </Grid>

//                                     <Grid item xs={1} align="start">
//                                       <Tooltip title="Remove item" arrow>
//                                         <button
//                                           className="navbar-toggler"
//                                           style={{ cursor: "pointer" }}
//                                           onClick={() => remove(index)}
//                                           type="button"
//                                         >
//                                           <i
//                                             className="fas fa-minus-circle"
//                                             style={{
//                                               fontSize: 30,
//                                               color: "#fdba2b",
//                                             }}
//                                           />
//                                         </button>
//                                       </Tooltip>
//                                     </Grid>
//                                     <Grid item xs={1} align="end">
//                                       <Tooltip title="Add more items" arrow>
//                                         <button
//                                           className="navbar-toggler"
//                                           style={{ cursor: "pointer" }}
//                                           onClick={() => push(FoodDetails)}
//                                           type="button"
//                                         >
//                                           <i
//                                             className="fas fa-plus-circle"
//                                             style={{
//                                               fontSize: 30,
//                                               color: "#fdba2b",
//                                             }}
//                                           />
//                                         </button>
//                                       </Tooltip>
//                                     </Grid>
//                                   </Grid>
//                                 ))}
//                               </>
//                             );
//                           }}
//                         </FieldArray>

//                         <Col sm={{ offset: 1 }}>
//                           <Label for="TotalCalorie">Total Calorie:</Label>
//                         </Col>

//                         <Col sm={{ size: 8, offset: 3 }}>
//                           <Button color="info" type="submit">
//                             <div className="font-weight-bold">
//                               Save to Food Diary
//                             </div>
//                           </Button>
//                         </Col>
//                       </Form>
//                     )}
//                   </Formik>
//                 </CardBody>
//               </Card>
//             </div>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default CalorieCalculator;

import { Tooltip, makeStyles } from "@material-ui/core";
import React from "react";
import { Button, Form } from "reactstrap";
import { TextField, Grid } from "@material-ui/core";

import { Formik, FieldArray, Field } from "formik";

const emptyArray = {
  SearchFood: "",
  Servings: "",
};
const useStyles = makeStyles((theme) => ({
  noWrap: {
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  },
}));
const CalorieCalculator = (props) => {
  const mainContent = React.useRef(null);
  const classes = useStyles();

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Formik
          initialValues={{
            recordId: null,
            FoodDetails: [emptyArray],
          }}
          onSubmit={(values, actions) => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);

            actions.resetForm();
          }}
        >
          {(props) => (
            <Form role="form" onSubmit={props.handleSubmit} className="mb-3">
              <FieldArray name="FoodDetails">
                {(fieldArrayProps) => {
                  //console.log(fieldArrayProps);
                  const { form, push, remove } = fieldArrayProps;
                  const { values } = form;
                  const { FoodDetails } = values;
                  return (
                    <>
                      {FoodDetails.map((_, index) => (
                        <Grid
                          container
                          spacing={2}
                          key={index}
                          className={classes.noWrap}
                        >
                          <Grid item xs={5} align="center">
                            <Field
                              type="text"
                              id="SearchFood"
                              name={`FoodDetails.${index}.SearchFood`}
                              label="Enter Food"
                              component={TextField}
                              variant="outlined"
                              size="small"
                              //value={props.values.FoodDetails.SearchFood}
                              onChange={props.handleChange}
                            />
                          </Grid>

                          <Grid item xs={3} className="mb-3">
                            <Field
                              type="number"
                              id="Servings"
                              name={`FoodDetails.${index}.Servings`}
                              label="Servings"
                              variant="outlined"
                              component={TextField}
                              size="small"
                              //value={props.values.FoodDetails}
                              onChange={props.handleChange}
                            />
                          </Grid>

                          <Grid item xs={1} align="start">
                            <Tooltip title="Remove item" arrow>
                              <button
                                className="navbar-toggler"
                                style={{ cursor: "pointer" }}
                                onClick={() => remove(index)}
                                type="button"
                              >
                                <i className="fas fa-minus-circle" />
                              </button>
                            </Tooltip>
                          </Grid>
                          <Grid item xs={1} align="end">
                            <Tooltip title="Add more items" arrow>
                              <button
                                className="navbar-toggler"
                                style={{ cursor: "pointer" }}
                                onClick={() => push(emptyArray)}
                                type="button"
                              >
                                <i className="fas fa-plus-circle" />
                              </button>
                            </Tooltip>
                          </Grid>
                        </Grid>
                      ))}
                    </>
                  );
                }}
              </FieldArray>
              <Button color="info" type="submit">
                <div className="font-weight-bold">Submit</div>
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CalorieCalculator;
