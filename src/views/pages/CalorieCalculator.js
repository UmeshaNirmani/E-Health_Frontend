import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const CalorieCalculator = () => {
  return (
    <>
      <Form>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Meal Type
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Food Name
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
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
