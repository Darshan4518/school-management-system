import { TeacherTable } from "../components/TeacherTable";

export default function TeacherPage() {
  return (
    <main className="flex-1 p-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <TeacherTable />
      </div>
    </main>
  );
}
