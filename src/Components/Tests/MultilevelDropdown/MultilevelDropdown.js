import React from "react";
import "./MultilevelDropdown.css";
import { menuItems } from "./menuItems";
import SubMenuItems from "./SubMenuItems";

function MultilevelDropdown() {
  return (
    <header>
      <div className="nav-area">
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <SubMenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MultilevelDropdown;
