import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import "@/app/globals.css"

export default function Document() {
  return (
    <Html lang="en">
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
      <body>
        <Main />
        <Script src="https://cdn.ckbox.io/ckbox/latest/ckbox.js" />
        <Script src="/assets/js/vendors/flatpickr.js" />
        <Script src="/assets/js/vendors/calendar.js" />
        <Script src="/assets/js/vendors/beStepper.js" />
        <Script src="/assets/js/vendors/carousel.js" />
        <Script src="/assets/js/vendors/chart.js" />
        <Script src="/assets/js/vendors/chat.js" />
        <Script src="/assets/js/vendors/countdown.js" />
        <Script src="/assets/js/vendors/customDragula.js" />
        <Script src="/assets/js/vendors/darkMode.js" />
        <Script src="/assets/js/vendors/datatables.js" />
        <Script src="/assets/js/vendors/editor.js" />
        <Script src="/assets/js/vendors/file-upload.js" />
        <NextScript />
      </body>
    </Html>
  );
}
