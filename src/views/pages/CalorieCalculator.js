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
            Date
          </Label>
          <Col sm={3}>
            <Input type="text" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Meal Type
          </Label>
          <Col sm={3}>
            <Input type="select" name="select" id="exampleSelect">
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Tea time</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <InputGroup className="input-group-rounded input-group-merge">
            <Label for="exampleSelect" sm={2}>
              Add the Food
            </Label>
            <Col sm={3}>
              <InputGroupAddon addonType="prepend">
                <Input
                  aria-label="Search"
                  className="form-control-rounded form-control-prepended"
                  placeholder="Search"
                  type="search"
                />
              </InputGroupAddon>
            </Col>
          </InputGroup>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Can't find the food?
          </Label>
          <Col sm={3}>
            <Input
              id="Servings"
              name="Servings"
              type="text"
              placeholder="Add the food"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Calorie per Unit
          </Label>
          <Col sm={3}>
            <Label for="exampleText">Enter the calorie amount</Label>
            <Input id="Servings" name="Servings" type="number" />
          </Col>
          <Col sm={2}>
            <Label for="exampleText">Select the unit</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Cups</option>
              <option>Tea Spoons</option>
              <option>Table Spoons</option>
              <option>grams</option>
              <option>Portions</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="info">
              <div className="text-darker font-weight-bold">Add</div>
            </Button>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Amount (Servings)
          </Label>
          <Col sm={1}>
            <Input id="Servings" name="Servings" type="decimal" />
          </Col>
          <Col sm={2}>
            <Input type="select" name="select" id="exampleSelect">
              <option>Cups</option>
              <option>Tea Spoons</option>
              <option>Table Spoons</option>
              <option>grams</option>
              <option>Portions</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="info">
              <div className="text-darker font-weight-bold">Calculate</div>
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default CalorieCalculator;

// responsive hadanna
