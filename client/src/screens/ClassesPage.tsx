import { ClassDataTable } from "../components/ClassDataTable";

export default function ClassPage() {
  return (
    <main className="flex-1 p-6">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Classes</h1>
        <ClassDataTable />
      </div>
    </main>
  );
}
