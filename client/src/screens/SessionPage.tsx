import { Calendar, Pencil, Trash2 } from "lucide-react";

import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { Calendar as CalendarComponent } from "../components/ui/calendar";
import { AddSessionForm } from "../components/AddSessionForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useState } from "react";

export function SessionsTable() {
  const sessions = [
    {
      id: 1,
      name: "John Tripathi",
      department: "Administration",
      startDate: "05/06/2023",
      endDate: "Administration",
    },
    {
      id: 2,
      name: "John Tripathi",
      department: "Administration",
      startDate: "05/06/2023",
      endDate: "Administration",
    },
    {
      id: 3,
      name: "John Tripathi",
      department: "Administration",
      startDate: "05/06/2023",
      endDate: "Administration",
    },
    {
      id: 4,
      name: "John Tripathi",
      department: "Administration",
      startDate: "05/06/2023",
      endDate: "Administration",
    },
    {
      id: 5,
      name: "John Tripathi",
      department: "Administration",
      startDate: "05/06/2023",
      endDate: "Administration",
    },
  ];

  const [date, setDate] = useState<Date>();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Sessions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sessions</SelectItem>
            <SelectItem value="active">Active Sessions</SelectItem>
            <SelectItem value="completed">Completed Sessions</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <Input placeholder="Search Sessions" className="pl-8" />
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
      </div>

      <div className="flex items-center gap-4">
        <Input placeholder="Enter Sessions Level" className="max-w-xs" />

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[200px] justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Start Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[200px] justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>End Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <AddSessionForm />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sl No.</TableHead>
              <TableHead>Sessions</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell>{session.id}.</TableCell>
                <TableCell>
                  <div>
                    <div>{session.name}</div>
                    <div className="text-sm text-gray-500">
                      ID: 05000{session.id}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{session.department}</TableCell>
                <TableCell>{session.endDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
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
    </div>
  );
}
