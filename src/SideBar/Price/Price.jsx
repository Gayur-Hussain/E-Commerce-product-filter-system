import React from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title mt-3 text-[1.6rem] mr-10">Price</h2>

      <div className="flex flex-col gap-1">
        <label className="sidebar-label-container">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - $50"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />
        <Input
          handleChange={handleChange}
          value={200}
          title="Over - $150"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
