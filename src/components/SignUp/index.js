import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import InputMask from "react-input-mask";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// import './App.css';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Button, Paper } from '@material-ui/core';
// //import RecipeReviewCard from './components/RecipeReviewCard';
import {
  Button,
  TextField,
  // Select,
  // InputLabel,
  // MenuItem,
} from "@material-ui/core";
import { DataStore } from "@aws-amplify/datastore";
import { Custome } from "./../../models";
// import { RanchPrice } "./../../models";

//import { useHistory } from "react-router-dom";

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
import {makeStyles} from "@material-ui/core/styles";
import ImgBg from "../../images/cattle6.jpg";
import Typography from "@material-ui/core/Typography";

// type FormData = {
//   name: string,
//   address: string,
//   phone: string,
//   email: string,
// };

const useStyles = makeStyles({
  container: {
    background: "#383434",
    url: "(${ImgBg})",
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
    color: "#e31837",
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
    // backgroundColor: "#6976d9",
    // color: "white",
    fontFamily: "sans-serif",
    fontSize: "14px",
  },
  registered: {
    marginTop: 40,
    color: "white",
  }

});

const SignUp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  //const [custs, setCusts] = useState([]);
  const [saved, setSaved] = useState(false);
  // const [beef, setBeef] = useState("");

  // const handleChange = (event) => {
  //   setBeef(event.target.value);
  // };
  // const [prices, setPrices] = useState([]);

  // useEffect(() => {
  //   const func = async () => {
  //     const models = await DataStore.query(Custome);
  //     setCusts(models);

  //     // const pris = await DataStore.query(ranchprice);
  //   };

  //   func();
  // }, []);

  const createCustomer = async (cust) => {
    const newCust = await DataStore.save(new Custome(cust));
    setSaved(true);
    console.log(newCust);
  };



  const selectionChoice = () => {
    let index = props.location.state?.selection;
    let choice = ""
    if (index == 0) {
      choice = "1/4 Beef"
    } else if (index == 1) {
      choice = "1/2 Beef"
    } else if (index == 2) {
      choice = "1 Beef"
    }
    return choice;
  }
  let choice = selectionChoice();
  function Form() {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    return (
      // {saved && (
      <>
        <Typography variant="h5" className={classes.h1}>New Customer</Typography>
        {choice && <Typography variant="h5" className={classes.choice}>Currently Selected: {choice}</Typography>}
        <form className={classes.form} onSubmit={handleSubmit((data) => createCustomer(data))}>
          {/* <form onSubmit={handleSubmit((data) => createCustomer(data))}> */}
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
          {errors.phone && <div className={classes.error}>Phone is required</div>}
          <br />
          <label>Email</label>
          <TextField
            type="email"
            {...register("email", { required: true })}
            placeholder="Email address"
          />
          {errors.email && <span className={classes.error}>Email is required</span>}
          <br />
          {/* <InputLabel id="demo-simple-select-label">Beef</InputLabel> */}
          {/* <label>We are interested in:</label>
          <Select
            id="demo-simple-select"
            value={beef}
            label="beef"
            onChange={handleChange}
          >
            <MenuItem value={1}>Quarter beef</MenuItem>
            <MenuItem value={2}>Half beef</MenuItem>
            <MenuItem value={4}>Whole beef</MenuItem>
          </Select> */}
          <br />
          <Button className={classes.submitButton} type="submit" >
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
