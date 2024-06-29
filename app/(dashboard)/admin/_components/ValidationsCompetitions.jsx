"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Page() {
	/* Show model Start */
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};
	/* Show model End */
	return (
		<section className={sectionClassName} style={sectionStyle}>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">

					<div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
						<div className="mb-2 mb-lg-0">
							<h1 className="mb-1 tajawal-bold">
								المسابقات
								<span className="fs-5 mx-1">(1,22,105 )</span>
							</h1>

							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="admin-dashboard.html">لوحة التحكم</a>
									</li>
									<li className="breadcrumb-item"><a href="#">User</a></li>
									<li className="breadcrumb-item active" aria-current="page">مسابقات</li>
								</ol>
							</nav>
						</div>
						<div className="nav btn-group" role="tablist">
							<div className='me-2'>
								<Link href="/admin/students-add" className="btn btn-primary" data-bs-target="#newCatgory" alt="">إضافة مسابقة جديد</Link>
							</div>
							<button className="btn btn-outline-secondary" data-bs-toggle="tab" data-bs-target="#tabPaneGrid" role="tab" aria-controls="tabPaneGrid" aria-selected="false" tabindex="-1">
								<span className="fe fe-grid"></span>
							</button>
							<button className="btn btn-outline-secondary active" data-bs-toggle="tab" data-bs-target="#tabPaneList" role="tab" aria-controls="tabPaneList" aria-selected="true">
								<span className="fe fe-list"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">

					<div className="tab-content">

						<div className="tab-pane fade" id="tabPaneGrid" role="tabpanel" aria-labelledby="tabPaneGrid">
							<div className="mb-4">
								<input type="search" className="form-control" placeholder="بحث المسابقات" />
							</div>
							<div className="row">
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="../../assets/images/avatar/avatar-12.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-success"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">معاذ</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													United States
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$5,274</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>17 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">12</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="../../assets/images/avatar/avatar-13.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-secondary"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">معاذ</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													India
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$2,660</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>15 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">42</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="../../assets/images/avatar/avatar-14.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-success"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">يونس</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													United Kingdom
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$9,600</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>15 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">3</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="../../assets/images/avatar/avatar-15.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-success"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">معاذ</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													Netherland
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$14,944</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>14 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">2</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-16.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-success"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">مراد</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													South Africa
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$8,230</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>15 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">7</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-17.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-secondary"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">حسن</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													United States
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$3,240</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>15 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">3</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-18.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-secondary"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">محمد</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													New York
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$2,140</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>15 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">5</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-6 col-md-6 col-12">

									<div className="card mb-4">

										<div className="card-body">
											<div className="text-center">
												<div className="position-relative">
													<img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-19.jpg" className="rounded-circle avatar-xl mb-3" alt="" />
													<a href="#" className="position-absolute mt-8 ms-n5">
														<span className="status bg-secondary"></span>
													</a>
												</div>
												<h4 className="mb-0 tajawal-bold">سناء</h4>
												<p className="mb-0">
													<i className="fe fe-map-pin me-1 fs-6"></i>
													United States
												</p>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2 mt-6">
												<span>المدفوعات</span>
												<span className="text-dark">$1,220</span>
											</div>
											<div className="d-flex justify-content-between border-bottom py-2">
												<span> انضم في</span>
												<span>15 Aug, 2020</span>
											</div>
											<div className="d-flex justify-content-between pt-2">
												<span>الدورات</span>
												<span className="text-dark">12</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-12">

									<nav>
										<ul className="pagination justify-content-center mb-0">
											<li className="page-item disabled">
												<a className="page-link mx-1 rounded" href="#">
													<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
														<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
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
														<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
													</svg>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>

						<div className="tab-pane fade active show" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">

							<div className="card">

								<div className="card-header">
									<input type="search" className="form-control" placeholder="بحث المسابقات" />
								</div>

								<div className="table-responsive">
									<table className="table mb-0 text-nowrap table-hover table-centered">
										<thead className="table-light">
											<tr>
												<th>الإسم</th>
												<th>البريد الإلكتروني</th>
												<th> انضم في</th>
												<th> الهاتف</th>
												<th>المدينة</th>
												<th>الموقع</th>
												<th>الإجراءات</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="../../assets/images/avatar/avatar-11.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-success"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">أميمة</h5>
													</div>
												</td>
												<td>6 الدورات</td>
												<td>7 July, 2020</td>
												<td>$5,274</td>
												<td>Los Angeles, CA</td>
												<td>Los Angeles, CA</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" style={{}}>
																<span className="dropdown-header">الإعدادات</span>
																<button className="dropdown-item" onClick={handleShow}>
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</button>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="../../assets/images/avatar/avatar-12.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-secondary"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">سميرة</h5>
													</div>
												</td>
												<td>3 الدورات</td>
												<td>15 Aug, 2020</td>
												<td>$2,660</td>
												<td>United Kingdom</td>
												<td>United Kingdom</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="/admin/students-edit">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="../../assets/images/avatar/avatar-13.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-success"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">يونس</h5>
													</div>
												</td>
												<td>7 الدورات</td>
												<td>12 Aug, 2020</td>
												<td>$14,944</td>
												<td>United State</td>
												<td>United State</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="../../assets/images/avatar/avatar-14.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-secondary"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">مراد</h5>
													</div>
												</td>
												<td>5 الدورات</td>
												<td>5 Aug, 2020</td>
												<td>$6,845</td>
												<td>India</td>
												<td>India</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="../../assets/images/avatar/avatar-15.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-success"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">جوهرة</h5>
													</div>
												</td>
												<td>12 الدورات</td>
												<td>1 Aug, 2020</td>
												<td>$8,230</td>
												<td>Netherland</td>
												<td>Netherland</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-16.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-success"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">سناء</h5>
													</div>
												</td>
												<td>12 الدورات</td>
												<td>30 July, 2020</td>
												<td>$3,240</td>
												<td>New York</td>
												<td>New York</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-17.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-secondary"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">كريمة</h5>
													</div>
												</td>
												<td>2 الدورات</td>
												<td>28 July, 2020</td>
												<td>$2,140</td>
												<td>Africa</td>
												<td>Africa</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="../../assets/images/avatar/avatar-15.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-success"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">جوهرة</h5>
													</div>
												</td>
												<td>12 الدورات</td>
												<td>1 Aug, 2020</td>
												<td>$8,230</td>

												<td>Netherland</td>
												<td>Netherland</td>
												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div className="d-flex align-items-center">
														<div className="position-relative">
															<img src="https://geeksui.codescandy.com/geeks-rtl/assets/images/avatar/avatar-16.jpg" alt="" className="rounded-circle avatar-md me-2" />
															<a href="#" className="position-absolute mt-5 ms-n4">
																<span className="status bg-success"></span>
															</a>
														</div>
														<h5 className="mb-0 tajawal-bold">سناء</h5>
													</div>
												</td>
												<td>12 الدورات</td>
												<td>30 July, 2020</td>
												<td>$3,240</td>
												<td>New York</td>
												<td>New York</td>

												<td>
													<div className="hstack gap-4">
														<a href="#" className="fe fe-mail" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"></a>
														<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<div className="card-footer">
										<nav>
											<ul className="pagination justify-content-center">
												<li className="page-item disabled">
													<a className="page-link mx-1 rounded" href="#">
														<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
															<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
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
															<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
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

			{/* Model Popup */}
			{show && <div className="fade modal-backdrop show"></div>}
			<div role="dialog" aria-modal="true" className={`fade modal ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }}>
				<div style={{
					width: "auto",
					margin: "1.75rem",
					transform: "none",
					transition: "transform .3s ease-out",
					marginLeft: "auto",
					marginRight: "auto",
					pointerEvents: "none",
					position: "relative",
					maxWidth: "1000px",
					paddingTop: "8%"
				}}>
					<div className="modal-content">
						<div className="modal-header">
							<div className="modal-title tajawal-bold">تعديل الدورات</div>
							<button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
						</div>
						<div className="modal-body">
							<form className="">
								<div className="row">
									<div className="mb-3 col-lg-6 col-md-6">
										<label className="form-label">العنوان </label>
										<input
											placeholder="العنوان "
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">البريد الإلكتروني </label>
										<input
											placeholder="البريد الإلكتروني"
											required=""
											type="email"
											id="email"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">الهاتف</label>
										<input
											placeholder="الهاتف"
											required=""
											type="tel"
											id="tel"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
									<div className="mb-3 col-lg-6 col-md-6">
										<label className="form-label">تاريخ الإزدياد</label>
										<div className="input-group">
											<input className="form-control flatpickr flatpickr-input" placeholder="حدد تاريخ" aria-describedby="basic-addon2" readonly="" type="text" style={{
												borderRadius: "0px 5px 5px 0px"
											}} />
											<span className="input-group-text" id="basic-addon2" style={{
												borderRadius: "5px 0px 0px 5px"
											}}>
												<i className="fe fe-calendar"></i>
											</span>
										</div>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">الولاية</label>
										<input
											placeholder="الولاية"
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label"> الجنس</label>
										<select className="form-select">
											<option value="public">ذكر</option>
											<option value="private">أنثى</option>
										</select>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">المستوى الدراسي</label>
										<select className="form-select">
											<option value="">أولى ثانوي</option>
											<option value="">ثاني ثانوي</option>
											<option value="">ثالث ثانوي</option>
										</select>
									</div>
									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">الفوج</label>
										<select className="form-select">
											<option value="private">الفوج أ</option>
											<option value="private">الفوج ب</option>
										</select>
									</div>
									<div className="mb-3 col-lg-12 col-md-12">
										<label className="form-label">الوصف </label>
										<input
											placeholder="الوصف الكامل"
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
								</div>
							</form>
						</div>
						<div className="modal-footer" dir='ltr'>
							<button type="button" className="btn btn-secondary w-20" onClick={handleClose}>إغلاق</button>
							<button type="button" className="btn btn-primary w-20" onClick={handleClose}>تعديل</button>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Page