import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";

import "./Join.css";

let socket;

const Join = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);
  const ENDPOINT = "https://cjha-chat-server.herokuapp.com/";

  useEffect(() => {
    document.title = "Join - Chatnow";
  }, []);

  return (
    <section className="main">
      <div className="container">
        <div className="login-container">
          <h1>Chatnow</h1>
          <form action="/chat.html">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                autoComplete="off"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <label htmlFor="inlineFormCustomSelectPref">Active Rooms</label>
            <select
              className="custom-select my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option defaultValue>Choose...</option>
              <option value="1">{availableRooms}</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="form-group mt-2">
              <label htmlFor="room">Room</label>
              <input
                type="text"
                className="form-control"
                id="room"
                name="room"
                autoComplete="off"
                onChange={(e) => {
                  setRoom(e.target.value);
                }}
              />
            </div>
            <div className="text-right">
              <Link
                onClick={(e) =>
                  !username && !room ? e.preventDefault() : null
                }
                to={`/chat?username=${username}&room=${room}`}
                className="btn btn-primary"
              >
                Join
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Join;
