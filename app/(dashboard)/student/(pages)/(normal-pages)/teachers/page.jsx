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


            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>

              {/* My Section */}
              <div className="col-lg-9 col-md-8 col-12">

                {/*  Tab content  */}
                <div className="tab-content">
                  <div className="tab-pane fade show active pb-4" id="tabPaneGrid" role="tabpanel" aria-labelledby="tabPaneGrid">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-12 mb-3">
                        {/*  Content  */}
                        <div className="row">
                          <div className="col pe-0">
                            {/*  Form  */}
                            <form>
                              <input type="search" className="form-control" placeholder="البحث عن طريق الإسم" />
                            </form>
                          </div>
                          {/*  Button  */}
                          <div className="col-auto">
                            <a href="#" className="btn btn-secondary">تصدير بصيغة CSV</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">أنس</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                United States
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">3/12/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">0%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">سميرة</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                India
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">3/11/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">12%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card Body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-1.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">معاذ</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                UK
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">4/10/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">14%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-5.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">أميمة</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                Brazil
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">4/09/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">34%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-10.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">يونس</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                Chile
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">3/12/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">23%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">مراد</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                Estonia
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">8/12/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">45%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-6.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">جوهرة</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                Greece
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">18/12/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">100%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-8.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">سناء</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                Egypt
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">2/12/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">67%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 d-none d-lg-block">
                        {/*  Card  */}
                        <div className="card mb-4">
                          {/*  Card body  */}
                          <div className="card-body">
                            <div className="text-center">
                              <img src="../assets/images/avatar/avatar-9.jpg" className="rounded-circle avatar-xl mb-3" alt="avatar" />
                              <h4 className="mb-1">كريمة</h4>
                              <p className="mb-0">
                                <i className="fe fe-map-pin me-1"></i>
                                Denmark
                              </p>
                              <a href="#" className="btn btn-sm btn-outline-secondarymt-3">رسالة</a>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-2 mt-4 fs-6">
                              <span>المسجلين</span>
                              <span className="text-dark">7/12/2020</span>
                            </div>
                            <div className="d-flex justify-content-between pt-2 fs-6">
                              <span>التقدم</span>
                              <span className="text-success">65%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-12">
                        {/*  Pagination  */}
                        <nav>
                          <ul className="pagination justify-content-center mb-0">
                            <li className="page-item disabled">
                              <a className="page-link mx-1 rounded" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                </svg>
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link mx-1 rounded" href="#">1</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">2</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">3</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/*  Tab pane  */}
                  <div className="tab-pane fade" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">
                    <div className="card">
                      <div className="card-header border-bottom-0">
                        <div className="row">
                          <div className="col pe-0">
                            <form>
                              <input type="search" className="form-control" placeholder="البحث عن طريق الإسم" />
                            </form>
                          </div>
                          <div className="col-auto">
                            <a href="#" className="btn btn-secondary">تصدير بصيغة CSV</a>
                          </div>
                        </div>
                      </div>
                      {/*  Table  */}
                      <div className="table-responsive">
                        <table className="table table-hover table-centered">
                          <thead className="table-light">
                            <tr>
                              <th>الإسم</th>
                              <th>المسجلين</th>
                              <th>التقدم</th>
                              <th>Q/A</th>
                              <th>المواقع</th>
                              <th>رسالة</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-3.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">أميمة</h5>
                                </div>
                              </td>
                              <td>3/12/2020</td>
                              <td>0%</td>
                              <td>0</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  Greece
                                </span>
                              </td>
                              <td className="pe-0 align-middle border-top-0">
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-2.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">سميرة</h5>
                                </div>
                              </td>
                              <td>3/11/2020</td>
                              <td>12%</td>
                              <td>2</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  India
                                </span>
                              </td>
                              <td>
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-5.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">أميمة</h5>
                                </div>
                              </td>
                              <td>3/11/2020</td>
                              <td>34%</td>
                              <td>4</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  Brazil
                                </span>
                              </td>
                              <td>
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">يونس</h5>
                                </div>
                              </td>
                              <td>3/12/2020</td>
                              <td>44%</td>
                              <td>5</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  Chile
                                </span>
                              </td>
                              <td>
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-8.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">مراد</h5>
                                </div>
                              </td>
                              <td>18/12/2020</td>
                              <td>45%</td>
                              <td>9</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  Estonia
                                </span>
                              </td>
                              <td>
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-6.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">جوهرة</h5>
                                </div>
                              </td>
                              <td>8/12/2020</td>
                              <td>100%</td>
                              <td>5</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  Greece
                                </span>
                              </td>
                              <td>
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-7.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">سناء</h5>
                                </div>
                              </td>
                              <td>8/12/2020</td>
                              <td>67%</td>
                              <td>3</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  Egypt
                                </span>
                              </td>
                              <td>
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="../assets/images/avatar/avatar-9.jpg" alt="" className="rounded-circle avatar-md me-2" />
                                  <h5 className="mb-0 tajawal-bold">كريمة</h5>
                                </div>
                              </td>
                              <td>7/12/2020</td>
                              <td>65%</td>
                              <td>4</td>
                              <td>
                                <span className="fs-6">
                                  <i className="fe fe-map-pin me-1"></i>
                                  Denmark
                                </span>
                              </td>
                              <td>
                                <a href="#" className="btn btn-outline-secondary btn-sm">رسالة</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="pt-2 pb-4">
                        {/*  Pagination  */}
                        <nav>
                          <ul className="pagination justify-content-center mb-0">
                            <li className="page-item disabled">
                              <a className="page-link mx-1 rounded" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                </svg>
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link mx-1 rounded" href="#">1</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">2</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">3</a>
                            </li>
                            <li className="page-item">
                              <a className="page-link mx-1 rounded" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </nav>
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