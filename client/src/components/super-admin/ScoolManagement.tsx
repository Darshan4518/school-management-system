import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal, Plus, Search } from "lucide-react";

const schools = [
  {
    id: 1,
    name: "Springfield Elementary",
    location: "Springfield",
    students: 500,
    teachers: 30,
  },
  {
    id: 2,
    name: "Central High School",
    location: "Centralville",
    students: 1200,
    teachers: 80,
  },
  {
    id: 3,
    name: "Westside Academy",
    location: "West City",
    students: 800,
    teachers: 50,
  },
  {
    id: 4,
    name: "Eastwood Middle School",
    location: "Eastwood",
    students: 600,
    teachers: 40,
  },
  {
    id: 5,
    name: "Northside Primary",
    location: "North Town",
    students: 300,
    teachers: 20,
  },
];

export default function SchoolManagement() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">School Management</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>School Search and Actions</CardTitle>
          <CardDescription>
            Search for schools or add a new school to the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search schools..."
                className="w-full"
              />
            </div>
            <Button className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              Add School
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>School List</CardTitle>
          <CardDescription>
            Manage and view all schools in the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Teachers</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schools.map((school) => (
                <TableRow key={school.id}>
                  <TableCell>{school.name}</TableCell>
                  <TableCell>{school.location}</TableCell>
                  <TableCell>{school.students}</TableCell>
                  <TableCell>{school.teachers}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit School</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Delete School
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
