import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
} from "reactstrap";

const CalorieCalculator = () => {
  return (
    <>
      <Form className="m-3 p-3">
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Meal Type
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>

        <FormGroup className="mt-4 mb-3 d-md-none">
          <InputGroup className="input-group-rounded input-group-merge">
            <Input
              aria-label="Search"
              className="form-control-rounded form-control-prepended"
              placeholder="Search"
              type="search"
            />
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <span className="fa fa-search" />
                <Label for="exampleSelect" sm={2}>
                  Food Name
                </Label>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Amount (Servings)
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Calculate</Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default CalorieCalculator;
