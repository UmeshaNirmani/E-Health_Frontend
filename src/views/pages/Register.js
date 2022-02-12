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
  FormText,
  Label,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUp } from "../../actions/user";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      Title: "",
      Role: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      // ConfirmPassword: "",
    },
    validationSchema: Yup.object({
      Title: Yup.string().required("* Required"),
      Role: Yup.string().required("* Required"),
      FirstName: Yup.string().required("* Required"),
      LastName: Yup.string().required("* Required"),
      Email: Yup.string().email("Invalid email address").required("* Required"),
      Password: Yup.string()
        .min(4, "Password is too short. Must contain minimum 4 characters")
        .required("* Required"),
      // ConfirmPassword: Yup.string()
      //   .matches("Password should match")
      //   .required("* Required"),
    }),

    onSubmit: (values, onSubmitProps) => {
      console.log(JSON.stringify(values, null, 2));
      dispatch(signUp(values, history));
      onSubmitProps.setSubmitting(false);
      onSubmitProps.resetForm();
    },
  });

  return (
    <>
      <Row
        className="justify-content-center bg-info"
        style={{ padding: "3em 0 3em 0", maxWidth: "100%" }}
      >
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <Col className="pt-3">
              <img
                alt="E-Health"
                src={
                  require("../../assets/img/theme/profile-cover.png").default
                }
                style={{
                  display: "block",
                  margin: "auto",
                  height: "5em",
                  width: "5em",
                }}
              />
            </Col>
            <CardHeader className="bg-transparent pb-0">
              <div className="text-center"></div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-3">
              <div className="text-center text-muted mb-4">
                <h1> Account Registration </h1>
              </div>

              <Form role="form" onSubmit={formik.handleSubmit}>
                <h6 className="heading-small text-muted mb-4">
                  User information
                </h6>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          invalid
                          placeholder="Title"
                          type="select"
                          id="Title"
                          name="Title"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Title}
                        >
                          <option value="Label">Select Title</option>
                          <option value="Rev/Hon.">Rev/Hon.</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Ms.">Ms.</option>
                        </Input>
                      </InputGroup>
                      {formik.touched.Title && formik.errors.Title ? (
                        <FormFeedback style={{ display: "inline" }}>
                          {formik.errors.Title}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input
                          invalid
                          placeholder="Role"
                          type="select"
                          id="Role"
                          name="Role"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Role}
                        >
                          <option value="Label">Select Role</option>
                          <option value="Doctor">Doctor</option>
                          <option value="Patient">Patient</option>
                          <option value="System Administrator">
                            System Administrator
                          </option>
                        </Input>
                      </InputGroup>
                      {formik.touched.Role && formik.errors.Role ? (
                        <FormFeedback style={{ display: "inline" }}>
                          {formik.errors.Role}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid
                          placeholder="First Name"
                          type="text"
                          id="FirstName"
                          name="FirstName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.FirstName}
                        />
                      </InputGroup>
                      {formik.touched.FirstName && formik.errors.FirstName ? (
                        <FormFeedback style={{ display: "inline" }}>
                          {formik.errors.FirstName}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid
                          placeholder="Last Name"
                          type="text"
                          id="LastName"
                          name="LastName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.LastName}
                        />
                      </InputGroup>
                      {formik.touched.LastName && formik.errors.LastName ? (
                        <FormFeedback style={{ display: "inline" }}>
                          {formik.errors.LastName}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid
                          placeholder="Email"
                          type="email"
                          id="Email"
                          name="Email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Email}
                        />
                      </InputGroup>
                      {formik.touched.Email && formik.errors.Email ? (
                        <FormFeedback style={{ display: "inline" }}>
                          {formik.errors.Email}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  {/* </Row>
                <Row> */}
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid
                          placeholder="Password"
                          type="password"
                          id="Password"
                          name="Password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.Password}
                        />
                      </InputGroup>
                      {formik.touched.Password && formik.errors.Password ? (
                        <FormFeedback style={{ display: "inline" }}>
                          {formik.errors.Password}
                        </FormFeedback>
                      ) : null}
                    </FormGroup>
                  </Col>
                  {/* <Col lg="6"> */}
                  {/* <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          invalid
                          placeholder="Confirm Password"
                          type="password"
                          id="ConfirmPassword"
                          name="ConfirmPassword"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ConfirmPassword}
                        />
                      </InputGroup>
                      {formik.touched.ConfirmPassword &&
                      formik.errors.ConfirmPassword ? (
                        <FormFeedback style={{ display: "inline" }}>
                          {formik.errors.ConfirmPassword}
                        </FormFeedback>
                      ) : null}
                    </FormGroup> */}
                  {/* </Col> */}
                </Row>
                <div className="text-center">
                  <Button className="mt-4 my-5" color="primary" type="submit">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Register;
