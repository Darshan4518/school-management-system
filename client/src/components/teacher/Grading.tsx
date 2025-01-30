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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Eye, Pencil } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "Math Problem Set",
    subject: "Mathematics",
    dueDate: "2023-07-15",
    submitted: 28,
    graded: 20,
  },
  {
    id: 2,
    title: "Science Lab Report",
    subject: "Physics",
    dueDate: "2023-07-20",
    submitted: 25,
    graded: 15,
  },
  {
    id: 3,
    title: "English Essay",
    subject: "Literature",
    dueDate: "2023-07-18",
    submitted: 30,
    graded: 30,
  },
  {
    id: 4,
    title: "History Research Paper",
    subject: "History",
    dueDate: "2023-07-25",
    submitted: 27,
    graded: 0,
  },
];

export default function Grading() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Grading</h1>

      <Card>
        <CardHeader>
          <CardTitle>Assignment Grading Overview</CardTitle>
          <CardDescription>
            Manage and grade student submissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assignment Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Graded</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className="font-medium">
                    {assignment.title}
                  </TableCell>
                  <TableCell>{assignment.subject}</TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>{assignment.submitted}</TableCell>
                  <TableCell>{assignment.graded}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pencil className="mr-2 h-4 w-4" />
                        Grade
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Grade</CardTitle>
          <CardDescription>Quickly grade a single submission</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="assignment" className="text-sm font-medium">
                  Assignment
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select assignment" />
                  </SelectTrigger>
                  <SelectContent>
                    {assignments.map((assignment) => (
                      <SelectItem
                        key={assignment.id}
                        value={assignment.id.toString()}
                      >
                        {assignment.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="student" className="text-sm font-medium">
                  Student
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student1">Alice Johnson</SelectItem>
                    <SelectItem value="student2">Bob Smith</SelectItem>
                    <SelectItem value="student3">Charlie Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="grade" className="text-sm font-medium">
                Grade
              </label>
              <Input id="grade" type="number" placeholder="Enter grade" />
            </div>
            <div className="space-y-2">
              <label htmlFor="feedback" className="text-sm font-medium">
                Feedback
              </label>
              <Input id="feedback" placeholder="Enter feedback" />
            </div>
            <Button>Submit Grade</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
