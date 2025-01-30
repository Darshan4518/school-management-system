import type React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

interface MenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
  subItmes?: any;
}

interface CollapsibleMenuProps {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
  isOpen: boolean;
  toggleOpen: () => void;
}

export const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  title,
  icon: Icon,
  items,
  isOpen,
  toggleOpen,
}) => {
  return (
    <div className="mb-6">
      <h3
        className={`cursor-pointer flex items-center space-x-2 ${
          isOpen ? "text-gray-400" : "text-gray-300"
        }`}
        onClick={toggleOpen}
      >
        <Icon className="h-5 w-5" />
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown className="ml-auto h-4 w-4" />
        ) : (
          <ChevronRight className="ml-auto h-4 w-4" />
        )}
      </h3>
      <div
        className={`bg-[#F7B614] text-black p-4 rounded-lg space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {items.map(({ to, label, icon: ItemIcon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center space-x-2 hover:text-gray-800 bg-gray-900 text-white px-3 py-2 rounded-md"
          >
            <ItemIcon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
