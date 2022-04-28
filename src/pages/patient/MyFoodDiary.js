import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, Container, Row, Table, Button } from "reactstrap";
import { Tooltip, TextField, Grid } from "@material-ui/core";
import { fetchFoodDiary } from "../../actions/fooddiary";

const FoodDiary = ({ Record, deleteClick }) => (
  <tr>
    <td className="text-darker">{Record.Food}</td>
    <td className="text-darker">{Record.UnitCalorieAmount}</td>
    <td className="text-darker">{Record.Unit}</td>
    <td className="text-darker">{Record.Servings}</td>
    <td className="text-right">
      <div className="row">
        <Tooltip title="Delete record" arrow>
          <div
            className="navbar-toggler"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              deleteClick(e, Record);
            }}
          >
            <i className="far fa-times-circle text-darker" />
          </div>
        </Tooltip>
        <Tooltip title="Edit record" arrow>
          <div
            className="navbar-toggler"
            style={{ cursor: "pointer" }}
            // onClick={(e) => {
            //   deleteClick(e, Record);
            // }}
          >
            <i className="far fa-edit text-darker" />
          </div>
        </Tooltip>
      </div>
    </td>
  </tr>
);

const MyFoodDiary = (props) => {
  const mainContent = React.useRef(null);
  const dispatch = useDispatch();

  const foodDiaryRecords = useSelector(
    (state) => state.fooddiary.foodDiaryRecords
  );

  const handleDeleteClick = (Record) => {
    console.log("Record", Record);
    let values = {
      TableDataId: Record._id,
    };
    //dispatch(deleteRecords(values));
  };

  const handleChange = (e) => {
    setDateSelected(e.target.value);
  };
  const [dateSelected, setDateSelected] = useState("");
  const handleSubmit = () => {
    dispatch(fetchFoodDiary({ Date: dateSelected }));
  };

  return (
    <>
      <div className="main-content m-4 p-3" ref={mainContent}>
        <Row>
          <Grid item xs={5} align="center">
            <TextField
              type="date"
              id="Date"
              name="Date"
              label="Date"
              variant="outlined"
              format={"yyyy-MM-dd"}
              onChange={(e) => handleChange(e)}
              size="small"
              InputLabelProps={{ shrink: true }}
              style={{ width: "50%" }}
            />
          </Grid>
          <Button
            color="info"
            type="submit"
            style={{ width: "20%", backgroundColor: "#EBB105" }}
            onClick={() => handleSubmit()}
          >
            <div className="font-weight-bold">Search</div>
          </Button>
        </Row>
        <>
          <Container className="mb-6" fluid>
            <Row className="mt-5">
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0 ">
                    <div className="row">
                      <div className="mb-xl-0 col-11 justify-content-center">
                        <h2 className="mb-0 text-darker">My Food Diary</h2>
                      </div>
                    </div>
                  </CardHeader>

                  {foodDiaryRecords.map((key, i) => {
                    return (
                      <Card
                        style={{ borderRadius: "0" }}
                        className="ml-3 mr-3 mb-3"
                        key={i}
                      >
                        <CardHeader className="border-0 ">
                          <div className="row">
                            <div className="mb-xl-0 col-11 justify-content-center">
                              <h4 className="mb-0 text-darker">
                                {foodDiaryRecords[i].MealType}
                              </h4>
                              <h5 className="text-darker">
                                Total Calorie Consumption:{" "}
                                {foodDiaryRecords[i].totalMealCalorie}
                              </h5>
                            </div>
                          </div>
                        </CardHeader>

                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col" className="text-darker">
                                Food Name
                              </th>
                              <th scope="col" className="text-darker">
                                Unit Calorie Amount
                              </th>
                              <th scope="col" className="text-darker">
                                Unit (Serving Size)
                              </th>
                              <th scope="col" className="text-darker">
                                Servings
                              </th>
                              <th scope="col" className="text-darker">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr></tr>
                            {foodDiaryRecords[i].FoodDetails.map(
                              (record, j) => {
                                return (
                                  <FoodDiary
                                    key={j}
                                    Record={record}
                                    deleteClick={handleDeleteClick}
                                  />
                                );
                              }
                            )}
                          </tbody>
                        </Table>
                      </Card>
                    );
                  })}
                </Card>
              </div>
            </Row>
          </Container>
        </>
      </div>
    </>
  );
};

export default MyFoodDiary;
