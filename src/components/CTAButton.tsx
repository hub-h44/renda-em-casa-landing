
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
  pulse?: boolean;
  arrow?: boolean;
  onClick?: () => void;
}

export function CTAButton({ 
  children, 
  className, 
  size = "default", 
  pulse = false,
  arrow = true,
  onClick 
}: CTAButtonProps) {
  const ctaUrl = "https://pay.kiwify.com.br/sUqnazH?afid=oKKz1xM8?utm_source=landingpage&utm_medium=cta&utm_campaign=sua_renda";

  // Wrap with an anchor if no onClick is provided
  const buttonElement = (
    <Button
      className={cn(
        "bg-primary hover:bg-renda-dark text-black font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
        pulse && "animate-pulse-gold",
        size === "sm" && "text-sm py-2 px-4",
        size === "lg" && "text-xl py-4 px-8 uppercase tracking-wider",
        className
      )}
      onClick={onClick}
    >
      {children} {arrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );

  if (onClick) {
    return buttonElement;
  }

  return (
    <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
      {buttonElement}
    </a>
  );
}
