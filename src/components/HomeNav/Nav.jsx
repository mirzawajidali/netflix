import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="nav_home">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="netflix_home_logo"
        />
        <button className="signin_button">Sign In</button>
      </div>
    </>
  );
}

export default Nav;
