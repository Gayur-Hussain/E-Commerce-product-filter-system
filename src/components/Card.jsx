import React from "react";
import { IoBag } from "react-icons/io5";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card m-5 bg-slate-50 text-black p-5 cursor-pointer">
      <img className="card-img w-52 mb-4" src={img} alt="shoe" />
      <div className="card-details">
        <h3 className="card-title mb-4">{title}</h3>
        <section className="card-reviews flex items-center gap-1">
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews flex text-[0.9rem ml-3]">4</span>
        </section>
        <section className="card-price flex items-center gap-4 mt-3">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <div className="bag">
            <IoBag />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
