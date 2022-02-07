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
} from "reactstrap";

const Register = () => {
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
              <Form role="form">
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
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="First Name" type="text" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-hat-3" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Last Name" type="text" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12">
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="email" />
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
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Password" type="password" />
                      </InputGroup>
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
                        <Input placeholder="Confirm Password" type="password" />
                      </InputGroup>
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
    </>
  );
};

export default Register;
