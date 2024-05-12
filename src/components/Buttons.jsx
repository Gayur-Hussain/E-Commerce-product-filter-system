import React from "react";

const Buttons = ({ onClickHandler, value, title }) => {
  return (
    <button
      className=" hover:bg-slate-700 p-2 pl-3 pr-3 rounded border-[2px] m-2"
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
};

export default Buttons;
