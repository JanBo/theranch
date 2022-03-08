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
    height: "calc(100vh - 80px)",
    maxHeight: "100%",
    padding: "0rem calc((100vw - 1300px) / 2)",
  },
  a: {
    color: "#FFFF00",
  },
});

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const s1 = "jaclyn@bamberranch.com";

  const p1 =
    "Welcome to Bamber Ranch! We are so pleased to share with you a treasure\n" +
    "        our family has enjoyed for decades. Bamber Ranch is a labor of love from\n" +
    "        4 generations of Colorado cattlemen. Robert D. Bamber (Bob) grew up on\n" +
    "        his father and mother's (Vitale and Nellie) ranch outside of Pritchett\n" +
    "        CO. Bob loved helping his parents and working with his brothers and\n" +
    "        sister. He often took solo trips on horseback and train to transport\n" +
    "        cattle to sale. Bob was drafted into World War II and went to serve his country. Before\n" +
    "        leaving he married Juanita Mae Bickford who grew up on a neighboring\n" +
    "        homestead. When Bob returned he and Juanita began buying their own land\n" +
    "        and cattle to put together Bamber Ranch. Bob and Juanita enjoyed many\n" +
    "        happy years watching their family which included 3 children, 2\n" +
    "        daughters, Shirley and Tammy and a son Jack, and ranch grow. Upon Bob’s\n" +
    "        death his only son Jack took over the ranch along with his wife Sandee\n" +
    "        and 4 children Tonna, Jaclyn, Bobby and Shannon. Jack, a former rodeo\n" +
    "        cowboy, race horse owner and true American cattleman continues to care\n" +
    "        for and grow his herd today.";
  const p2 =
    "Jack cares for his herd with great compassion and pride. A ranch of\n" +
    "        10,000 acres and 500 cattle takes a cowboy with a big heart. Calving\n" +
    "        season on the Bamber Ranch comes in the spring and as you know\n" +
    "        springtime in Colorado can often bring snow and cold temperatures. It\n" +
    "        was not an uncommon occurrence in the Bamber home for the children to\n" +
    "        awake a spring morning to find a brand new baby calf (or two!) in their\n" +
    "        kitchen, too young to be able withstand the cold temperatures and\n" +
    "        blowing winds. Warmed with towels and often the girls’ hair dryers the\n" +
    "        baby calves would be tenderly (and excitedly) nursed back to health. The\n" +
    "        new calf, often turned pet, would be bottle-fed and when healthy enough\n" +
    "        returned to the pasture. Jack with his soft heart keeping the animal on\n" +
    "        the ranch for years to come as they often were named and would still\n" +
    "        respond to the family who cared for them.";
  const p3 =
    "On the ranch today, there is a dog named Rooster and we have about 10\n" +
    "        quarter horses who, like our cattle, roam around freely on our Ranch.\n" +
    "        Bamber Ranch is not simply about beef production, Bamber Ranch is a\n" +
    "        labor of love. Family owned and operated. Cattle cared for and driven by\n" +
    "        Jack, his children and now grandchildren. We are so excited to share our\n" +
    "        Colorado ranch raised beef with you!";
  return (
    <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={classes.content}>
        <Typography variant="body1">
          {p1}
          <br />
          <br />
          <br />
          {p2}
          <br />
          <br />
          <br />
          {p3}
          <br />
          <br />
        </Typography>
        <a href={`mailto:${s1}?subject=Website email`}>
          For questions for Bamber Ranch Customer Service
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
