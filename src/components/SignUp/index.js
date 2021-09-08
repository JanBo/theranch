import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// import './App.css';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Button, Paper } from '@material-ui/core';
// //import RecipeReviewCard from './components/RecipeReviewCard';
import { Button, TextField } from "@material-ui/core";
import { DataStore } from "@aws-amplify/datastore";
import { Custome } from "./../../models";
// import { RanchPrice } "./../../models";

import { useHistory } from "react-router-dom";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  SignUpContainer,
  SignUpContent,
  SignUpItems,
  SignUpH1,
  SignUpP,
  SignUpBtn,
  StyleWrap,
} from "./SignUpElements";

type FormData = {
  name: string,
  address: string,
  phone: string,
  email: string,
};

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [custs, setCusts] = useState([]);
  const [saved, setSaved] = useState(false);
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

  function Form() {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    return (
      // {saved && (
      <>
        <h1>New Customer</h1>
        <form onSubmit={handleSubmit((data) => createCustomer(data))}>
          {/* <form onSubmit={handleSubmit((data) => createCustomer(data))}> */}
          <label>Full name</label>
          <TextField {...register("name", { required: true })} />
          {errors.name && <div>Name is required</div>}
          <label>Address</label>
          <TextField {...register("address", { required: true })} />
          {errors.address && <span>Address is required</span>}
          <label>Phone</label>
          <TextField {...register("phone", { required: true })} />
          {errors.phone && <div>Phone is required</div>}
          <label>Email</label>
          <TextField {...register("email", { required: true })} />
          {errors.email && <span>Email is required</span>}
          <Button type="submit" variant="contained" color="primary">
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
            <h1>
              Thank you for registering, we will contact you within 24 hours!
            </h1>
          </div>
        )}
      </>
    );
  }

  return (
    <SignUpContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SignUpContent>
        <StyleWrap>
          <Form />
        </StyleWrap>
      </SignUpContent>
    </SignUpContainer>
  );
};

export default SignUp;
