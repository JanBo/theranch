import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { productData } from "./data";
//import { DataStore } from "@aws-amplify/datastore";
import { API } from "aws-amplify";

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quarterPrice, setQuarterPrice] = useState(0);
  const [halfPrice, setHalfPrice] = useState(0);
  const [wholePrice, setWholePrice] = useState(0);
  const history = useHistory();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const routeChange = () => {
    let path = `/signup`;
    history.push(path);
  };

  useEffect(() => {
    API.get("meatpriceapi", "/meatprice/type")
      .then((response) => {
        for (const item of response) {
          if (item.type === "QUARTER") setQuarterPrice(item.price);
          if (item.type === "HALF") setHalfPrice(item.price);
          if (item.type === "WHOLE") setWholePrice(item.price);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []); // only run this function on the first mount

  return (
    <ProductsContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProductsHeading>Choose your favorite</ProductsHeading>
      <ProductWrapper>
        {productData && productData.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>
                  {index === 0 && quarterPrice > 0 && `$${quarterPrice}`}
                  {index === 1 && halfPrice > 0 && `$${halfPrice}`}
                  {index === 2 && wholePrice > 0 && `$${wholePrice}`}
                </ProductPrice>
                <ProductButton onClick={routeChange}>
                  {product.button}
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
