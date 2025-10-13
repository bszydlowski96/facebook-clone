import React from "react";
import "./Sidebar.scss";

interface SidebarItem {
  icon: string;
  label: string;
  notification?: number;
}

interface SidebarProps {
  isMobileMenuOpen?: boolean;
}

const Sidebar = ({ isMobileMenuOpen = false }: SidebarProps) => {
  const menuItems: SidebarItem[] = [
    { icon: "👥", label: "Friends", notification: 3 },
    { icon: "📄", label: "Pages" },
    { icon: "👥", label: "Groups", notification: 12 },
    { icon: "🛍️", label: "Marketplace" },
    { icon: "📺", label: "Watch" },
    { icon: "📅", label: "Events", notification: 2 },
    { icon: "⭐", label: "Favorites" },
    { icon: "🎮", label: "Gaming" },
  ];

  const shortcuts = [
    { icon: "🚀", label: "React Developers Poland" },
    { icon: "💻", label: "JavaScript News" },
    { icon: "🎨", label: "UI/UX Designers" },
  ];

  return (
    <aside
      className={`sidebar ${isMobileMenuOpen ? "sidebar--mobile-open" : ""}`}
    >
      <div className="sidebar__user">
        <img
          src="https://picsum.photos/36/36"
          alt="Your profile"
          className="sidebar__user-avatar"
        />
        <span className="sidebar__user-name">Bartosz Szydlowski</span>
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
        <h3 className="sidebar__heading">Your shortcuts</h3>
        {shortcuts.map((shortcut, index) => (
          <div key={index} className="sidebar__item">
            <span className="sidebar__icon">{shortcut.icon}</span>
            <span className="sidebar__label">{shortcut.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
