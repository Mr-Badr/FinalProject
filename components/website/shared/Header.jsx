"use client"
import React, { useState } from "react";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import { LoginButton } from "@/components/auth/login-button";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);};
  return (
    <>

      {/* <nav
        className="navbar-default navbar navbar-expand-lg navbar-light"
        dir="rtl"
      >

        <div className="container px-0">

          <a className="navbar-brand" href="#">

            <Image src="/assets/images/lgg.png" width={40} height={40} alt="" />

          </a>

          <div className="d-flex align-items-center order-lg-3">

            <div className="d-flex align-items-center">

              <DarkModeToggle />

              
              <div className="d-flex align-items-center">

                <Link
                  className="btn btn-outline-dark mx-1"
                  href="/auth/login"
                >

                  تسجيل الدخول
                </Link>

                <Link
                  className="btn btn-dark mx-1"
                  href="/auth/register"
                >

                  سجل مجانا
                </Link>

              </div>

            </div>

            <div>

              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar-default"
                aria-controls="navbar-default"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >

                <span className="icon-bar top-bar mt-0">
</span>

                <span className="icon-bar middle-bar">
</span>

                <span className="icon-bar bottom-bar">
</span>

              </button>

            </div>

          </div>


          <div className="collapse navbar-collapse" id="navbar-default">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item dropdown text-lg">

                <Link
                  className="nav-link px-4"
                  href="/home"
                  id="navbarLanding"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    fontWeight: '600',
                    fontSize: 'medium'
                  }}
                >

                  الرئيسية
                </Link>

              </li>

              <li className="nav-item dropdown">

                <Link
                  className="nav-link px-4"
                  href="/about"
                  id="navbarPages"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    fontWeight: '600',
                    fontSize: 'medium'
                  }}
                >

                  حول المنصة
                </Link>

              </li>

              <li className="nav-item dropdown">

                <Link
                  className="nav-link px-4"
                  href="/contact"
                  id="navbarAccount"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    fontWeight: '600',
                    fontSize: 'medium'
                  }}
                >

                  تواصل معنا
                </Link>

              </li>

            </ul>

          </div>

        </div>

      </nav>
 
      */}
      <nav className="navbar navbar-default shadow-none  navbar navbar-expand-lg navbar-light"         dir="rtl"
      >
<div className="px-0 container">
<a className="navbar-brand" href="/">
<Image src="/assets/images/lgg.png" width={50} height={50}/>
</a>
<button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          aria-controls="basic-navbar-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        ><span className="icon-bar top-bar mt-0">
</span>
<span className="icon-bar middle-bar">
</span>
<span className="icon-bar bottom-bar">
</span>
</button>
<div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="basic-navbar-nav">
<ul className="navbar-nav mx-auto">

<li className="nav-item dropdown text-lg">

  <Link
    className="nav-link px-4"
    href="/home"
    id="navbarLanding"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    style={{
      fontWeight: '600',
      fontSize: 'medium'
    }}
  >

    الرئيسية
  </Link>

</li>

<li className="nav-item dropdown">

  <Link
    className="nav-link px-4"
    href="/about"
    id="navbarPages"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    style={{
      fontWeight: '600',
      fontSize: 'medium'
    }}
  >

    حول المنصة
  </Link>

</li>
<li className="nav-item dropdown">

  <Link
    className="nav-link px-4"
    href="/pricing"
    id="navbarPages"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    style={{
      fontWeight: '600',
      fontSize: 'medium'
    }}
  >

الأسعار  </Link>

</li>

<li className="nav-item dropdown">

  <Link
    className="nav-link px-4"
    href="/contact"
    id="navbarAccount"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    style={{
      fontWeight: '600',
      fontSize: 'medium'
    }}
  >

    تواصل معنا
  </Link>

</li>

</ul>

<div className="d-flex align-items-center order-lg-3 flex-row navbar-nav">
<div className="mt-3 mt-lg-0">
<Link
                  className="btn btn-outline-dark mx-1"
                  href="/auth/login"
                >

                  تسجيل الدخول
                </Link>

                <Link
                  className="btn btn-dark mx-1"
                  href="/auth/register"
                >

                  سجل مجانا
                </Link>

</div>
</div>
</div>
</div>
</nav>

    </>

  );
}

export default Header;
