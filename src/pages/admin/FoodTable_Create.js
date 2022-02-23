// import React, { useEffect, useState, useRef } from "react";
// import Lodash from "lodash";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useLocation } from "react-router-dom";
// import {
//   Checkbox,
//   Chip,
//   FormControl,
//   InputAdornment,
//   ListItemIcon,
//   ListItemText,
//   MenuItem,
//   Select,
//   TextField,
// } from "@material-ui/core";
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   CardTitle,
//   Col,
//   Container,
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Row,
//   Table,
//   UncontrolledDropdown,
//   Label,
//   Form,
//   FormGroup,
//   Input,
//   FormText,
//   Button,
// } from "reactstrap";

// import { createRecords, updateRecords } from "actions/foodtable";

// const reviewSchema = Yup.object({
//   Category: Yup.string().required(),
//   Title: Yup.string().required().min(4).max(1000),
//   // , File: Yup.object().shape({
//   //   name: Yup.string().required()
//   // })
// });

// const FoodTableCreate = (props) => {
//   const formRef = useRef();
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const [resource, setResource] = useState({});
//   const [isEdit, setIsEdit] = useState(false); // For edit resource details passed by parent page

//   useEffect(() => {
//     const tempResource = props.location.state?.resource;
//     if (tempResource && !Lodash.isEmpty(tempResource)) {
//       setResource(tempResource);
//       setIsEdit(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (formRef.current && resource && !Lodash.isEmpty(resource)) {
//       formRef.current?.resetForm();
//       formRef.current.setFieldValue("resourceId", resource._id, false);
//       formRef.current.setFieldValue("Title", resource.title, false);
//       formRef.current.setFieldValue("Description", resource.description, false);
//       formRef.current.setFieldValue("Category", resource.category, false);
//       formRef.current.setFieldValue("File", resource.file, false);
//     }
//   }, [resource]);

//   // handle change event of the file
//   const handleFileChange = async (e) => {
//     try {
//       const file = e.target.files[0];
//       console.log(file);
//       if (formRef.current) {
//         formRef.current.setFieldValue("File", file, false);
//       }
//     } catch (err) {
//       console.log("file error", err);
//     }
//   };

//   return (
//     <>
//       {/* Page content */}
//       <Container className="mt--7" fluid>
//         <Row className="mt-5">
//           <div className="col">
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <div className="row">
//                   <div className="mb-xl-0 col-11">
//                     <h3 className="mb-0">APP Resources</h3>
//                     <h6 className="mb-0">Resources for tools and more</h6>
//                   </div>
//                   <div className="mb-xl-0"></div>
//                 </div>
//               </CardHeader>
//               <CardBody>
//                 <Formik
//                   initialValues={{
//                     resourceId: null,
//                     Title: "",
//                     Description: "",
//                     Category: "",
//                     File: "",
//                   }}
//                   validationSchema={reviewSchema}
//                   onSubmit={(values, actions) => {
//                     console.log("formik values: ", values);
//                     let params = {
//                       title: values.Title,
//                       description: values.Description,
//                       category: values.Category,
//                       file: values.File,
//                     };
//                     if (values.resourceId && values.resourceId.length > 10) {
//                       params["resourceId"] = values.resourceId;
//                       console.log("update resource: ", params);
//                       dispatch(updateRecords(params, history));
//                     } else {
//                       console.log("create resource: ", params);
//                       dispatch(createRecords(params, history));
//                     }
//                   }}
//                   innerRef={formRef}
//                 >
//                   {(props) => (
//                     <Form
//                       role="form"
//                       style={{ marginTop: -25 }}
//                       onSubmit={props.handleSubmit}
//                     >
//                       <Row>
//                         <Col lg="4">
//                           <TextField
//                             select
//                             fullWidth
//                             label={"Resource Category*"}
//                             variant="outlined"
//                             value={props.values.Category}
//                             onChange={props.handleChange("Category")}
//                             onBlur={props.handleChange("Category")}
//                             SelectProps={{ native: true }}
//                             className={
//                               "form-control-alternative form-control-edit"
//                             }
//                             error={
//                               props.touched.Category &&
//                               Boolean(props.errors.Category)
//                             }
//                             helperText={
//                               props.touched.Category && props.errors.Category
//                             }
//                             disabled={isEdit}
//                           >
//                             <option key="" value=""></option>
//                             <option key="IMAGE" value="IMAGE">
//                               IMAGE
//                             </option>
//                             {/* <option key="VIDEO" value="VIDEO">VIDEO</option>
//                             <option key="PDF" value="PDF">PDF</option> */}
//                             <option key="OTHER" value="OTHER">
//                               OTHER
//                             </option>
//                           </TextField>
//                         </Col>
//                       </Row>

