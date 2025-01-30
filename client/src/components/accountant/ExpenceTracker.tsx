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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, FileText, Plus, Search } from "lucide-react";

const expenseData = [
  { month: "Jan", amount: 30000 },
  { month: "Feb", amount: 32000 },
  { month: "Mar", amount: 34000 },
  { month: "Apr", amount: 31000 },
  { month: "May", amount: 35000 },
  { month: "Jun", amount: 36000 },
];

const recentExpenses = [
  {
    id: 1,
    date: "2023-07-15",
    category: "Supplies",
    amount: 500,
    description: "Office supplies",
  },
  {
    id: 2,
    date: "2023-07-14",
    category: "Utilities",
    amount: 1200,
    description: "Electricity bill",
  },
  {
    id: 3,
    date: "2023-07-13",
    category: "Maintenance",
    amount: 800,
    description: "HVAC repair",
  },
  {
    id: 4,
    date: "2023-07-12",
    category: "Technology",
    amount: 1500,
    description: "New laptops",
  },
  {
    id: 5,
    date: "2023-07-11",
    category: "Training",
    amount: 1000,
    description: "Staff workshop",
  },
];

export default function ExpenseTracking() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Expense Tracking</h1>

      <Card>
        <CardHeader>
          <CardTitle>Expense Overview</CardTitle>
          <CardDescription>Monthly expense trend</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={expenseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Expenses</CardTitle>
          <CardDescription>List of recent expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Input placeholder="Search expenses..." className="w-64" />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Expense
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentExpenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>${expense.amount}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      View
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
          <CardTitle>Add New Expense</CardTitle>
          <CardDescription>Record a new expense</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Date
                </label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="supplies">Supplies</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
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
                <label htmlFor="description" className="text-sm font-medium">
                  Description
                </label>
                <Input id="description" placeholder="Enter description" />
              </div>
            </div>
            <Button>
              <DollarSign className="mr-2 h-4 w-4" />
              Record Expense
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
