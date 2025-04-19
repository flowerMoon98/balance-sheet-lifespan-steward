
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-full bg-moss opacity-70" />
        <div className="absolute inset-1 rounded-full bg-white" />
        <div className="absolute inset-2 rounded-full bg-lime" />
      </div>
      <span className={cn("text-xl font-nib tracking-tighter-custom text-moss", className?.includes("text-white") ? "text-white" : "")}>Rajomon</span>
    </div>
  );
}
