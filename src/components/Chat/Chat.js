import React, { useState, useEffect } from "react";
import qs from "query-string";
import io from "socket.io-client";
import Sidebar from "../common/Sidebar";

import "./Chat.css";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";

let socket;

const Chat = ({ location }) => {
  const [username, setUsername] = useState("");
  const [usersInRoom, setUsersInRoom] = useState([]);
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://cjha-chat-server.herokuapp.com/";

  useEffect(() => {
    const { username, room } = qs.parse(location.search);

    setUsername(username);
    setRoom(room);

    socket = io(ENDPOINT);

    socket.emit("join", { username, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    document.title = `${room} - Chatnow`;

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", (roomData) => {
      setUsersInRoom([...roomData.users]);
    });
  }, [usersInRoom]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  return (
    <section className="chat-room">
      <Sidebar room={room} usersInRoom={usersInRoom} />

      <div className="container-fluid">
        <div className="chat-messages">
          <Messages messages={messages} username={username} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </section>
  );
};

export default Chat;
