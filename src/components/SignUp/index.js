import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Amplify, { API } from "aws-amplify";
//import InputMask from "react-input-mask";

import {
  Button,
  TextField,
  // Select,
  // InputLabel,
  // MenuItem,
} from "@material-ui/core";
import { DataStore } from "@aws-amplify/datastore";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  SignUpContainer,
  SignUpContent,
  // SignUpItems,
  // SignUpH1,
  // SignUpP,
  // SignUpBtn,
  StyleWrap,
} from "./SignUpElements";
import { makeStyles } from "@material-ui/core/styles";
import ImgBg from "../../images/cattle6.jpg";
import Typography from "@material-ui/core/Typography";
import { string } from "yup";
import { Today } from "@mui/icons-material";

type FormData = {
  name: string,
  address: string,
  phone: string,
  email: string,
};

const useStyles = makeStyles({
  container: {
    background: "#383434",
    url: "$ImgBg",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  h1: {
    color: "#ffffff",
    fontWeight: 600,
    padding: "10px",
    textAlign: "center",
  },
  choice: {
    fontWeight: 600,
    padding: "10px",
    textAlign: "center",
  },
  form: {
    filter: "drop-shadow(0.45rem 0.45rem 0.4rem rgba(0, 0, 0, 0.4))",
    background: "white",
    border: "1px solid #dedede",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: "0 auto",
    maxWidth: "500px",
    padding: "30px 50px",
    marginTop: 20,
  },
  error: {
    color: "red",
    fontFamily: "sans-serif",
    fontSize: "12px",
    height: "30px",
  },
  submitButton: {
    filter: "drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3))",
    background: "#e31837",
    color: "#fff",
    marginTop: 20,
    // backgroundColor: "#6976d9",
    // color: "white",
    fontFamily: "sans-serif",
    fontSize: "14px",
  },
  registered: {
    marginTop: 40,
    color: "white",
  },
});

const SignUp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    API.get("ordersapi", "/orders/orderid").then((order) => console.log(order));
  }, []);

  type FormValues = {
    orderid: string,
    product: string,
    price: string,
    name: string,
    address: string,
    phone: string,
    email: string,
    comment: string,
  };

  const onError = () => {
    console.log("wrong");
  };

  const onSubmit = (data: FormValues) => {
    const current = new Date();
    const dato =
      current.getFullYear() + "-" + current.getMonth() + "-" + current.getDay();
    let orderidstr = data.name + dato;
    console.log(orderidstr);

    const values = API.post("ordersapi", "/orders", {
      body: {
        orderid: data.name + dato,
        product: props.location.state?.amount,
        price: props.location.state?.pris,
        name: data.name,
        address: data.address,
        phone: data.phone,
        email: data.email,
        comment: "my nice comment",
      },
    });
    setSaved(true);
    console.log("Saved updated customer record to dynamodb");
  };

  function Form() {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    return (
      <>
        <Typography variant="h5" className={classes.h1}>
          New Customer
        </Typography>
        {props.location.state?.amount && (
          <>
            <Typography
              variant="h5"
              className={classes.choice}
              style={{ color: "#e31837" }}
            >
              Currently Selected: {props.location.state?.amount}
            </Typography>
          </>
        )}
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <label>Name</label>
          <TextField
            onChange={() => setSaved(false)}
            {...register("name", { required: true, maxLength: 40 })}
            placeholder="Full name"
          />
          {errors.name && <div className={classes.error}>Name is required</div>}
          <br />
          <label>Address</label>
          <TextField
            {...register("address", { required: true, maxLength: 50 })}
            placeholder="Street Address"
          />
          {errors.address && errors.address.type === "required" && (
            <span className={classes.error}>Address is required</span>
          )}
          {errors.address && errors.address.type === "maxLength" && (
            <span className={classes.error}>Max length exceeded</span>
          )}
          <br />
          <label>Phone</label>
          {/* <InputMask
            mask="(0)999 999 99 99"
            value={phone}
            disabled={false}
            maskChar=" "
          >
            {() => <TextField />}
          </InputMask> */}
          <TextField
            type="tel"
            {...register("phone", { required: true })}
            placeholder="Telephone number"
          />
          {errors.phone && (
            <div className={classes.error}>Phone is required</div>
          )}
          <br />
          <label>Email</label>
          <TextField
            type="email"
            {...register("email", { required: true })}
            placeholder="Email address"
          />
          {errors.email && (
            <span className={classes.error}>Email is required</span>
          )}
          {props.location.state?.pris && (
            <Typography style={{ marginTop: 20 }}>
              Price: {props.location.state?.pris}
            </Typography>
          )}
          <Button className={classes.submitButton} type="submit">
            Submit
          </Button>
        </form>
        {saved && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className={classes.registered}>
              Thank you for registering, we will contact you within 24 hours!
            </h1>
          </div>
        )}
      </>
    );
  }

  return (
    <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      {/*<SignUpContent>*/}
      {/*  <StyleWrap>*/}
      <Form />
      {/*</StyleWrap>*/}
      {/*</SignUpContent>*/}
    </div>
  );
};

export default SignUp;
