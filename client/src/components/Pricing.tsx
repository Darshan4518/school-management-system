import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check, X } from "lucide-react";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: number;
  features: PlanFeature[];
  current?: boolean;
}

export function PricingPlans() {
  const plans: Plan[] = [
    {
      name: "Basic",
      price: 1500,
      current: true,
      features: [
        { name: "Student Management", included: true },
        { name: "Attendance Tracking", included: true },
        { name: "Parent Communication", included: false },
        { name: "Report Generation", included: false },
        { name: "Custom Timetables", included: false },
      ],
    },
    {
      name: "Standard",
      price: 3000,
      features: [
        { name: "Student Management", included: true },
        { name: "Attendance Tracking", included: true },
        { name: "Parent Communication", included: true },
        { name: "Report Generation", included: true },
        { name: "Custom Timetables", included: false },
      ],
    },
    {
      name: "Premium",
      price: 5000,
      features: [
        { name: "Student Management", included: true },
        { name: "Attendance Tracking", included: true },
        { name: "Parent Communication", included: true },
        { name: "Report Generation", included: true },
        { name: "Custom Timetables", included: true },
      ],
    },
  ];

  return (
    <div className="space-y-6 relative">
      <div>
        <h2 className="text-2xl font-bold">Your Current Plan: Basic</h2>
        <p className="text-lg">Your Payment Method: UPI</p>
        <div className="mt-2 text-yellow-600">
          Dear User, your account will be changed after 23 days
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.current ? "border-[#F7B614]" : ""}
          >
            {plan.current && (
              <div className="absolute right-4 top-4 rounded-full bg-[#F7B614] px-2 py-1 text-xs text-black">
                Your Current Plan
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-[#F7B614]" />
                    ) : (
                      <X className="h-4 w-4 text-gray-300" />
                    )}
                    <span>{feature.name}</span>
                  </div>
                ))}
                <Button
                  variant="link"
                  className="px-0 text-[#F7B614] hover:text-[#e5a913]"
                >
                  Know More Features
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">₹{plan.price}</span>
                <span className="text-sm text-gray-500 line-through">
                  ₹1000
                </span>
              </div>
              {!plan.current && (
                <Button className="w-full bg-[#F7B614] text-black hover:bg-[#e5a913]">
                  Upgrade Now
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
