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
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { format } from "date-fns";
import { useState } from "react";

interface AddEditUserDialogProps {
  mode: "add" | "edit";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultValues?: any;
}

export function AddEditUserDialog({
  mode,
  open,
  onOpenChange,
  defaultValues,
}: AddEditUserDialogProps) {
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [joiningDate, setJoiningDate] = useState<Date>();
  const [sameAddress, setSameAddress] = useState(false);

  const title = mode === "add" ? "Add New User" : "Edit User";

  const DialogTriggerButton =
    mode === "add" ? (
      <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
        + ADD USER
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                defaultValue={defaultValues?.email}
              />
            </div>
            <div>
              <Label>Gender</Label>
              <Select defaultValue={defaultValues?.gender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Father's Name</Label>
              <Input
                placeholder="Enter father's name"
                defaultValue={defaultValues?.fatherName}
              />
            </div>
            <div>
              <Label>Mother's Name</Label>
              <Input
                placeholder="Enter mother's name"
                defaultValue={defaultValues?.motherName}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Date Of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {dateOfBirth ? (
                      format(dateOfBirth, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent
                    mode="single"
                    selected={dateOfBirth}
                    onSelect={setDateOfBirth}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>User Type</Label>
              <Select defaultValue={defaultValues?.userType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="accountant">Accountant</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
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
              <Label>Department</Label>
              <Input
                placeholder="Enter department"
                defaultValue={defaultValues?.department}
              />
            </div>
          </div>

          <div>
            <Label>Permanent Address</Label>
            <Textarea
              placeholder="Enter permanent address"
              defaultValue={defaultValues?.permanentAddress}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="sameAddress"
              checked={sameAddress}
              onCheckedChange={(checked: boolean) => setSameAddress(checked)}
            />
            <Label htmlFor="sameAddress">Same As Permanent Address</Label>
          </div>

          <div>
            <Label>Correspondence Address</Label>
            <Textarea
              placeholder="Enter correspondence address"
              defaultValue={
                sameAddress
                  ? defaultValues?.permanentAddress
                  : defaultValues?.correspondenceAddress
              }
              disabled={sameAddress}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Phone Number</Label>
              <Input
                placeholder="Enter phone number"
                defaultValue={defaultValues?.phoneNumber}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">RESET</Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              SAVE
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
