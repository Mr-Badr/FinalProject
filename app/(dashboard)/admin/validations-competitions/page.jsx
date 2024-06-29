"use client";
import Navbar from "../_components/_shared/Navbar";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";
import ValidationsCompetitions from "@/app/(dashboard)/admin/_components/ValidationsCompetitions";
import "@/assets/libs/simplebar/dist/simplebar.min.js";
//import { ExtendedUser } from "@/next-auth";
import { useCurrentUser } from "@/hooks/use-current-user";
import SimpleBar from "simplebar-react";

function Admin() {
  const [isToggled, setIsToggled] = useState(false);
  const user = useCurrentUser();

  const handleToggleClick = (e) => {
    e.preventDefault();
    setIsToggled(!isToggled);
  };
  return (
    <div id="db-wrapper" className={isToggled ? "toggled" : ""} dir="rtl">
      <Navbar />
      <main id="page-content" style={{ marginRight: "0px" }}>
        <div className="header">
          <nav className="navbar-default navbar navbar-expand-lg">
            <Link id="nav-toggle" href="#" onClick={handleToggleClick}>
              <i className="fe fe-menu"></i>
            </Link>
            <div className="ms-lg-3 d-md-none d-lg-block">
              {/* Form */}
              <form className="d-flex align-items-center">
                <span className="position-absolute ps-3 search-icon">
                  <i className="fe fe-search"></i>
                </span>
                <input
                  type="search"
                  className="form-control ps-6 tajawal-medium"
                  placeholder="البحث في لوحة التحكم "
                />
              </form>
            </div>
            {/*Navbar nav */}
            <div className="d-flex" style={{ marginRight: "auto" }}>
              <DarkModeToggle />
              <ul className="navbar-nav navbar-right-wrap ms-2 d-flex nav-top-wrap">
                <li className="dropdown stopevent">
                  <Link
                    className="btn btn-light btn-icon rounded-circle indicator indicator-primary"
                    href="#"
                    role="button"
                    id="dropdownNotification"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fe fe-bell"></i>
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-end dropdown-menu-lg"
                    aria-labelledby="dropdownNotification"
                  >
                    <div>
                      <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                        <span className="h4 mb-0 tajawal-medium">إشعارات</span>
                        <Link href="#">
                          <span className="align-middle">
                            <i className="fe fe-settings me-1"></i>
                          </span>
                        </Link>
                      </div>
                      {/* List group */}

                      <div className="border-top px-3 pt-3 pb-0">
                        <Link
                          href="https://geeksui.codescandy.com/geeks-rtl/pages/notification-history.html"
                          className="text-link tajawal-bold"
                        >
                          اطلع على جميع الإشعارات
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                {/* List */}
                <li className="dropdown ms-2">
                  <Link
                    className="rounded-circle"
                    href="#"
                    role="button"
                    id="dropdownUser"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                      <img
                        alt="avatar"
                        src="../../assets/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                      />
                    </div>
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownUser"
                  >
                    <div className="dropdown-item">
                      <div className="d-flex">
                        <div className="avatar avatar-md avatar-indicators avatar-online">
                          <img
                            alt="avatar"
                            src="../../assets/images/avatar/avatar-1.jpg"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="ms-3 lh-1">
                          <h5 className="mb-1">{user?.name}</h5>
                          <p className="mb-0">{user?.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <ul className="list-unstyled">
                      <li className="dropdown-submenu dropstart-lg">
                        <Link
                          className="dropdown-item dropdown-list-group-item dropdown-toggle"
                          href="#"
                        >
                          <i className="fe fe-circle me-2"></i>
                          Status
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" href="#">
                              <span className="badge-dot bg-success me-2"></span>
                              Online
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              <span className="badge-dot bg-secondary me-2"></span>
                              Offline
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              <span className="badge-dot bg-warning me-2"></span>
                              Away
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="#">
                              <span className="badge-dot bg-danger me-2"></span>
                              Busy
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="../profile-edit.html"
                        >
                          <i className="fe fe-user me-2"></i>
                          Profile
                        </a>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="../student-subscriptions.html"
                        >
                          <i className="fe fe-star me-2"></i>
                          Subscription
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          <i className="fe fe-settings me-2"></i>
                          Settings
                        </Link>
                      </li>
                    </ul>
                    <div className="dropdown-divider"></div>
                    <ul className="list-unstyled">
                      <li>
                        <Link className="dropdown-item" href="../../index.html">
                          <i className="fe fe-power me-2"></i>
                          تسجيل خروج
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <SimpleBar style={{ maxHeight: "91vh" }}>
          <ValidationsCompetitions />
        </SimpleBar>
      </main>
    </div>
  );
}

export default Admin;
