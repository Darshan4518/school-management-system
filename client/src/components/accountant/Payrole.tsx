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
import { DollarSign, FileText, Plus, Search } from "lucide-react";

const staffPayroll = [
  {
    id: 1,
    name: "John Doe",
    position: "Teacher",
    department: "Mathematics",
    salary: 5000,
    lastPaid: "2023-06-30",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Administrator",
    department: "Admin",
    salary: 4500,
    lastPaid: "2023-06-30",
  },
  {
    id: 3,
    name: "Bob Johnson",
    position: "Teacher",
    department: "Science",
    salary: 4800,
    lastPaid: "2023-06-30",
  },
  {
    id: 4,
    name: "Alice Williams",
    position: "Librarian",
    department: "Library",
    salary: 4000,
    lastPaid: "2023-06-30",
  },
  {
    id: 5,
    name: "Charlie Brown",
    position: "Teacher",
    department: "English",
    salary: 4700,
    lastPaid: "2023-06-30",
  },
];

export default function StaffPayroll() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Staff Payroll</h1>

      <Card>
        <CardHeader>
          <CardTitle>Payroll Management</CardTitle>
          <CardDescription>Manage and process staff payroll</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Input placeholder="Search staff..." className="w-64" />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Staff
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Salary</TableHead>
                <TableHead>Last Paid</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffPayroll.map((staff) => (
                <TableRow key={staff.id}>
                  <TableCell>{staff.name}</TableCell>
                  <TableCell>{staff.position}</TableCell>
                  <TableCell>{staff.department}</TableCell>
                  <TableCell>${staff.salary}</TableCell>
                  <TableCell>{staff.lastPaid}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      <FileText className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Process Payment
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
          <CardTitle>Process Payroll</CardTitle>
          <CardDescription>
            Run payroll for all staff or selected individuals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="payPeriod" className="text-sm font-medium">
                  Pay Period
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pay period" />
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
                <label htmlFor="paymentDate" className="text-sm font-medium">
                  Payment Date
                </label>
                <Input id="paymentDate" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="staffSelection" className="text-sm font-medium">
                Staff Selection
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select staff to process" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Staff</SelectItem>
                  <SelectItem value="teachers">Teachers Only</SelectItem>
                  <SelectItem value="admin">
                    Administrative Staff Only
                  </SelectItem>
                  <SelectItem value="custom">Custom Selection</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>
              <DollarSign className="mr-2 h-4 w-4" />
              Process Payroll
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
