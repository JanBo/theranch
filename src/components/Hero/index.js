import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
// import Products from '../Products';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const routeChange = () => { 
    let path = `/Products`; 
    history.push(path);
  }

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Beef</HeroH1>
          <HeroP>Colorado Ranch Raised</HeroP>
          <HeroBtn onClick={routeChange}>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
