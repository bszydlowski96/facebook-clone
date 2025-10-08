import React from "react";
import "./Sidebar.scss";

interface SidebarItem {
  icon: string;
  label: string;
  notification?: number;
}

const Sidebar = () => {
  const menuItems: SidebarItem[] = [
    { icon: "👥", label: "Znajomi", notification: 3 },
    { icon: "📄", label: "Strony" },
    { icon: "👥", label: "Grupy", notification: 12 },
    { icon: "🛍️", label: "Marketplace" },
    { icon: "📺", label: "Watch" },
    { icon: "📅", label: "Wydarzenia", notification: 2 },
    { icon: "⭐", label: "Ulubione" },
    { icon: "🎮", label: "Gry" },
  ];

  const shortcuts = [
    { icon: "🚀", label: "React Developers Poland" },
    { icon: "💻", label: "JavaScript News" },
    { icon: "🎨", label: "UI/UX Designers" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__user">
        <img
          src="https://picsum.photos/36/36"
          alt="Twój profil"
          className="sidebar__user-avatar"
        />
        <span className="sidebar__user-name">Bartosz Szydłowski</span>
      </div>
      <div className="sidebar__section">
        {menuItems.map((item, index) => (
          <div key={index} className="sidebar__item">
            <span className="sidebar__icon">{item.icon}</span>
            <span className="sidebar__label">{item.label}</span>
            {item.notification && (
              <span className="sidebar__notification">{item.notification}</span>
            )}
          </div>
        ))}
      </div>
      <hr className="sidebar__divider" />
      <div className="sidebar__section">
        <h3 className="sidebar__heading">Twoje skróty</h3>
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="sidebar__item">
            <span className="sidebar__icon">{shortcut.icon}</span>
            <span className="sidebar__label">{shortcut.label}</span>
          </div>
        ))}
      </div>
      \
    </aside>
  );
};

export default Sidebar;
