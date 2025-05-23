import { type ComponentProps } from "react";

// interface InputProps extends ComponentProps<"input"> {}
interface InputProps extends ComponentProps<"input"> {
  error?: string | null;
}

export function Input({ className = "", error, ...props }: InputProps) {
  const { value, onChange, name, type } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-transparent text-lg w-48 outline-none border border-gray-400 rounded-sm hover:border-gray-300 p-2 ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
