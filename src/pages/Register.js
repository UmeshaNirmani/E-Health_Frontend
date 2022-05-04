// reactstrap components
import React, { useRef, useEffect } from "react";
import { Container, Button, Card, CardBody, Form, Row, Col } from "reactstrap";
import { TextField, Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { profileUpdate } from "actions/user";

let currentUser = localStorage.getItem("userProfile");
let jUser = JSON.parse(currentUser);

const Register = (props) => {
  const formRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (jUser && jUser["Id"] && formRef && formRef.current) {
      console.log("jUser register: ", jUser);
      formRef.current?.resetForm();
      formRef.current.setFieldValue("userId", jUser.Id, false);
      formRef.current.setFieldValue("Title", jUser.Title, false);
      formRef.current.setFieldValue("Role", jUser.Role, false);
      formRef.current.setFieldValue("Email", jUser.Email, false);
    }
  }, []);

  return (
    <>
      <div className="main-content" style={{ backgroundColor: "#EBB105" }}>
        <div className="header bg-white py-7 py-lg-8">
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                points="2560 0 2560 100 0 100"
                style={{ fill: "#EBB105" }}
              />
            </svg>
          </div>
        </div>
        <Row
          className="justify-content-center"
          style={{
            padding: "3em 0 3em 0",
            maxWidth: "100%",
            backgroundColor: "#EBB105",
          }}
        >
          <Container className="mt--200">
            <Row className="justify-content-center">
              <Col lg="6" md="8">
                <Card className="bg-white shadow border-0">
                  <Col className="pt-3">
                    <img
                      alt="E-Health"
                      src={
                        require("assets/img/theme/profile-cover.png").default
                      }
                      style={{
                        display: "block",
                        margin: "auto",
                        height: "5em",
                        width: "5em",
                      }}
                    />
                  </Col>

                  <CardBody className="px-lg-5 py-lg-3">
                    <div className="text-center text-muted mb-4">
                      <h1 className="text-darker heading-title">
                        Account Registration
                      </h1>
                    </div>

                    <Formik
                      initialValues={{
                        userId: null,
                        Title: "",
                        Role: "",
                        FirstName: "",
                        LastName: "",
                        Email: "",
                        Password: "",
                        Gender: "",
                        Phone: "",
                        DOB: "",
                        CurrentLiving: "",
                        NIC: "",
                        Address: "",
                        Job: "",
                        Education: "",
                        FoodPreference: "",
                        District: "",
                        Height: "",
                        Weight: "",
                      }}
                      validationSchema={Yup.object({
                        FirstName: Yup.string().required("* Required"),
                        LastName: Yup.string().required("* Required"),
                        Password: Yup.string()
                          .min(
                            4,
                            "Password is too short. Must contain minimum 4 characters"
                          )
                          .required("* Required"),
                        Gender: Yup.string().max(10).required("* Required"),
                        Phone: Yup.string().required("* Required"),
                        DOB: Yup.string().required("* Required"),
                        CurrentLiving: Yup.string().required("* Required"),
                        NIC: Yup.string().required("* Required"),
                        Address: Yup.string().required("* Required"),
                        Job: Yup.string().required("* Required"),
                        Education: Yup.string().required("* Required"),
                        FoodPreference: Yup.string().required("* Required"),
                        District: Yup.string().required("* Required"),
                        Height: Yup.string().required("* Required"),
                        Weight: Yup.string().required("* Required"),
                      })}
                      onSubmit={(values, actions) => {
                        console.log(JSON.stringify(values, null, 2));
                        let params = {
                          userId: values.userId,
                          Title: values.Title,
                          Role: values.Role,
                          FirstName: values.FirstName,
                          LastName: values.LastName,
                          Email: values.Email,
                          Password: values.Password,
                          Gender: values.Gender,
                          Phone: values.Phone,
                          DOB: values.DOB,
                          CurrentLiving: values.CurrentLiving,
                          NIC: values.NIC,
                          Address: values.Address,
                          Job: values.Job,
                          Education: values.Education,
                          FoodPreference: values.FoodPreference,
                          District: values.District,
                          Height: values.Height,
                          Weight: values.Weight,
                        };
                        if (values.userId && values.userId.length > 10) {
                          params["userId"] = values.userId;
                          dispatch(profileUpdate(params));
                        }
                        actions.setSubmitting(false);
                        actions.resetForm();
                      }}
                      innerRef={formRef}
                    >
                      {(props) => (
                        <Form
                          role="form"
                          onSubmit={props.handleSubmit}
                          onReset={props.handleReset}
                        >
                          <h6 className="heading-small text-darker mb-4">
                            General information
                          </h6>
                          <Grid align="center">
                            <Row>
                              <Col lg="6">
                                <TextField
                                  id="Title"
                                  name="Title"
                                  label="Title"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Title}
                                  inputProps={{ readOnly: true }}
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="Rev/Hon.">Rev/Hon.</MenuItem>
                                  <MenuItem value="Dr.">Dr.</MenuItem>
                                  <MenuItem value="Mr.">Mr.</MenuItem>
                                  <MenuItem value="Mrs.">Mrs.</MenuItem>
                                  <MenuItem value="Ms.">Ms.</MenuItem>
                                </TextField>
                              </Col>
                              <Col lg="6">
                                <TextField
                                  id="Role"
                                  name="Role"
                                  label="Role"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Role}
                                  inputProps={{ readOnly: true }}
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="Doctor">Doctor</MenuItem>
                                  <MenuItem value="Patient">Patient</MenuItem>
                                  <MenuItem value="SystemAdministrator">
                                    System Administrator
                                  </MenuItem>
                                </TextField>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <TextField
                                  type="text"
                                  id="FirstName"
                                  name="FirstName"
                                  label="First Name"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.FirstName}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.FirstName &&
                                    Boolean(props.errors.FirstName)
                                  }
                                  helperText={
                                    props.touched.FirstName &&
                                    props.errors.FirstName
                                  }
                                  style={{ textAlign: "left" }}
                                  className="mt-4"
                                />
                              </Col>
                              <Col lg="6">
                                <TextField
                                  type="text"
                                  id="LastName"
                                  name="LastName"
                                  label="Last Name"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.LastName}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.LastName &&
                                    Boolean(props.errors.LastName)
                                  }
                                  helperText={
                                    props.touched.LastName &&
                                    props.errors.LastName
                                  }
                                  style={{ textAlign: "left" }}
                                  className="mt-4"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <TextField
                                  type="email"
                                  id="Email"
                                  name="Email"
                                  label="Email"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Email}
                                  inputProps={{ readOnly: true }}
                                  className="mt-4"
                                />
                              </Col>
                              <Col lg="6">
                                <TextField
                                  type="password"
                                  id="Password"
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
                                    props.touched.Password &&
                                    props.errors.Password
                                  }
                                  className="mt-4"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <TextField
                                  id="Gender"
                                  select
                                  name="Gender"
                                  label="Gender"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Gender}
                                  onChange={props.handleChange("Gender")}
                                  onBlur={props.handleBlur("Gender")}
                                  error={
                                    props.touched.Gender &&
                                    Boolean(props.errors.Gender)
                                  }
                                  helperText={
                                    props.touched.Gender && props.errors.Gender
                                  }
                                  className="mt-4 mb-4"
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="Male">Male</MenuItem>
                                  <MenuItem value="Female">Female</MenuItem>
                                </TextField>
                              </Col>
                              <Col lg="6">
                                <TextField
                                  type="number"
                                  id="Phone"
                                  name="Phone"
                                  label="Contact Number"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Phone}
                                  onChange={props.handleChange("Phone")}
                                  onBlur={props.handleBlur("Phone")}
                                  error={
                                    props.touched.Phone &&
                                    Boolean(props.errors.Phone)
                                  }
                                  helperText={
                                    props.touched.Phone && props.errors.Phone
                                  }
                                  style={{ textAlign: "left" }}
                                  className="mt-4 mb-4"
                                />
                              </Col>
                            </Row>
                          </Grid>

                          <h6 className="heading-small text-darker mb-4 ">
                            Patient information
                          </h6>
                          <Grid align="center">
                            <Row>
                              <Col lg="6">
                                <TextField
                                  type="date"
                                  id="DOB"
                                  name="DOB"
                                  label="Date Of Birth"
                                  variant="outlined"
                                  format={"yyyy-MM-dd"}
                                  size="small"
                                  InputLabelProps={{ shrink: true }}
                                  value={props.values.DOB}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.DOB &&
                                    Boolean(props.errors.DOB)
                                  }
                                  helperText={
                                    props.touched.DOB && props.errors.DOB
                                  }
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                ></TextField>
                              </Col>
                              <Col lg="6">
                                <TextField
                                  id="CurrentLiving"
                                  select
                                  name="CurrentLiving"
                                  label="Current Living Status"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.CurrentLiving}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.CurrentLiving &&
                                    Boolean(props.errors.CurrentLiving)
                                  }
                                  helperText={
                                    props.touched.CurrentLiving &&
                                    props.errors.CurrentLiving
                                  }
                                  className="mt-2"
                                  style={{
                                    width: "100%",
                                    textAlign: "left",
                                  }}
                                >
                                  <MenuItem value="Home">Home</MenuItem>
                                  <MenuItem value="OutSide">Out Side</MenuItem>
                                </TextField>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <TextField
                                  type="text"
                                  id="NIC"
                                  name="NIC"
                                  label="NIC No."
                                  variant="outlined"
                                  size="small"
                                  value={props.values.NIC}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.NIC &&
                                    Boolean(props.errors.NIC)
                                  }
                                  helperText={
                                    props.touched.NIC && props.errors.NIC
                                  }
                                  style={{
                                    textAlign: "left",
                                  }}
                                  className="mt-4"
                                />
                              </Col>
                              <Col lg="6">
                                <TextField
                                  type="text"
                                  multiline
                                  id="Address"
                                  name="Address"
                                  label="Home Address"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Address}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.Address &&
                                    Boolean(props.errors.Address)
                                  }
                                  helperText={
                                    props.touched.Address &&
                                    props.errors.Address
                                  }
                                  className="mt-4"
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <TextField
                                  id="Job"
                                  select
                                  name="Job"
                                  label="Job"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Job}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.Job &&
                                    Boolean(props.errors.Job)
                                  }
                                  helperText={
                                    props.touched.Job && props.errors.Job
                                  }
                                  className="mt-4"
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="Executive">
                                    Executive
                                  </MenuItem>
                                  <MenuItem value="GovernmentOfficer">
                                    Government Officer
                                  </MenuItem>
                                  <MenuItem value="Labour">Labour</MenuItem>
                                  <MenuItem value="Other">Other</MenuItem>
                                </TextField>
                              </Col>
                              <Col lg="6">
                                <TextField
                                  id="Education"
                                  select
                                  name="Education"
                                  label="Education"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Education}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.Education &&
                                    Boolean(props.errors.Education)
                                  }
                                  helperText={
                                    props.touched.Education &&
                                    props.errors.Education
                                  }
                                  className="mt-4"
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="AL">Up to A/Ls</MenuItem>
                                  <MenuItem value="Graduated">
                                    Graduated
                                  </MenuItem>
                                  <MenuItem value="Mastered">Mastered</MenuItem>
                                </TextField>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="6">
                                <TextField
                                  id="FoodPreference"
                                  select
                                  name="FoodPreference"
                                  label="Food Preference"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.FoodPreference}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.FoodPreference &&
                                    Boolean(props.errors.FoodPreference)
                                  }
                                  helperText={
                                    props.touched.FoodPreference &&
                                    props.errors.FoodPreference
                                  }
                                  className="mt-4 mb-5"
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="Vegetarian">
                                    Vegetarian
                                  </MenuItem>
                                  <MenuItem value="NonVegetarian">
                                    Non-Vegetarian
                                  </MenuItem>
                                  <MenuItem value="LactoOvoVegetarians">
                                    Lacto-Ovo Vegetarians
                                  </MenuItem>
                                </TextField>
                              </Col>
                              <Col lg="6">
                                <TextField
                                  id="District"
                                  select
                                  name="District"
                                  label="District"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.District}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.District &&
                                    Boolean(props.errors.District)
                                  }
                                  helperText={
                                    props.touched.District &&
                                    props.errors.District
                                  }
                                  className="mt-4 mb-5"
                                  style={{ width: "100%", textAlign: "left" }}
                                >
                                  <MenuItem value="Colombo">Colombo</MenuItem>
                                  <MenuItem value="Kegalle">Kegalle</MenuItem>
                                  <MenuItem value="Ratnapura">
                                    Ratnapura
                                  </MenuItem>
                                </TextField>
                              </Col>
                            </Row>
                          </Grid>
                          <h6 className="heading-small text-darker mb-4 mt--4">
                            Anthropometric Information
                          </h6>
                          <Grid align="center">
                            <Row>
                              <Col lg="6">
                                <TextField
                                  type="number"
                                  id="Height"
                                  name="Height"
                                  label="Height"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Height}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.Height &&
                                    Boolean(props.errors.Height)
                                  }
                                  helperText={
                                    props.touched.Height && props.errors.Height
                                  }
                                  style={{
                                    textAlign: "left",
                                  }}
                                />
                              </Col>
                              <Col lg="6">
                                <TextField
                                  type="number"
                                  id="Weight"
                                  name="Weight"
                                  label="Weight"
                                  variant="outlined"
                                  size="small"
                                  value={props.values.Weight}
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  error={
                                    props.touched.Weight &&
                                    Boolean(props.errors.Weight)
                                  }
                                  helperText={
                                    props.touched.Weight && props.errors.Weight
                                  }
                                  style={{
                                    textAlign: "left",
                                  }}
                                />
                              </Col>
                            </Row>
                          </Grid>
                          <div className="text-center">
                            <Button
                              className="mt-4 my-5"
                              color="primary"
                              type="submit"
                            >
                              Create account
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Row>
      </div>
    </>
  );
};

export default Register;
