import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calendar } from "../ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { MoreHorizontal, Plus, Search } from "lucide-react";

// Sample data for class schedules
const classSchedules = [
  {
    id: 1,
    className: "Mathematics 101",
    teacher: "John Doe",
    day: "Monday",
    time: "09:00 AM - 10:30 AM",
    room: "Room 101",
  },
  {
    id: 2,
    className: "English Literature",
    teacher: "Jane Smith",
    day: "Tuesday",
    time: "11:00 AM - 12:30 PM",
    room: "Room 202",
  },
  {
    id: 3,
    className: "Physics",
    teacher: "Alan Turing",
    day: "Wednesday",
    time: "02:00 PM - 03:30 PM",
    room: "Lab 301",
  },
  {
    id: 4,
    className: "History",
    teacher: "Mary Johnson",
    day: "Thursday",
    time: "10:00 AM - 11:30 AM",
    room: "Room 105",
  },
  {
    id: 5,
    className: "Computer Science",
    teacher: "Bob Wilson",
    day: "Friday",
    time: "01:00 PM - 02:30 PM",
    room: "Computer Lab",
  },
];

// Sample data for teacher schedules
const teacherSchedules = [
  {
    id: 1,
    teacherName: "John Doe",
    subject: "Mathematics",
    day: "Monday",
    time: "09:00 AM - 10:30 AM",
    room: "Room 101",
  },
  {
    id: 2,
    teacherName: "Jane Smith",
    subject: "English Literature",
    day: "Tuesday",
    time: "11:00 AM - 12:30 PM",
    room: "Room 202",
  },
  {
    id: 3,
    teacherName: "Alan Turing",
    subject: "Physics",
    day: "Wednesday",
    time: "02:00 PM - 03:30 PM",
    room: "Lab 301",
  },
  {
    id: 4,
    teacherName: "Mary Johnson",
    subject: "History",
    day: "Thursday",
    time: "10:00 AM - 11:30 AM",
    room: "Room 105",
  },
  {
    id: 5,
    teacherName: "Bob Wilson",
    subject: "Computer Science",
    day: "Friday",
    time: "01:00 PM - 02:30 PM",
    room: "Computer Lab",
  },
];

export default function ScheduleManagement() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Schedule Management</h1>

      <Tabs defaultValue="classes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="classes">Class Schedules</TabsTrigger>
          <TabsTrigger value="teachers">Teacher Schedules</TabsTrigger>
        </TabsList>

        <TabsContent value="classes">
          <Card>
            <CardHeader>
              <CardTitle>Class Schedules</CardTitle>
              <CardDescription>
                Manage and view all class schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <Input placeholder="Search classes..." className="w-64" />
                  <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Class Schedule
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add Class Schedule</DialogTitle>
                      <DialogDescription>
                        Create a new class schedule. Click save when you're
                        done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="className" className="text-right">
                          Class Name
                        </Label>
                        <Input id="className" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="teacher" className="text-right">
                          Teacher
                        </Label>
                        <Input id="teacher" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="day" className="text-right">
                          Day
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a day" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monday">Monday</SelectItem>
                            <SelectItem value="tuesday">Tuesday</SelectItem>
                            <SelectItem value="wednesday">Wednesday</SelectItem>
                            <SelectItem value="thursday">Thursday</SelectItem>
                            <SelectItem value="friday">Friday</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                          Time
                        </Label>
                        <Input
                          id="time"
                          className="col-span-3"
                          placeholder="e.g., 09:00 AM - 10:30 AM"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="room" className="text-right">
                          Room
                        </Label>
                        <Input id="room" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class Name</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Day</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classSchedules.map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell>{schedule.className}</TableCell>
                      <TableCell>{schedule.teacher}</TableCell>
                      <TableCell>{schedule.day}</TableCell>
                      <TableCell>{schedule.time}</TableCell>
                      <TableCell>{schedule.room}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit Schedule</DropdownMenuItem>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              Delete Schedule
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teachers">
          <Card>
            <CardHeader>
              <CardTitle>Teacher Schedules</CardTitle>
              <CardDescription>
                Manage and view all teacher schedules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <Input placeholder="Search teachers..." className="w-64" />
                  <Button>
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Teacher Schedule
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add Teacher Schedule</DialogTitle>
                      <DialogDescription>
                        Create a new teacher schedule. Click save when you're
                        done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="teacherName" className="text-right">
                          Teacher Name
                        </Label>
                        <Input id="teacherName" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject" className="text-right">
                          Subject
                        </Label>
                        <Input id="subject" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="day" className="text-right">
                          Day
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select a day" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monday">Monday</SelectItem>
                            <SelectItem value="tuesday">Tuesday</SelectItem>
                            <SelectItem value="wednesday">Wednesday</SelectItem>
                            <SelectItem value="thursday">Thursday</SelectItem>
                            <SelectItem value="friday">Friday</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">
                          Time
                        </Label>
                        <Input
                          id="time"
                          className="col-span-3"
                          placeholder="e.g., 09:00 AM - 10:30 AM"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="room" className="text-right">
                          Room
                        </Label>
                        <Input id="room" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Teacher Name</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Day</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teacherSchedules.map((schedule) => (
                    <TableRow key={schedule.id}>
                      <TableCell>{schedule.teacherName}</TableCell>
                      <TableCell>{schedule.subject}</TableCell>
                      <TableCell>{schedule.day}</TableCell>
                      <TableCell>{schedule.time}</TableCell>
                      <TableCell>{schedule.room}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit Schedule</DropdownMenuItem>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              Delete Schedule
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Calendar View</CardTitle>
          <CardDescription>View schedules in a calendar format</CardDescription>
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
    </div>
  );
}
