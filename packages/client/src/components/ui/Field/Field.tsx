interface IFieldProps {
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: "password" | "text" | "email" | "number" | "file" | "tel";
}

export function Field({
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
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
        onBlur={onBlur}
      />
    </>
  );
}
