import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = ({ room, usersInRoom }) => {
  return (
    <div className="sidebar d-none d-sm-none d-md-block" id="sidebar">
      <div className="options">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h1 className="m-0">Chatnow</h1>
          </li>
          <li className="list-group-item room">
            <div>
              <small className="text-muted">Room name</small>
              <h5>{room}</h5>
            </div>
            <div>
              <Link to="/">
                <small className="btn-outline-danger leave">Exit</small>
              </Link>
            </div>
          </li>
          <li className="list-group-item">
            <small className="text-muted">Users</small>
            <ul className="users-list" id="users-list">
              <li>
                {usersInRoom.map((user, i) => (
                  <div key={i} className="user">
                    <p>{user.username}</p>
                    <small className="text-muted">
                      <i className="fas fa-circle"></i>
                    </small>
                  </div>
                ))}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
