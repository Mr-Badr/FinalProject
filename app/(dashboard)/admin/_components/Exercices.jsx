import Link from 'next/link'
import React, { useState } from 'react';

function Exercices() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};
	return (
		<section className={sectionClassName} style={sectionStyle}>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					{/*  Page header  */}
					<div className="border-bottom pb-3 mb-3 d-flex align-items-center justify-content-between">
						<div>
							<h1 className="mb-1 tajawal-bold">  التمارين</h1>
							{/*  Breadcrumb  */}
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="admin-dashboard.html">لوحة التحكم</a>
									</li>
									<li className="breadcrumb-item">
										<a href="#">CMS</a>
									</li>
									<li className="breadcrumb-item active" aria-current="page">نظرة عامة</li>
								</ol>
							</nav>
						</div>
						<div>
							<a href="/admin/exercices-add" className="btn btn-primary">
								إضافة تمرين جديد
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">إجمالي المشاركات</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="h1 tajawal-bold mb-1">2,000</h2>
									<span>100Last 30Days</span>
								</div>
								<div>
									<span className="bg-light-primary icon-shape icon-xl rounded-3 text-dark-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card Body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">الأصول</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="h1 tajawal-bold mb-1">367</h2>
									<span>300+ Media Object</span>
								</div>
								<div>
									<span className="bg-light-warning icon-shape icon-xl rounded-3 text-dark-warning">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder">
											<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card Body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">المستخدمين</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="h1 tajawal-bold mb-1">13,234</h2>
									<span>1.5k in 30Days</span>
								</div>
								<div>
									<span className="bg-light-success icon-shape icon-xl rounded-3 text-dark-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card Body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">التعليقات</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="h1 tajawal-bold mb-1">120</h2>
									<span>20+ تعليق</span>
								</div>
								<div>
									<span className="bg-light-info icon-shape icon-xl rounded-3 text-dark-info">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square">
											<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card header  */}
						<div className="card-header d-flex justify-content-between align-items-center border-bottom-0 card-header-height">
							<h4 className="mb-0 tajawal-bold">المشاركات الاخيرة</h4>
							<span className="dropdown dropstart">
								<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i className="fe fe-more-vertical"></i>
								</a>
								<span className="dropdown-menu" aria-labelledby="courseDropdown1">
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
						{/*  Table  */}
						<div className="table-responsive border-0 overflow-y-hidden">
							<table className="table mb-0 text-nowrap table-hover table-centered">
								<thead className="table-light">
									<tr>
										<th>مشاركة</th>
										<th>النوع</th>
										<th>الصنف</th>
										<th>التاريخ</th>
										<th>المؤلف</th>
										<th>الحالة</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">Revolutionize how you build the web...</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-image text-primary fs-4"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">التمارين</a>
										</td>
										<td>7 July, 2021 1:42pm</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-7.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">خلود</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
											مسودة
										</td>
										<td>
															<div className="hstack gap-4">																
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<button className="dropdown-item" onClick={handleShow}>
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</button>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			حذف
																		</Link>
																	</span>
																</span>
															</div>
														</td>
									</tr>
									<tr>
										<td>
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">Guide to Static Sites with Gatsby.js</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-video fs-4 text-primary"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">Marketing</a>
										</td>
										<td>6 July, 2021 2:42pm</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-5.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">March Menon</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
											مسودة
										</td>
										<td>
											<span className="dropdown dropstart">
												<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown3" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
													<i className="fe fe-more-vertical"></i>
												</a>
												<span className="dropdown-menu" aria-labelledby="courseDropdown3">
													<span className="dropdown-header">الإعدادات</span>
													<a className="dropdown-item" href="#">
														<i className="fe fe-edit dropdown-item-icon"></i>
														تعديل
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-move dropdown-item-icon"></i>
														Move
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-copy dropdown-item-icon"></i>
														نسخ
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-left dropdown-item-icon"></i>
														نشر
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-right dropdown-item-icon"></i>
														Unنشر
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
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">The Modern JavaScript Courses</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-link fs-4 text-primary"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">Workshop</a>
										</td>
										<td>5 July, 2021 5:42pm</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-4.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">Lisa Menon</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
											تم النشر
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
														تعديل
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-move dropdown-item-icon"></i>
														Move
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-copy dropdown-item-icon"></i>
														نسخ
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-left dropdown-item-icon"></i>
														نشر
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-right dropdown-item-icon"></i>
														Unنشر
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
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">Online WordPress Courses Become ..</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-image text-primary fs-4"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">Company</a>
										</td>
										<td>3 July, 2021 10:42am</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-8.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">Maria Pinto</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
											تم النشر
										</td>
										<td>
											<span className="dropdown dropstart">
												<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown5" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
													<i className="fe fe-more-vertical"></i>
												</a>
												<span className="dropdown-menu" aria-labelledby="courseDropdown5">
													<span className="dropdown-header">الإعدادات</span>
													<a className="dropdown-item" href="#">
														<i className="fe fe-edit dropdown-item-icon"></i>
														تعديل
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-move dropdown-item-icon"></i>
														Move
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-copy dropdown-item-icon"></i>
														نسخ
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-left dropdown-item-icon"></i>
														نشر
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-right dropdown-item-icon"></i>
														Unنشر
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
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">How to become Java Developer</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-image text-primary fs-4"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">Company</a>
										</td>
										<td>4 July, 2021 12:42pm</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">John Deo</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
											تم النشر
										</td>
										<td>
											<span className="dropdown dropstart">
												<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown6" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
													<i className="fe fe-more-vertical"></i>
												</a>
												<span className="dropdown-menu" aria-labelledby="courseDropdown6">
													<span className="dropdown-header">الإعدادات</span>
													<a className="dropdown-item" href="#">
														<i className="fe fe-edit dropdown-item-icon"></i>
														تعديل
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-move dropdown-item-icon"></i>
														Move
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-copy dropdown-item-icon"></i>
														نسخ
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-left dropdown-item-icon"></i>
														نشر
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-right dropdown-item-icon"></i>
														Unنشر
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
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">The Javascript Learning</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-video fs-4 text-primary"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">Marketing</a>
										</td>
										<td>3 July, 2021 12:42pm</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-15.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">Misty Smaln</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-info me-1 d-inline-block align-middle"></span>
											مجدول
										</td>
										<td>
											<span className="dropdown dropstart">
												<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown7" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
													<i className="fe fe-more-vertical"></i>
												</a>
												<span className="dropdown-menu" aria-labelledby="courseDropdown7">
													<span className="dropdown-header">الإعدادات</span>
													<a className="dropdown-item" href="#">
														<i className="fe fe-edit dropdown-item-icon"></i>
														تعديل
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-move dropdown-item-icon"></i>
														Move
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-copy dropdown-item-icon"></i>
														نسخ
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-left dropdown-item-icon"></i>
														نشر
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-right dropdown-item-icon"></i>
														Unنشر
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
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">How to become modern Stack Developer</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-image fs-4 text-primary"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">Company</a>
										</td>
										<td>3 July, 2021 12:42pm</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-12.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">March Liso</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
											تم النشر
										</td>
										<td>
											<span className="dropdown dropstart">
												<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown8" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
													<i className="fe fe-more-vertical"></i>
												</a>
												<span className="dropdown-menu" aria-labelledby="courseDropdown8">
													<span className="dropdown-header">الإعدادات</span>
													<a className="dropdown-item" href="#">
														<i className="fe fe-edit dropdown-item-icon"></i>
														تعديل
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-move dropdown-item-icon"></i>
														Move
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-copy dropdown-item-icon"></i>
														نسخ
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-left dropdown-item-icon"></i>
														نشر
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-right dropdown-item-icon"></i>
														Unنشر
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
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">How to become Full Stack Developer</a>
											</h5>
										</td>
										<td>
											<i className="fe fe-link fs-4 text-primary"></i>
										</td>
										<td>
											<a href="#" className="text-inherit">Workshop</a>
										</td>
										<td>2 July, 2021 12:42pm</td>
										<td>
											<div className="d-flex align-items-center">
												<img src="../../assets/images/avatar/avatar-2.jpg" alt="" className="rounded-circle avatar-xs me-2" />
												<h5 className="mb-0 tajawal-bold">هناء</h5>
											</div>
										</td>
										<td>
											<span className="badge-dot bg-danger me-1 d-inline-block align-middle"></span>
											تم الحذف
										</td>
										<td>
											<span className="dropdown dropstart">
												<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown9" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
													<i className="fe fe-more-vertical"></i>
												</a>
												<span className="dropdown-menu" aria-labelledby="courseDropdown9">
													<span className="dropdown-header">الإعدادات</span>
													<a className="dropdown-item" href="#">
														<i className="fe fe-edit dropdown-item-icon"></i>
														تعديل
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-move dropdown-item-icon"></i>
														Move
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-copy dropdown-item-icon"></i>
														نسخ
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-left dropdown-item-icon"></i>
														نشر
													</a>
													<a className="dropdown-item" href="#">
														<i className="fe fe-toggle-right dropdown-item-icon"></i>
														Unنشر
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
							<div className="modal-title tajawal-bold">تعديل التمارين</div>
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

export default Exercices