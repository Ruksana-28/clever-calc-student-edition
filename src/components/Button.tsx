
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "number" | "operator" | "equals" | "clear" | "scientific" | "memory";
  className?: string;
  onClick: () => void;
}

const Button = ({ children, variant = "number", className, onClick }: ButtonProps) => {
  const baseClasses = "h-14 rounded-xl font-semibold text-lg transition-all duration-200 transform active:scale-95 border";
  
  const variantClasses = {
    number: "bg-slate-700 hover:bg-slate-600 text-white border-slate-600 hover:border-slate-500",
    operator: "bg-blue-600 hover:bg-blue-500 text-white border-blue-500 hover:border-blue-400",
    equals: "bg-green-600 hover:bg-green-500 text-white border-green-500 hover:border-green-400",
    clear: "bg-red-600 hover:bg-red-500 text-white border-red-500 hover:border-red-400",
    scientific: "bg-purple-600 hover:bg-purple-500 text-white border-purple-500 hover:border-purple-400 text-sm",
    memory: "bg-orange-600 hover:bg-orange-500 text-white border-orange-500 hover:border-orange-400 text-sm"
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