//                       <Row>
//                         <Col lg="8">
//                           <TextField
//                             fullWidth
//                             label={"Resource Title*"}
//                             variant="outlined"
//                             value={props.values.Title}
//                             onChange={props.handleChange("Title")}
//                             onBlur={props.handleChange("Title")}
//                             className={
//                               "form-control-alternative form-control-edit"
//                             }
//                             error={
//                               props.touched.Title && Boolean(props.errors.Title)
//                             }
//                             helperText={
//                               props.touched.Title && props.errors.Title
//                             }
//                           />
//                         </Col>
//                       </Row>

//                       <Row>
//                         <Col lg="12">
//                           <TextField
//                             fullWidth
//                             label={"Resource Description"}
//                             variant="outlined"
//                             value={props.values.Description}
//                             onChange={props.handleChange("Description")}
//                             onBlur={props.handleChange("Description")}
//                             className={
//                               "form-control-alternative form-control-edit"
//                             }
//                             error={
//                               props.touched.Description &&
//                               Boolean(props.errors.Description)
//                             }
//                             helperText={
//                               props.touched.Description &&
//                               props.errors.Description
//                             }
//                           />
//                         </Col>
//                       </Row>

//                       <Row>
//                         <Col md="8">
//                           {isEdit ? (
//                             <TextField
//                               fullWidth
//                               id="File"
//                               name="File"
//                               variant="outlined"
//                               label="Resource File to Attach"
//                               value={props.values.File}
//                               className={
//                                 "form-control-alternative form-control-edit"
//                               }
//                               error={
//                                 props.touched.File && Boolean(props.errors.File)
//                               }
//                               helperText={
//                                 props.touched.File && props.errors.File
//                               }
//                               disabled={isEdit}
//                             />
//                           ) : (
//                             <TextField
//                               fullWidth
//                               id="File"
//                               name="File"
//                               type="file"
//                               variant="outlined"
//                               label="Resource File to Attach"
//                               multiple={false}
//                               onChange={(e) => {
//                                 handleFileChange(e);
//                               }}
//                               InputLabelProps={{ shrink: true }}
//                               className={
//                                 "form-control-alternative form-control-edit"
//                               }
//                               error={
//                                 props.touched.File && Boolean(props.errors.File)
//                               }
//                               helperText={
//                                 props.touched.File && props.errors.File
//                               }
//                             />
//                           )}
//                           <small style={{ paddingTop: -10 }}>
//                             ** File name should be unique
//                           </small>
//                         </Col>
//                       </Row>
//                     </Form>
//                   )}
//                 </Formik>
//               </CardBody>
//               <CardFooter className="py-4">
//                 <Row>
//                   <Col lg="6" className="text-left">
//                     <Button
//                       color="primary"
//                       onClick={() => {
//                         history.goBack();
//                       }}
//                     >
//                       BACK
//                     </Button>
//                     <Button
//                       color="primary"
//                       onClick={() => {
//                         if (formRef.current) {
//                           formRef.current.handleSubmit();
//                         }
//                       }}
//                     >
//                       SAVE
//                     </Button>
//                   </Col>
//                 </Row>
//               </CardFooter>
//             </Card>
//           </div>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default FoodTableCreate;
