import React from "react";
import "./Color.css";
import Input from "../../components/Input";

const Color = ({ handleChange }) => {
  return (
    <div className="mt-3">
      <div className="flex flex-col mr-8 gap-1">
        <h2 className="sidebar-title color-title text-[1.6rem]">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span className="checkmark" style={{ background: "white" }}></span>
          White
        </label>
      </div>
    </div>
  );
};

export default Color;