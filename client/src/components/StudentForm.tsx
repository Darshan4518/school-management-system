import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar as CalendarComponent } from "./ui/calendar";
import { format } from "date-fns";
import { useState } from "react";

export function StudentForm() {
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [photo] = useState<string>("/placeholder.svg");

  return (
    <form className="space-y-6">
      <div className="flex items-center gap-4">
        <img
          src={photo || "/placeholder.svg"}
          alt="Profile photo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <Button variant="outline" type="button">
          Choose Media
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <Label htmlFor="studentName">Student Name</Label>
          <Input id="studentName" />
        </div>

        <div>
          <Label htmlFor="fatherName">Father's Name</Label>
          <Input id="fatherName" />
        </div>

        <div>
          <Label htmlFor="motherName">Mother's Name</Label>
          <Input id="motherName" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>

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
          <Label htmlFor="bloodGroup">Blood Group</Label>
          <Input id="bloodGroup" />
        </div>

        <div>
          <Label>Gender</Label>
          <RadioGroup defaultValue="male" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="others" id="others" />
              <Label htmlFor="others">Others</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="abilities">Any Abilities</Label>
          <Input id="abilities" />
        </div>

        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" />
        </div>

        <div>
          <Label htmlFor="district">District</Label>
          <Select>
            <SelectTrigger id="district">
              <SelectValue placeholder="Select district" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="central">Central Delhi</SelectItem>
              <SelectItem value="north">North Delhi</SelectItem>
              <SelectItem value="south">South Delhi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone No.</Label>
          <div className="flex">
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
              </SelectContent>
            </Select>
            <Input id="phoneNumber" className="flex-1 ml-2" />
          </div>
        </div>

        <div>
          <Label htmlFor="taxNumber">Tax Number</Label>
          <Input id="taxNumber" />
        </div>

        <div>
          <Label htmlFor="registrationNo">Registration No.</Label>
          <Input id="registrationNo" />
        </div>

        <div>
          <Label htmlFor="pincode">Pincode</Label>
          <Input id="pincode" />
        </div>

        <div>
          <Label htmlFor="state">State</Label>
          <Select>
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="up">Uttar Pradesh</SelectItem>
              <SelectItem value="hr">Haryana</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full bg-[#F7B614] text-black hover:bg-[#e5a913]">
        Save
      </Button>
    </form>
  );
}
