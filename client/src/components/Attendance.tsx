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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

export function Attendance() {
  const students = [
    { id: 1, name: "John Doe", rollNumber: "001", present: true },
    { id: 2, name: "Jane Smith", rollNumber: "002", present: false },
    { id: 3, name: "Alice Johnson", rollNumber: "003", present: true },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Attendance</h2>
        <div className="flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="class10">Class 10</SelectItem>
              <SelectItem value="class11">Class 11</SelectItem>
              <SelectItem value="class12">Class 12</SelectItem>
            </SelectContent>
          </Select>
          <Input type="date" className="w-[200px]" />
          <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
            Save Attendance
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll Number</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead className="text-center">Present</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.rollNumber}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell className="text-center">
                  <Checkbox checked={student.present} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
