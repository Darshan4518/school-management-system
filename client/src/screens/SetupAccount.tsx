import "rc-steps/assets/index.css";
import { InputField } from "../components/InputField";
import { Link } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const SetupAccount = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-4xl my-10">
        <h1 className="mb-6 text-3xl font-bold">Setup your Account</h1>
        <form className="grid grid-cols-2 gap-4">
          <InputField label="First Name" type="text" />
          <InputField label="Last Name" type="text" />
          <InputField
            label="Email Address"
            type="email"
            className="col-span-2"
          />
          <InputField label="Phone Number" type="tel" className="col-span-2" />
          <Select>
            <SelectTrigger className="w-[180px] col-span-2 ">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Teacher">Teacher</SelectItem>
              <SelectItem value="Accountent">Accountent</SelectItem>
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Parent">Parent</SelectItem>
            </SelectContent>
          </Select>
          <InputField label="Password" type="password" className="col-span-2" />
        </form>

        <div className="flex justify-between">
          <button className="rounded-lg border border-gray-200 px-8 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            Skip
          </button>
          <Link to={"/choose-plan"}>
            <button className="rounded-lg bg-yellow-400 px-8 py-2 text-sm font-medium text-white hover:bg-yellow-500">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SetupAccount;
