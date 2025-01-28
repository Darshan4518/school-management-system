import { Input } from "./ui/input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function InputField({ label, ...props }: InputFieldProps) {
  return (
    <div className="mb-4">
      <Input
        {...props}
        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
        placeholder={label}
      />
    </div>
  );
}
