import React from 'react'

function AdminCmsPost() {
  return (
    <section className="container-fluid p-4">
					<div className="row">
						{/*  Page Header  */}
						<div className="col-lg-12 col-md-12 col-12">
							<div className="border-bottom pb-3 mb-3 d-flex align-items-center justify-content-between">
								<div>
									<h1 className="mb-1 tajawal-bold">جميع المشاركات</h1>
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item">
												<a href="admin-dashboard.html">لوحة التحكم</a>
											</li>
											<li className="breadcrumb-item"><a href="#">CMS</a></li>
											<li className="breadcrumb-item active" aria-current="page">جميع المشاركات</li>
										</ol>
									</nav>
								</div>
								<div>
									<a href="#" className="btn btn-primary">منشور جديد</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 col-md-12 col-12">
							{/*  Card  */}
							<div className="card rounded-3">
								{/*  Card Header  */}
								<div className="card-header p-0">
									<ul className="nav nav-lb-tab border-bottom-0" id="tab" role="tablist">
										<li className="nav-item" role="presentation">
											<a className="nav-link active" id="all-post-tab" data-bs-toggle="pill" href="#all-post" role="tab" aria-controls="all-post" aria-selected="true">الكل</a>
										</li>
										<li className="nav-item" role="presentation">
											<a className="nav-link" id="published-tab" data-bs-toggle="pill" href="#published" role="tab" aria-controls="published" aria-selected="false" tabindex="-1">تم النشر</a>
										</li>
										<li className="nav-item" role="presentation">
											<a className="nav-link" id="scheduled-tab" data-bs-toggle="pill" href="#scheduled" role="tab" aria-controls="scheduled" aria-selected="false" tabindex="-1">Scheduled</a>
										</li>
										<li className="nav-item" role="presentation">
											<a className="nav-link" id="draft-tab" data-bs-toggle="pill" href="#draft" role="tab" aria-controls="draft" aria-selected="false" tabindex="-1">مسودة</a>
										</li>
										<li className="nav-item" role="presentation">
											<a className="nav-link" id="deleted-tab" data-bs-toggle="pill" href="#deleted" role="tab" aria-controls="deleted" aria-selected="false" tabindex="-1">تم الحذف</a>
										</li>
									</ul>
								</div>
								<div className="p-4 row">
									{/*  Form  */}
									<form className="d-flex align-items-center col-12 col-md-8 col-lg-3">
										<span className="position-absolute ps-3 search-icon">
											<i className="fe fe-search"></i>
										</span>
										<input type="search" className="form-control ps-6" placeholder="Search Post" />
									</form>
								</div>
								<div>
									<div className="tab-content" id="tabContent">
										{/*  Tab  */}
										<div className="tab-pane fade show active" id="all-post" role="tabpanel" aria-labelledby="all-post-tab">
											<div className="table-responsive">
												{/*  Table  */}
												<table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox table-centered table-hover">
													{/*  Table Head  */}
													<thead className="table-light">
														<tr>
															<th>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="checkAll" />
																	<label className="form-check-label" htmlFor="checkAll"></label>
																</div>
															</th>
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
														{/*  Table body  */}
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postOne" />
																	<label className="form-check-label" htmlFor="postOne"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Revolutionize how you build the web...</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image text-primary fs-4"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدورات</a>
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
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown1">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwo" />
																	<label className="form-check-label" htmlFor="postTwo"></label>
																</div>
															</td>
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
																			<i className="fe fe-move dropdown-item-icon"></i>
																			Move
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-copy dropdown-item-icon"></i>
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postThree" />
																	<label className="form-check-label" htmlFor="postThree"></label>
																</div>
															</td>
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postFour" />
																	<label className="form-check-label" htmlFor="postFour"></label>
																</div>
															</td>
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postFive" />
																	<label className="form-check-label" htmlFor="postFive"></label>
																</div>
															</td>
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postSix" />
																	<label className="form-check-label" htmlFor="postSix"></label>
																</div>
															</td>
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postSeven" />
																	<label className="form-check-label" htmlFor="postSeven"></label>
																</div>
															</td>
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postEight" />
																	<label className="form-check-label" htmlFor="postEight"></label>
																</div>
															</td>
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="tab-pane fade" id="published" role="tabpanel" aria-labelledby="published-tab">
											<div className="table-responsive">
												<table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
													<thead className="table-light">
														<tr>
															<th>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="checkPublished" />
																	<label className="form-check-label" htmlFor="checkPublished"></label>
																</div>
															</th>
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
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postNine" />
																	<label className="form-check-label" htmlFor="postNine"></label>
																</div>
															</td>
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTen" />
																	<label className="form-check-label" htmlFor="postTen"></label>
																</div>
															</td>
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
																			<i className="fe fe-move dropdown-item-icon"></i>
																			Move
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-copy dropdown-item-icon"></i>
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postEleven" />
																	<label className="form-check-label" htmlFor="postEleven"></label>
																</div>
															</td>
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
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown11" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown11">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwelve" />
																	<label className="form-check-label" htmlFor="postTwelve"></label>
																</div>
															</td>
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
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown12" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown12">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="tab-pane fade" id="scheduled" role="tabpanel" aria-labelledby="scheduled-tab">
											<div className="table-responsive">
												<table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
													<thead className="table-light">
														<tr>
															<th>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="checkScheduled" />
																	<label className="form-check-label" htmlFor="checkScheduled"></label>
																</div>
															</th>
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
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postThirteen" />
																	<label className="form-check-label" htmlFor="postThirteen"></label>
																</div>
															</td>
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
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown13" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown13">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postFourteen" />
																	<label className="form-check-label" htmlFor="postFourteen"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Revolutionize how you build the web...</a>
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
																	<img src="../../assets/images/avatar/avatar-13.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Nikala Socha</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-info me-1 d-inline-block align-middle"></span>
																مجدول
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown14" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown14">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postFifteen" />
																	<label className="form-check-label" htmlFor="postFifteen"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">The modern Javascript Course</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-link fs-4 text-primary"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">Workshop</a>
															</td>
															<td>3 July, 2021 12:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-9.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Jeny DSouza</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-info me-1 d-inline-block align-middle"></span>
																مجدول
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown15" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown15">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postSixteen" />
																	<label className="form-check-label" htmlFor="postSixteen"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Github learning course</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image fs-4 text-primary"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدرس</a>
															</td>
															<td>3 July, 2021 12:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-5.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Samiksha Nitry</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-info me-1 d-inline-block align-middle"></span>
																مجدول
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown16" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown16">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="tab-pane fade" id="draft" role="tabpanel" aria-labelledby="draft-tab">
											<div className="table-responsive">
												<table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
													<thead className="table-light">
														<tr>
															<th>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="checkDraft" />
																	<label className="form-check-label" htmlFor="checkDraft"></label>
																</div>
															</th>
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
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postSeventeen" />
																	<label className="form-check-label" htmlFor="postSeventeen"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Revolutionize how you build the web...</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image text-primary fs-4"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدورات</a>
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
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown17" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown17">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postEighteen" />
																	<label className="form-check-label" htmlFor="postEighteen"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Github learning course</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-video text-primary fs-4"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">Marketing</a>
															</td>
															<td>7 July, 2021 1:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Jone Deo</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
																مسودة
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown18" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown18">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postNineteen" />
																	<label className="form-check-label" htmlFor="postNineteen"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">how you build the website with Gatsby</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image text-primary fs-4"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدورات</a>
															</td>
															<td>7 July, 2021 1:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-14.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Dee Lumpa</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
																مسودة
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown19" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown19">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwenty" />
																	<label className="form-check-label" htmlFor="postTwenty"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Become Full Stake Developer</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image text-primary fs-4"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدورات</a>
															</td>
															<td>7 July, 2021 1:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-8.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Samara Lily</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
																مسودة
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown20" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown20">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div className="tab-pane fade" id="deleted" role="tabpanel" aria-labelledby="deleted-tab">
											<div className="table-responsive">
												<table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
													<thead className="table-light">
														<tr>
															<th>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="checkDeleted" />
																	<label className="form-check-label" htmlFor="checkDeleted"></label>
																</div>
															</th>
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
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwentyOne" />
																	<label className="form-check-label" htmlFor="postTwentyOne"></label>
																</div>
															</td>
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
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown21" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown21">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwentyTwo" />
																	<label className="form-check-label" htmlFor="postTwentyTwo"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">How to build website with React</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image fs-4 text-primary"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدرس</a>
															</td>
															<td>2 July, 2021 12:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-5.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Ellonek Lincha</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-danger me-1 d-inline-block align-middle"></span>
																تم الحذف
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown23" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown23">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwentyThree" />
																	<label className="form-check-label" htmlFor="postTwentyThree"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Learning a basic bootstrap with us</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image fs-4 text-primary"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدرس</a>
															</td>
															<td>2 July, 2021 12:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-6.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Misara Chopay</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-danger me-1 d-inline-block align-middle"></span>
																تم الحذف
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown24" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown24">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwentyFour" />
																	<label className="form-check-label" htmlFor="postTwentyFour"></label>
																</div>
															</td>
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
															<td>2 July, 2021 12:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-6.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Misara Chopay</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-danger me-1 d-inline-block align-middle"></span>
																تم الحذف
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown25" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown25">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
																		</a>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<div className="form-check">
																	<input type="checkbox" className="form-check-input" id="postTwentyFive" />
																	<label className="form-check-label" htmlFor="postTwentyFive"></label>
																</div>
															</td>
															<td>
																<h5 className="mb-0 tajawal-bold">
																	<a href="#" className="text-inherit">Online WordPress Courses Become ..</a>
																</h5>
															</td>
															<td>
																<i className="fe fe-image fs-4 text-primary"></i>
															</td>
															<td>
																<a href="#" className="text-inherit">الدرس</a>
															</td>
															<td>2 July, 2021 12:42pm</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-12.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Zeban Juben</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-danger me-1 d-inline-block align-middle"></span>
																تم الحذف
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown26" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown26">
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
																			Copy
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-left dropdown-item-icon"></i>
																			نشر
</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-toggle-right dropdown-item-icon"></i>
																			عدم نشر
																		</a>
																		<a className="dropdown-item" href="#">
																			<i className="fe fe-trash dropdown-item-icon"></i>
																			Delete
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
				</section>
  )
}

export default AdminCmsPost