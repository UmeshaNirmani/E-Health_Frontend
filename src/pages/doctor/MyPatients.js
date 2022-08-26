// import React from "react";

// const MyPatients = (props) => {
//   const mainContent = React.useRef(null);
//   return (
//     <>
//       <div className="main-content" ref={mainContent}></div>
//     </>
//   );
// };

// export default MyPatients;

import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { TextInput } from "../../components/Chat/TextField";
import { MessageLeft, MessageRight } from "../../components/Chat/Message";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "80vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    messagesBody: {
      width: "95%",
      margin: 10,
      padding: 30,
      height: "calc( 100% - 80px )",
      backgroundColor: "#F8F9FE",
    },
  })
);

const MyPatients = (props) => {
  const mainContent = React.useRef(null);
  const classes = useStyles();
  return (
    <>
      <div className="main-content" ref={mainContent}>
        <div className={classes.container}>
          <Container id="style-1" className={classes.messagesBody}>
            <MessageLeft
              message="messageR lorem ipsum"
              timestamp="MM/DD 00:00"
              displayName="piyal"
            />
            <MessageRight
              message="messageR hello"
              timestamp="MM/DD 00:00"
              displayName="sunil"
            />
            {/* <MessageLeft
              message="messageR lorem ipsum"
              timestamp="MM/DD 00:00"
              displayName="piyal"
            />
            <MessageLeft
              message="messageR lorem ipsum"
              timestamp="MM/DD 00:00"
              displayName="piyal"
            />
            <MessageRight
              message="messageR lorem ipsum"
              timestamp="MM/DD 00:00"
              displayName="sunil"
            />
            <MessageRight
              message="messageR hello"
              timestamp="MM/DD 00:00"
              displayName="sunil"
            /> */}
          </Container>
          <TextInput />
        </div>
      </div>
    </>
  );
};

export default MyPatients;
