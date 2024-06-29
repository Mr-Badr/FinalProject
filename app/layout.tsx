import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tajawal } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css"
import "../assets/css/globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import "@popperjs/core";
import "../assets/js/vendors/darkMode.js";
import "../assets/fonts/feather/feather.css";
import 'simplebar-react/dist/simplebar.min.css';
import Head from "next/head";
import "@fontsource/tajawal"; // Defaults to weight 400
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import "../assets/css/icons.css";
import "@/styles/globals.css";
import "@/assets/libs/@iconscout/unicons/css/line.css";
 */


const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin', 'arabic'], // Include the 'arabic' subset if needed
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&family=Cairo:wght@400&display=swap"
          rel="stylesheet"
        />
        <style>{`
            .tajawal-extralight {
              font-family: "Tajawal", sans-serif;
              font-weight: 200;
              font-style: normal;
            }

            .tajawal-light {
              font-family: "Tajawal", sans-serif;
              font-weight: 300;
              font-style: normal;
            }

            .tajawal-regular {
              font-family: "Tajawal", sans-serif;
              font-weight: 400;
              font-style: normal;
            }

            .tajawal-medium {
              font-family: "Tajawal", sans-serif;
              font-weight: 500;
              font-style: normal;
            }

            .tajawal-bold {
              font-family: "Tajawal", sans-serif;
              font-weight: 700;
              font-style: normal;
            }

            .tajawal-extrabold {
              font-family: "Tajawal", sans-serif;
              font-weight: 800;
              font-style: normal;
            }

            .tajawal-black {
              font-family: "Tajawal", sans-serif;
              font-weight: 900;
              font-style: normal;
            }

            .cairo {
              font-family: "Cairo", sans-serif;
              font-optical-sizing: auto;
              font-weight: 400;
              font-style: normal;
            }

            h1, h2, h3, h4, h5, h6 {
              font-family: "Tajawal", sans-serif;
            }

            p, span, a, label, th, tr, div {
              font-family: "Tajawal", sans-serif;
            }

            .navbar-default {
              box-shadow: 0 1px 3px #11182717;
            }

            .text-primary {
              color: #0296c8 !important;
            }
          `}</style>
      </Head>
        <body className={tajawal.className}>
          <Toaster />
          <ToastContainer />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}