const steps = [
  { number: 1, label: "Basic Information" },
  { number: 2, label: "Choose Plan" },
  { number: 3, label: "Select Payment" },
  { number: 4, label: "Finish" },
];

interface ProgressStepperProps {
  currentStep: number;
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
  return (
    <div className="mb-8">
      <div className="relative flex justify-between gap-6">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center">
            <button
              className={`z-10 flex h-8 w-8 items-center justify-center rounded-full focus:outline-none ${
                step.number === currentStep
                  ? "border-2 border-yellow-400 bg-white"
                  : "border-2 border-gray-200 bg-white"
              }`}
              disabled={step.number !== currentStep}
            >
              <span
                className={`text-sm font-semibold ${
                  step.number === currentStep
                    ? "text-yellow-400"
                    : "text-gray-400"
                }`}
              >
                {step.number}
              </span>
            </button>

            {/* Step Label */}
            <span
              className={`mt-2 text-xs ${
                step.number === currentStep
                  ? "text-yellow-500"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </span>

            {/* Connecting Line */}
            <div
              className={`absolute top-4 h-[2px] w-[calc(25%-2rem)] ${
                currentStep ? "bg-yellow-400" : "bg-gray-200"
              }`}
              style={{ left: `calc(${index * 25}% + 2rem)` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
