import { Calendar } from "lucide-react";

import { Checkbox } from "./ui/checkbox";

import { Calendar as CalendarComponent } from "./ui/calendar";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";

export function AddHomeworkDialog() {
  const [assignmentDate, setAssignmentDate] = useState<Date>();
  const [submissionDate, setSubmissionDate] = useState<Date>();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
          + ADD NEW
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Home Work</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Select Class</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xi">XI</SelectItem>
                  <SelectItem value="xii">XII</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Select Section</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Select Subject</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="science">Life Science</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Enter Title</Label>
            <Input placeholder="Enter homework title" />
          </div>

          <div>
            <Label>Enter Description</Label>
            <Textarea placeholder="Enter homework description" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Assignment Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {assignmentDate ? (
                      format(assignmentDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={assignmentDate}
                    onSelect={setAssignmentDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>Submission Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {submissionDate ? (
                      format(submissionDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={submissionDate}
                    onSelect={setSubmissionDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div>
            <Label>Enter URL</Label>
            <Input placeholder="Enter URL" />
          </div>

          <div>
            <Label>Upload File</Label>
            <div className="flex items-center gap-4">
              <Button variant="outline">Choose File</Button>
              <span className="text-sm text-gray-500">No File Chosen</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="students" />
              <Label htmlFor="students">Send SMS to Students</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="parents" />
              <Label htmlFor="parents">Send SMS to Parents</Label>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Reset</Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              ADD
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
