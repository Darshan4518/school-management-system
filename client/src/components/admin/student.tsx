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
import { AddEditStudentDialog } from "./AddEditStudentDialog";

export default function StudentManagement() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      image: "/placeholder.svg",
      grade: "10th",
      section: "A",
      rollNumber: "S001",
      admissionDate: "01/09/2022",
    },
    {
      id: 2,
      name: "Bob Smith",
      image: "/placeholder.svg",
      grade: "11th",
      section: "B",
      rollNumber: "S002",
      admissionDate: "15/08/2021",
    },
    // Add more students as needed
  ];

  const handleEdit = (student: any) => {
    setSelectedStudent(student);
    setEditDialogOpen(true);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Student Management</h1>
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Input placeholder="Search Student" className="pl-8" />
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
          <AddEditStudentDialog mode="add" />
          <Button variant="outline">DOWNLOAD</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Admission Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={student.image || "/placeholder.svg"}
                      alt={student.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div>{student.name}</div>
                      <div className="text-sm text-gray-500">
                        Roll No: {student.rollNumber}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.section}</TableCell>
                <TableCell>{student.admissionDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4 text-[#F7B614]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(student)}
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

      <AddEditStudentDialog
        mode="edit"
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        defaultValues={selectedStudent}
      />
    </div>
  );
}
