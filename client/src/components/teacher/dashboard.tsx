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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router";

const attendanceData = [
  { name: "Present", value: 85 },
  { name: "Absent", value: 10 },
  { name: "Late", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const assignmentData = [
  { name: "Math", submitted: 25, pending: 5 },
  { name: "Science", submitted: 22, pending: 8 },
  { name: "English", submitted: 20, pending: 10 },
  { name: "History", submitted: 18, pending: 12 },
];

const upcomingClasses = [
  {
    id: 1,
    subject: "Mathematics",
    grade: "10th",
    time: "09:00 AM",
    room: "Room 101",
  },
  {
    id: 2,
    subject: "Science",
    grade: "9th",
    time: "11:00 AM",
    room: "Lab 201",
  },
  {
    id: 3,
    subject: "English",
    grade: "11th",
    time: "02:00 PM",
    room: "Room 105",
  },
];

export default function TeacherDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Teacher Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">150</div>
            <p className="text-xs text-muted-foreground">Across all classes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              2 more than yesterday
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Assignments Due
            </CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              To be graded this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Parent Meetings
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Scheduled for today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Attendance</CardTitle>
            <CardDescription>
              Overall attendance for your classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {attendanceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assignment Submission Status</CardTitle>
            <CardDescription>Submitted vs Pending assignments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={assignmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="submitted" fill="#8884d8" />
                <Bar dataKey="pending" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Classes</CardTitle>
          <CardDescription>Your schedule for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingClasses.map((class_) => (
              <div
                key={class_.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">{class_.subject}</h3>
                  <p className="text-sm text-muted-foreground">
                    Grade: {class_.grade}
                  </p>
                </div>
                <div className="text-right">
                  <p>{class_.time}</p>
                  <p className="text-sm text-muted-foreground">{class_.room}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/dashboard/teacher/my-classes">
          <Button className="w-full h-20" variant="outline">
            <BookOpen className="mr-2 h-4 w-4" /> My Classes
          </Button>
        </Link>
        <Link to="/dashboard/teacher/attendance">
          <Button className="w-full h-20" variant="outline">
            <ClipboardList className="mr-2 h-4 w-4" /> Attendance
          </Button>
        </Link>
        <Link to="/dashboard/teacher/assignments">
          <Button className="w-full h-20" variant="outline">
            <GraduationCap className="mr-2 h-4 w-4" /> Assignments
          </Button>
        </Link>
        <Link to="/dashboard/teacher/grading">
          <Button className="w-full h-20" variant="outline">
            <ClipboardList className="mr-2 h-4 w-4" /> Grading
          </Button>
        </Link>
      </div>
    </div>
  );
}
