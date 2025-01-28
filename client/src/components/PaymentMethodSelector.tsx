import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
}

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  selected: string;
  onSelect: (id: string) => void;
}

export function PaymentMethodSelector({
  methods,
  selected,
  onSelect,
}: PaymentMethodSelectorProps) {
  return (
    <RadioGroup
      defaultValue={selected}
      onValueChange={onSelect}
      className="flex flex-col gap-4"
    >
      {methods.map((method) => (
        <Label
          key={method.id}
          className={`flex cursor-pointer items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-gray-50 ${
            selected === method.id
              ? "border-yellow-400 bg-yellow-50"
              : "border-gray-200"
          }`}
        >
          <RadioGroupItem value={method.id} id={method.id} />
          <img
            src={method.logo || "/placeholder.svg"}
            alt={method.name}
            width={80}
            height={32}
            className="h-8 w-20 object-contain"
          />
        </Label>
      ))}
    </RadioGroup>
  );
}
