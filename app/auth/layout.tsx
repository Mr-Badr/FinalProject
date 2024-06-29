"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "@/assets/css/globals.css"
import "./styles.css"

function AuthLayout({ children }: { children: React.ReactNode }) {
  let path = usePathname();
  let Background = "";
  if (path.includes("login")) {
    Background = "../../assets/images/background/school.jpg";
  } else if (path.includes("register")) {
    Background = "../../assets/images/background/register.jpg";
  }

  return (
    <div
      className="auth-wrapper d-flex no-block justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        opacity: 0.9,
        backgroundSize: "cover",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}

export default AuthLayout;
