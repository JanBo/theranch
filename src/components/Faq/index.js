import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: "5rem calc((100vw - 1300px) / 2)",
    background: "#383434",
    color: "#fff",
  },
  content: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    height: "calc(100vh - 80px)",
    maxHeight: "100%",
    padding: "0rem calc((100vw - 1300px) / 2)",
  },
  a: {
    color: "#FFFF00",
  },
});

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const p1 = "How much freezer space do you need:\n ";

  return (
    <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={classes.content}>
        <img
          src={require("./../../images/WhyBamberRanch.png")}
          width={1000}
          height={500}
          alt="Why Bamber Ranch cattle"
        />
        <Typography variant="h5">{p1}</Typography>
        <List>
          <ListItem>
            <ListItemText primary="For a 1/4 beef your need about 4 square feet" />
          </ListItem>
          <ListItem>
            <ListItemText primary="For a 1/2 beef your need about 8 square feet." />
          </ListItem>
          <ListItem>
            <ListItemText primary="For a 1 beef your need about 16 square feet." />
          </ListItem>
        </List>
        <br />
      </div>
    </div>
  );
};

export default Faq;
