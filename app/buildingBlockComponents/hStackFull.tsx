import HStack from "./hStack";

export default function HStackFull({
  children,
  className,
  gap,
  onClick,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <HStack
      className={`w-full ${gap} ${className}`}
      onClick={onClick}
      style={{ ...style, fontSize: "inherit" }}
    >
      {children}
    </HStack>
  );
}
