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

const CalorieCalculator = (props) => {
  const mainContent = React.useRef(null);
  return (
    <>
      <div
        className="main-content"
        ref={mainContent}
        style={{ overflow: "hidden" }}
      >
        <Form className="m-4 p-3">
          <FormGroup row>
            <Label for="exampleSelect" sm={3}>
              Date
            </Label>
            <Grid item xs={5} sm={4} lg={3}>
              <TextField
                className="ml-3"
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
                style={{ backgroundColor: "#fff" }}
              />
            </Grid>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={3}>
              Meal Type
            </Label>
            <Col sm={4}>
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
              <Label for="exampleSelect" sm={3}>
                Add the Food
              </Label>
              <Col sm={4}>
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
            <Label for="exampleText" sm={3}>
              Can't find the food?
            </Label>
            <Col sm={4}>
              <Input
                id="Servings"
                name="Servings"
                type="text"
                placeholder="Add the food"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={3}>
              Calorie per Unit
            </Label>
            <Col sm={4}>
              <Label for="exampleText">Enter the calorie amount</Label>
              <Input id="Servings" name="Servings" type="number" />
            </Col>
            <Col sm={3}>
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
            <Col sm={{ size: 10, offset: 3 }}>
              <Button color="info" type="submit" style={{ width: "20%" }}>
                <div className="font-weight-bold">Add</div>
              </Button>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleText" sm={3}>
              Amount (Servings)
            </Label>
            <Col sm={3}>
              <Input id="Servings" name="Servings" type="decimal" />
            </Col>
            <Col sm={3}>
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
            <Col sm={{ size: 10, offset: 3 }}>
              <Button color="info" type="submit" style={{ width: "20%" }}>
                <div className="font-weight-bold">Add</div>
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <Card className="m-4">
          <CardHeader>Breakfast </CardHeader>
          <CardBody>
            <Table bordered>
              <thead>
                <tr>
                  <th style={{ fontSize: "0.75em" }}>Food</th>
                  <th style={{ fontSize: "0.75em" }}>Unit Calorie</th>
                  <th style={{ fontSize: "0.75em" }}>Amount</th>
                  <th style={{ fontSize: "0.75em" }}>Total Calorie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    1
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Mark</td>
                  <td style={{ fontSize: "0.75em" }}>Otto</td>
                  <td style={{ fontSize: "0.75em" }}>@mdo</td>
                  <td>
                    <Button close />
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    2
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Jacob</td>
                  <td style={{ fontSize: "0.75em" }}>Thornton</td>
                  <td style={{ fontSize: "0.75em" }}>@fat</td>
                  <td>
                    <Button close />
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    3
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Larry</td>
                  <td style={{ fontSize: "0.75em" }}>the Bird</td>
                  <td style={{ fontSize: "0.75em" }}>@twitter</td>
                  <td>
                    <Button close />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CalorieCalculator;

// responsive hadanna
