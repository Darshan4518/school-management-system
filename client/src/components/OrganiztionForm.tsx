import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function OrganizationForm() {
  return (
    <form className="grid grid-cols-2 gap-8 p-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="billing-name">Billing Name</Label>
          <Input id="billing-name" />
        </div>

        <div>
          <Label htmlFor="org-website">Organization Website</Label>
          <Input id="org-website" />
        </div>

        <div>
          <Label htmlFor="timezone">Time-zone</Label>
          <Select>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ist">IST</SelectItem>
              <SelectItem value="pst">PST</SelectItem>
              <SelectItem value="est">EST</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>

        <div>
          <Label htmlFor="contact">Contact number</Label>
          <div className="flex">
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+1">+1</SelectItem>
              </SelectContent>
            </Select>
            <Input id="contact" className="flex-1 ml-2" />
          </div>
        </div>

        <div>
          <Label htmlFor="reg-number">Registration Number</Label>
          <Input id="reg-number" />
        </div>

        <div>
          <Label htmlFor="org-code">Organization Code</Label>
          <Input id="org-code" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" rows={4} />
        </div>

        <div>
          <Label htmlFor="state">State</Label>
          <Select>
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
            </SelectContent>
          </Select>
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
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="usa">USA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="pincode">Pincode</Label>
          <Input id="pincode" />
        </div>

        <div>
          <Label htmlFor="tax-number">Tax Number</Label>
          <Input id="tax-number" />
        </div>

        <div>
          <Label htmlFor="gst">GST Info</Label>
          <Input id="gst" />
        </div>

        <div>
          <Label>Upload Files</Label>
          <div className="mt-2">
            <Button variant="outline">Choose Media</Button>
          </div>
        </div>
      </div>

      <div className="col-span-2 flex justify-end">
        <Button className="bg-[#F7B614] text-black hover:bg-[#e5a913]">
          Save
        </Button>
      </div>
    </form>
  );
}
