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
import Footer from "../../components/Footers/Footer";

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      Title: "",
      Role: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
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
      ConfirmPassword: Yup.string()
        .matches("Password should match")
        .required("* Required"),
    }),

    onSubmit: (values, onSubmitProps) => {
      console.log(JSON.stringify(values, null, 2));
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
                        <Input placeholder="Title" type="select">
                          <option>Rev/Hon.</option>
                          <option>Dr.</option>
                          <option>Mr.</option>
                          <option>Mrs.</option>
                          <option>Ms.</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <Input placeholder="Role" type="select">
                          <option>Doctor</option>
                          <option>Patient</option>
                          <option>System Administrator</option>
                        </Input>
                      </InputGroup>
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
                  <Col lg="12">
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
                </Row>
                <Row>
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
                    </FormGroup>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button">
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Register;
