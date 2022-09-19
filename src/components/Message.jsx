import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageinfo">
        <img
          src="https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messagecontent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
