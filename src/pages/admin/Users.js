import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Lodash from "lodash";
import { TextField, Tooltip, Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
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
import { signUp, fetchAllUsers, profileUpdate } from "actions/user";

const validateSchema = Yup.object({
  Title: Yup.string().required("* Required"),
  Role: Yup.string().required("* Required"),
  Email: Yup.string().email("Invalid Email address").required("* Required"),
  Password: Yup.string()
    .min(4, "Password is too short. Must contain minimum 4 characters")
    .required("* Required"),
});

let status = "";
const FoodTableRow = ({ TableData, editClick, blockClick }) => (
  <tr>
    <td className="text-darker">{TableData.Title}</td>
    <td className="text-darker">{TableData.Role}</td>
    <td className="text-darker">{TableData.Email}</td>
    {TableData.FirstName ? status === "Active" : status === "Open"}
    {/* <td className="text-darker">{TableData.status}</td> */}
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
        <Tooltip title="Edit" arrow>
          <div
            className="navbar-toggler"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              editClick(e, TableData);
            }}
          >
            <i className="far fa-edit text-darker" />
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

  const fetchUsers = useSelector((state) => state.auth.fetchUsers);
  // console.log("fetchUsers", fetchUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const handleEditClick = (e, TableData) => {
    console.log("TableData", TableData);
    e.preventDefault();

    if (formRef.current && TableData && !Lodash.isEmpty(TableData)) {
      formRef.current?.resetForm();
      formRef.current.setFieldValue("userId", TableData._id, false);
      formRef.current.setFieldValue("Title", TableData.Title, false);
      formRef.current.setFieldValue("Email", TableData.Email, false);
      formRef.current.setFieldValue("Role", TableData.Role, false);
    }
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
                      userId: null,
                      Title: "",
                      Role: "",
                      Email: "",
                      Password: "",
                    }}
                    validationSchema={validateSchema}
                    onSubmit={(values, actions) => {
                      console.log(JSON.stringify(values, null, 2));

                      let params = {
                        Title: values.Title,
                        Role: values.Role,
                        Email: values.Email,
                        Password: values.Password,
                      };

                      if (values.userId && values.userId.length > 10) {
                        params["userId"] = values.userId;
                        console.log("updated user: ", params);
                        dispatch(profileUpdate(params));
                      } else {
                        console.log("created user: ", params);
                        dispatch(signUp(params));
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
                              style={{
                                width: "70%",
                                textAlign: "left",
                              }}
                            >
                              <MenuItem value="Rev/Hon.">Rev/Hon.</MenuItem>
                              <MenuItem value="Dr.">Dr.</MenuItem>
                              <MenuItem value="Mr.">Mr.</MenuItem>
                              <MenuItem value="Mrs.">Mrs.</MenuItem>
                              <MenuItem value="Ms.">Ms.</MenuItem>
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
                              <MenuItem value="Doctor">Doctor</MenuItem>
                              <MenuItem value="Patient">Patient</MenuItem>
                              <MenuItem value="System Administrator">
                                System Administrator
                              </MenuItem>
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
                        title
                      </th>
                      <th scope="col" className="text-darker">
                        ROLE
                      </th>
                      <th scope="col" className="text-darker">
                        email
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
                    {fetchUsers.map((TableData, i) => {
                      return (
                        <FoodTableRow
                          key={i}
                          TableData={TableData}
                          editClick={handleEditClick}
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
