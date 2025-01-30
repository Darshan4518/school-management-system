import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
import { Download, FileText, Printer, Search } from "lucide-react";

const salaryStatements = [
  {
    id: 1,
    employeeId: "EMP001",
    name: "John Doe",
    department: "Mathematics",
    month: "July 2023",
    grossSalary: 5000,
    netSalary: 4200,
  },
  {
    id: 2,
    employeeId: "EMP002",
    name: "Jane Smith",
    department: "Admin",
    month: "July 2023",
    grossSalary: 4500,
    netSalary: 3800,
  },
  {
    id: 3,
    employeeId: "EMP003",
    name: "Bob Johnson",
    department: "Science",
    month: "July 2023",
    grossSalary: 4800,
    netSalary: 4000,
  },
  {
    id: 4,
    employeeId: "EMP004",
    name: "Alice Williams",
    department: "Library",
    month: "July 2023",
    grossSalary: 4000,
    netSalary: 3400,
  },
  {
    id: 5,
    employeeId: "EMP005",
    name: "Charlie Brown",
    department: "English",
    month: "July 2023",
    grossSalary: 4700,
    netSalary: 3900,
  },
];

export default function SalaryStatements() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Salary Statements</h1>

      <Card>
        <CardHeader>
          <CardTitle>Salary Statement Management</CardTitle>
          <CardDescription>
            View and manage salary statements for all employees
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Input placeholder="Search employee..." className="w-64" />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <div className="flex space-x-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="july2023">July 2023</SelectItem>
                  <SelectItem value="august2023">August 2023</SelectItem>
                  <SelectItem value="september2023">September 2023</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export All
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Month</TableHead>
                <TableHead>Gross Salary</TableHead>
                <TableHead>Net Salary</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salaryStatements.map((statement) => (
                <TableRow key={statement.id}>
                  <TableCell>{statement.employeeId}</TableCell>
                  <TableCell>{statement.name}</TableCell>
                  <TableCell>{statement.department}</TableCell>
                  <TableCell>{statement.month}</TableCell>
                  <TableCell>${statement.grossSalary}</TableCell>
                  <TableCell>${statement.netSalary}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Printer className="mr-2 h-4 w-4" />
                      Print
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generate Salary Statements</CardTitle>
          <CardDescription>
            Generate salary statements for a specific period
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="month" className="text-sm font-medium">
                  Month
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="july2023">July 2023</SelectItem>
                    <SelectItem value="august2023">August 2023</SelectItem>
                    <SelectItem value="september2023">
                      September 2023
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="department" className="text-sm font-medium">
                  Department
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate Statements
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
