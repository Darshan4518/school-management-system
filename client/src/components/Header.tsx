import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="School Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-xl font-semibold">Karnataka Public School</h1>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn9ASK7H7EjGrAMlq0c7nNAuFyAPK3G7_gw&s"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span>Darshan</span>
          </div>
          <Bell className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
