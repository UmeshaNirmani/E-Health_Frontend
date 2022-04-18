import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";
import { TextField, Grid } from "@material-ui/core";
import { Formik } from "formik";

const Profile = (props) => {
  const mainContent = React.useRef(null);

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Container className="mt--7 mb-3" fluid style={{ overflowX: "hidden" }}>
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow mb-7">
                <CardHeader className="border-0 ">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h2 className="mb-0 text-darker">My account</h2>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Formik
                    initialValues={{
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
                      SLMC: "",
                      Hospital: "",
                    }}
                    //validationSchema={validateSchema}
                    onSubmit={(values, actions) => {
                      console.log(JSON.stringify(values, null, 2));
                      //dispatch(medicalHistoryCreate(values));
                      actions.setSubmitting(false);
                      actions.resetForm();
                    }}
                  >
                    {(props) => (
                      <Form
                        onSubmit={props.handleSubmit}
                        onReset={props.handleReset}
                      >
                        <h6 className="heading-small text-darker mb-4 mt--4">
                          General information
                        </h6>
                        <Grid align="center">
                          <Row>
                            <Col lg="6">
                              <TextField
                                id="Title"
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
                                style={{ width: "50%", textAlign: "left" }}
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
                            </Col>
                            <Col lg="6">
                              <TextField
                                id="Role"
                                select
                                name="Role"
                                label="Role"
                                variant="outlined"
                                size="small"
                                value={props.values.Role}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                error={
                                  props.touched.Role &&
                                  Boolean(props.errors.Role)
                                }
                                helperText={
                                  props.touched.Role && props.errors.Role
                                }
                                style={{ width: "50%", textAlign: "left" }}
                              >
                                <option value="Doctor" className="ml-3">
                                  Doctor
                                </option>
                                <option value="Patient" className="ml-3">
                                  Patient
                                </option>
                                <option
                                  value="SystemAdministrator"
                                  className="ml-3"
                                >
                                  System Administrator
                                </option>
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
                                style={{ width: "50%", textAlign: "left" }}
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
                                style={{ width: "50%", textAlign: "left" }}
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
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                error={
                                  props.touched.Email &&
                                  Boolean(props.errors.Email)
                                }
                                helperText={
                                  props.touched.Email && props.errors.Email
                                }
                                className="mt-4"
                                style={{ width: "50%" }}
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
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                error={
                                  props.touched.Password &&
                                  Boolean(props.errors.Password)
                                }
                                helperText={
                                  props.touched.Password &&
                                  props.errors.Password
                                }
                                className="mt-4"
                                style={{ width: "50%" }}
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
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                error={
                                  props.touched.Gender &&
                                  Boolean(props.errors.Gender)
                                }
                                helperText={
                                  props.touched.Gender && props.errors.Gender
                                }
                                className="mt-4 mb-5"
                                style={{ width: "50%" }}
                              >
                                <option value="Male" className="ml-3">
                                  Male
                                </option>
                                <option value="Female" className="ml-3">
                                  Female
                                </option>
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
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                error={
                                  props.touched.Phone &&
                                  Boolean(props.errors.Phone)
                                }
                                helperText={
                                  props.touched.Phone && props.errors.Phone
                                }
                                style={{ width: "50%", textAlign: "left" }}
                                className="mt-4 mb-5"
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
                                  props.touched.DOB && Boolean(props.errors.DOB)
                                }
                                helperText={
                                  props.touched.DOB && props.errors.DOB
                                }
                                className="mt-2"
                                style={{ width: "50%", textAlign: "left" }}
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
                                style={{ width: "50%", textAlign: "left" }}
                              >
                                <option value="Home" className="ml-3">
                                  Home
                                </option>
                                <option value="OutSide" className="ml-3">
                                  Out Side
                                </option>
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
                                  props.touched.NIC && Boolean(props.errors.NIC)
                                }
                                helperText={
                                  props.touched.NIC && props.errors.NIC
                                }
                                style={{ width: "50%", textAlign: "left" }}
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
                                  props.touched.Address && props.errors.Address
                                }
                                className="mt-4"
                                style={{ width: "50%" }}
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
                                  props.touched.Job && Boolean(props.errors.Job)
                                }
                                helperText={
                                  props.touched.Job && props.errors.Job
                                }
                                className="mt-4"
                                style={{ width: "50%" }}
                              >
                                <option value="Executive" className="ml-3">
                                  Executive
                                </option>
                                <option
                                  value="GovernmentOfficer"
                                  className="ml-3"
                                >
                                  Government Officer
                                </option>
                                <option value="Labour" className="ml-3">
                                  Labour
                                </option>
                                <option value="Other" className="ml-3">
                                  Other
                                </option>
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
                                style={{ width: "50%" }}
                              >
                                <option value="AL" className="ml-3">
                                  Up to A/Ls
                                </option>
                                <option value="Graduated" className="ml-3">
                                  Graduated
                                </option>
                                <option value="Mastered" className="ml-3">
                                  Mastered
                                </option>
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
                                style={{ width: "50%" }}
                              >
                                <option value="Vegetarian" className="ml-3">
                                  Vegetarian
                                </option>
                                <option value="NonVegetarian" className="ml-3">
                                  Non-Vegetarian
                                </option>
                                <option
                                  value="LactoOvoVegetarians"
                                  className="ml-3"
                                >
                                  Lacto-Ovo Vegetarians
                                </option>
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
                                style={{ width: "50%" }}
                              >
                                <option value="Colombo" className="ml-3">
                                  Colombo
                                </option>
                                <option value="Kegalle" className="ml-3">
                                  Kegalle
                                </option>
                                <option value="Ratnapura" className="ml-3">
                                  Ratnapura
                                </option>
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
                                style={{ width: "50%", textAlign: "left" }}
                                className="mb-5"
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
                                style={{ width: "50%", textAlign: "left" }}
                                className="mb-5"
                              />
                            </Col>
                          </Row>
                        </Grid>
                        <h6 className="heading-small text-darker mb-4 mt--4">
                          Doctor Information
                        </h6>
                        <Grid align="center">
                          <Row>
                            <Col lg="6">
                              <TextField
                                type="text"
                                id="SLMC"
                                name="SLMC"
                                label="SLMC Reg. No."
                                variant="outlined"
                                size="small"
                                value={props.values.SLMC}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                error={
                                  props.touched.SLMC &&
                                  Boolean(props.errors.SLMC)
                                }
                                helperText={
                                  props.touched.SLMC && props.errors.SLMC
                                }
                                style={{ width: "50%", textAlign: "left" }}
                              ></TextField>
                            </Col>
                            <Col lg="6">
                              <TextField
                                type="text"
                                id="Hospital"
                                name="Hospital"
                                label="Hospital"
                                variant="outlined"
                                size="small"
                                value={props.values.Hospital}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                error={
                                  props.touched.Hospital &&
                                  Boolean(props.errors.Hospital)
                                }
                                helperText={
                                  props.touched.Hospital &&
                                  props.errors.Hospital
                                }
                                style={{ width: "50%", textAlign: "left" }}
                              />
                            </Col>
                          </Row>
                        </Grid>
                        <Grid align="center">
                          <Button
                            className="mt-3 mb-3"
                            style={{
                              backgroundColor: "#EBB105",
                              border: "none",
                              width: "20%",
                            }}
                            onClick={(e) => e.preventDefault()}
                          >
                            <div className="text-white font-weight-bold">
                              Save
                            </div>
                          </Button>
                        </Grid>
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

export default Profile;
