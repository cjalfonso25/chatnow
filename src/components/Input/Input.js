import React from "react";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="compose">
      <div className="col">
        <input
          type="text"
          className="form-control"
          id="messageInput"
          placeholder="Message"
          name="message"
          value={message}
          autoComplete="off"
          onChange={e => {
            setMessage(e.target.value);
          }}
          onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
        />
      </div>
      <button onClick={e => sendMessage(e)} className="btn btn-primary">
        Send
      </button>
    </div>
  );
};

export default Input;
