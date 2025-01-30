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

interface AddEditCurriculumDialogProps {
  mode: "add" | "edit";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultValues?: any;
}

export function AddEditCurriculumDialog({
  mode,
  open,
  onOpenChange,
  defaultValues,
}: AddEditCurriculumDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {mode === "add" && (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Curriculum
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Curriculum" : "Edit Curriculum"}
          </DialogTitle>
          <DialogDescription>
            {mode === "add"
              ? "Add a new curriculum to the system."
              : "Edit curriculum information."}
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
            <Label htmlFor="subject" className="text-right">
              Subject
            </Label>
            <Input
              id="subject"
              defaultValue={defaultValues?.subject}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="teacher" className="text-right">
              Teacher
            </Label>
            <Input
              id="teacher"
              defaultValue={defaultValues?.teacher}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            {mode === "add" ? "Add Curriculum" : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
