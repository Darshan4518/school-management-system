import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Checkbox } from "../ui/checkbox";
import { Calendar } from "../ui/calendar";

const students = [
  { id: 1, name: "Alice Johnson", grade: "10th" },
  { id: 2, name: "Bob Smith", grade: "10th" },
  { id: 3, name: "Charlie Brown", grade: "10th" },
  { id: 4, name: "Diana Ross", grade: "10th" },
  { id: 5, name: "Edward Norton", grade: "10th" },
];

export default function Attendance() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Attendance</h1>

      <div className="flex space-x-4">
        <Card className="w-fit">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card className="flex-grow">
          <CardHeader>
            <CardTitle>Mark Attendance</CardTitle>
            <CardDescription>For Mathematics 101, Grade 10</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Present</TableHead>
                  <TableHead>Absent</TableHead>
                  <TableHead>Late</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end">
              <Button>Save Attendance</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendance Summary</CardTitle>
          <CardDescription>
            Overview of attendance for the current month
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add a chart or summary statistics here */}
          <p>Attendance summary visualization will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
