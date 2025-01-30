import {
  AlertTriangle,
  Award,
  BarChart,
  Bell,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  Building,
  Calendar,
  CheckSquare,
  ClipboardList,
  CogIcon,
  CreditCard,
  DollarSign,
  FileCheck,
  FilePlus,
  FileSpreadsheet,
  FileText,
  FileTextIcon,
  GraduationCap,
  LayoutDashboard,
  List,
  LucideIcon,
  Mail,
  Map,
  MessageSquare,
  PieChart,
  Plus,
  Presentation,
  SchoolIcon,
  Send,
  Settings,
  SettingsIcon,
  Shield,
  ShieldCheck,
  TrendingUp,
  Truck,
  User,
  User2,
  UserCog,
  Users,
  UsersIcon,
} from "lucide-react";

interface MenuItem {
  to: string;
  label: string;
  icon: LucideIcon;
  subItems?: MenuItem[];
}

interface MenuSection {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
}

export const menuItems: Record<string, MenuSection[]> = {
  superAdmin: [
    {
      title: "Overview",
      icon: LayoutDashboard,
      items: [
        {
          to: "/superadmin/dashboard",
          label: "Dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Management",
      icon: SettingsIcon,
      items: [
        {
          to: "/superadmin/user-management",
          label: "User Management",
          icon: UsersIcon,
        },
        {
          to: "/superadmin/school-management",
          label: "School Management",
          icon: SchoolIcon,
        },
        {
          to: "/superadmin/role-management",
          label: "Role Management",
          icon: Shield,
        },
      ],
    },
    {
      title: "System",
      icon: CogIcon,
      items: [
        {
          to: "/superadmin/settings",
          label: "System Settings",
          icon: SettingsIcon,
        },
        { to: "/superadmin/reports", label: "Reports", icon: FileTextIcon },
      ],
    },
  ],
  admin: [
    {
      title: "Overview",
      icon: LayoutDashboard,
      items: [
        {
          to: "/admin/dashboard",
          label: "Dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Management",
      icon: UserCog,
      items: [
        {
          to: "/admin/staff",
          label: "Staff Management",
          icon: Users,
        },
        {
          to: "/admin/students",
          label: "Student Management",
          icon: GraduationCap,
        },
        {
          to: "/admin/schedule-management",
          label: "Schedule Management",
          icon: Calendar,
        },
        {
          to: "/admin/curriculum",
          label: "Curriculum Management",
          icon: FileText,
        },
      ],
    },
    {
      title: "Communication",
      icon: MessageSquare,
      items: [
        { to: "/admin/announcements", label: "Announcements", icon: Bell },
        {
          to: "/admin/messages",
          label: "Messages",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Settings",
      icon: Settings,
      items: [{ to: "/settings", label: "School Settings", icon: Settings }],
    },
  ],
  teacher: [
    {
      title: "Overview",
      icon: LayoutDashboard,
      items: [
        {
          to: "/teacher/dashboard",
          label: "Dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Teaching",
      icon: BookOpen,
      items: [
        {
          to: "/teacher/classes",
          label: "My Classes",
          icon: BookOpen,
        },
        { to: "/teacher/attendance", label: "Attendance", icon: ClipboardList },
        {
          to: "/teacher/assignments",
          label: "Assignments",
          icon: FileText,
        },
        { to: "/teacher/grading", label: "Grading", icon: BookOpenCheck },
      ],
    },
    {
      title: "Communication",
      icon: MessageSquare,
      items: [
        { to: "/teacher/messages", label: "Messages", icon: MessageSquare },
        { to: "/teacher/meetings", label: "Parent Meetings", icon: Users },
      ],
    },
    {
      title: "Resources",
      icon: Presentation,
      items: [
        {
          to: "/teacher/meterials",
          label: "Teaching Materials",
          icon: Presentation,
        },
        { to: "/teacher/schedule", label: "Schedule", icon: Calendar },
      ],
    },
    {
      title: "Profile",
      icon: User2,
      items: [{ to: "/teacher/profile", label: "My Profile", icon: User2 }],
    },
  ],
  student: [
    {
      title: "Academics",
      icon: BookOpen,
      items: [
        {
          to: "/courses",
          label: "My Courses",
          icon: BookOpen,
          subItems: [
            {
              to: "/courses/schedule",
              label: "Course Schedule",
              icon: Calendar,
            },
            {
              to: "/courses/materials",
              label: "Course Materials",
              icon: FileText,
            },
          ],
        },
        {
          to: "/assignments",
          label: "Assignments",
          icon: FileText,
          subItems: [
            {
              to: "/assignments/upcoming",
              label: "Upcoming",
              icon: ClipboardList,
            },
            {
              to: "/assignments/completed",
              label: "Completed",
              icon: CheckSquare,
            },
          ],
        },
        { to: "/grades", label: "Grades", icon: Award },
        { to: "/schedule", label: "Schedule", icon: Calendar },
      ],
    },
    {
      title: "Resources",
      icon: Presentation,
      items: [
        { to: "/materials", label: "Study Materials", icon: Presentation },
        { to: "/forums", label: "Discussion Forums", icon: MessageSquare },
      ],
    },
    {
      title: "Personal",
      icon: User,
      items: [
        { to: "/profile", label: "My Profile", icon: User },
        { to: "/messages", label: "Messages", icon: MessageSquare },
      ],
    },
  ],
  parent: [
    {
      title: "My Children",
      icon: Users,
      items: [
        { to: "/children", label: "Children Profiles", icon: Users },
        {
          to: "/progress",
          label: "Academic Progress",
          icon: Award,
          subItems: [
            {
              to: "/progress/overview",
              label: "Performance Overview",
              icon: BarChart,
            },
            {
              to: "/progress/report-cards",
              label: "Report Cards",
              icon: FileText,
            },
          ],
        },
        { to: "/attendance", label: "Attendance", icon: ClipboardList },
      ],
    },
    {
      title: "Communication",
      icon: MessageSquare,
      items: [
        {
          to: "/messages",
          label: "Messages",
          icon: MessageSquare,
          subItems: [
            { to: "/messages/inbox", label: "Inbox", icon: Mail },
            { to: "/messages/send", label: "Send Message", icon: Send },
          ],
        },
        { to: "/meetings", label: "Teacher Meetings", icon: Calendar },
      ],
    },
    {
      title: "Financial",
      icon: DollarSign,
      items: [
        { to: "/fees", label: "Fee Statements", icon: FileSpreadsheet },
        {
          to: "/payments",
          label: "Payments",
          icon: DollarSign,
          subItems: [
            {
              to: "/payments/make",
              label: "Make Payment",
              icon: CreditCard,
            },
            {
              to: "/payments/history",
              label: "Payment History",
              icon: FileText,
            },
          ],
        },
      ],
    },
  ],
  accountant: [
    {
      title: "Overview",
      icon: LayoutDashboard,
      items: [
        {
          to: "/accountant/dashboard",
          label: "Dashboard",
          icon: LayoutDashboard,
        },
      ],
    },
    {
      title: "Financial Management",
      icon: DollarSign,
      items: [
        {
          to: "/accountant/fees",
          label: "Fee Management",
          icon: DollarSign,
        },
        {
          to: "/accountant/invoices",
          label: "Invoices",
          icon: FileSpreadsheet,
        },
        {
          to: "/accountant/reports",
          label: "Financial Reports",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Payroll",
      icon: DollarSign,
      items: [
        { to: "/accountant/payroll", label: "Staff Payroll", icon: Users },
        {
          to: "/accountant/salary-statements",
          label: "Salary Statements",
          icon: FileText,
        },
      ],
    },
    {
      title: "Budget",
      icon: PieChart,
      items: [
        { to: "/accountant/budget", label: "Budget Planning", icon: PieChart },
        {
          to: "/accountant/expenses",
          label: "Expense Tracking",
          icon: TrendingUp,
        },
      ],
    },
  ],
  manager: [
    {
      title: "Operations",
      icon: Briefcase,
      items: [
        {
          to: "/facilities",
          label: "Facility Management",
          icon: Building,
          subItems: [
            {
              to: "/facilities/maintenance",
              label: "Maintenance",
              icon: Briefcase,
            },
            {
              to: "/facilities/bookings",
              label: "Bookings",
              icon: Calendar,
            },
          ],
        },
        {
          to: "/transportation",
          label: "Transportation",
          icon: Truck,
          subItems: [
            { to: "/transportation/routes", label: "Routes", icon: Map },
            {
              to: "/transportation/vehicles",
              label: "Vehicles",
              icon: Truck,
            },
          ],
        },
        {
          to: "/security",
          label: "Security",
          icon: ShieldCheck,
          subItems: [
            { to: "/security/staff", label: "Security Staff", icon: Users },
            {
              to: "/security/incidents",
              label: "Incident Reports",
              icon: AlertTriangle,
            },
          ],
        },
      ],
    },
    {
      title: "Human Resources",
      icon: Users,
      items: [
        { to: "/staff", label: "Staff Directory", icon: Users },
        {
          to: "/leave",
          label: "Leave Management",
          icon: FileText,
          subItems: [
            {
              to: "/leave/calendar",
              label: "Leave Calendar",
              icon: Calendar,
            },
            {
              to: "/leave/requests",
              label: "Leave Requests",
              icon: FileCheck,
            },
          ],
        },
        { to: "/jobs", label: "Job Postings", icon: Briefcase },
      ],
    },
    {
      title: "Administration",
      icon: Settings,
      items: [
        {
          to: "/events",
          label: "Event Planning",
          icon: Calendar,
          subItems: [
            { to: "/events/create", label: "Create Event", icon: Plus },
            { to: "/events/list", label: "Event List", icon: List },
          ],
        },
        {
          to: "/communications",
          label: "Internal Communications",
          icon: MessageSquare,
          subItems: [
            {
              to: "/communications/announcements",
              label: "Announcements",
              icon: Bell,
            },
            {
              to: "/communications/emails",
              label: "Staff Emails",
              icon: Mail,
            },
          ],
        },
        {
          to: "/reports",
          label: "Reports",
          icon: FileSpreadsheet,
          subItems: [
            { to: "/reports/staff", label: "Staff Reports", icon: Users },
            {
              to: "/reports/operations",
              label: "Operational Reports",
              icon: BarChart,
            },
          ],
        },
      ],
    },
  ],
};
