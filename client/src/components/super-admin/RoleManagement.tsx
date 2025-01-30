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

const roles = [
  { id: 1, name: "Super Admin", permissions: "Full Access", users: 5 },
  { id: 2, name: "School Admin", permissions: "School Management", users: 20 },
  {
    id: 3,
    name: "Teacher",
    permissions: "Class Management, Grading",
    users: 200,
  },
  {
    id: 4,
    name: "Student",
    permissions: "View Courses, Submit Assignments",
    users: 2000,
  },
  { id: 5, name: "Parent", permissions: "View Child Progress", users: 1800 },
];

export default function RoleManagement() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Role Management</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Role Search and Actions</CardTitle>
          <CardDescription>
            Search for roles or add a new role to the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search roles..."
                className="w-full"
              />
            </div>
            <Button className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              Add Role
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Role List</CardTitle>
          <CardDescription>
            Manage and view all roles in the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>{role.name}</TableCell>
                  <TableCell>{role.permissions}</TableCell>
                  <TableCell>{role.users}</TableCell>
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
                        <DropdownMenuItem>Edit Role</DropdownMenuItem>
                        <DropdownMenuItem>View Permissions</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Delete Role
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
