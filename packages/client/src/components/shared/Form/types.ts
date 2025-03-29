export interface IFormProps {
  title?: string;
  children: React.ReactNode;
  successMessage?: string;
  disabled: boolean;
  isSuccess?: boolean;
  error: string | null;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonName?: React.ReactNode;
}
