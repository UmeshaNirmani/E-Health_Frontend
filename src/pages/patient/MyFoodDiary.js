import React from "react";
import { useSelector } from "react-redux";

import { Card, CardHeader, Container, Row, Table } from "reactstrap";
import { Tooltip } from "@material-ui/core";
import SearchBar from "../../components/SearchBarFoodDiary/SearchBarFoodDiary";

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

  const foodDiaryRecords = useSelector(
    (state) => state.fooddiary.foodDiaryRecords
  );
  console.log("foodDiaryRecords: ", foodDiaryRecords);

  const handleDeleteClick = (Record) => {
    console.log("Record", Record);
    let values = {
      TableDataId: Record._id,
    };
    //dispatch(deleteRecords(values));
  };

  if (foodDiaryRecords.length > 0) {
    for (let i = 0; i < foodDiaryRecords.length; i++) {
      return (
        <>
          <div className="main-content m-4 p-3" ref={mainContent}>
            <SearchBar />
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
          </div>
        </>
      );
    }
  }
  return (
    <>
      <div className="main-content m-4 p-3" ref={mainContent}>
        <SearchBar />
      </div>
    </>
  );
};

export default MyFoodDiary;
