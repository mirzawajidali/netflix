import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [blackNav, setBlackNav] = useState(false);
  function transitionNavBar(){
    if(window.scrollY > 100){
        setBlackNav(true)
    }else{
        setBlackNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
  },[])

  return (
    <div className={`nav ${blackNav && "nav_black"}`}>
      <div className="content">
        <img
          className="netflix_logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
        />
        <img
          className="netflix_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
