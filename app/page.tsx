import { Poppins } from "next/font/google";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import HomePage from "./(website)/home/page";
import Header from "@/components/website/shared/Header";
import Footer from "@/components/website/shared/Footer";
import "@/app/globals.css"
import "../assets/css/globals.css";
import HeroSection from '@/components/website/home/HeroSection'
import Section1 from '@/components/website/home/Section1'
import Section2 from '@/components/website/home/Section2'
import Section3About from '@/components/website/about/Section3'
import Section3 from '@/components/website/home/Section3'
import Section4 from '@/components/website/home/Section4'
import Section5 from '@/components/website/home/Section5'
import Cards from '@/components/website/home/Cards'

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const css = `
.main-container {
	font-family: 'Lato';
	width: fit-content;
	margin-left: auto;
	margin-right: auto;
}

.ck-content {
	font-family: 'Lato';
	line-height: 1.6;
	word-break: break-word;
}

.editor-container_classic-editor .editor-container__editor {
	min-width: 795px;
	max-width: 795px;
}

.ck-content h3.category {
	font-family: 'Oswald';
	font-size: 20px;
	font-weight: bold;
	color: #555;
	letter-spacing: 10px;
	margin: 0;
	padding: 0;
}

.ck-content h2.document-title {
	font-family: 'Oswald';
	font-size: 50px;
	font-weight: bold;
	margin: 0;
	padding: 0;
	border: 0;
}

.ck-content h3.document-subtitle {
	font-family: 'Oswald';
	font-size: 20px;
	color: #555;
	margin: 0 0 1em;
	font-weight: bold;
	padding: 0;
}

.ck-content p.info-box {
	--background-size: 30px;
	--background-color: #e91e63;
	padding: 1.2em 2em;
	border: 1px solid var(--background-color);
	background: linear-gradient(
			135deg,
			var(--background-color) 0%,
			var(--background-color) var(--background-size),
			transparent var(--background-size)
		),
		linear-gradient(
			135deg,
			transparent calc(100% - var(--background-size)),
			var(--background-color) calc(100% - var(--background-size)),
			var(--background-color)
		);
	border-radius: 10px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: 'Oswald';
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: '“';
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.marker {
	background: yellow;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.fancy-code {
	border: 0;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.fancy-code::before {
	content: '';
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.fancy-code-dark {
	background: #272822;
	color: #fff;
	box-shadow: 5px 5px 0 #0000001f;
}

.ck-content pre.fancy-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}




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

h1,
h2,
h3,
h4,
h5,
h6 {
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

.hero-img {
  margin-top: 3rem; /* mt-12 equivalent */

  /* Responsive behavior for large screens */
  @media (min-width: 992px) {
    margin-top: 0; /* mt-lg-0 equivalent */
  }
}

.last-sec-home {
  padding-top: 3rem; /* mt-12 equivalent */

  /* Responsive behavior for large screens */
  @media (min-width: 992px) {
    padding-top: 0; /* mt-lg-0 equivalent */
  }
}

.hero-sec {
  padding-top: 3rem; 
  padding-bottom: 3rem; 

  /* Responsive behavior for large screens */
  @media (min-width: 992px) {
    padding-top: 7rem; 
    padding-bottom: 7rem; 
  }
}
/* Custom styles for accordion FAQ */
.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.01s;
}
.accordion-collapse {
  max-height: 0;
  overflow: hidden;
}

.accordion-collapse.show {
  max-height: 500px; /* Set a reasonable max-height value for your content */
}
`
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <style>
          {css}
        </style>
      <HeroSection />
      <Section3About />
      <Section1 />
      <Section2 />
      <Cards />
      <Section3 />
      <Section5 />
    </main>
      <Footer />
    </>
  );
}
