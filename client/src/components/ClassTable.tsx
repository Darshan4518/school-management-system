import { AddEditClassDialog } from "./AddEditClasses";
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

export function ClassTable() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
    {
      id: 1,
      name: "Class 10A",
      section: "A",
      classTeacher: "John Doe",
      totalStudents: 30,
      subjects: ["Mathematics", "Science", "English"],
    },
    {
      id: 2,
      name: "Class 9B",
      section: "B",
      classTeacher: "Jane Smith",
      totalStudents: 28,
      subjects: ["History", "Geography", "Literature"],
    },
    // Add more classes as needed
  ];

  const handleEdit = (classItem: any) => {
    setSelectedClass(classItem);
    setEditDialogOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Input placeholder="Search Class" className="pl-8" />
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
          <AddEditClassDialog mode="add" />
          <Button variant="outline">DOWNLOAD</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class Name</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Class Teacher</TableHead>
              <TableHead>Total Students</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell>{classItem.name}</TableCell>
                <TableCell>{classItem.section}</TableCell>
                <TableCell>{classItem.classTeacher}</TableCell>
                <TableCell>{classItem.totalStudents}</TableCell>
                <TableCell>{classItem.subjects.join(", ")}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4 text-[#F7B614]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(classItem)}
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

      <AddEditClassDialog
        mode="edit"
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        defaultValues={selectedClass}
      />
    </div>
  );
}
