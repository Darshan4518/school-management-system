import { UserTable } from "../components/UserTable";

export default function UsersPage() {
  return (
    <div className="min-h-screen">
      <main className="flex-1 p-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Users Management</h1>
          <UserTable />
        </div>
      </main>
    </div>
  );
}
