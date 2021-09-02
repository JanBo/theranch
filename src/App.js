import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { productData } from './components/Products/data';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';

// import Feature from './components/Feature';
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
        <Switch>
          <Route path='/' exact component={Hero} />
          {/* <Route path='/product' component={Products}   /> */}
          {/* <Route exact path='/products' component={Products} title={`Choose your favorite`} />  */}
          <Route exact path='/products' component={Products} />
           {/* render={() => <Products title={`Choose your favorite`} />} /> */}
          {/*heading="Choose your favorite" data={productData} */}
          <Route path='/gallery' component={Gallery} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/signup' component={SignUp} />
        </Switch>
        {/* <Hero /> */}
        {/* <Products heading='Choose your favorite' />
        <AboutUs heading='About us'/>
        <Gallery heading='Gallery' />  */}
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