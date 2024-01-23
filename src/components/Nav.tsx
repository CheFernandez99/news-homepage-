import React from "react";
import { useState } from "react";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <button className="menuIcon" onClick={toggleNav}>
        <img
          src={process.env.PUBLIC_URL + "/images/icon-menu.svg"}
          id="menuIcon"
          alt="Open Icon"
        />
      </button>

      {isNavOpen && (
        <div className="navCard">
          <button onClick={toggleNav}>
            <img
              src={process.env.PUBLIC_URL + "/images/icon-menu-close.svg"}
            ></img>
          </button>
          <nav>
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
export default Nav;
