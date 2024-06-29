"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  text: string;
  label: string;
}

function BackButton({ href, text, label }: BackButtonProps) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>
        {text}
        <div className="text-blue-700 text-base mx-2">{label}</div>
      </Link>
    </Button>
  );
}

export default BackButton;
