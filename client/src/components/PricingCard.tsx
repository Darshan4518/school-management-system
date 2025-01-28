import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isSelected?: boolean;
  onClick?: () => void;
}

export function PricingCard({
  title,
  price,
  features,
  isSelected = false,
  onClick,
}: PricingCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all hover:scale-105 ${
        isSelected ? "ring-2 ring-yellow-400" : ""
      }`}
    >
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-yellow-400" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-baseline gap-1">
        <span className="text-sm text-gray-400">₹1000</span>
        <span className="text-2xl font-bold">₹{price}</span>
      </div>
    </div>
  );
}
