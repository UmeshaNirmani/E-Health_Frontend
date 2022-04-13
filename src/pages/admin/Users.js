import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Lodash from "lodash";
import { TextField, Tooltip, Grid } from "@material-ui/core";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Table,
  Form,
  Button,
  Col,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  fetchRecordsAll,
  deleteRecords,
  createRecords,
  updateRecords,
} from "actions/foodtable";

const validateSchema = Yup.object({
  Title: Yup.string().required("* Required"),
  Role: Yup.string().required("* Required"),
  Email: Yup.string().email("Invalid Email address").required("* Required"),
  Password: Yup.string()
    .min(4, "Password is too short. Must contain minimum 4 characters")
    .required("* Required"),
});

const FoodTableRow = ({ TableData, editClick, deleteClick, createClick }) => (
  <tr>
    <td className="text-darker">{TableData.Food}</td>
    <td className="text-darker">{TableData.UnitCalorieAmount}</td>
    <td className="text-darker">{TableData.Unit}</td>
    <td className="text-darker">{TableData.Unit}</td>
    <td>
      <div className="row">
        <Tooltip title="Block User" arrow>
          <div
            className="navbar-toggler"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              editClick(e, TableData);
            }}
          >
            <i className="fas fa-ban text-darker" />
          </div>
        </Tooltip>
      </div>
    </td>
  </tr>
);

const Users = (props) => {
  const mainContent = React.useRef(null);
  const formRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const foodTableRecordsAll = useSelector(
    (state) => state.foodtable.foodTableRecordsAll
  );

  //console.log("foodTableRecordsAll", foodTableRecordsAll);

  useEffect(() => {
    dispatch(fetchRecordsAll());
  });

  const handleEditClick = (e, TableData) => {
    console.log("TableData", TableData);
    e.preventDefault();

    if (formRef.current && TableData && !Lodash.isEmpty(TableData)) {
      formRef.current?.resetForm();
      formRef.current.setFieldValue("recordId", TableData._id, false);
      formRef.current.setFieldValue("Email", TableData.Food, false);
      formRef.current.setFieldValue("", TableData.UnitCalorieAmount, false);
      formRef.current.setFieldValue("Password", TableData.Unit, false);
    }
  };

  const handleDeleteClick = (e, TableData) => {
    console.log("TableData", TableData);
    e.preventDefault();
    let values = {
      TableDataId: TableData._id,
    };
    dispatch(deleteRecords(values));
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
              <Card className="shadow">
                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11">
                      <h4 className="mb-0 text-darker">
                        User Pre-Registration
                      </h4>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <Formik
                    initialValues={{
                      recordId: null,
                      Title: "",
                      Role: "",
                      Email: "",
                      Password: "",
                    }}
                    validationSchema={validateSchema}
                    onSubmit={(values, actions) => {
                      console.log(JSON.stringify(values, null, 2));

                      let params = {
                        Email: values.Email,
                        UnitCalorieAmount: values.UnitCalorieAmount,
                        Password: values.Password,
                      };

                      if (values.recordId && values.recordId.length > 10) {
                        params["recordId"] = values.recordId;
                        console.log("updated record: ", params);
                        dispatch(updateRecords(params, history));
                      } else {
                        console.log("created record: ", params);
                        dispatch(createRecords(params, history));
                      }
                    }}
                    innerRef={formRef}
                  >
                    {(props) => (
                      <Form role="form" onSubmit={props.handleSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} align="center">
                            <TextField
                              id="Title"
                              fullWidth
                              select
                              name="Title"
                              label="Title"
                              variant="outlined"
                              size="small"
                              value={props.values.Title}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              error={
                                props.touched.Title &&
                                Boolean(props.errors.Title)
                              }
                              helperText={
                                props.touched.Title && props.errors.Title
                              }
                              className="mb-3"
                              style={{ width: "70%", textAlign: "left" }}
                            >
                              <option value="Rev/Hon." className="ml-3">
                                Rev/Hon.
                              </option>
                              <option value="Dr." className="ml-3">
                                Dr.
                              </option>
                              <option value="Mr." className="ml-3">
                                Mr.
                              </option>
                              <option value="Mrs." className="ml-3">
                                Mrs.
                              </option>
                              <option value="Ms." className="ml-3">
                                Ms.
                              </option>
                            </TextField>
                          </Grid>
                          <Grid item xs={12} sm={6} align="center">
                            <TextField
                              id="Role"
                              fullWidth
                              select
                              name="Role"
                              label="Role"
                              variant="outlined"
                              size="small"
                              value={props.values.Role}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur}
                              error={
                                props.touched.Role && Boolean(props.errors.Role)
                              }
                              helperText={
                                props.touched.Role && props.errors.Role
                              }
                              className="mb-3"
                              style={{ width: "70%", textAlign: "left" }}
                            >
                              <option value="Doctor" className="ml-3">
                                Doctor
                              </option>
                              <option value="Patient" className="ml-3">
                                Patient
                              </option>
                              <option
                                value="System Administrator"
                                className="ml-3"
                              >
                                System Administrator
                              </option>
                            </TextField>
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6} align="center">
                            <TextField
                              type="email"
                              id="Email"
                              fullWidth
                              name="Email"
                              label="Email"
                              variant="outlined"
                              size="small"
                              value={props.values.Email}
                              onChange={props.handleChange("Email")}
                              onBlur={props.handleBlur("Email")}
                              error={
                                props.touched.Email &&
                                Boolean(props.errors.Email)
                              }
                              helperText={
                                props.touched.Email && props.errors.Email
                              }
                              className="mb-4"
                              style={{ width: "70%" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} align="center">
                            <TextField
                              type="password"
                              id="Password"
                              fullWidth
                              name="Password"
                              label="Password"
                              variant="outlined"
                              size="small"
                              value={props.values.Password}
                              onChange={props.handleChange("Password")}
                              onBlur={props.handleBlur("Password")}
                              error={
                                props.touched.Password &&
                                Boolean(props.errors.Password)
                              }
                              helperText={
                                props.touched.Password && props.errors.Password
                              }
                              className="mb-4"
                              style={{ width: "70%" }}
                            />
                          </Grid>
                        </Grid>
                        <Row>
                          <Button
                            className="mt-3 mb-3"
                            type="submit"
                            style={{
                              backgroundColor: "#EBB105",
                              border: "none",
                              width: "20%",
                              display: "block",
                              margin: "auto",
                            }}
                          >
                            <div className="font-weight-bold text-white">
                              Register
                            </div>
                          </Button>
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>

        <Container className="mb-6" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11 justify-content-center">
                      <h2 className="mb-0 text-darker">Users Table</h2>
                    </div>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="text-darker">
                        USER (EMAIL↓)
                      </th>
                      <th scope="col" className="text-darker">
                        ROLE
                      </th>
                      <th scope="col" className="text-darker">
                        DESIGNATION
                      </th>
                      <th scope="col" className="text-darker">
                        STATUS
                      </th>
                      <th scope="col" className="text-darker">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr></tr>
                    {foodTableRecordsAll.map((TableData, i) => {
                      return (
                        <FoodTableRow
                          key={i}
                          TableData={TableData}
                          editClick={handleEditClick}
                          deleteClick={handleDeleteClick}
                        />
                      );
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Users;
