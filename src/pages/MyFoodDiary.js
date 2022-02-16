import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  FormGroup,
  Label,
  Form,
  Col,
  Button,
} from "reactstrap";
import { TextField, Grid } from "@material-ui/core";

const MyFoodDiary = (props) => {
  const mainContent = React.useRef(null);

  return (
    <>
      <div className="main-content m-4 p-3" ref={mainContent}>
        <Form className="ml-4 pl-3">
          <FormGroup row>
            <Label for="exampleSelect" className=" m-2 p-2">
              Select Date From
            </Label>
            <Grid item xs={5} sm={4} lg={3}>
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
                style={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Label for="exampleSelect" className=" m-2 p-2">
              To
            </Label>
            <Grid item xs={5} sm={4} lg={3}>
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
                style={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Col>
              <Button
                color="info"
                type="submit"
                style={{ width: "70%" }}
                className="ml-4 "
              >
                <div className="font-weight-bold">Search</div>
              </Button>
            </Col>
          </FormGroup>
        </Form>

        <Card className="m-4">
          <CardHeader>date</CardHeader>
          <CardBody>
            <div>Breakfast</div>
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
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    2
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Jacob</td>
                  <td style={{ fontSize: "0.75em" }}>Thornton</td>
                  <td style={{ fontSize: "0.75em" }}>@fat</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    3
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Larry</td>
                  <td style={{ fontSize: "0.75em" }}>the Bird</td>
                  <td style={{ fontSize: "0.75em" }}>@twitter</td>
                </tr>
              </tbody>
            </Table>
            <div className="mt-3">Lunch</div>
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
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    2
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Jacob</td>
                  <td style={{ fontSize: "0.75em" }}>Thornton</td>
                  <td style={{ fontSize: "0.75em" }}>@fat</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    3
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Larry</td>
                  <td style={{ fontSize: "0.75em" }}>the Bird</td>
                  <td style={{ fontSize: "0.75em" }}>@twitter</td>
                </tr>
              </tbody>
            </Table>
            <div className="mt-3">Dinner</div>
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
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    2
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Jacob</td>
                  <td style={{ fontSize: "0.75em" }}>Thornton</td>
                  <td style={{ fontSize: "0.75em" }}>@fat</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "0.75em" }}>
                    3
                  </th>
                  <td style={{ fontSize: "0.75em" }}>Larry</td>
                  <td style={{ fontSize: "0.75em" }}>the Bird</td>
                  <td style={{ fontSize: "0.75em" }}>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MyFoodDiary;
