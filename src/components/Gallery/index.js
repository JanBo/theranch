import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryHeading,
} from "./GalleryElements";

const Img1 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_1740.jpeg"; // stay
const Img2 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_1742.jpeg"; // stay
const Img3 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_9231.jpeg"; // changed
const Img4 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_1766.jpeg"; // stay
const Img5 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_9236.jpeg"; // changed
const Img6 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_9242.jpeg"; // changed
const Img7 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_9244.jpeg"; // changed
const Img8 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_9267.jpeg"; // changed
const Img9 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_3433.jpeg"; // stay
const Img10 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_9277.jpeg"; // changed
const Img11 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_2539.jpeg"; // stay
const Img12 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_3439.jpeg"; // stay
const Img13 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_2000.png"; // changed
const Img14 =
  "https://bamberranch2021.s3.us-east-2.amazonaws.com/images/IMG_4884.jpeg"; // stay

const Gallery = ({ heading, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GalleryContainer>
      <GalleryHeading>Pictures from Bamber Ranch</GalleryHeading>
      <GalleryWrapper>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        {/* {data.map((Gallery, index) => { */}
        {/* return ( */}
        {/* <GalleryTitle>Hallo</GalleryTitle> */}
        <img className="GalleryImg" src={Img1} alt="The Ranch 1"></img>
        <img className="GalleryImg" src={Img2} alt="The Ranch 2"></img>
        <img className="GalleryImg" src={Img3} alt="The Ranch 3"></img>
        <img className="GalleryImg" src={Img4} alt="The Ranch 4"></img>
        <img className="GalleryImg" src={Img5} alt="The Ranch 5"></img>
        <img className="GalleryImg" src={Img6} alt="The Ranch 6"></img>
        <img className="GalleryImg" src={Img7} alt="The Ranch 7"></img>
        <img className="GalleryImg" src={Img8} alt="The Ranch 8"></img>
        <img className="GalleryImg" src={Img9} alt="The Ranch 9"></img>
        <img className="GalleryImg" src={Img10} alt="The Ranch 10"></img>
        <img className="GalleryImg" src={Img11} alt="The Ranch 11"></img>
        <img className="GalleryImg" src={Img12} alt="The Ranch 12"></img>
        <img className="GalleryImg" src={Img13} alt="The Ranch 13"></img>
        <img className="GalleryImg" src={Img14} alt="The Ranch 14"></img>
        {/*<img className="GalleryImg" src={Img15} alt="The Ranch 15"></img>*/}
        {/* <GalleryCard key={index}>
              <GalleryImg src={Gallery.img} alt={Gallery.alt} />
              <GalleryInfo>
                <GalleryTitle>{Gallery.name}</GalleryTitle>
                <GalleryDesc>{Gallery.desc}</GalleryDesc> */}
        {/* <GalleryPrice>{Gallery.price}</GalleryPrice> */}
        {/* <GalleryButton>{Gallery.button}</GalleryButton> */}
        {/* </GalleryInfo>
            </GalleryCard> */}
        ); })}
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
