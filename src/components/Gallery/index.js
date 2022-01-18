import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import ImageSlider from "./ImageSlider";
import {Images} from "./Images";

const Gallery = ({ heading, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='gallery-container'>
         <Navbar toggle={toggle} />
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <ImageSlider slides={Images} />
    </div>
  );
};

export default Gallery;
