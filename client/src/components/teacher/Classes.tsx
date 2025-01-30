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
import { Eye, FileText, Users } from "lucide-react";

const classes = [
  {
    id: 1,
    name: "Mathematics 101",
    grade: "10th",
    students: 30,
    schedule: "Mon, Wed, Fri 9:00 AM",
  },
  {
    id: 2,
    name: "Physics",
    grade: "11th",
    students: 25,
    schedule: "Tue, Thu 11:00 AM",
  },
  {
    id: 3,
    name: "Chemistry",
    grade: "10th",
    students: 28,
    schedule: "Mon, Wed 2:00 PM",
  },
  {
    id: 4,
    name: "Biology",
    grade: "9th",
    students: 32,
    schedule: "Tue, Thu 10:00 AM",
  },
];

export default function MyClasses() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Classes</h1>

      <Card>
        <CardHeader>
          <CardTitle>Class Overview</CardTitle>
          <CardDescription>
            Manage and view your assigned classes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((class_) => (
                <TableRow key={class_.id}>
                  <TableCell className="font-medium">{class_.name}</TableCell>
                  <TableCell>{class_.grade}</TableCell>
                  <TableCell>{class_.students}</TableCell>
                  <TableCell>{class_.schedule}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Lesson Plan
                      </Button>
                      <Button variant="outline" size="sm">
                        <Users className="mr-2 h-4 w-4" />
                        Students
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create New Lesson Plan
        </Button>
      </div>
    </div>
  );
}
