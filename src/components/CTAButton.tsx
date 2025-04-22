
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

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
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setShowForm(true);
    }
  };

  return (
    <>
      <Button
        className={cn(
          "bg-primary hover:bg-renda-dark text-black font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
          pulse && "animate-pulse-gold",
          size === "sm" && "text-sm py-2 px-4",
          size === "lg" && "text-xl py-4 px-8 uppercase tracking-wider",
          className
        )}
        onClick={handleClick}
      >
        {children} {arrow && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>

      <CheckoutForm 
        open={showForm} 
        onOpenChange={setShowForm} 
        source="checkout_form"
      />
    </>
  );
}
