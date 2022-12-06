interface iPageTextProps {
  className?: string;
  fontSize?: any;
  color?: string;
  fontWeight?: string;
}
export const PageText: React.FC<iPageTextProps> = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};
