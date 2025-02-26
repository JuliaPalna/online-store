interface IFieldProps {
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "password" | "text" | "email" | "number" | "file" | "tel";
}

export function Field({
  name,
  label,
  type = "text",
  value,
  onChange,
}: IFieldProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
