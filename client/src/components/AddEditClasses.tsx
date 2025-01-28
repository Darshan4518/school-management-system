import { Button } from "./ui/button";
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
import { Label } from "./ui/label";

interface AddEditClassDialogProps {
  mode: "add" | "edit";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultValues?: any;
}

export function AddEditClassDialog({
  mode,
  open,
  onOpenChange,
  defaultValues,
}: AddEditClassDialogProps) {
  const title = mode === "add" ? "Add New Class" : "Edit Class";

  const DialogTriggerButton =
    mode === "add" ? (
      <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
        + ADD CLASS
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
              <Label>Class Name</Label>
              <Input
                placeholder="Enter class name"
                defaultValue={defaultValues?.name}
              />
            </div>
            <div>
              <Label>Section</Label>
              <Input
                placeholder="Enter section"
                defaultValue={defaultValues?.section}
              />
            </div>
          </div>

          <div>
            <Label>Class Teacher</Label>
            <Select defaultValue={defaultValues?.classTeacher}>
              <SelectTrigger>
                <SelectValue placeholder="Select class teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-doe">John Doe</SelectItem>
                <SelectItem value="jane-smith">Jane Smith</SelectItem>
                <SelectItem value="robert-johnson">Robert Johnson</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Subjects</Label>
            <Input
              placeholder="Enter subjects (comma-separated)"
              defaultValue={defaultValues?.subjects?.join(", ")}
            />
          </div>

          <div>
            <Label>Total Students</Label>
            <Input
              type="number"
              placeholder="Enter total students"
              defaultValue={defaultValues?.totalStudents}
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
