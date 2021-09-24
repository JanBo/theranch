import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import SignUp from "./components/SignUp";
import Testimonial from "./components/Testimonial";

import Footer from "./components/Footer";

import "./App.css";
import config from "./aws-exports";
import Amplify from "aws-amplify";

import Honeybadger from "@honeybadger-io/js";
import ErrorBoundary from "@honeybadger-io/react";

Honeybadger.configure({
  apiKey: "hbp_tn8W6NrTHdPqDA3V6IOdKIda7d8oi42ejlK7",
  environment: "production",
});

Amplify.configure(config);

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Hero} />
        {/* <Route path='/product' component={Products}   /> */}
        {/* <Route exact path='/products' component={Products} title={`Choose your favorite`} />  */}
        <Route exact path="/products" component={Products} />
        {/* render={() => <Products title={`Choose your favorite`} />} /> */}
        {/*heading="Choose your favorite" data={productData} */}
        <Route path="/gallery" component={Gallery} />
        <Route path="/testimonial" component={Testimonial} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      {/* <Hero /> */}
      {/* <Products heading='Choose your favorite' />
        <AboutUs heading='About us'/>
        <Gallery heading='Gallery' />  */}
      {/* <Feature /> */}

      <Footer />

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
