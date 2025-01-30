import { Outlet } from "react-router";
import { Header } from "./Header";
import { DynamicSidebar } from "./DynamicSidebar";
import { useState } from "react";
const Layout = () => {
  const [role] = useState<
    | "superAdmin"
    | "admin"
    | "teacher"
    | "student"
    | "parent"
    | "accountant"
    | "manager"
  >("accountant");
  return (
    <section className="w-full h-full flex-1 min-h-screen">
      <Header />
      <main className=" flex">
        <DynamicSidebar role={role} />
        <div className=" flex-1 p-4">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Layout;
