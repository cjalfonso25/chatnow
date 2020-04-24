import React from "react";
import ScrollBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";

const Messages = ({ messages, username }) => {
  return (
    <ScrollBottom className="messages" id="messages">
      <div>
        {messages.map((message, i) => (
          <div key={i}>
            <Message message={message} username={username} />
          </div>
        ))}
      </div>
    </ScrollBottom>
  );
};

export default Messages;
