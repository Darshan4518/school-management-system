import { BookOpen, Building2, GraduationCap } from "lucide-react";
import { DashboardCard } from "../components/Dashboard-Card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const DashboardScreen = () => {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Active Sessions"
          value="3"
          description="Current academic sessions"
          icon={<BookOpen className="h-4 w-4 text-muted-foreground" />}
          linkHref="/dashboard/session"
          linkText="Manage Sessions"
        />
        <DashboardCard
          title="Total Classes"
          value="15"
          description="Across all grades"
          icon={<GraduationCap className="h-4 w-4 text-muted-foreground" />}
          linkHref="/dashboard/classes"
          linkText="View Classes"
        />
        <DashboardCard
          title="School Branches"
          value="2"
          description="Connected campuses"
          icon={<Building2 className="h-4 w-4 text-muted-foreground" />}
          linkHref="/dashboard/add-branch"
          linkText="Manage Branches"
        />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <RecentSessions />
        <TopClasses />
        <BranchOverview />
      </div>
    </main>
  );
};
function RecentSessions() {
  const sessions = [
    {
      id: 1,
      name: "Summer 2023",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
    },
    {
      id: 2,
      name: "Fall 2023",
      startDate: "2023-09-01",
      endDate: "2023-12-20",
    },
    {
      id: 3,
      name: "Spring 2024",
      startDate: "2024-01-05",
      endDate: "2024-05-31",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {sessions.map((session) => (
            <li key={session.id} className="flex justify-between items-center">
              <span className="font-medium">{session.name}</span>
              <span className="text-sm text-muted-foreground">
                {session.startDate} - {session.endDate}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function TopClasses() {
  const classes = [
    { id: 1, name: "Class 5A", students: 32 },
    { id: 2, name: "Class 4B", students: 30 },
    { id: 3, name: "Class 6C", students: 28 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Classes</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {classes.map((cls) => (
            <li key={cls.id} className="flex justify-between items-center">
              <span className="font-medium">{cls.name}</span>
              <span className="text-sm text-muted-foreground">
                {cls.students} students
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function BranchOverview() {
  const branches = [
    { id: 1, name: "Main Campus", students: 500, teachers: 40 },
    { id: 2, name: "North Campus", students: 300, teachers: 25 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Branch Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {branches.map((branch) => (
            <li key={branch.id} className="space-y-1">
              <div className="font-medium">{branch.name}</div>
              <div className="text-sm text-muted-foreground">
                {branch.students} students, {branch.teachers} teachers
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default DashboardScreen;
