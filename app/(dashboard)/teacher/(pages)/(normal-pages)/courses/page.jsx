"use client"
import Navbar from '../../../../../(dashboard)/teacher/_components/Navbar';
import Header from '../../../../../(dashboard)/teacher/_components/Header';
import React, { useState } from 'react'
import ComponentHeader from '../../../../../(dashboard)/teacher/_components/ComponentHeader';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LessonPopup from "@/app/(dashboard)/teacher/_components/editPages/LessonPopup"
import { TiPlus } from "react-icons/ti";
import AddCoursePopup from "../../(add-pages)/courses-add/page"


function Page() {

	/* Show model Start */
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	/* Show model End */

	/* Add Course start */
  const [showAddCoursePopup, setShowAddCoursePopup] = useState(false);
  const handleShowAddCoursePopup = () => setShowAddCoursePopup(true);
  const handleCloseAddCoursePopup = () => setShowAddCoursePopup(false);
	/* Add Course end */
	
	const [showLivePopup, setShowLivePopup] = useState(false);
	const [showVideoLessonPopup, setShowVideoLessonPopup] = useState(false);

	const handleClosePopup = () => {
		setShowLivePopup(false);
		setShowVideoLessonPopup(false);
	};



	const sectionClassName = show || showLivePopup || showVideoLessonPopup ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show || showLivePopup || showVideoLessonPopup ? { overflow: "hidden", paddingRight: "17px", maxWidth: "75%" } : { maxWidth: "75%" };
	
	
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

								{/* Add Lives */}
								<div className="row">
									<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 cursor-pointer" onClick={() => setShowVideoLessonPopup(true)}>
										<div className="card h-100 border-2 shadow-none card-dashed-hover p-12">
											<div className="card-body d-flex flex-column justify-content-center text-center">
												<h2>إنشاء دورة مسجلة</h2>
											</div>
										</div>
									</div>
									<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 cursor-pointer" onClick={() => setShowLivePopup(true)}>
										<div className="card h-100 border-2 shadow-none card-dashed-hover p-12">
											<div className="card-body d-flex flex-column justify-content-center text-center">
												<h2>إنشاء بث مباشر</h2>
											</div>
										</div>
									</div>
								</div>
								{/* Table Start Here */}

								<div className="card mb-4">

									{/*  Card header  */}
									<div className='card px-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2'>
										<div className="d-flex align-items-center justify-content-between">
											<div className="card-header border-bottom-0">
												<h3 className="mb-0 tajawal-bold">الدورات</h3>
												<span>نظرة عامة وسريعة على جميع الدورات الحالية.</span>
											</div>
											<div className="card-header border-bottom-0 d-flex align-items-center justify-content-center">
												<a className="btn btn-primary btn-sm d-none d-md-block" onClick={handleShowAddCoursePopup}>
													<span className='mx-2'>
														إضافة دورة
													</span>
													<TiPlus />
												</a>
											</div>
										</div>

									</div>
									{/*  Table  */}
									<div className="table-responsive">
										<table className="table mb-0 text-nowrap table-hover table-centered">
											<thead className="table-light">
												<tr>
													<th>الدورات</th>
													<th>الثمن</th>
													<th>الرقم</th>
													<th>التاريخ</th>
													<th>طريقة الدفع</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<h5 className="mb-0 tajawal-bold">
															<a href="#" className="text-inherit">Building Scalable APIs with GraphQL</a>
														</h5>
													</td>
													<td>$89</td>
													<td>#10023</td>
													<td>June 9, 2020</td>
													<td>Amex</td>
													<td>
														<span className="dropdown dropstart">
															<button className="btn-icon btn btn-ghost btn-sm rounded-circle" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</button>
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
														<h5 className="mb-0 tajawal-bold">
															<a href="#" className="text-inherit">HTML5 Web Front End Development</a>
														</h5>
													</td>
													<td>$129</td>
													<td>#10020</td>
													<td>June 9, 2020</td>
													<td>Mastercard</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown2" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown2">
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
													</td>
												</tr>
												<tr>
													<td>
														<h5 className="mb-0 tajawal-bold">
															<a href="#" className="text-inherit">Learn BasicJavaScript Courses</a>
														</h5>
													</td>
													<td>$29</td>
													<td>#10018</td>
													<td>June 8, 2020</td>
													<td>PayPal</td>
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
															<a href="#" className="text-inherit">Get Started: React Js Courses</a>
														</h5>
													</td>
													<td>$59</td>
													<td>#10003</td>
													<td>June 9, 2020</td>
													<td>Visa</td>
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
															<a href="#" className="text-inherit">Building Scalable APIs with GraphQL</a>
														</h5>
													</td>
													<td>$129</td>
													<td>#10020</td>
													<td>June 7, 2020</td>
													<td>Mastercard</td>
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
															<a href="#" className="text-inherit">Master in CSS3 Courses Online</a>
														</h5>
													</td>
													<td>$29</td>
													<td>#10018</td>
													<td>June 8, 2020</td>
													<td>PayPal</td>
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
															<a href="#" className="text-inherit">Online Angular Courses</a>
														</h5>
													</td>
													<td>$59</td>
													<td>#10003</td>
													<td>June 6, 2020</td>
													<td>Visa</td>
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
															<a href="#" className="text-inherit">Master in CSS3 Courses Online</a>
														</h5>
													</td>
													<td>$29</td>
													<td>#10018</td>
													<td>June 8, 2020</td>
													<td>PayPal</td>
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
															<a href="#" className="text-inherit">Online Angular Courses</a>
														</h5>
													</td>
													<td>$59</td>
													<td>#10003</td>
													<td>June 6, 2020</td>
													<td>Visa</td>
													<td className="align-middle border-bottom-0">
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown10" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown10">
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
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>


						{/* Live Broadcast Popup */}
						{showLivePopup && (
							<div className="fade modal-backdrop show"></div>
						)}
						<div
							role="dialog"
							aria-modal="true"
							className={`fade modal ${showLivePopup ? 'show' : ''}`}
							tabIndex="-1"
							style={{ display: showLivePopup ? 'block' : 'none' }}
						>
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
										<div className="modal-title tajawal-bold"> إنشاء بث مباشر</div>
										<button type="button" className="btn-close" aria-label="Close" onClick={handleClosePopup}></button>
									</div>
									<div className="modal-body">
										<form className="">
											<div className="row">
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">المحاضر </label>
													<input
														placeholder="المحاضر "
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">التاريخ </label>
													<div className="input-group">
														<input className="form-control flatpickr flatpickr-input" placeholder="حدد التاريخ" aria-describedby="basic-addon2" readOnly="" type="text" style={{
															borderRadius: "0px 5px 5px 0px"
														}} />
														<span className="input-group-text" id="basic-addon2" style={{
															borderRadius: "5px 0px 0px 5px"
														}}>
															<i className="fe fe-calendar"></i>
														</span>
													</div>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> المادة</label>
													<select className="form-select">
														<option value="math">الرياضيات</option>
														<option value="english">الإنجليزية</option>
													</select>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> رابط البث</label>
													<input
														placeholder="أدخل رابط البث (مثال: https://example.com)"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>

												<div className="mb-3 col-lg-12 col-md-12">
													<label className="form-label">الوصف </label>
													<textarea
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
										<button type="button" className="btn btn-secondary w-20" onClick={handleClosePopup}>إغلاق</button>
										<button type="button" className="btn btn-primary w-20" onClick={handleClosePopup}>إنشاء</button>
									</div>
								</div>
							</div>
						</div>

						{/* Video Lesson Popup */}
						{showVideoLessonPopup && (
							<div className="fade modal-backdrop show"></div>
						)}
						<div
							role="dialog"
							aria-modal="true"
							className={`fade modal ${showVideoLessonPopup ? 'show' : ''}`}
							tabIndex="-1"
							style={{ display: showVideoLessonPopup ? 'block' : 'none' }}
						>
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
										<div className="modal-title tajawal-bold">إنشاء درس فيديو</div>
										<button type="button" className="btn-close" aria-label="Close" onClick={handleClosePopup}></button>
									</div>
									<div className="modal-body">
										<form className="">
											<div className="row">
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">المحاضر </label>
													<input
														placeholder="المحاضر "
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">التاريخ </label>
													<div className="input-group">
														<input className="form-control flatpickr flatpickr-input" placeholder="حدد التاريخ" aria-describedby="basic-addon2" readOnly="" type="text" style={{
															borderRadius: "0px 5px 5px 0px"
														}} />
														<span className="input-group-text" id="basic-addon2" style={{
															borderRadius: "5px 0px 0px 5px"
														}}>
															<i className="fe fe-calendar"></i>
														</span>
													</div>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> المادة</label>
													<select className="form-select">
														<option value="math">الرياضيات</option>
														<option value="english">الإنجليزية</option>
													</select>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> رابط الفيديو</label>
													<input
														placeholder="أدخل رابط الفيديو (مثال: https://example.com)"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>

												<div className="mb-3 col-lg-12 col-md-12">
													<label className="form-label">الوصف </label>
													<textarea
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
										<button type="button" className="btn btn-secondary w-20" onClick={handleClosePopup}>إغلاق</button>
										<button type="button" className="btn btn-primary w-20" onClick={handleClosePopup}>إنشاء</button>
									</div>
								</div>
							</div>
						</div>

						<AddCoursePopup show={showAddCoursePopup} handleClose={handleCloseAddCoursePopup} />

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

					</div>
				</section>
			</main>

		</div>
	)
}

export default Page