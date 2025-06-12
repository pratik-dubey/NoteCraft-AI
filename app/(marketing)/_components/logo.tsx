import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
const font = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        alt="logo"
        height="40"
        width="40"
        src={"/logo.svg"}
        className="dark:hidden"
      />
      <Image
        alt="logo"
        height="20"
        width="20"
        src={"/white-n.svg"}
        className="hidden dark:block"
      />
      <p
        className={cn(
          "font-semibold text-sm text-black dark:text-white",
          font.className
        )}
      >
        NoteCraft AI
      </p>
    </div>
  );
};
