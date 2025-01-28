import { AcademicsDashboard } from "../components/AcademicDashboard";
import { Attendance } from "../components/Attendance";
import { ClassDataTable } from "../components/ClassDataTable";
import { TimeTable } from "../components/TimeTable";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function AcademicsPage() {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-6">Academics</h1>
      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="timetable">Time Table</TabsTrigger>
          <TabsTrigger value="class">Class</TabsTrigger>
          <TabsTrigger value="subject">Subject</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <AcademicsDashboard />
        </TabsContent>
        <TabsContent value="timetable">
          <TimeTable />
        </TabsContent>
        <TabsContent value="class">
          <ClassDataTable />
        </TabsContent>

        <TabsContent value="attendance">
          <Attendance />
        </TabsContent>
      </Tabs>
    </main>
  );
}
