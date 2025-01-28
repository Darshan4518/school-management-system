import { useState } from "react";
import { ProgressStepper } from "../components/ProgressStepper";
import { InputField } from "../components/InputField";
import { PaymentMethodSelector } from "../components/PaymentMethodSelector";
import { Link } from "react-router";

const paymentMethods = [
  {
    id: "gpay",
    name: "Google Pay",
    logo: "https://i0.wp.com/taxconcept.net/wp-content/uploads/2021/12/Google-Pay-4_5d8472821722c_1589536494425_1589536494709_1625826806470.jpg?fit=1600%2C899&ssl=1",
  },
  {
    id: "paytm",
    name: "Paytm",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_-KDq2xRVIU8DQBgQwpQ1_u1Qd7ysvLIO0qcsU4uwtRXFUsx5HC-XYR4yC21NhNGqf4&usqp=CAU",
  },
  {
    id: "visa",
    name: "Visa",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOsJUPXMDaZXyJA2PxFYv2gEVkGofB0fsyQ&s",
  },
];

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("gpay");
  const [upiId, setUpiId] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-4xl my-10">
        <h1 className="mb-6 text-3xl font-bold">Setup your Account</h1>
        <ProgressStepper currentStep={3} />

        <div className=" flex justify-evenly items-center w-full">
          <div className="">
            <h2 className="mb-6 text-xl font-semibold">
              Choose Payment Method
            </h2>
            <PaymentMethodSelector
              methods={paymentMethods}
              selected={selectedMethod}
              onSelect={setSelectedMethod}
            />
          </div>

          {selectedMethod === "gpay" && (
            <div className="mb-8 space-y-4">
              <InputField
                label="Enter Your UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <p className="text-sm text-gray-500">
                Check Your Phone and confirm to Pay the Payment
              </p>
              <button className="w-full rounded-lg border border-yellow-400 px-6 py-2 text-sm font-medium text-yellow-600 hover:bg-yellow-50">
                Confirm
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button className="rounded-lg border border-gray-200 px-8 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            Skip
          </button>
          <Link to={"/finish"}>
            <button className="rounded-lg bg-yellow-400 px-8 py-2 text-sm font-medium text-white hover:bg-yellow-500">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
