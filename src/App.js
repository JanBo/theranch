import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';
//import RecipeReviewCard from './components/RecipeReviewCard';
import { DataStore } from '@aws-amplify/datastore';
import { Custome } from './models';


function App() {

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

    <div className='App'>
     <button onClick={createCustomer}>Create Customer</button> 
     
     {custs.map(cust => <div key={cust.id}>
     <h1>{cust.name}</h1>
     <p>{cust.address}</p>
    </div>
    )}
    </div>
/*
    <Container maxWidth="sm" className="App">
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
      </Paper>
    </Container>
    */
  );
}
export default App;