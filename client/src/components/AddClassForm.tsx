import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export function AddClassForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
          + Add New Class
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Class</DialogTitle>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="className">Class Name</Label>
              <Input id="className" />
            </div>
            <div>
              <Label htmlFor="section">Section</Label>
              <Input id="section" />
            </div>
          </div>

          <div>
            <Label htmlFor="classTeacher">Class Teacher</Label>
            <Select>
              <SelectTrigger id="classTeacher">
                <SelectValue placeholder="Select teacher" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="teacher1">Teacher 1</SelectItem>
                <SelectItem value="teacher2">Teacher 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="subjects">Subjects</Label>
            <Select>
              <SelectTrigger id="subjects">
                <SelectValue placeholder="Select subjects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" />
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#F7B614] text-black hover:bg-[#e5a913]"
            >
              Save Class
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
