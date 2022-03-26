import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodDiary } from "../../actions/fooddiary";
import {
  Form,
  Button,
  Card,
  CardHeader,
  Container,
  Row,
  Table,
} from "reactstrap";
import { TextField, Grid, Tooltip } from "@material-ui/core";

// const FoodDiary = ({ Diary, editClick, deleteClick, createClick }) => (
//   <tr>
//     <td>{Diary.Food}</td>
//     <td>{Diary.UnitCalorieAmount}</td>
//     <td>{Diary.Unit}</td>
//     <td className="text-right">
//       <div className="row">
//         <Tooltip title="Edit" arrow>
//           <div
//             className="navbar-toggler"
//             style={{ cursor: "pointer" }}
//             onClick={(e) => {
//               editClick(e, Diary);
//             }}
//           >
//             <i className="far fa-edit" />
//           </div>
//         </Tooltip>
//         <Tooltip title="Delete record" arrow>
//           <div
//             className="navbar-toggler"
//             style={{ cursor: "pointer" }}
//             onClick={(e) => {
//               deleteClick(e, Diary);
//             }}
//           >
//             <i className="far fa-times-circle" />
//           </div>
//         </Tooltip>
//       </div>
//     </td>
//   </tr>
// );

const MyFoodDiary = (props) => {
  const mainContent = React.useRef(null);
  const dispatch = useDispatch();

  const foodDiaryRecords = useSelector(
    (state) => state.fooddiary.foodDiaryRecords
  );

  console.log("foodDiaryRecords: ", foodDiaryRecords);

  const handleChange = (e) => {
    setDateSelected(e.target.value);
  };

  const [dateSelected, setDateSelected] = useState("");

  const handleSubmit = (value) => {
    value = dateSelected;
    dispatch(fetchFoodDiary({ Date: value }));
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

        <Container className="mb-6" fluid>
          <Row className="mt-5">
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0 ">
                  <div className="row">
                    <div className="mb-xl-0 col-11 justify-content-center">
                      <h2 className="mb-0">My Food Diary</h2>
                    </div>
                  </div>
                </CardHeader>

                <Card style={{ borderRadius: "0" }} className="ml-3 mr-3 mb-6">
                  <CardHeader className="border-0 ">
                    <div className="row">
                      <div className="mb-xl-0 col-11 justify-content-center">
                        <h4 className="mb-0">{foodDiaryRecords[0].MealType}</h4>
                      </div>
                    </div>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Food Name</th>
                        <th scope="col">Unit (Serving Size)</th>
                        <th scope="col">Servings</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </Table>
                </Card>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyFoodDiary;
