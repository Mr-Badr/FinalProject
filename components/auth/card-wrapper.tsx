"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";
import { usePathname } from "next/navigation";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  backButtonText: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  backButtonText,
  showSocial,
}: CardWrapperProps) => {
  let path = usePathname();
  let size = "";
  if (path.includes("login")) {
    size = "400px";
  } else if (path.includes("register")) {
    size = "800px";
  }
  return (
    <Card className={`w-[${size}] shadow-md bg-white`}>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {/* {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )} */}
      <CardFooter>
        <div className="col-sm-12 text-center">
          {backButtonText}
          <a href={backButtonHref} className="text-blue-600 font-semibold mx-2">
            {backButtonLabel}
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};
