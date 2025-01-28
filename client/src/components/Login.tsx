import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Login = () => {
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
            htmlFor="password"
            className="block text-sm font-medium text-gray-500"
          >
            Enter Your Password
          </label>
          <Input
            type="text"
            id="password"
            className="mt-1 block w-full"
            placeholder="Password"
          />
        </div>

        <div className=" my-5">
          <Button variant={"link"} className=" text-blue-400 underline">
            Forget Password
          </Button>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
