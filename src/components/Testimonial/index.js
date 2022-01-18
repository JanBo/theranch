import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
//import { shadows } from "@material-ui/system";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    borderRadius: '10px',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontWeight: 600
  },
  pos: {
    marginBottom: 12,
  },
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
  }
});

const Testimonial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function OutlinedCard({ title, kropp, signatur }) {

    //const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.root} raised="true" variant="outlined">
        <CardContent>
          <Typography className={classes.title} variant="h6">{title}</Typography>
            <br />

          <Typography variant="body1">{kropp}</Typography>
            <br />
            <br />
          <Typography variant="body1">{signatur}</Typography>
            <br />

        </CardContent>
      </Card>
    );
  }

  return (
    <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={classes.content}>
        <OutlinedCard
          title="We have loved the steak we purchased from Bamber Ranch"
          kropp="
            This is our third time buying from them and we will definitely be
            back for more. The ground meat is ideal for making tacos and a lot
            less greasy than what we buy from the store. As an added bonus you
            get a lot of premier cuts as well all for less than you pay to
            purchase ground meat.
           "
          signatur="
            Sincerely, Kris"
        />
        <br />
        <br />
        <OutlinedCard
          title=" As a family with 2 boys we eat a lot of both steaks and ground
              meat."
          kropp="Buying from the Ranch has helped us cut down costs while allowing
            our family to eat a superior product. We have bought from them twice
            and have just ordered another 1/2 steer."
          signatur="Best, Sandi"
        />
        <br />
        <br />

        <OutlinedCard
          title="Simply fantastic"
          kropp="The steaks taste sooo good and the ground meat is lean. 
          As a family we have truly enjoyed the superior quality and 
          convenience as compared with store bought meat. 
          My biggest request would be that you also sold other types of meat."
          signatur="Samantha"
        />
        <br />
        <br />
        {/* <Card raised="true" variant="outlined">
          Test
        </Card> */}
      </div>
    </div>
  );
};

export default Testimonial;
