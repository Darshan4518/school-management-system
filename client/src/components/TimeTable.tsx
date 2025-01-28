import { Button } from "./ui/button";
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
import { Pencil, Trash2 } from "lucide-react";

export function TimeTable() {
  const timetable = [
    {
      id: 1,
      day: "Monday",
      period: "1st",
      subject: "Mathematics",
      teacher: "John Doe",
      time: "08:00 - 09:00",
    },
    {
      id: 2,
      day: "Monday",
      period: "2nd",
      subject: "Science",
      teacher: "Jane Smith",
      time: "09:00 - 10:00",
    },
    {
      id: 3,
      day: "Tuesday",
      period: "1st",
      subject: "English",
      teacher: "Alice Johnson",
      time: "08:00 - 09:00",
    },
    // Add more timetable entries as needed
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Time Table</h2>
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
          <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
            + Add Time Slot
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {timetable.map((slot) => (
              <TableRow key={slot.id}>
                <TableCell>{slot.day}</TableCell>
                <TableCell>{slot.period}</TableCell>
                <TableCell>{slot.subject}</TableCell>
                <TableCell>{slot.teacher}</TableCell>
                <TableCell>{slot.time}</TableCell>
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
