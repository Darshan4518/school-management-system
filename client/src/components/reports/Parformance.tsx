import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
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

const performanceData = [
  { name: "Jan", students: 4000, teachers: 2400, amt: 2400 },
  { name: "Feb", students: 3000, teachers: 1398, amt: 2210 },
  { name: "Mar", students: 2000, teachers: 9800, amt: 2290 },
  { name: "Apr", students: 2780, teachers: 3908, amt: 2000 },
  { name: "May", students: 1890, teachers: 4800, amt: 2181 },
  { name: "Jun", students: 2390, teachers: 3800, amt: 2500 },
];

const topPerformers = [
  { id: 1, name: "John Doe", role: "Student", score: 98 },
  { id: 2, name: "Jane Smith", role: "Teacher", score: 97 },
  { id: 3, name: "Alice Johnson", role: "Student", score: 95 },
  { id: 4, name: "Bob Williams", role: "Teacher", score: 94 },
  { id: 5, name: "Charlie Brown", role: "Student", score: 93 },
];

export default function PerformanceReport() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Performance Report</h1>

      <div className="mb-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="last-quarter">Last Quarter</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Student and teacher performance over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#8884d8" />
                <Bar dataKey="teachers" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Highest scoring individuals</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPerformers.map((performer) => (
                  <TableRow key={performer.id}>
                    <TableCell>{performer.name}</TableCell>
                    <TableCell>{performer.role}</TableCell>
                    <TableCell>{performer.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Detailed Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="students">
            <TabsList>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="teachers">Teachers</TabsTrigger>
            </TabsList>
            <TabsContent value="students">
              <p className="text-sm text-gray-500 mb-4">
                Detailed performance metrics for students
              </p>
              {/* Add more detailed student performance data here */}
            </TabsContent>
            <TabsContent value="teachers">
              <p className="text-sm text-gray-500 mb-4">
                Detailed performance metrics for teachers
              </p>
              {/* Add more detailed teacher performance data here */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
