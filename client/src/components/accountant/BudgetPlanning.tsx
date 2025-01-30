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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Plus } from "lucide-react";
import { Badge } from "../ui/badge"; // Import Badge component

const budgetData = [
  { category: "Salaries", allocated: 500000, spent: 450000 },
  { category: "Supplies", allocated: 50000, spent: 40000 },
  { category: "Maintenance", allocated: 100000, spent: 80000 },
  { category: "Technology", allocated: 150000, spent: 130000 },
  { category: "Utilities", allocated: 80000, spent: 75000 },
];

export default function BudgetPlanning() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Budget Planning</h1>

      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
          <CardDescription>
            Current budget allocation and spending
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="allocated" fill="#8884d8" name="Allocated" />
              <Bar dataKey="spent" fill="#82ca9d" name="Spent" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Budget Allocation</CardTitle>
          <CardDescription>
            Manage budget allocation for different categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Allocated Budget</TableHead>
                <TableHead>Spent</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {budgetData.map((item) => (
                <TableRow key={item.category}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.allocated}</TableCell>
                  <TableCell>${item.spent}</TableCell>
                  <TableCell>${item.allocated - item.spent}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Adjust
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
          <CardTitle>Add New Budget Category</CardTitle>
          <CardDescription>
            Create a new budget category and allocate funds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">
                  Category Name
                </label>
                <Input id="category" placeholder="Enter category name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Allocated Amount
                </label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Input
                id="description"
                placeholder="Enter category description"
              />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Budget Approval</CardTitle>
          <CardDescription>Review and approve budget changes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Pending Approvals</p>
              <Badge>3</Badge> {/* Added Badge component */}
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Current Budget</TableHead>
                  <TableHead>Proposed Budget</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Technology</TableCell>
                  <TableCell>$150,000</TableCell>
                  <TableCell>$180,000</TableCell>
                  <TableCell className="text-green-600">+$30,000</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2">
                      Approve
                    </Button>
                    <Button variant="outline" size="sm">
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
                {/* Add more rows for other pending approvals */}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
