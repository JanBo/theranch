import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { productData } from "./data";
import { API } from "aws-amplify";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/Footer";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: "5rem calc((100vw - 1300px) / 2)",
    background: "#383434",
    color: "#fff",
  },
  content: {
    marginTop: 50,
    height: "calc(100vh - 80px)",
    maxHeight: "100%",
    padding: "0rem calc((100vw - 1300px) / 2)",
  },
  heading: {
    fontSize: "clamp(2rem, 2.5vw, 3rem)",
    textAlign: "center",
    marginBottom: "5rem",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
  },
  card: {
    margin: "0 2rem",
    lineHeight: 2,
    width: "300px",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontWeight: 400,
    fontSize: "1.5rem",
  },
  desc: {
    marginBottom: "1rem",
  },
  price: {
    marginBottom: "1rem",
    fontSize: "2rem",
  },
  img: {
    filter: "drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3))",
    height: "300px",
    minWidth: "300px",
    maxWidth: "100%",
    boxShadow: "8px 8px #fdc500",
  },
  button: {
    filter: "drop-shadow(0.2rem 0.2rem 0.3rem rgba(0, 0, 0, 0.3))",
    fontSize: "1rem",
    padding: "1rem 4rem",
    border: "none",
    background: "#e31837",
    color: "#fff",
    transition: "0.2 ease-out",
    "&:hover": {
      background: "#ffc500",
      transition: "0.2s ease-out",
      cursor: "pointer",
      color: "#000",
    },
  },
});

const Products = ({ heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const [quarterPrice, setQuarterPrice] = useState(0);
  const [halfPrice, setHalfPrice] = useState(0);
  const [wholePrice, setWholePrice] = useState(0);
  const history = useHistory();

  const getPrice = (index) => {
    if (index === 0 && quarterPrice > 0) return quarterPrice;
    if (index === 1 && halfPrice > 0) return halfPrice;
    if (index === 2 && wholePrice > 0) return wholePrice;
    else return 0;
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const routeChange = (amount, price) => {
    let path = `/signup`;
    history.push({
      pathname: path,
      state: { amount: amount, pris: price },
    });
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
    <div className={classes.container}>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={classes.heading}>Choose your favorite</div>
      <div className={classes.wrapper}>
        {productData &&
          productData.map((product, index) => {
            return (
              <div className={classes.card} key={index}>
                <img
                  className={classes.img}
                  src={product.img}
                  alt={product.alt}
                />
                <div className={classes.productInfo}>
                  <div className={classes.title}>{product.name}</div>
                  <div className={classes.desc}>{product.desc}</div>
                  <div className={classes.price}>${getPrice(index)} + tax</div>
                  <div
                    className={classes.button}
                    onClick={() => routeChange(product.name, getPrice(index))}
                  >
                    {product.button}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
