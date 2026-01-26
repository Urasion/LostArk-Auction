interface Props {
  children: React.ReactNode;
}
export default function DataTableToolbar({ children }: Props) {
  return <div className="flex justify-start items-center py-2">{children}</div>;
}
