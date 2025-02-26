interface ITextareaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({ name, label, value, onChange }: ITextareaProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>

      <textarea id={name} name={name} value={value} onChange={onChange} />
    </>
  );
}
