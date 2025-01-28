import { Eye, Pencil } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import { AddHomeworkDialog } from "../components/AddHomeWork";

export default function HomeworkPage() {
  const homework = [
    {
      id: 1,
      title: "Reproduction",
      class: "XII",
      subject: "Life Science",
      description: "Real-time meetings by Google. Using your browser Read More",
      dateAdded: "2/09/22",
      addedBy: "Ganesh Dutt",
    },
  ];

  return (
    <main className="flex-1 p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Homework</h1>
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="2022-2023" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2022">2022-2023</SelectItem>
                <SelectItem value="2023">2023-2024</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <Input placeholder="Search Homework" className="w-[300px] pl-8" />
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
            <AddHomeworkDialog />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead>Added By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {homework.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.class}</TableCell>
                  <TableCell>{item.subject}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.dateAdded}</TableCell>
                  <TableCell>{item.addedBy}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4 text-[#F7B614]" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4 text-[#F7B614]" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
