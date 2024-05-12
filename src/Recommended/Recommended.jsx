import React from "react";
import "./Recommended.css";
import Buttons from "../components/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="flex ml-[21rem] mb-5 mt-5 text-[20px] font-serif">
          Recommendations
        </h2>
        <div className="recommended-btns ml-[21rem]">
          <Buttons
            className="btns hover:bg-slate-700"
            value=""
            title="All Products"
            onClickHandler={handleClick}
          />

          <Buttons
            className="btns hover:bg-slate-700"
            value="Nike"
            title="Nike"
            onClickHandler={handleClick}
          />
          <Buttons
            className="btns hover:bg-slate-700"
            value="Adidas"
            title="Adidas"
            onClickHandler={handleClick}
          />
          <Buttons
            className="btns hover:bg-slate-700"
            value="Puma"
            title="Puma"
            onClickHandler={handleClick}
          />
          <Buttons
            className="btns hover:bg-slate-700"
            value="Vans"
            title="Vans"
            onClickHandler={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
