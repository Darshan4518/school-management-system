import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

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
import {
  GraduationCap,
  Users,
  School,
  CreditCard,
  BookOpen,
  Calendar,
  FileText,
  Bell,
} from "lucide-react";
import { Link } from "react-router";

export function ComprehensiveDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: 1200,
      icon: <GraduationCap className="h-4 w-4" />,
      href: "/students",
    },
    {
      title: "Total Teachers",
      value: 80,
      icon: <Users className="h-4 w-4" />,
      href: "/teachers",
    },
    {
      title: "Total Classes",
      value: 40,
      icon: <School className="h-4 w-4" />,
      href: "/classes",
    },
    {
      title: "Monthly Revenue",
      value: "₹500,000",
      icon: <CreditCard className="h-4 w-4" />,
      href: "/billing",
    },
  ];

  const recentActivities = [
    { id: 1, activity: "New student enrolled", date: "2 hours ago" },
    { id: 2, activity: "Teacher meeting scheduled", date: "5 hours ago" },
    { id: 3, activity: "Exam results published", date: "1 day ago" },
    { id: 4, activity: "Fee payment received", date: "2 days ago" },
  ];

  const upcomingEvents = [
    { id: 1, event: "Annual Sports Day", date: "15 Aug 2023" },
    { id: 2, event: "Parent-Teacher Meeting", date: "22 Aug 2023" },
    { id: 3, event: "Science Exhibition", date: "5 Sep 2023" },
  ];

  const attendanceData = [
    { name: "Class 10", present: 90, absent: 10 },
    { name: "Class 11", present: 85, absent: 15 },
    { name: "Class 12", present: 88, absent: 12 },
  ];

  const licenseInfo = {
    type: "Professional",
    expiryDate: "31 Dec 2023",
    totalLicenses: 1000,
    usedLicenses: 750,
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <Link
                to={stat.href}
                className="text-xs text-muted-foreground hover:underline"
              >
                View details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
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
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex justify-between text-sm">
                  <span>{activity.activity}</span>
                  <span className="text-muted-foreground">{activity.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upcomingEvents.map((event) => (
                <li
                  key={event.id}
                  className="flex justify-between items-center"
                >
                  <span>{event.event}</span>
                  <span className="text-sm text-muted-foreground">
                    {event.date}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>License Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>License Type:</span>
              <span className="font-medium">{licenseInfo.type}</span>
            </div>
            <div className="flex justify-between">
              <span>Expiry Date:</span>
              <span className="font-medium">{licenseInfo.expiryDate}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>License Usage:</span>
                <span className="font-medium">
                  {licenseInfo.usedLicenses} / {licenseInfo.totalLicenses}
                </span>
              </div>
              <Progress
                value={
                  (licenseInfo.usedLicenses / licenseInfo.totalLicenses) * 100
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <BookOpen className="mr-2 h-4 w-4" /> Manage Classes
            </Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <Calendar className="mr-2 h-4 w-4" /> Schedule Event
            </Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <FileText className="mr-2 h-4 w-4" /> Generate Report
            </Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              <Bell className="mr-2 h-4 w-4" /> Send Notification
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
