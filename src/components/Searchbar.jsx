import React from "react";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="searchform">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userchat">
        <img
          src="https://images.pexels.com/photos/13428312/pexels-photo-13428312.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="userchatinfo">
          <span> Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
