import { useState } from "react";
import { AddEditCurriculumDialog } from "./AddEditCurriculumDialog";
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
import { Eye, Pencil, Trash2 } from "lucide-react";

const curriculumItems = [
  {
    id: 1,
    name: "Mathematics",
    grade: "10th",
    subject: "Mathematics",
    teacher: "John Doe",
    lastUpdated: "01/05/2023",
  },
  {
    id: 2,
    name: "English Literature",
    grade: "11th",
    subject: "English",
    teacher: "Jane Smith",
    lastUpdated: "15/04/2023",
  },
  // Add more curriculum items as needed
];

export default function CurriculumManagement() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCurriculum, setSelectedCurriculum] = useState(null);

  const handleEdit = (curriculum: any) => {
    setSelectedCurriculum(curriculum);
    setEditDialogOpen(true);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Curriculum Management</h1>
      <div className="flex items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Input placeholder="Search Curriculum" className="pl-8" />
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
        <div className="flex items-center gap-4">
          <AddEditCurriculumDialog mode="add" />
          <Button variant="outline">DOWNLOAD</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {curriculumItems.map((curriculum) => (
              <TableRow key={curriculum.id}>
                <TableCell>{curriculum.name}</TableCell>
                <TableCell>{curriculum.grade}</TableCell>
                <TableCell>{curriculum.subject}</TableCell>
                <TableCell>{curriculum.teacher}</TableCell>
                <TableCell>{curriculum.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4 text-[#F7B614]" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(curriculum)}
                  >
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

      <AddEditCurriculumDialog
        mode="edit"
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        defaultValues={selectedCurriculum}
      />
    </div>
  );
}
