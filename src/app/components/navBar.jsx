import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Logo</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
        <li class="push-right">
          <a href="/input">Input</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
