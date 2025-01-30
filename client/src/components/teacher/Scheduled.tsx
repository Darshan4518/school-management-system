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
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Eye, Plus } from "lucide-react";

const scheduleItems = [
  {
    id: 1,
    subject: "Mathematics",
    grade: "10th",
    time: "09:00 AM - 10:30 AM",
    room: "Room 101",
  },
  {
    id: 2,
    subject: "Physics",
    grade: "11th",
    time: "11:00 AM - 12:30 PM",
    room: "Lab 201",
  },
  {
    id: 3,
    subject: "English Literature",
    grade: "10th",
    time: "02:00 PM - 03:30 PM",
    room: "Room 105",
  },
  {
    id: 4,
    subject: "History",
    grade: "9th",
    time: "04:00 PM - 05:30 PM",
    room: "Room 203",
  },
];

export default function Schedule() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Schedule</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
            <CardDescription>
              View your schedule in a calendar format
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={new Date()}
              onSelect={() => {}}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add to Schedule</CardTitle>
            <CardDescription>Add a new item to your schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="grade" className="text-sm font-medium">
                  Grade
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">9th Grade</SelectItem>
                    <SelectItem value="10">10th Grade</SelectItem>
                    <SelectItem value="11">11th Grade</SelectItem>
                    <SelectItem value="12">12th Grade</SelectItem>
                  </SelectContent>
                </Select>
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
                    <SelectItem value="9:00">09:00 AM - 10:30 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM - 12:30 PM</SelectItem>
                    <SelectItem value="2:00">02:00 PM - 03:30 PM</SelectItem>
                    <SelectItem value="4:00">04:00 PM - 05:30 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="room" className="text-sm font-medium">
                  Room
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="101">Room 101</SelectItem>
                    <SelectItem value="201">Lab 201</SelectItem>
                    <SelectItem value="105">Room 105</SelectItem>
                    <SelectItem value="203">Room 203</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add to Schedule
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>Your classes for today</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scheduleItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.subject}</TableCell>
                  <TableCell>{item.grade}</TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.room}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
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
