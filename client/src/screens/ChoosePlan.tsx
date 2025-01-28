import { useState } from "react";
import { ProgressStepper } from "../components/ProgressStepper";
import { PricingCard } from "../components/PricingCard";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

const features = [
  "Information Features 1",
  "Information Features 2",
  "Information Features 2",
  "Information Features 2",
  "Information Features 2",
];

const plans = [
  { title: "Free", price: 1000, features },
  { title: "Basic", price: 4000, features },
  { title: "Standard", price: 6000, features },
  { title: "Premium", price: 8000, features },
];

export default function ChoosePlanPage() {
  const [billingCycle, setBillingCycle] = useState("Yearly");
  const [selectedPlan, setSelectedPlan] = useState("Standard");

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-6xl my-10">
        <h1 className="mb-6 text-3xl font-bold">Setup your Account</h1>
        <ProgressStepper currentStep={2} />
        <div className="w-full flex items-center justify-end gap-3 mb-10">
          <Button
            variant={"outline"}
            className={` rounded-3xl px-5 ${
              billingCycle == "Standard" ? "bg-yellow-500" : ""
            } `}
            onClick={() => setBillingCycle("Standard")}
          >
            Standard
          </Button>
          <Button
            variant={"outline"}
            className={` rounded-3xl px-5 ${
              billingCycle == "Yearly" ? "bg-yellow-500" : ""
            } `}
            onClick={() => setBillingCycle("Yearly")}
          >
            Yearly
          </Button>
        </div>
        <div className="mb-8 grid gap-6 md:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              isSelected={selectedPlan === plan.title}
              onClick={() => setSelectedPlan(plan.title)}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <button className="rounded-lg border border-gray-200 px-8 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
            Skip
          </button>
          <Link to={"/payment"}>
            <button className="rounded-lg bg-yellow-400 px-8 py-2 text-sm font-medium text-white hover:bg-yellow-500">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
