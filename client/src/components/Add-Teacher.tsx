import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { format } from "date-fns";
import { useState } from "react";

interface AddEditTeacherDialogProps {
  mode: "add" | "edit";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultValues?: any;
}

export function AddEditTeacherDialog({
  mode,
  open,
  onOpenChange,
  defaultValues,
}: AddEditTeacherDialogProps) {
  const [joiningDate, setJoiningDate] = useState<Date>();

  const title = mode === "add" ? "Add New Teacher" : "Edit Teacher";

  const DialogTriggerButton =
    mode === "add" ? (
      <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
        + ADD TEACHER
      </Button>
    ) : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {DialogTriggerButton && (
        <DialogTrigger asChild>{DialogTriggerButton}</DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First Name</Label>
              <Input
                placeholder="Enter first name"
                defaultValue={defaultValues?.firstName}
              />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input
                placeholder="Enter last name"
                defaultValue={defaultValues?.lastName}
              />
            </div>
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter email"
              defaultValue={defaultValues?.email}
            />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input
              placeholder="Enter phone number"
              defaultValue={defaultValues?.phoneNumber}
            />
          </div>

          <div>
            <Label>Department</Label>
            <Select defaultValue={defaultValues?.department}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Designation</Label>
            <Input
              placeholder="Enter designation"
              defaultValue={defaultValues?.designation}
            />
          </div>

          <div>
            <Label>Joining Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {joiningDate ? (
                    format(joiningDate, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={joiningDate}
                  onSelect={setJoiningDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>Qualifications</Label>
            <Textarea
              placeholder="Enter qualifications"
              defaultValue={defaultValues?.qualifications}
            />
          </div>

          <div>
            <Label>Address</Label>
            <Textarea
              placeholder="Enter address"
              defaultValue={defaultValues?.address}
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
