import { Input } from "./ui/input";

const Register = () => {
  return (
    <div className=" w-full">
      {/* Form */}
      <form className="w-full max-w-md space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-500 "
          >
            Enter Email Address
          </label>
          <Input
            type="email"
            id="email"
            className="mt-1 block w-full ring-0"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label
            htmlFor="organization"
            className="block text-sm font-medium text-gray-500"
          >
            Enter Your Organization Name
          </label>
          <Input
            type="text"
            id="organization"
            className="mt-1 block w-full"
            placeholder="Organization Name"
          />
        </div>
        <div>
          <label
            htmlFor="school"
            className="block text-sm font-medium text-gray-500"
          >
            Enter Your School Name
          </label>
          <Input
            type="text"
            id="school"
            className="mt-1 block w-full"
            placeholder="School Name"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
