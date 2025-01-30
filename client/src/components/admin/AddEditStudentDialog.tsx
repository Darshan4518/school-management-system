import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Plus } from "lucide-react";

interface AddEditStudentDialogProps {
  mode: "add" | "edit";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultValues?: any;
}

export function AddEditStudentDialog({
  mode,
  open,
  onOpenChange,
  defaultValues,
}: AddEditStudentDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {mode === "add" && (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Student" : "Edit Student"}
          </DialogTitle>
          <DialogDescription>
            {mode === "add"
              ? "Add a new student to the system."
              : "Edit student information."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={defaultValues?.name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="grade" className="text-right">
              Grade
            </Label>
            <Input
              id="grade"
              defaultValue={defaultValues?.grade}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="section" className="text-right">
              Section
            </Label>
            <Input
              id="section"
              defaultValue={defaultValues?.section}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rollNumber" className="text-right">
              Roll Number
            </Label>
            <Input
              id="rollNumber"
              defaultValue={defaultValues?.rollNumber}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            {mode === "add" ? "Add Student" : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
