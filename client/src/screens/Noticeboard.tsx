import { AddNoticeDialog } from "../components/AddNotice";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Eye, Pencil } from "lucide-react";

export default function NoticeBoardPage() {
  const notices = [
    {
      id: 1,
      notice: "The School holiday Starts after EID",
      linkTo: "https://www.news18.com",
      isActive: "ACTIVE",
      date: "14/02/2001",
      addedBy: "Admin",
    },
    // Add more notices as needed
  ];

  return (
    <main className="flex-1 p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">NoticeBoard</h1>
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
              <Input
                placeholder="Search Noticeboard"
                className="w-[300px] pl-8"
              />
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
            <AddNoticeDialog />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Notice</TableHead>
                <TableHead>Link To</TableHead>
                <TableHead>Is Active</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Added By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notices.map((notice) => (
                <TableRow key={notice.id}>
                  <TableCell>{notice.notice}</TableCell>
                  <TableCell>{notice.linkTo}</TableCell>
                  <TableCell>{notice.isActive}</TableCell>
                  <TableCell>{notice.date}</TableCell>
                  <TableCell>{notice.addedBy}</TableCell>
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
