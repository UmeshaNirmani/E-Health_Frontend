import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { signIn } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
import * as actionType from "constants/actionTypes";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  FormFeedback,
} from "reactstrap";

import { useFormik } from "formik";
import * as Yup from "yup";

const Login = (props) => {
  const dispatch = useDispatch();
  const mainContent = React.useRef(null);
  const returnMessage = useSelector((state) => state.auth.authData);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(4, "Password is too short. Must contain minimum 4 characters")
        .required("Required"),
    }),

    onSubmit: (values, onSubmitProps) => {
      alert(JSON.stringify(values, null, 2));
      let params = {
        emailOfUser_abc: values.email,
      };
      dispatch(signIn(values));
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
                        type="email"
                        autoComplete="new-email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        style={{ backgroundColor: "#f7fafc" }}
                      />

                      {formik.touched.email && formik.errors.email ? (
                        <FormFeedback>{formik.errors.email}</FormFeedback>
                      ) : null}
                    </InputGroup>
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
                        type="password"
                        autoComplete="new-password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        style={{ backgroundColor: "#f7fafc" }}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <FormFeedback className="invalid-feedback">
                          {formik.errors.password}
                        </FormFeedback>
                      ) : null}
                    </InputGroup>
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
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                      Sign in
                    </Button>
                  </div>
                </Form>

                <Row className="mt-3">
                  <Col xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <h3 className="text-info">Forgot password?</h3>
                    </a>
                  </Col>
                  <Col className="text-right" xs="6">
                    <a
                      className="text-light"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <h3 className="text-info">Register</h3>
                    </a>
                  </Col>
                </Row>

                <Card>
                  <CardText>{returnMessage.message}</CardText>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
