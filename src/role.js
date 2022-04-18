import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "actions/user";

const Roles = () => {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.authData);
  useEffect(() => {
    dispatch(signIn());
  });

  let uRole = "";

  if (authData.Role === "Patient") {
    uRole = "Patient";
  } else if (authData.Role === "Doctor") {
    uRole = "Doctor";
  } else {
    uRole = "System Administrator";
  }
  console.log("uRole", uRole);
  return uRole;
};

export default Roles;
