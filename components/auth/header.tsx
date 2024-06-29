import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  const logo = "/assets/images/lg.png";
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src={`${logo}`} alt="logo" width={80} height={80} />
      {/* <h1 className={cn("text-3xl font-semibold", font.className)}>
        WELCOME
      </h1> */}
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
