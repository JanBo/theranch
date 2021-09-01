import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';


import './App.css';
import { useEffect, useState } from 'react';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { Button, Paper } from '@material-ui/core';
// //import RecipeReviewCard from './components/RecipeReviewCard';
import { DataStore } from '@aws-amplify/datastore';
import { Custome } from './models';


const Img1 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_1740.jpeg';
const Img2 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_1742.jpeg';
const Img3 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_1765.jpeg';
const Img4 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_1766.jpeg';
const Img5 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_2468.jpeg';
const Img6 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_2487.jpeg';
const Img7 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_2498.jpeg';
const Img8 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_2516.jpeg';
const Img9 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_3433.jpeg';
const Img10 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_6282.jpeg';


const Img11 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_2539.jpeg';
const Img12 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_3439.jpeg';
const Img13 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_3451.jpeg';
const Img14 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_3453.jpeg';
const Img15 = 'https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_4884.jpeg';

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
    <Router>
        <GlobalStyle />
        <Hero />
        <Products heading='Choose your favorite' data={productData} />
        {/* <Feature /> */}
        <Footer />

    <div className='App'>
     <button onClick={createCustomer}>Create Customer</button> 
     
     {custs.map(cust => <div key={cust.id}>
     <h1>{cust.name}</h1>
     <p>{cust.address}</p>
    </div>
    )}
    </div>
    
  <div class="container">
      <img class="item" src={Img1} alt="The Ranch 1"></img>
      <img class="item" src={Img2} alt="The Ranch 2"></img>
      <img class="item" src={Img3} alt="The Ranch 3"></img>
      <img class="item" src={Img4} alt="The Ranch 4"></img>
      <img class="item" src={Img5} alt="The Ranch 5"></img>
      <img class="item" src={Img6} alt="The Ranch 6"></img>
      <img class="item" src={Img7} alt="The Ranch 7"></img>
      <img class="item" src={Img8} alt="The Ranch 8"></img>
      <img class="item" src={Img9} alt="The Ranch 9"></img>
      <img class="item" src={Img10} alt="The Ranch 10"></img>
      <img class="item" src={Img11} alt="The Ranch 11"></img>
      <img class="item" src={Img12} alt="The Ranch 12"></img>
      <img class="item" src={Img13} alt="The Ranch 13"></img>
      <img class="item" src={Img14} alt="The Ranch 14"></img>
      <img class="item" src={Img15} alt="The Ranch 15"></img>
      <img class="item" src={Img1} alt="The Ranch 16"></img>
   </div>

   {/* <Container maxWidth="sm" className="App">
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
    </Container>  */}

</Router>

  );
}
export default App;