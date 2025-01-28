import { AddEditTeacherDialog } from "./Add-Teacher";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

export function TeacherTable() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    {
      id: 1,
      name: "John Doe",
      image: "/placeholder.svg",
      department: "Mathematics",
      designation: "Senior Teacher",
      joiningDate: "01/09/2020",
      employeeId: "T001",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/placeholder.svg",
      department: "Science",
      designation: "Head of Department",
      joiningDate: "15/03/2019",
      employeeId: "T002",
    },
    // Add more teachers as needed
  ];

  const handleEdit = (teacher: any) => {
    setSelectedTeacher(teacher);
    setEditDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Input placeholder="Search Teacher" className="pl-8" />
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
          <AddEditTeacherDialog mode="add" />
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
              <TableHead>Designation</TableHead>
              <TableHead>Joining Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div>{teacher.name}</div>
                      <div className="text-sm text-gray-500">
                        ID: {teacher.employeeId}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{teacher.department}</TableCell>
                <TableCell>{teacher.designation}</TableCell>
                <TableCell>{teacher.joiningDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4 text-[#F7B614]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(teacher)}
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
        defaultValues={selectedTeacher}
      />
    </div>
  );
}
