import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Ghost } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex items-center p-6 w-full bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
