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
import { DollarSign, Plus, Search } from "lucide-react";

const feeStructure = [
  {
    id: 1,
    grade: "Grade 1",
    tuitionFee: 5000,
    libraryFee: 500,
    sportsFee: 300,
    totalFee: 5800,
  },
  {
    id: 2,
    grade: "Grade 2",
    tuitionFee: 5500,
    libraryFee: 500,
    sportsFee: 300,
    totalFee: 6300,
  },
  {
    id: 3,
    grade: "Grade 3",
    tuitionFee: 6000,
    libraryFee: 600,
    sportsFee: 400,
    totalFee: 7000,
  },
  {
    id: 4,
    grade: "Grade 4",
    tuitionFee: 6500,
    libraryFee: 600,
    sportsFee: 400,
    totalFee: 7500,
  },
  {
    id: 5,
    grade: "Grade 5",
    tuitionFee: 7000,
    libraryFee: 700,
    sportsFee: 500,
    totalFee: 8200,
  },
];

export default function FeesManagement() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Fees Management</h1>

      <Card>
        <CardHeader>
          <CardTitle>Fee Structure</CardTitle>
          <CardDescription>
            Manage and view the current fee structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <Input placeholder="Search grade..." className="w-64" />
              <Button>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Fee Structure
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Grade</TableHead>
                <TableHead>Tuition Fee</TableHead>
                <TableHead>Library Fee</TableHead>
                <TableHead>Sports Fee</TableHead>
                <TableHead>Total Fee</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeStructure.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.grade}</TableCell>
                  <TableCell>${fee.tuitionFee}</TableCell>
                  <TableCell>${fee.libraryFee}</TableCell>
                  <TableCell>${fee.sportsFee}</TableCell>
                  <TableCell>${fee.totalFee}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
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
          <CardTitle>Fee Collection</CardTitle>
          <CardDescription>Collect fees from students</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="studentId" className="text-sm font-medium">
                  Student ID
                </label>
                <Input id="studentId" placeholder="Enter student ID" />
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
                <label htmlFor="feeType" className="text-sm font-medium">
                  Fee Type
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select fee type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tuition">Tuition Fee</SelectItem>
                    <SelectItem value="library">Library Fee</SelectItem>
                    <SelectItem value="sports">Sports Fee</SelectItem>
                    <SelectItem value="all">All Fees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">
                  Amount
                </label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
            </div>
            <Button>
              <DollarSign className="mr-2 h-4 w-4" />
              Collect Fee
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
