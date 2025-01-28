import { Pencil, Trash2, Users } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { AddClassForm } from "./AddClassForm";

export function ClassDataTable() {
  const classes = [
    {
      id: 1,
      name: "Class 1A",
      section: "A",
      classTeacher: "John Doe",
      totalStudents: 30,
      subjects: ["Mathematics", "Science", "English"],
    },
    {
      id: 2,
      name: "Class 2B",
      section: "B",
      classTeacher: "Jane Smith",
      totalStudents: 28,
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
    },
    {
      id: 3,
      name: "Class 3C",
      section: "C",
      classTeacher: "Robert Johnson",
      totalStudents: 32,
      subjects: ["Mathematics", "Science", "English", "Art"],
    },
    {
      id: 4,
      name: "Class 4A",
      section: "A",
      classTeacher: "Emily Brown",
      totalStudents: 29,
      subjects: ["Mathematics", "Science", "English", "Physical Education"],
    },
    {
      id: 5,
      name: "Class 5B",
      section: "B",
      classTeacher: "Michael Wilson",
      totalStudents: 31,
      subjects: ["Mathematics", "Science", "English", "Computer Science"],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="All Classes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="primary">Primary Classes</SelectItem>
              <SelectItem value="secondary">Secondary Classes</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1">
            <Input placeholder="Search Classes" className="pl-8" />
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
        </div>

        <AddClassForm />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sl No.</TableHead>
              <TableHead>Class Name</TableHead>
              <TableHead>Class Teacher</TableHead>
              <TableHead>Total Students</TableHead>
              <TableHead>Subjects</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((classItem) => (
              <TableRow key={classItem.id}>
                <TableCell>{classItem.id}.</TableCell>
                <TableCell>
                  <div>
                    <div>{classItem.name}</div>
                    <div className="text-sm text-gray-500">
                      Section: {classItem.section}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{classItem.classTeacher}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    {classItem.totalStudents}
                  </div>
                </TableCell>
                <TableCell>{classItem.subjects.join(", ")}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
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
    </div>
  );
}
