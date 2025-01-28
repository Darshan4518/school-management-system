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

export function StudentTable() {
  const students = [
    {
      id: 1,
      name: "John Tripathi",
      image: "/placeholder.svg",
      class: "XI",
      rollNumber: "27",
      studentId: "05000321",
    },
    // Add more students as needed
  ];

  return (
    <div className="space-y-4">
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
          <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
            + ADD
          </Button>
          <Button variant="outline">SHIFTS</Button>
          <Button variant="outline">DOWNLOAD</Button>
          <Button variant="outline">IMPORT</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sl No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Roll number</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}.</TableCell>
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
                        ID: {student.studentId}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.rollNumber}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4 text-[#F7B614]" />
                  </Button>
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
