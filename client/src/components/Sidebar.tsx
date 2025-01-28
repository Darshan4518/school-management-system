import {
  Eye,
  LayoutDashboard,
  Plus,
  BookOpen,
  Calendar,
  LucideIcon,
  BookCopyIcon,
  AlertOctagonIcon,
  ProjectorIcon,
  BadgeDollarSign,
  BookTextIcon,
  LucideIndianRupee,
  LucideBookOpenText,
  User,
  Database,
  LayoutDashboardIcon,
  EditIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router";

interface MenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

interface CollapsibleMenuProps {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
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

export const Sidebar: React.FC = () => {
  const [schoolManagementOpen, setSchoolManagementOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [billingOpen, setBillingOpen] = useState(false);
  const [mySchoolOpen, setMySchoolOpen] = useState(false);

  const schoolManagementItems: MenuItem[] = [
    {
      to: "/dashboard/school-management/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      to: "/dashboard/school-management/add-branch",
      label: "Add Branch",
      icon: Plus,
    },
    {
      to: "/dashboard/school-management/classes",
      label: "Class",
      icon: BookOpen,
    },
    {
      to: "/dashboard/school-management/session",
      label: "Sessions",
      icon: Calendar,
    },
  ];

  const academicsItems: MenuItem[] = [
    {
      to: "/dashboard/academics/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      to: "/dashboard/academics/home-work",
      label: "Home work",
      icon: BookCopyIcon,
    },
    {
      to: "/dashboard/academics/notice",
      label: "NoticeBoard",
      icon: AlertOctagonIcon,
    },
    { to: "/dashboard/academics/events", label: "Events", icon: ProjectorIcon },
  ];

  const billingItems: MenuItem[] = [
    {
      to: "/dashboard/billing/myplans",
      label: "My Plans",
      icon: BookTextIcon,
    },
    {
      to: "/dashboard/billing/payment",
      label: "Payment",
      icon: LucideIndianRupee,
    },
    {
      to: "/dashboard/billing/invoice",
      label: "Invoice",
      icon: LucideBookOpenText,
    },
  ];

  const mySchool: MenuItem[] = [
    {
      to: "/dashboard/myschool/dashboard",
      label: "Dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      to: "/dashboard/inquiry",
      label: "Inquiry",
      icon: EditIcon,
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#0a1529] text-white p-4">
      {/* Header Section */}
      <div className="mb-8">
        <button className="bg-[#F7B614] text-black px-4 py-2 rounded-md w-full text-left hover:bg-yellow-400">
          Darshan
        </button>
      </div>

      {/* Navigation Section */}
      <nav className="space-y-6">
        <Link
          to="/dashboard"
          className="flex items-center space-x-2 text-gray-300 hover:text-white"
        >
          <Eye className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>

        <CollapsibleMenu
          title="My School"
          icon={Database}
          items={mySchool}
          isOpen={mySchoolOpen}
          toggleOpen={() => setMySchoolOpen(!mySchoolOpen)}
        />

        {/* Collapsible Menus */}
        <CollapsibleMenu
          title="School Management"
          icon={Eye}
          items={schoolManagementItems}
          isOpen={schoolManagementOpen}
          toggleOpen={() => setSchoolManagementOpen(!schoolManagementOpen)}
        />

        <CollapsibleMenu
          title="Academics"
          icon={Eye}
          items={academicsItems}
          isOpen={academicsOpen}
          toggleOpen={() => setAcademicsOpen(!academicsOpen)}
        />

        <CollapsibleMenu
          title="Billing"
          icon={BadgeDollarSign}
          items={billingItems}
          isOpen={billingOpen}
          toggleOpen={() => setBillingOpen(!billingOpen)}
        />
        <Link
          to="/dashboard/user"
          className="flex items-center space-x-2 text-gray-300 hover:text-white"
        >
          <User className="h-5 w-5" />
          <span>User Management</span>
        </Link>
      </nav>
    </div>
  );
};
