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
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Eye, Pencil, Plus, Trash } from "lucide-react";

const meetings = [
  {
    id: 1,
    parent: "Alice Johnson",
    student: "Bob Johnson",
    date: "2023-07-15",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: 2,
    parent: "Charlie Brown",
    student: "Lucy Brown",
    date: "2023-07-16",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    parent: "Diana Ross",
    student: "Evan Ross",
    date: "2023-07-17",
    time: "3:30 PM",
    status: "Completed",
  },
  {
    id: 4,
    parent: "Edward Norton",
    student: "Fiona Norton",
    date: "2023-07-18",
    time: "11:00 AM",
    status: "Scheduled",
  },
];

export default function ParentMeetings() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Parent Meetings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Schedule New Meeting</CardTitle>
          <CardDescription>Set up a new parent-teacher meeting</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="parent" className="text-sm font-medium">
                  Parent Name
                </label>
                <Input id="parent" placeholder="Enter parent name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="student" className="text-sm font-medium">
                  Student Name
                </label>
                <Input id="student" placeholder="Enter student name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Date
                </label>
                <Calendar
                  mode="single"
                  selected={new Date()}
                  onSelect={() => {}}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium">
                  Time
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="1:00">1:00 PM</SelectItem>
                    <SelectItem value="2:00">2:00 PM</SelectItem>
                    <SelectItem value="3:00">3:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Schedule Meeting
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Meetings</CardTitle>
          <CardDescription>
            View and manage scheduled parent-teacher meetings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parent</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meetings.map((meeting) => (
                <TableRow key={meeting.id}>
                  <TableCell className="font-medium">
                    {meeting.parent}
                  </TableCell>
                  <TableCell>{meeting.student}</TableCell>
                  <TableCell>{meeting.date}</TableCell>
                  <TableCell>{meeting.time}</TableCell>
                  <TableCell>{meeting.status}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                    </div>
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
