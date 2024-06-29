import React from "react";
import "@fontsource/tajawal"; // Defaults to weight 400
import Header from "@/components/website/shared/Header";
import Footer from "@/components/website/shared/Footer";
import { Tajawal } from "next/font/google";
import "@/app/globals.css"


const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin', 'arabic'], // Include the 'arabic' subset if needed
});

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className={tajawal.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );  
};

export default ProtectedLayout;
