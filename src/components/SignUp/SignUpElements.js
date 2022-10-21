import styled from "styled-components";
import ImgBg from "../../images/cattle6.jpg";

export const StyleWrap = styled.div`
 background: lavender;
 padding: 40px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: Roboto Condensed,sans-serif;
   font-size: 20px;
   font-weight: 600;
   // line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 .error {
   color: red;
   font-family: Roboto Condensed,sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: Roboto Condensed,sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;

export const SignUpContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

// font-family: sans-serif;

export const SignUpContent = styled.div`
  // height: calc(100vh - 80px);
  // max-height: 100%;
  // padding: 0rem calc((100vw - 1300px) / 2);
`;

export const SignUpItems = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  // height: 100vh;
  // max-height: 100%;
  // padding: 0 2rem;
  // width: 650px;
  // color: #fff;
  // text-transform: uppercase;
  // // line-height: 1;
  // font-weight: bold;
  //
  // @media screen and (max-width: 650px) {
  //   width: 100%;
  // }
`;

export const SignUpH1 = styled.h1`
  // font-size: clamp(2.5rem, 10vw, 5rem);
  // margin-bottom: 1rem;
  // box-shadow: 3px 5px #e9ba23;
  // letter-spacing: 3px;
`;

export const SignUpP = styled.p`
  // font-size: clamp(2rem, 2.5vw, 3rem);
  // margin-bottom: 2rem;
`;

export const SignUpBtn = styled.button`
  // font-size: 1.4rem;
  // padding: 1rem 4rem;
  // border: none;
  // background: #e31837;
  // color: #fff;
  // transition: 0.2s ease-out;
  //
  // &:hover {
  //   background: #ffc500;
  //   transition: 0.2s ease-out;
  //   cursor: pointer;
  //   color: #000;
  // }
`;
