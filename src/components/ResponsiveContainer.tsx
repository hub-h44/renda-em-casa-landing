
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function ResponsiveContainer({ children, className, id }: ResponsiveContainerProps) {
  return (
    <div id={id} className={cn("container mx-auto px-4 sm:px-6 lg:px-8 w-full", className)}>
      {children}
    </div>
  );
}
