import { useState } from "react";
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
import { Eye, Pencil, Trash2 } from "lucide-react";
import { AddEditTeacherDialog } from "../Add-Teacher";

export default function StaffManagement() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const staffMembers = [
    {
      id: 1,
      name: "John Doe",
      image: "/placeholder.svg",
      department: "Administration",
      position: "Principal",
      joiningDate: "01/07/2018",
      employeeId: "S001",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/placeholder.svg",
      department: "Human Resources",
      position: "HR Manager",
      joiningDate: "15/03/2019",
      employeeId: "S002",
    },
    // Add more staff members as needed
  ];

  const handleEdit = (staff: any) => {
    setSelectedStaff(staff);
    setEditDialogOpen(true);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Staff Management</h1>
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Input placeholder="Search Staff" className="pl-8" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">DOWNLOAD</Button>
          <Button variant="outline">IMPORT</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Joining Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffMembers.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={staff.image || "/placeholder.svg"}
                      alt={staff.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div>{staff.name}</div>
                      <div className="text-sm text-gray-500">
                        ID: {staff.employeeId}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{staff.department}</TableCell>
                <TableCell>{staff.position}</TableCell>
                <TableCell>{staff.joiningDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4 text-[#F7B614]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(staff)}
                  >
                    <Pencil className="h-4 w-4 text-[#F7B614]" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-[#F7B614]" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AddEditTeacherDialog
        mode="edit"
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        defaultValues={selectedStaff}
      />
    </div>
  );
}
