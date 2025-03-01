export type TStatusInformer = "error" | "info" | "success";

export interface IInformerProps {
  children: React.ReactNode;
  status: TStatusInformer;
}
