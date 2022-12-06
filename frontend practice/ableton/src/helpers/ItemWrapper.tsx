export interface iPageItemProps {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  justifyContent?: string;
  borderTop?: string;
  padding?: string;
}
export const PageItemWrapper: React.FC<iPageItemProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};
