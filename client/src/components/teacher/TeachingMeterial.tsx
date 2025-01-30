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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Eye, Download, Pencil, Trash, Upload } from "lucide-react";

const materials = [
  {
    id: 1,
    name: "Math Lesson Plan",
    type: "Document",
    subject: "Mathematics",
    uploadDate: "2023-07-01",
  },
  {
    id: 2,
    name: "Physics Lab Guide",
    type: "PDF",
    subject: "Physics",
    uploadDate: "2023-07-05",
  },
  {
    id: 3,
    name: "Literature Analysis",
    type: "Presentation",
    subject: "English",
    uploadDate: "2023-07-08",
  },
  {
    id: 4,
    name: "Historical Timeline",
    type: "Image",
    subject: "History",
    uploadDate: "2023-07-10",
  },
];

export default function TeachingMaterials() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Teaching Materials</h1>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Material</CardTitle>
          <CardDescription>
            Add a new teaching material to your repository
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Material Name
                </label>
                <Input id="name" placeholder="Enter material name" />
              </div>
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
            </div>
            <div className="space-y-2">
              <label htmlFor="file" className="text-sm font-medium">
                File
              </label>
              <Input id="file" type="file" />
            </div>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload Material
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Teaching Materials Library</CardTitle>
          <CardDescription>
            Manage and access your teaching materials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.name}</TableCell>
                  <TableCell>{material.type}</TableCell>
                  <TableCell>{material.subject}</TableCell>
                  <TableCell>{material.uploadDate}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
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
