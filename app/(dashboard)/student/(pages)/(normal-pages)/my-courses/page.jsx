"use client"
import React from 'react'
import Header from "../../../_components/Header";
import Navbar from "@/app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";

function page() {
  return (
    <div dir="rtl">
    <Header />

    <main>
      <section className="pt-5 pb-5">
			<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
			<ComponentHeader />

          {/* My Section */}
          <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
              <Navbar />
            </div>
            <div className="col-lg-9 col-md-8 col-12">
								{/*  Card  */}
								<div className="card mb-4">
									{/*  Card header  */}
									<div className="card-header">
										<h3 className="mb-0 tajawal-bold">دوراتي</h3>
										<span>إدارة الدورات التدريبية الخاصة بك وتحديثها مثل البث المباشر والمسودة والبصيرة.</span>
									</div>
									{/*  Card body  */}
									<div className="card-body">
										{/*  Form  */}
										<form className="row gx-3">
											<div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
												<input type="search" className="form-control" placeholder="ابحث في الدورات التدريبية الخاصة بك" />
											</div>
											<div className="col-lg-3 col-md-5 col-12">
												<select className="form-select">
													<option value="">تاريخ الإنشاء</option>
													<option value="Newest">الأحدث</option>
													<option value="High Rated">تقييم عالي</option>
													<option value="Law Rated">تصنيف منخفض</option>
													<option value="High Earned">مكاسب عالية</option>
												</select>
											</div>
										</form>
									</div>
									{/*  Table  */}
									<div className="row">
  <div className="col-lg-12 col-md-12 col-sm-12">
    <div className="card">

      <div className="p-0 card-body">
        <div className="border-0 overflow-y-hidden">
          <div className="table-responsive">
            <table className="text-nowrap table-centered table table-hover">
              <thead className="table-light">
                <tr>
                  <th>إسم الدورة</th>
                  <th>النوع</th>
                  <th>الصنف</th>
                  <th>التاريخ</th>
                  <th>الأستاذ</th>
                  <th>الحالة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit">Revolutionize how you build the web</a>
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">الرياضيات</a>
                  </td>
                  <td>7 July, 2021 1:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-4.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Reva Yokk</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-warning"></span> </span>مسودة
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit">Guide to Static Sites with Gatsby</a>
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect
                        x="1"
                        y="5"
                        width="15"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">التسويق</a>
                  </td>
                  <td>6 July, 2021 2:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Brooklyn Simmons</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-warning"></span> </span>مسودة
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit">The Modern HTML Courses</a>
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">الفيزياء</a>
                  </td>
                  <td>5 July, 2021 5:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-6.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Miston Wilson</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-success"></span> </span>تم النشر
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit">Courses JavaScript Heading Title</a>
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">التاريخ</a>
                  </td>
                  <td>5 July, 2021 5:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-6.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Guy Hawkins</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-success"></span> </span>تم النشر
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit">Get Start with Node Heading Title</a>
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                      ></path>
                      <path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">الفيزياء</a>
                  </td>
                  <td>5 July, 2021 5:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Sina Ray</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-info"></span> </span>مجدول
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit">Get Start with Laravel</a>
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect
                        x="1"
                        y="5"
                        width="15"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit"
                      >التسويق</a
                    >
                  </td>
                  <td>5 July, 2021 5:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-11.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Sobo Rikhan</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-info"></span> </span>مجدول
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit"
                        >Get Start with React</a
                      >
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">الرياضيات</a>
                  </td>
                  <td>4 July, 2021 12:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-10.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">April Noms</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-success"></span> </span>تم النشر
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit"
                        >Get Start with Angular</a
                      >
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <path
                        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                      ></path>
                      <path
                        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                      ></path>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">الفيزياء</a
                    >
                  </td>
                  <td>3 July, 2021 10:42am</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-12.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Jacob Jones</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-danger"></span> 
                      </span>محذوف
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit"
                        >Get Start with Laravel</a
                      >
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect
                        x="1"
                        y="5"
                        width="15"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit">التسويق</a>
                  </td>
                  <td>5 July, 2021 5:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-11.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Sobo Rikhan</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-danger"></span> </span>محذوف
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <h5 className="mb-0 tajawal-bold">
                      <a href="/cms/cms-dashboard" className="text-inherit"
                        >Get Start with Node Heading Title</a
                      >
                    </h5>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="dropdown-item-icon text-primary"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </td>
                  <td>
                    <a href="/cms/cms-dashboard" className="text-inherit"
                      >الفيزياء2</a
                    >
                  </td>
                  <td>5 July, 2021 5:42pm</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../../../assets/images/avatar/avatar-5.jpg"
                        alt=""
                        className="rounded-circle avatar-xs me-2"
                      />
                      <h5 className="mb-0 tajawal-bold">Sina Ray</h5>
                    </div>
                  </td>
                  <td>
                    <span className="me-2"
                      ><span className="badge-dot badge bg-danger"></span> </span>محذوف
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

								</div>
							</div>
          </div>
        </div>
      </section>
    </main>

  </div>
  )
}

export default page