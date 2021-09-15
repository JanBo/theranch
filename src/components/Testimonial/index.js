import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  TestimonialContainer,
  TestimonialContent,
  TestimonialItems,
  TestimonialP,
  TestimonialButton,
  TestimonialHeading,
} from "./TestimonialElements";

const Testimonial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  function goBack() {
    alert("Hello!");
  }

  return (
    <TestimonialContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <TestimonialContent>
        We have loved the steak we purchased from Bamber Ranch
        <br />
        This is our third time buying from them and we will definitely be back
        for more. The ground meat is ideal for making tacos and a lot less
        greasy than what we buy from the store.
        <br />
        Sincerely, Kris
        <br />
        <br />
        <br />
        As a family with 4 boys we eat a lot of both steaks and ground meat.
        <br />
        <br />
        Buying from Bamber Ranch has helped us cut down costs while allowing our
        family to eat a superior product. We have bought from them twice and
        have just ordered another 1/2 steer.
        <br />
        Mrs Sanders
      </TestimonialContent>
    </TestimonialContainer>
  );
};

export default Testimonial;
