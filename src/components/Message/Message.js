import React from "react";
import Moment from "react-moment";
import "./Message.css";

const Message = ({
  message: { username: user, text, createdAt },
  username
}) => {
  let isCurrentUSer = false;
  let isAdmin = false;

  username = username.trim().toLowerCase();

  if (user === username) {
    isCurrentUSer = true;
  }

  if (user === "Admin") {
    isAdmin = true;
  }

  return isCurrentUSer ? (
    <div className="message owner" id="message">
      <Moment format="h:mm a" className="text-muted mx-1 my-auto">
        {createdAt}
      </Moment>
      <p>{text}</p>
      <i className="fas fa-user-circle ml-2"></i>
    </div>
  ) : isAdmin ? (
    <div className="message admin" id="message">
      <p>{text}</p>
    </div>
  ) : (
    <div className="message" id="message">
      <i className="fas fa-user-circle mr-2"></i>
      <p>{text}</p>
      <Moment format="h:mm a" className="text-muted mx-1 my-auto">
        {createdAt}
      </Moment>
    </div>
  );
};

export default Message;
