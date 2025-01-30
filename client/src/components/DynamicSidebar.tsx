import { Sidebar } from "./Sidebar";

interface DynamicSidebarProps {
  role:
    | "superAdmin"
    | "admin"
    | "teacher"
    | "student"
    | "parent"
    | "accountant"
    | "manager";
}

export function DynamicSidebar({ role }: DynamicSidebarProps) {
  return <Sidebar role={role} />;
}
