import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Note: updated import syntax for `jwt-decode`

import "./header.css";
import { nav } from "../../data/Data";

const Header = () => {
  const location = useLocation();
  const [navList, setNavList] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decode token to get user information
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    setUser(null);
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <h2>
            <Link to="/">
              <span>SPONSOROID</span>
            </Link>
          </h2>
        </div>
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {user ? (
          <div className="button2 flex">
            <Link to={user.userType === "creator" ? `/profile/${user.UserId}` : `/profile/${user.UserId}`}>
              <button className="btn2">
                <i className="fa fa-user"></i> {user.userType === "creator" ? "Creator Profile" : "Company Profile"}
              </button>
            </Link>
            <button className="btn2" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Logout
            </button>
          </div>
        ) : (
          <Link to="/Join">
            <button className="button flex">
              <div className="btn1">
                <i className="fa fa-sign-out"></i>
                <span className="join">Join Us</span>
              </div>
            </button>
          </Link>
        )}

        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
