import { useState } from "react";

export function useForm(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  function validate(value: string) {
    if (value.length === 0) {
      setError("Campo obrigatório");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validate(event.target.value);
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
    validate: () => validate(value),
    error,
  };
}
