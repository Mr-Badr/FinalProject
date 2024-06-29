"use client"
import Navbar from '../../../_components/Navbar';
import Header from '../../../_components/Header';
import React, { useState } from 'react'
import ComponentHeader from '../../../_components/ComponentHeader';
import Link from 'next/link';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TiPlus } from "react-icons/ti";
import AddLessonPopup from "../../(add-pages)/lessons-add/page"

function Page() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

		/* Add Course start */
		const [showAddLessonPopup, setShowAddLessonPopup] = useState(false);
		const handleShowAddLessonPopup = () => setShowAddLessonPopup(true);
		const handleCloseAddLessonPopup = () => setShowAddLessonPopup(false);
		/* Add Course end */

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px",maxWidth: "75%" } : {maxWidth: "75%"};
return (
	<div dir="rtl">
		<Header />

		<main>
			<section className="pt-5 pb-5">
			<div className={sectionClassName} style={sectionStyle}>
			<ComponentHeader />

						<div className="row mt-0 mt-md-4">
							<div className="col-lg-3 col-md-4 col-12">
								<Navbar />
							</div>
							<div className="col-lg-9 col-md-8 col-12">
								{/*  Card  */}
								<div className="card mb-4">
										{/*  Card header  */}
										<div className='card px-4 shadow-sm rounded-top-0 rounded-bottom-0'>
										<div className="d-flex align-items-center justify-content-between">
											<div className="card-header border-bottom-0">
											<h3 className="mb-0 tajawal-bold">الدروس</h3>
											<span> الدروس التدريبية الخاصة بك وتحديثها مثل البث المباشر والمسودة والبصيرة.</span>
											</div>
											<div className="card-header border-bottom-0 d-flex align-items-center justify-content-center">
												<a className="btn btn-primary btn-sm d-none d-md-block" onClick={handleShowAddLessonPopup}>
													<span className='mx-2'>
														إضافة درس
													</span>
													<TiPlus />
												</a>
											</div>
										</div>
										</div>

									{/*  Card body  */}
									<div className="card-body">
										{/*  Form  */}
										<form className="row gx-3">
											<div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
												<input type="search" className="form-control" placeholder="ابحث في الدروس التدريبية الخاصة بك" />
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
									<div className="table-responsive overflow-y-hidden">
										<table className="table mb-0 text-nowrap table-hover table-centered text-nowrap">
											<thead className="table-light">
												<tr>
													<th>الدروس</th>
													<th>طلاب</th>
													<th>تقييم</th>
													<th>الحالة</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div>
																<a href="#">
																	<img src="../assets/images/course/course-wordpress.jpg" alt="course" className="rounded img-4by3-lg" />
																</a>
															</div>
															<div className="ms-3">
																<h4 className="mb-1 h5">
																	<a href="#" className="text-inherit">Create a Website with WordPress</a>
																</h4>
																<ul className="list-inline fs-6 mb-0">
																	<li className="list-inline-item">
																		<span className="align-text-bottom">
																			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
																				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
																				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
																			</svg>
																		</span>
																		<span>1h 30m</span>
																	</li>
																	<li className="list-inline-item">
																		<svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
																			<rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
																			<rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
																		</svg>
																		مبتدئ
																	</li>
																</ul>
															</div>
														</div>
													</td>
													<td>11,200</td>
													<td>
														<span className="lh-1">
															<span className="text-warning">4.5</span>
															<span className="mx-1 align-text-top">
																<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																	<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
																	</path></svg>
															</span>
															(3,250)
														</span>
													</td>
													<td>
														<span className="badge bg-success">بث مباشر</span>
													</td>
													<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown1">
															<span className="dropdown-header">الإعدادات</span>
															<a className="dropdown-item" onClick={handleShow}>
																<i className="fe fe-edit dropdown-item-icon"></i>
																تعديل
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-trash dropdown-item-icon"></i>
																حذف
											</a>
														</span>
													</span>
												</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div>
																<a href="#">
																	<img src="../assets/images/course/course-node.jpg" alt="course" className="rounded img-4by3-lg" />
																</a>
															</div>
															<div className="ms-3">
																<h4 className="mb-1 h5">
																	<a href="#" className="text-inherit">Learn Node.js - Tutorials Courses</a>
																</h4>
																<ul className="list-inline fs-6 mb-0">
																	<li className="list-inline-item">
																		<span className="align-text-bottom">
																			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
																				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
																				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
																			</svg>
																		</span>
																		<span>3h 40m</span>
																	</li>
																	<li className="list-inline-item">
																		<svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
																			<rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
																			<rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
																		</svg>
																		متوسط
																	</li>
																</ul>
																<div className="progress mt-2" style={{ height: "3px" }}>
																	<div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																</div>
															</div>
														</div>
													</td>
													<td>0</td>
													<td>
														<span className="lh-1">
															<span className="text-warning">4.5</span>
															<span className="mx-1 align-text-top">
																<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																	<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
																	</path></svg>
															</span>
															(5,300)
														</span>
													</td>
													<td><span className="badge bg-info">مسودة</span></td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown1">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	Edit
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div>
																<a href="#">
																	<img src="../assets/images/course/course-laravel.jpg" alt="course" className="rounded img-4by3-lg" />
																</a>
															</div>
															<div className="ms-3">
																<h4 className="mb-1 h5">
																	<a href="#" className="text-inherit">The Ultimate Advanced Laravel..</a>
																</h4>
																<ul className="list-inline fs-6 mb-0">
																	<li className="list-inline-item">
																		<span className="align-text-bottom">
																			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
																				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
																				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
																			</svg>
																		</span>
																		<span>3h 40m</span>
																	</li>
																	<li className="list-inline-item">
																		<svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
																			<rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
																			<rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
																		</svg>
																		متقدم
																	</li>
																</ul>
															</div>
														</div>
													</td>
													<td>3200</td>
													<td>
														<span className="lh-1">
															<span className="text-warning">4.5</span>
															<span className="mx-1 align-text-top">
																<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																	<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
																	</path></svg>
															</span>
															(6,380)
														</span>
													</td>
													<td>
														<span className="badge bg-success">بث مباشر</span>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown2" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>

															<span className="dropdown-menu" aria-labelledby="courseDropdown2">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	Edit
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div>
																<a href="#">
																	<img src="../assets/images/course/course-gatsby.jpg" alt="course" className="rounded img-4by3-lg" />
																</a>
															</div>
															<div className="ms-3">
																<h4 className="mb-1 h5">
																	<a href="#" className="text-inherit">Gatsby Tutorial - Fast Website...</a>
																</h4>
																<ul className="list-inline fs-6 mb-0">
																	<li className="list-inline-item">
																		<span className="align-text-bottom">
																			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
																				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
																				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
																			</svg>
																		</span>
																		<span>4h 10m</span>
																	</li>
																	<li className="list-inline-item">
																		<svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
																			<rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
																			<rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
																		</svg>
																		مبتدئ
																	</li>
																</ul>
																<div className="progress mt-2" style={{ height: "3px" }}>
																	<div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																</div>
															</div>
														</div>
													</td>
													<td>0</td>
													<td>
														<span className="lh-1">
															<span className="text-warning">4.5</span>
															<span className="mx-1 align-text-top">
																<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																	<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
																	</path></svg>
															</span>
															(5,400)
														</span>
													</td>
													<td><span className="badge bg-info">مسودة</span></td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown3" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown3">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	Edit
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div>
																<a href="#"><img src="../assets/images/course/course-sass.jpg" alt="course" className="rounded img-4by3-lg" /></a>
															</div>
															<div className="ms-3">
																<h4 className="mb-1 h5">
																	<a href="#" className="text-inherit">Learn SCSS-Lang Courses - Basic</a>
																</h4>
																<ul className="list-inline fs-6 mb-0">
																	<li className="list-inline-item">
																		<span className="align-text-bottom">
																			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
																				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
																				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
																			</svg>
																		</span>
																		<span>2h 59m</span>
																	</li>
																	<li className="list-inline-item">
																		<svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
																			<rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
																			<rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
																		</svg>
																		متقدم
																	</li>
																</ul>
															</div>
														</div>
													</td>
													<td>0</td>
													<td>
														<span className="lh-1">
															<span className="text-warning">4.5</span>
															<span className="mx-1 align-text-top">
																<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																	<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
																	</path></svg>
															</span>
															(7,800)
														</span>
													</td>
													<td>
														<span className="badge bg-warning">قيد الانتظار</span>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown4" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown4">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	Edit
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<div>
																<a href="#"><img src="../assets/images/course/course-gatsby.jpg" alt="course" className="rounded img-4by3-lg" /></a>
															</div>
															<div className="ms-3">
																<h4 className="mb-1 h5">
																	<a href="#" className="text-inherit">Gatsby Tutorial - Fast Website</a>
																</h4>
																<ul className="list-inline fs-6 mb-0">
																	<li className="list-inline-item">
																		<span className="align-text-bottom">
																			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
																				<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
																				<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
																			</svg>
																		</span>
																		<span>4h 10m</span>
																	</li>
																	<li className="list-inline-item">
																		<svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																			<rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
																			<rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
																			<rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
																		</svg>
																		مبتدئ
																	</li>
																</ul>
															</div>
														</div>
													</td>
													<td>23</td>
													<td>
														<span className="lh-1">
															<span className="text-warning">4.5</span>
															<span className="mx-1 align-text-top">
																<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																	<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
																	</path></svg>
															</span>
															(9,200)
														</span>
													</td>
													<td>
														<span className="badge bg-danger">تم الحذف</span>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" id="courseDropdown5" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown5">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	Edit
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
											</tbody>
										</table>
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
							<div className="modal-title tajawal-bold">تعديل الدروس</div>
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

			<AddLessonPopup show={showAddLessonPopup} handleClose={handleCloseAddLessonPopup} />

						
					</div>
				</section>
			</main>

		</div>
	)
}

export default Page