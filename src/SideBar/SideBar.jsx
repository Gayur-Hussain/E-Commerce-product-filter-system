import React from "react";
import Price from "./Price/Price";
import Colors from "./Colors/Color";
import Category from "./Category/Category";

const SideBar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar w-[15%] fixed h-[100%] border-r-2  z-3 flex flex-col items-center ">
        <div className="log-container mb-16">
          <h1 className="mt-5">🛒</h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default SideBar;
