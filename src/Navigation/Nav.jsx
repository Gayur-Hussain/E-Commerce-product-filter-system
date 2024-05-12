import React from "react";
import "./Nav.css";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav className="flex border-b-2 justify-around items-center p-5 z-[999] ml-[4rem]">
      <div className="nav-container">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          className="search-input p-2 border-none bg-slate-700 outline-none mr-5 rounded relative w-56"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container flex">
        <a href="#">
          <FaRegHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
