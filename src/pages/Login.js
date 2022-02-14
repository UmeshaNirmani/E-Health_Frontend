import React from "react";
import { useHistory, Route } from "react-router-dom";
import { signIn } from "../../actions/user";
import { useDispatch } from "react-redux";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  FormFeedback,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import Register from "../pages/Register";

import { useFormik } from "formik";
import * as Yup from "yup";

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
      Email: Yup.string().email("Invalid Email address").required("Required"),
      Password: Yup.string()
        .min(4, "Password is too short. Must contain minimum 4 characters")
        .required("Required"),
    }),

    onSubmit: (values, onSubmitProps) => {
      console.log(JSON.stringify(values, null, 2));
      // let params = {
      //   EmailOfUser_abc: values.Email,
      // };
      dispatch(signIn(values, history));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <Row
          className="justify-content-center bg-info"
          style={{ paddingTop: "3em", maxWidth: "100%" }}
        >
          <Col lg="4" md="5">
            <Card
              className="bg-white border-0"
              style={{ borderRadius: "0.375rem 0.375rem 0 0" }}
            >
              <CardHeader className="bg-transparent pb-3">
                <div className="text-muted text-center mt-2 mb-2 ">
                  <h1 className="text-info">User Login</h1>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-3">
                <Form role="form" onSubmit={formik.handleSubmit}>
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ backgroundColor: "#f7fafc" }}>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        invalid
                        placeholder="Email"
                        type="Email"
                        id="Email"
                        name="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Email}
                        style={{ backgroundColor: "#f7fafc" }}
                      />
                    </InputGroup>
                    {formik.touched.Email && formik.errors.Email ? (
                      <FormFeedback style={{ display: "inline" }}>
                        {formik.errors.Email}
                      </FormFeedback>
                    ) : null}
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={{ backgroundColor: "#f7fafc" }}>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        invalid
                        placeholder="Password"
                        type="Password"
                        id="Password"
                        name="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Password}
                        style={{ backgroundColor: "#f7fafc" }}
                      />
                    </InputGroup>
                    {formik.touched.Password && formik.errors.Password ? (
                      <FormFeedback style={{ display: "inline" }}>
                        {formik.errors.Password}
                      </FormFeedback>
                    ) : null}
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row
          className="justify-content-center"
          style={{ paddingBottom: "3em", maxWidth: "100%" }}
        >
          <Col lg="4" md="5">
            <Card
              className="bg-white border-0"
              style={{ borderRadius: "0 0 0.375rem 0.375rem" }}
            >
              <CardBody>
                <Form role="form" onSubmit={formik.handleSubmit}>
                  <div className="text-center">
                    <Button color="primary" type="submit">
                      Sign in
                    </Button>
                  </div>
                </Form>
                <Row className="mt-3">
                  <Col xs="6">
                    <Nav>
                      <NavItem>
                        <Route path="/public/register" component={Register} />
                        <NavLink
                          className="nav-link-icon"
                          to="/public/register"
                          tag={Link}
                        >
                          <h3 className="text-info">Register</h3>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
