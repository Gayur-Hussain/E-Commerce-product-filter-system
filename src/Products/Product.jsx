import React from "react";
import "./Product.css";

const Product = ({ result }) => {
  return (
    <>
      <section className="card-container flex flex-wrap ml-80 mt-8 z-[-2]">
        {result}
      </section>
    </>
  );
};

export default Product;
