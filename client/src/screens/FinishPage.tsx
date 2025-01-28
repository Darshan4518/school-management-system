import { useState } from "react";
import { ProgressStepper } from "../components/ProgressStepper";
import { InputField } from "../components/InputField";
import { Link } from "react-router";

export default function FinishPage() {
  const [licanaceKey, setLicenceKey] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-4xl my-10">
        <h1 className="mb-6 text-3xl font-bold">Setup your Account</h1>
        <ProgressStepper currentStep={4} />

        <h3 className="mb-6 text-3xl font-bold">Almost Done</h3>

        <div className=" flex w-full">
          <div className="mb-8 space-y-4">
            <InputField
              label="Enter Your Lincence Number"
              value={licanaceKey}
              onChange={(e) => setLicenceKey(e.target.value)}
            />
            <button className="w-full rounded-lg border border-yellow-400 px-6 py-2 text-sm font-medium text-yellow-600 hover:bg-yellow-50">
              Activate
            </button>
            <p className="text-sm text-gray-500">
              Check Your mail and paste the code
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="rounded-lg border border-gray-200 px-8 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            Skip
          </button>
          <Link to={"/dashboard"}>
            <button className="rounded-lg bg-yellow-400 px-8 py-2 text-sm font-medium text-white hover:bg-yellow-500">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
