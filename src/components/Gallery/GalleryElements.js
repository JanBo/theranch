import styled from "styled-components";

export const GalleryContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const GalleryCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const GalleryImg = styled.img`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-evenly;
`;

export const GalleryHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const GalleryTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const GalleryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const GalleryDesc = styled.p`
  margin-bottom: 1rem;
`;

export const GalleryPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const GalleryButton = styled.button`
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

// export const ImageContainer = .container {
//      display: flex;
//      flex-wrap: wrap;
//      padding: 5px;
//      justify-content: space-evenly;
// }

// export const ImageItem = .item {
//      margin: 5px;
// }
