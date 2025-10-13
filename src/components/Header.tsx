import React from "react";
import "./Header.scss";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  onToggleMenu: () => void;
}

const Header = ({ isMobileMenuOpen, onToggleMenu }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__hamburger" onClick={onToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <h1 className="header__logo">facebook</h1>
      </div>

      <div className="header__center">
        <input
          type="text"
          placeholder="Search Facebook"
          className="header__search"
        />
      </div>

      <div className="header__right">
        <button className="header__button">Profile</button>
      </div>

      {isMobileMenuOpen && (
        <div className="header__overlay" onClick={onToggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
