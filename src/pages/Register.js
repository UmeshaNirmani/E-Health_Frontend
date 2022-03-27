// reactstrap components
import {
  Container,
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
} from "reactstrap";
import { TextField, Grid } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUp } from "actions/user";
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
      <div
        className="main-content"
        // ref={mainContent}
        style={{ backgroundColor: "#EBB105" }}
      >
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
                      <h1 className="text-darker"> Account Registration </h1>
                    </div>

                    <Form role="form" onSubmit={formik.handleSubmit}>
                      <h6 className="heading-small text-darker mb-4 ">
                        User information
                      </h6>
                      <Row>
                        <Col lg="6">
                          <TextField
                            id="Title"
                            fullWidth
                            select
                            name="Title"
                            label="Title"
                            variant="outlined"
                            size="small"
                            value={formik.values.Title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.Title &&
                              Boolean(formik.errors.Title)
                            }
                            helperText={
                              formik.touched.Title && formik.errors.Title
                            }
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
                            fullWidth
                            select
                            name="Role"
                            label="Role"
                            variant="outlined"
                            size="small"
                            value={formik.values.Role}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.Role && Boolean(formik.errors.Role)
                            }
                            helperText={
                              formik.touched.Role && formik.errors.Role
                            }
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
                            fullWidth
                            name="FirstName"
                            label="First Name"
                            variant="outlined"
                            size="small"
                            value={formik.values.FirstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.FirstName &&
                              Boolean(formik.errors.FirstName)
                            }
                            helperText={
                              formik.touched.FirstName &&
                              formik.errors.FirstName
                            }
                            className="mt-4"
                          />
                        </Col>

                        <Col lg="6">
                          <TextField
                            type="text"
                            id="LastName"
                            fullWidth
                            name="LastName"
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            value={formik.values.LastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.LastName &&
                              Boolean(formik.errors.LastName)
                            }
                            helperText={
                              formik.touched.LastName && formik.errors.LastName
                            }
                            className="mt-4"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <TextField
                            type="email"
                            id="Email"
                            fullWidth
                            name="Email"
                            label="Email"
                            variant="outlined"
                            size="small"
                            value={formik.values.Email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.Email &&
                              Boolean(formik.errors.Email)
                            }
                            helperText={
                              formik.touched.Email && formik.errors.Email
                            }
                            className="mt-4"
                          />
                        </Col>

                        <Col lg="6">
                          <TextField
                            type="password"
                            id="Password"
                            fullWidth
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
                            className="mt-4"
                          />
                        </Col>
                      </Row>
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
