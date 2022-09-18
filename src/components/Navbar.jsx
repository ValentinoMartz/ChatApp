import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat n' Tino</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/13623424/pexels-photo-13623424.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
