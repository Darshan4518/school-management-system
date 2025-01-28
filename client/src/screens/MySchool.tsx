import { useState } from "react";
import {
  GraduationCap,
  UserPlus,
  School,
  BookOpen,
  Presentation,
  Calendar,
  TrendingUp,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { StatCard } from "../components/StatCard";

const attendanceData = [
  { name: "Class 10", present: 90, absent: 10 },
  { name: "Class 11", present: 85, absent: 15 },
  { name: "Class 12", present: 88, absent: 12 },
];

const performanceData = [
  { name: "Jan", score: 65 },
  { name: "Feb", score: 59 },
  { name: "Mar", score: 80 },
  { name: "Apr", score: 81 },
  { name: "May", score: 56 },
  { name: "Jun", score: 55 },
];

const genderData = [
  { name: "Male", value: 540 },
  { name: "Female", value: 620 },
];

const COLORS = ["#0088FE", "#00C49F"];

export default function SchoolDashboardPage() {
  const [selectedYear, setSelectedYear] = useState("2023-24");

  const stats = [
    {
      title: "Students",
      icon: <GraduationCap className="h-8 w-8" />,
      total: "10020",
      href: "/dashboard/myschool/students",
    },
    {
      title: "Teachers",
      icon: <Presentation className="h-8 w-8" />,
      total: "450",
      href: "/dashboard/myschool/teachers",
    },
    {
      title: "Academics",
      icon: <BookOpen className="h-8 w-8" />,
      href: "/dashboard/myschool/academics",
    },
    {
      title: "Classes",
      icon: <School className="h-8 w-8" />,
      total: "120",
      href: "/dashboard/myschool/classes",
    },
    {
      title: "Licence",
      icon: <UserPlus className="h-8 w-8" />,
      href: "/dashboard/myschool/licence",
    },
  ];

  return (
    <main className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Karnataka Public School (ABC Branch)
        </h1>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2022-23">2022-23</SelectItem>
            <SelectItem value="2023-24">2023-24</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            icon={stat.icon}
            total={stat.total}
            href={stat.href}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" fill="#8884d8" />
                <Bar dataKey="absent" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Gender Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genderData.map((entry: any, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <Calendar className="mr-2 h-4 w-4" /> Schedule Event
            </Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <TrendingUp className="mr-2 h-4 w-4" /> Generate Report
            </Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <UserPlus className="mr-2 h-4 w-4" /> Add New Student
            </Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <Presentation className="mr-2 h-4 w-4" /> Add New Teacher
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
