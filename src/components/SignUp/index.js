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

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function placeOrder() {
    alert("Hello!");
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [custs, setCusts] = useState([]);
  // const [prices, setPrices] = useState([]);

  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Custome);
      setCusts(models);

      // const pris = await DataStore.query(ranchprice);
    };

    func();
  }, []);

  const createCustomer = async (cust) => {
    // const cust2 = {
    //   name: window.prompt("cust name"),
    //   address: window.prompt("address"),
    //   phone: window.prompt("phone"),
    //   email: window.prompt("email address"),
    // };

    /* await DataStore.save(new Custome(cust2));*/

    const newCust = await DataStore.save(new Custome(cust));

    // const cust2 = {
    //   name: "Jonas",
    //   address: "Store",
    //   phone: "720-555-555",
    //   email: "Jonas.store@regjeringen.no",
    // };
    // const newCust = cust;

    // console.log(newCust);
    console.log(newCust);
  };

  function Form() {
    const { register, handleSubmit } = useForm();

    return (
      <>
        <h1>New Customer</h1>
        <form onSubmit={handleSubmit((data) => createCustomer(data))}>
          {/* <form onSubmit={handleSubmit((data) => createCustomer(data))}> */}
          <label>Full name</label>
          <TextField {...register("name", { required: true })} />
          <label>Address</label>
          <TextField {...register("address", { required: true })} />
          <label>Phone</label>
          <TextField {...register("phone", { required: true })} />
          <label>Email</label>
          <TextField {...register("email", { required: true })} />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
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
