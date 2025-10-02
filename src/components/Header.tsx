import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__logo">facebook</h1>
      </div>

      <div className="header__center">
        <input
          type="text"
          placeholder="Szukaj na Facebooku"
          className="header__search"
        />
      </div>

      <div className="header__right">
        <button className="header__button">Profil</button>
      </div>
    </header>
  );
};

export default Header;
