import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar({ user, setUser }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="link" to="/search">
          Read Books
        </Link>
      </div>
      <div className="nav-items">
        {user && (
          <img
            src={user.avatar}
            loading="lazy"
            alt="profile-avatar"
            className="avatar nav-item"
          />
        )}
        {user && <p className="username nav-item">{user.name}</p>}
        {user ? (
          <a
            className="link nav-item"
            href={`${process.env.REACT_APP_API_ENDPOINT}/auth/logout`}
          >
            Sign Out
          </a>
        ) : (
          <a className="link nav-item" href={`${process.env.REACT_APP_API_ENDPOINT}/auth/google`}>
            Sign In
          </a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
