import { Outlet } from "react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
const Layout = () => {
  return (
    <section className="w-full h-full flex-1 min-h-screen">
      <Header />
      <main className=" flex">
        <Sidebar />
        <div className=" flex-1 p-4">
          <Outlet />
        </div>
      </main>
    </section>
  );
};

export default Layout;
