import Link from 'next/link'
import React, { useState } from 'react';

function Quizzes() {
	const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

		const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
    const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};
  return (
		<section className={sectionClassName} style={sectionStyle}>
					<div className="row">
						{/*  Page Header */}
						<div className="col-lg-12 col-md-12 col-12">
							<div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
								<div className="mb-2 mb-lg-0">
									<h1 className="mb-1 tajawal-bold">
										المسابقات
										<span className="fs-5 mx-1">(12,105)</span>
									</h1>
									{/*  Breadcrumb  */}
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item">
												<a href="admin-dashboard.html">لوحة التحكم</a>
											</li>
											<li className="breadcrumb-item"><a href="#">User</a></li>
											<li className="breadcrumb-item active" aria-current="page">مسابقة</li>
										</ol>
									</nav>
								</div>
								<div className="nav btn-group" role="tablist">
								<div className='me-2'>
									<Link href="/admin/quizzes-add" className="btn btn-outline-secondary" data-bs-target="#newCatgory" alt="">إضافة مسابقة جديدة</Link>
								</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							{/*  Card  */}
							<div className="card mb-4">
								{/*  Card Header  */}
								<div className="card-header border-bottom-0">
									<form className="d-flex align-items-center">
										<span className="position-absolute ps-3 search-icon">
											<i className="fe fe-search"></i>
										</span>
										<input type="search" className="form-control ps-6" placeholder="البحث عن المسابقات" />
									</form>
								</div>
								{/*  Table   */}
								<div className="table-responsive border-0 overflow-y-hidden">
									<table className="table mb-0 text-nowrap table-hover table-centered">
										<thead className="table-light">
											<tr>
												<th>المسابقات</th>
												<th>أستاذ</th>
												<th>المسجلين</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-gatsby.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">Revolutionize how you build the web...</h4>
																<span>Added on 7 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-7.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">خلود</h5>
													</div>
												</td>
												<td>12,234</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
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
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-graphql.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">Guide to Static Sites with Gatsby...</h4>
																<span>Added on 6 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-6.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">كريمة</h5>
													</div>
												</td>
												<td>2,000</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/teachers-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
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
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-html.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">The Modern JavaScript Courses ...</h4>
																<span>Added on 5 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-5.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">سمير</h5>
													</div>
												</td>
												<td>22,345</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/teachers-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
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
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-javascript.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">Courses JavaScript Heading Title ...</h4>
																<span>Added on 5 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">أميمة</h5>
													</div>
												</td>
												<td>5,235</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/teachers-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
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
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-node.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">Get Start with Node Heading Title ...</h4>
																<span>Added on 5 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-3.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">هناء</h5>
													</div>
												</td>
												<td>7,200</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/teachers-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
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
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-laravel.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">Get Start with Laravel...</h4>
																<span>Added on 5 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-9.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">خلود</h5>
													</div>
												</td>
												<td>22,500</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/teachers-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
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
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-react.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">Get Start with React...</h4>
																<span>Added on 4 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-2.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">كرم</h5>
													</div>
												</td>
												<td>6,759</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/teachers-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
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
													<a href="#" className="text-inherit">
														<div className="d-flex align-items-center">
															<div>
																<img src="../../assets/images/course/course-angular.jpg" alt="" className="img-4by3-lg rounded" />
															</div>
															<div className="ms-3">
																<h4 className="mb-1 text-primary-hover">Get Start with Angular...</h4>
																<span>Added on 3 July, 2023</span>
															</div>
														</div>
													</a>
												</td>
												<td>
													<div className="d-flex align-items-center">
														<img src="../../assets/images/avatar/avatar-4.jpg" alt="" className="rounded-circle avatar-xs me-2" />
														<h5 className="mb-0 tajawal-bold">يونس</h5>
													</div>
												</td>
												<td>7,234</td>
												<td>
															<div className="hstack gap-4">
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Message" data-bs-original-title="Message"><i className="fe fe-mail"></i></a>
																<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Delete" data-bs-original-title="Delete"><i className="fe fe-trash"></i></a>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/teachers-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			حذف
																		</Link>
																	</span>
																</span>
															</div>
														</td>
											</tr>
										</tbody>
									</table>
								</div>
								{/*  Card Footer  */}
								<div className="card-footer">
									<nav>
										<ul className="pagination justify-content-center mb-0">
											<li className="page-item disabled">
												<a className="page-link mx-1 rounded" href="#" tabindex="-1" aria-disabled="true">
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
										<div className="modal-title tajawal-bold">تعديل المسابقات</div>
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

export default Quizzes