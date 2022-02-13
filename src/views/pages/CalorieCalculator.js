import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroup,
  Table,
} from "reactstrap";
import { TextField, Grid } from "@material-ui/core";

const CalorieCalculator = () => {
  return (
    <>
      <Form className="m-3 p-3">
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Date
          </Label>
          {/* <Col sm={3}>
            <Input type="text" name="select" id="exampleSelect" />
          </Col> */}
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={5} sm={5}>
              <TextField
                fullWidth
                type="date"
                id="startday"
                name="startday"
                variant="outlined"
                format={"DD/MM/YYYY"}
                // value={formik.values.startday}
                // onChange={formik.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
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
              <div className="text-darker font-weight-bold">Add</div>
            </Button>
          </Col>
        </FormGroup>
      </Form>

      <Card className="m-4">
        <CardHeader>Breakfast - date</CardHeader>
        <CardBody>
          <Table hover>
            <thead>
              <tr>
                <th style={{ fontSize: "1em" }}>Food</th>
                <th style={{ fontSize: "1em" }}>Unit Calorie</th>
                <th style={{ fontSize: "1em" }}>Amount</th>
                <th style={{ fontSize: "1em" }}>Total Calorie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ fontSize: "1em" }}>
                  1
                </th>
                <td style={{ fontSize: "1em" }}>Mark</td>
                <td style={{ fontSize: "1em" }}>Otto</td>
                <td style={{ fontSize: "1em" }}>@mdo</td>
              </tr>
              <tr>
                <th scope="row" style={{ fontSize: "1em" }}>
                  2
                </th>
                <td style={{ fontSize: "1em" }}>Jacob</td>
                <td style={{ fontSize: "1em" }}>Thornton</td>
                <td style={{ fontSize: "1em" }}>@fat</td>
              </tr>
              <tr>
                <th scope="row" style={{ fontSize: "1em" }}>
                  3
                </th>
                <td style={{ fontSize: "1em" }}>Larry</td>
                <td style={{ fontSize: "1em" }}>the Bird</td>
                <td style={{ fontSize: "1em" }}>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default CalorieCalculator;

// responsive hadanna
