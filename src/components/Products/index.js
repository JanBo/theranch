import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { productData } from "./data";
import { DataStore } from "@aws-amplify/datastore";
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
  const history = useHistory();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const routeChange = () => {
    let path = `/signup`;
    history.push(path);
  };

  useEffect(() => {
    //API.get("meatpriceapi", "/meatprice/type").then((prices) =>
    API.get("meatpriceapi", "/meatprice/type").then((prices) =>
      console.log(prices)
    );
    //const models = await DataStore.query(Custome);
    //setCusts(models);

    //const pris = await DataStore.query(ranchprice);
    //console.log("Fetching Prices");
  }, []); // only run this function on the first mount

  return (
    <ProductsContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ProductsHeading>Choose your favorite</ProductsHeading>
      <ProductWrapper>
        {productData.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
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
