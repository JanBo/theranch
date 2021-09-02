import styled from 'styled-components';

export const AboutUsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const AboutUsCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const AboutUsImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const AboutUsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const AboutUsTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const AboutUsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const AboutUsDesc = styled.p`
  margin-bottom: 1rem;
`;

export const AboutUsPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const AboutUsButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;


export const AboutUsP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;


export const AboutUsContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const AboutUsItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

// export const HeroBtn = styled.button`
//   font-size: 1.4rem;
//   padding: 1rem 4rem;
//   border: none;
//   background: #e31837;
//   color: #fff;
//   transition: 0.2s ease-out;

//   &:hover {
//     background: #ffc500;
//     transition: 0.2s ease-out;
//     cursor: pointer;
//     color: #000;
//   }
// `;