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

const Profile = () => {
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
                  <Form>
                    <h6 className="heading-small text-darker mb-4">
                      User information
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
                            // value={formik.values.Title}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={
                            //   formik.touched.Title &&
                            //   Boolean(formik.errors.Title)
                            // }
                            // helperText={
                            //   formik.touched.Title && formik.errors.Title
                            // }
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
                            // value={formik.values.Role}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={
                            //   formik.touched.Role && Boolean(formik.errors.Role)
                            // }
                            // helperText={
                            //   formik.touched.Role && formik.errors.Role
                            // }
                            style={{ width: "50%", textAlign: "left" }}
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
                            // value={formik.values.FirstName}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={
                            //   formik.touched.FirstName &&
                            //   Boolean(formik.errors.FirstName)
                            // }
                            // helperText={
                            //   formik.touched.FirstName &&
                            //   formik.errors.FirstName
                            // }
                            className="mt-4"
                            style={{ width: "50%" }}
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
                            // value={formik.values.LastName}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={
                            //   formik.touched.LastName &&
                            //   Boolean(formik.errors.LastName)
                            // }
                            // helperText={
                            //   formik.touched.LastName && formik.errors.LastName
                            // }
                            className="mt-4"
                            style={{ width: "50%" }}
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
                            // value={formik.values.Email}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={
                            //   formik.touched.Email &&
                            //   Boolean(formik.errors.Email)
                            // }
                            // helperText={
                            //   formik.touched.Email && formik.errors.Email
                            // }
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
                            // value={formik.values.Password}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // error={
                            //   formik.touched.Password &&
                            //   Boolean(formik.errors.Password)
                            // }
                            // helperText={
                            //   formik.touched.Password && formik.errors.Password
                            // }
                            className="mt-4"
                            style={{ width: "50%" }}
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
                          width: "30%",
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className="text-white font-weight-bold">Save</div>
                      </Button>
                    </Grid>
                  </Form>
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
