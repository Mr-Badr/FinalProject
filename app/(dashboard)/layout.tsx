import "../../assets/css/theme-rtl.min.css";
import "@/app/globals.css"
import "@fontsource/tajawal";
import Script from "next/script";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}
{/*         <Script src="/assets/js/vendors/flatpickr.js" />
 */}
  </div>;
}
