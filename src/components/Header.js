// src/components/Header.js
import React from "react";
import logoOnePiece from "../image/logoOnePiece.png";

function Header() {
  return (
    <header>
      <figure className="card">
        <img
          src={logoOnePiece}
          className="card-img-top img-fluid"
          alt={logoOnePiece}
        />
      </figure>
    </header>
  );
}

export default Header;
