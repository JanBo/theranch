import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
   GalleryContainer,
   GalleryWrapper,
   GalleryHeading,
   GalleryTitle
  //  GalleryCard,
  //  GalleryImg,
  //  GalleryInfo,
  //  GalleryDesc,
  //  GalleryPrice,
  //  GalleryButton
} from './GalleryElements';



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
            {/* <GalleryCard key={index}>
              <GalleryImg src={Gallery.img} alt={Gallery.alt} />
              <GalleryInfo>
                <GalleryTitle>{Gallery.name}</GalleryTitle>
                <GalleryDesc>{Gallery.desc}</GalleryDesc> */}
                {/* <GalleryPrice>{Gallery.price}</GalleryPrice> */}
                {/* <GalleryButton>{Gallery.button}</GalleryButton> */}
              {/* </GalleryInfo>
            </GalleryCard> */}
          );
        })}
    </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
