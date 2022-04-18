import React from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "actions/user";
import { useDispatch } from "react-redux";

// reactstrap components
import {
  Container,
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Row,
  Col,
  Nav,
} from "reactstrap";
import { TextField } from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CryptoPassword } from "helper.js";

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const mainContent = React.useRef(null);
  // const returnMessage = useSelector((state) => state.auth.authData);

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },

    validationSchema: Yup.object({
      Email: Yup.string().email("Invalid Email address").required("* Required"),
      Password: Yup.string()
        .min(4, "Password is too short. Must contain minimum 4 characters")
        .required("* Required"),
    }),

    onSubmit: (values, onSubmitProps) => {
      console.log(JSON.stringify(values, null, 2));
      // let params = {
      //   EmailOfUser_abc: values.Email,
      // };
      //values.Password = CryptoPassword(values.Password);
      dispatch(signIn(values, history));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  return (
    <>
      <div
        className="main-content"
        ref={mainContent}
        style={{ backgroundColor: "#EBB105" }}
      >
        <div className="header bg-white py-6 py-lg-8">
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
            padding: "1em 0 3em 0",
            maxWidth: "100%",
            backgroundColor: "#EBB105",
          }}
        >
          <Container className="mt--200">
            <Row className="justify-content-center">
              <Col lg="4" md="5">
                <Card className="bg-white shadow border-0 card">
                  <CardHeader className="bg-transparent pb-3">
                    <div className="text-muted text-center mt-2 mb-2 ">
                      <h1 className="text-darker">USER LOGIN</h1>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5">
                    <Form role="form" onSubmit={formik.handleSubmit}>
                      <TextField
                        type="text"
                        fullWidth
                        id="Email"
                        name="Email"
                        label="Email"
                        variant="outlined"
                        size="small"
                        value={formik.values.Email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.Email && Boolean(formik.errors.Email)
                        }
                        helperText={formik.touched.Email && formik.errors.Email}
                        className="mt-4 mb-4"
                      />

                      <TextField
                        type="password"
                        fullWidth
                        id="Password"
                        name="Password"
                        label="Password"
                        variant="outlined"
                        size="small"
                        value={formik.values.Password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.Password &&
                          Boolean(formik.errors.Password)
                        }
                        helperText={
                          formik.touched.Password && formik.errors.Password
                        }
                        className="mb-3"
                      />

                      <div className="text-center mt-3">
                        <Button
                          type="submit"
                          // disabled={true}
                          style={{
                            backgroundColor: "#EBB105",
                            border: "none",
                            color: "white",
                          }}
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                    <Row className="mt-3">
                      <Col xs="6">
                        <Nav>
                          {/* <NavItem>
                            <Route
                              path="/public/register"
                              component={Register}
                            />
                            <NavLink
                              className="nav-link-icon"
                              to="/public/register"
                              tag={Link}
                            >
                              <h3 style={{ color: "#EBB105" }}>Register</h3>
                            </NavLink>
                          </NavItem> */}
                        </Nav>
                      </Col>
                    </Row>
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

export default Login;
