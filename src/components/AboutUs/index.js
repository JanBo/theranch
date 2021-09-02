import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  AboutUsContainer,
  AboutUsContent,
  AboutUsItems,
  AboutUsP,
  AboutUsButton,
  AboutUsHeading
} from './AboutUsElements';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function goBack() {
    alert('Hello!');
  }

  return (
    <AboutUsContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutUsContent>
        <AboutUsItems>
          <AboutUsHeading>Beef</AboutUsHeading>
          <AboutUsP>Colorado Ranch Raised</AboutUsP>
          <AboutUsButton onClick={goBack}>Place Order</AboutUsButton>
        </AboutUsItems>
      </AboutUsContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
