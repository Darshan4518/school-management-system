import { AddEventDialog } from "../components/AddEvents";
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

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "The School holiday Starts after EID",
      date: "12/98/2022",
      totalParticipate: "10000",
      isActive: "Active",
    },
    // Add more events as needed
  ];

  return (
    <main className="flex-1 p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Events</h1>
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
              <Input placeholder="Search Events" className="w-[300px] pl-8" />
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
            <AddEventDialog />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Title</TableHead>
                <TableHead>Event Date</TableHead>
                <TableHead>Total Participate</TableHead>
                <TableHead>Is Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.totalParticipate}</TableCell>
                  <TableCell>{event.isActive}</TableCell>
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
