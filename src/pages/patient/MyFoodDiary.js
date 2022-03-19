import React from "react";
import { FormGroup, Label, Form, Col, Button } from "reactstrap";
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
      </div>
    </>
  );
};

export default MyFoodDiary;
