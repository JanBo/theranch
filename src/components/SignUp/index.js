import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// import './App.css';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Button, Paper } from '@material-ui/core';
// //import RecipeReviewCard from './components/RecipeReviewCard';
import { DataStore } from '@aws-amplify/datastore';
import { Custome } from './../../models';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
   SignUpContainer,
   SignUpContent,
   SignUpItems,
   SignUpH1,
   SignUpP,
   SignUpBtn
 } from './SignUpElements';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function placeOrder() {
    alert('Hello!');
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);


  const [custs, setCusts] = useState([])


  useEffect(() => {
    const func = async () => {
      const models = await DataStore.query(Custome)
      setCusts(models)
    }
  
    func()
  
  }, [])
  
    const createCustomer = async () => {
     const cust = {
      name: window.prompt('cust name'),
      address: window.prompt('address'),
      phone: window.prompt('phone'),
      email: window.prompt('email address')
     }
  
    const newCust = await DataStore.save(
      new Custome(cust)
    )
  
    console.log(newCust)
    }


  return (
    <SignUpContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
       <SignUpContent>
        <SignUpItems>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name: </label> <input {...register("firstName", { required: true, maxLength: 20 })} /><br/>
          <label>Last Name: </label><input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br/>
          <label>Address: </label><input type="string" {...register("address", { required: true, maxLength: 20 })}  /> <br/>

      </form>
          <SignUpBtn onClick={placeOrder}>Sign up</SignUpBtn>
        </SignUpItems>
        
      </SignUpContent> 
     
      <div className='App'>
     <button onClick={createCustomer}>Create Customer</button> 
     
     {custs.map(cust => <div key={cust.id}>
     <h1>{cust.name}</h1>
     <p>{cust.address}</p>
    </div>
    )}
    </div>

    </SignUpContainer>
  );
};

export default SignUp;
