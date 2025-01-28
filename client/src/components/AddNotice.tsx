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
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";

export function AddNoticeDialog() {
  const [linkType, setLinkType] = useState("attachment");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
          + ADD NEW
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Notice</DialogTitle>
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
            <Label>Enter Title</Label>
            <Input placeholder="Enter notice title" />
          </div>

          <div>
            <Label>Enter Notice</Label>
            <Textarea placeholder="Enter notice content" />
          </div>

          <div>
            <Label>Link To</Label>
            <RadioGroup
              value={linkType}
              onValueChange={setLinkType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="attachment" id="attachment" />
                <Label htmlFor="attachment">Attachment</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="url" id="url" />
                <Label htmlFor="url">URL</Label>
              </div>
            </RadioGroup>
          </div>

          {linkType === "url" ? (
            <div>
              <Label>Notice URL</Label>
              <Input placeholder="Enter URL" />
            </div>
          ) : (
            <div>
              <Label>Upload File</Label>
              <div className="flex items-center gap-4">
                <Button variant="outline">Choose File</Button>
                <span className="text-sm text-gray-500">No File Chosen</span>
              </div>
            </div>
          )}

          <div>
            <Label>Status</Label>
            <RadioGroup defaultValue="unapproved" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="approved" id="notice-approved" />
                <Label htmlFor="notice-approved">Approved</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unapproved" id="notice-unapproved" />
                <Label htmlFor="notice-unapproved">Unapproved</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">RESET</Button>
            <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
              ADD
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
