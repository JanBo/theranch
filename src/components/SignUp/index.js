import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

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
     
    </SignUpContainer>
  );
};

export default SignUp;
