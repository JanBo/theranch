import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

  const preso =
    "https://docs.google.com/presentation/d/e/2PACX-1vTYa6R1S2SST8ONxr8PaY6qEANXVUaglv5cOURH0WBij6E8a_kvGU6Z8WLH1gvOVdvfk3hUB7IQwQTc/pub?start=true&loop=true&delayms=10000&slide=id.g128367d75c4_0_15";

  const p1a = [
    "Bamber Ranch is a local Colorado ranch located in Lamar.",
    <br />,
    "Bamber Ranch cattle are Black Angus cows bred with Lim-Flex bulls. ",
    <br />,
    "Black Angus cattle generally taste better and are more tender than other beef. ",
    <br />,
    "This is attributed to the meat’s marbling-a trait that Black Angus is known for. ",
    <br />,
    "The marbling leads to consistent flavor and juiciness. ",
    <br />,
    "Lim-Flex is a registered Limousin/Angus cross combining the best of two breeds. ",
    <br />,
    "This breed of bulls maintain the marbling characteristics of the Angus while maximizing the yield, growth and muscle",
    <br />,
    "that is unique to the Limousin breed.",
    <br />,
    "Bamber Ranch beef is ranch raised and grass fed with a corn finish to help maximize marbling ",
    <br />,
    "and bring you quality, tender and juicy meat.",
    <br />,
    "There are no growth hormones used on Bamber Ranch ",
    <br />,
    "Our beef is processed in a USDA approved processing plant and transported directly to your door.",
    <br />,
  ];

  const p2a = [
    "How much freezer space do you need?",
    <br />,
    "* For a 1/4 beef your need about 4 square feet. ",
    <br />,
    "* For a 1/2 beef your need about 8 square feet.",
    <br />,
    "* For a 1 beef your need about 16 square feet.",
    <br />,
  ];

  const p3a = [
    "Superior product at a great price",
    <br />,
    "* ~$8/lbs for ground meat and premium cuts",
    <br />,
    "* Cut out the middle man",
    <br />,
    "* Store bought grass fed is about $10-12 for ground meat and up to $40 for premium cuts",
    <br />,
  ];

  const p4a = [
    "Why Bamber Ranch Beef?",
    <br />,
    "* Superior Product @ Better Price",
    <br />,
    "* Colorado Ranch Raised = humanely raised",
    <br />,
    "* No growth hormones!",
    <br />,
    "* Grass Fed - corn finished for best marbling and taste.",
    <br />,
    "* VIP service - we deliver to your door!",
  ];

  return (
    <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={classes.content}>
        <Typography variant="body1">
          {p1a}
          <br />
          <br />
          <br />
          {p2a}
          <br />
          <br />
          <br />
          {p3a}
          <br />
          <br />
          {p4a}
          <br />
          <br />
        </Typography>
        <a href={preso}>To see a presentation from Bamber ranch!</a>
      </div>
    </div>
  );
};

export default Faq;
