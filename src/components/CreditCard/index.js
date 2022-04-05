import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

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

const CreditCard = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // Create payment intent on the server.
    // confirm the payment on the client.
  };

  return (
    <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={classes.content}>
        <Typography variant="body1"></Typography>
        <h1>Card</h1>
        <form id="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="card-element" Card></label>
            <CardElement id="card-element" />
          <button>Pay</button>
        </form>
      </div>
    </div>
  );
};

{
  /* <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={classes.content}>
        <Typography variant="body1"></Typography>
        <h1>Card</h1>

        <form id="payment-form">
          <label htmlFor="card-element" Card></label>
          <CardElement id="card-element" />
          <button>Pay</button>
        </form>
      </div>
    </div> */
}

export default CreditCard;
