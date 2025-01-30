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
import { Eye, FileText, Plus, Search } from "lucide-react";

const invoices = [
  {
    id: 1,
    invoiceNumber: "INV-001",
    student: "Alice Johnson",
    amount: 5800,
    status: "Paid",
    dueDate: "2023-07-15",
  },
  {
    id: 2,
    invoiceNumber: "INV-002",
    student: "Bob Smith",
    amount: 6300,
    status: "Pending",
    dueDate: "2023-07-20",
  },
  {
    id: 3,
    invoiceNumber: "INV-003",
    student: "Charlie Brown",
    amount: 7000,
    status: "Overdue",
    dueDate: "2023-07-10",
  },
  {
    id: 4,
    invoiceNumber: "INV-004",
    student: "Diana Ross",
    amount: 7500,
    status: "Paid",
    dueDate: "2023-07-18",
  },
  {
    id: 5,
    invoiceNumber: "INV-005",
    student: "Edward Norton",
    amount: 8200,
    status: "Pending",
    dueDate: "2023-07-25",
  },
];

export default function Invoices() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Invoices</h1>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Management</CardTitle>
          <CardDescription>Create, view, and manage invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Input placeholder="Search invoices..." className="w-64" />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Invoice
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice Number</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.invoiceNumber}</TableCell>
                  <TableCell>{invoice.student}</TableCell>
                  <TableCell>${invoice.amount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        invoice.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : invoice.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </TableCell>
                  <TableCell>{invoice.dueDate}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Edit
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
          <CardTitle>Create New Invoice</CardTitle>
          <CardDescription>
            Generate a new invoice for a student
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="studentName" className="text-sm font-medium">
                  Student Name
                </label>
                <Input id="studentName" placeholder="Enter student name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="grade" className="text-sm font-medium">
                  Grade
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade1">Grade 1</SelectItem>
                    <SelectItem value="grade2">Grade 2</SelectItem>
                    <SelectItem value="grade3">Grade 3</SelectItem>
                    <SelectItem value="grade4">Grade 4</SelectItem>
                    <SelectItem value="grade5">Grade 5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Amount
                </label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <label htmlFor="dueDate" className="text-sm font-medium">
                  Due Date
                </label>
                <Input id="dueDate" type="date" />
              </div>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate Invoice
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
