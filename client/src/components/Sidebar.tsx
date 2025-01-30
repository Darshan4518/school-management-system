import React, { useState } from "react";
import { CollapsibleMenu } from "./CollapsibleMenu";

import { menuItems } from "../lib/sidebarMenuItems";

interface SidebarProps {
  role:
    | "superAdmin"
    | "admin"
    | "teacher"
    | "student"
    | "parent"
    | "accountant"
    | "manager";
}

export const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="w-64 min-h-screen bg-[#0a1529] text-white p-4">
      <div className="mb-8">
        <button className="bg-[#F7B614] text-black px-4 py-2 rounded-md w-full text-left hover:bg-yellow-400">
          {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
        </button>
      </div>
      <nav className="space-y-6">
        {menuItems[role]?.map((section, index) => (
          <CollapsibleMenu
            key={index}
            title={section.title}
            icon={section.icon}
            items={section.items}
            isOpen={openMenus[section.title] || false}
            toggleOpen={() => toggleMenu(section.title)}
          />
        ))}
      </nav>
    </div>
  );
};
