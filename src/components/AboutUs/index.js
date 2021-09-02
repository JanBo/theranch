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
      <AboutUsContent>We are located in the south eastern part of Colorado, about 30 miles south of Lamar. Our ranch is about 10,000 acres and have been owned and operated by three generations of Ranchers. 
        <br/><br/>
        Our eldest Daughter whom you see featured in the gallery was a rodeo Queen. 
        <br/><br/>
        We pride ourselves on delivering the leanest and best beef from our ranch to your table. 
        <br/><br/>
        Our oldest son competes in roping and made it to the world championship in Las Vegas last year.
        <br/><br/>
        On the ranch there is a dog named Rooster (also pictured) and we have about 10 quarter horses who like out cattle roams around freely on our Ranch.
      </AboutUsContent>
 
      {/* <AboutUsContent>
        <AboutUsItems>
          <AboutUsHeading>Beef</AboutUsHeading>
          <AboutUsP>Colorado Ranch Raised</AboutUsP>
          <AboutUsButton onClick={goBack}>Place Order</AboutUsButton>
        </AboutUsItems>
      </AboutUsContent> */}
    </AboutUsContainer>
  );
};

export default AboutUs;
