import { Montserrat, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font =Montserrat({
  subsets: ["latin"],
  weight: ["800"],
});

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(
        "text-3xl font-semibold",
        font.className,
      )}>
      Hey! 
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  );
};