import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Users, GraduationCap, BookOpen, Bell, Calendar } from "lucide-react";

const data = [
  { name: "Jan", students: 400, staff: 240 },
  { name: "Feb", students: 300, staff: 139 },
  { name: "Mar", students: 200, staff: 980 },
  { name: "Apr", students: 278, staff: 390 },
  { name: "May", students: 189, staff: 480 },
  { name: "Jun", students: 239, staff: 380 },
];

const recentActivities = [
  { id: 1, message: "New student John Doe enrolled", time: "2 hours ago" },
  {
    id: 2,
    message: "Teacher meeting scheduled for next week",
    time: "5 hours ago",
  },
  {
    id: 3,
    message: "Updated curriculum for Grade 10 Mathematics",
    time: "1 day ago",
  },
  { id: 4, message: "New staff member Jane Smith joined", time: "2 days ago" },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +10% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">Across all grades</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Events
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">In the next 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Student and Staff Overview</CardTitle>
            <CardDescription>
              Monthly comparison of students and staff
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#8884d8" />
                <Bar dataKey="staff" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest updates and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-center">
                  <Bell className="h-4 w-4 mr-2 text-[#F7B614]" />
                  <div>
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Button
          className="h-20"
          variant="outline"
          onClick={() =>
            (window.location.href = "/dashboard/student-management")
          }
        >
          <Users className="mr-2 h-4 w-4" /> Student Management
        </Button>
        <Button
          className="h-20"
          variant="outline"
          onClick={() => (window.location.href = "/dashboard/staff-management")}
        >
          <Users className="mr-2 h-4 w-4" /> Staff Management
        </Button>
        <Button
          className="h-20"
          variant="outline"
          onClick={() =>
            (window.location.href = "/dashboard/curriculum-management")
          }
        >
          <BookOpen className="mr-2 h-4 w-4" /> Curriculum Management
        </Button>
        <Button
          className="h-20"
          variant="outline"
          onClick={() =>
            (window.location.href = "/dashboard/schedule-management")
          }
        >
          <Calendar className="mr-2 h-4 w-4" /> Schedule Management
        </Button>
      </div>
    </div>
  );
}
