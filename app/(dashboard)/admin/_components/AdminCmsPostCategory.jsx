import React from 'react'

function AdminCmsPostCategory() {
  return (
    <section className="container-fluid p-4">
					<div className="row">
						{/*  Page Header  */}
						<div className="col-lg-12 col-md-12 col-12">
							<div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
								<div className="mb-3 mb-md-0">
									<h1 className="mb-1 tajawal-bold">الصنف</h1>
									{/*  Breadcrumb  */}
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item">
												<a href="admin-dashboard.html">لوحة التحكم</a>
											</li>
											<li className="breadcrumb-item"><a href="#">CMS</a></li>
											<li className="breadcrumb-item active" aria-current="page">الصنف</li>
										</ol>
									</nav>
								</div>
								<div>
									<a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newCatgory">إضافة فئة جديدة</a>
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
									{/*  Form  */}
									<form className="d-flex align-items-center">
										<span className="position-absolute ps-3 search-icon">
											<i className="fe fe-search"></i>
										</span>
										<input type="search" className="form-control ps-6" placeholder="Search Category" />
									</form>
								</div>
								{/*  Table  */}
								<div className="table-responsive border-0 overflow-y-hidden">
									<table className="table mb-0 text-nowrap table-centered table-hover table-with-checkbox">
										<thead className="table-light">
											<tr>
												<th>
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="checkAll" />
														<label className="form-check-label" htmlFor="checkAll"></label>
													</div>
												</th>
												<th>الصنف</th>
												<th>السمة</th>
												<th>مشاركات</th>
												<th>تاريخ الفئة</th>
												<th>تاريخ التحديث</th>
												<th>الحالة</th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr className="accordion-toggle collapsed" id="accordion1" data-bs-toggle="collapse" data-bs-parent="#accordion1" data-bs-target="#collapseOne" aria-expanded="false">
												<td>
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck1" />
														<label className="form-check-label" htmlFor="categoryCheck1"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit position-relative">
														<h5 className="mb-0 text-primary-hover">
															<i className="fe fe-chevron-down fs-4 me-2 position-absolute ms-n4 mt-1"></i>
															الدورات
														</h5>
													</a>
												</td>
												<td>desgincourse</td>
												<td>1</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown1">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-trash dropdown-item-icon"></i>
																حذف
															</a>
														</span>
													</span>
												</td>
											</tr>
											<tr id="collapseOne" className="collapse" style={{}}>
												<td>
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck2" />
														<label className="form-check-label" htmlFor="categoryCheck2"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover ms-3">Child Category</h5>
													</a>
												</td>
												<td>childcategory</td>
												<td>4</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-warning">مسودة</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown2" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown2">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck3" />
														<label className="form-check-label" htmlFor="categoryCheck3"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Workshop</h5>
													</a>
												</td>
												<td>Workshop</td>
												<td>6</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown3" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown3">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck4" />
														<label className="form-check-label" htmlFor="categoryCheck4"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Tutorial</h5>
													</a>
												</td>
												<td>tutorial</td>
												<td>3</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown4" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown4">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck5" />
														<label className="form-check-label" htmlFor="categoryCheck5"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Company</h5>
													</a>
												</td>
												<td>company</td>
												<td>4</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown5" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown5">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck6" />
														<label className="form-check-label" htmlFor="categoryCheck6"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Technology</h5>
													</a>
												</td>
												<td>technology</td>
												<td>6</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown6" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown6">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
												<td className="align-middle">
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck7" />
														<label className="form-check-label" htmlFor="categoryCheck7"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Business</h5>
													</a>
												</td>
												<td className="align-middle">business</td>
												<td className="align-middle">2</td>
												<td className="align-middle">16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-warning">مسودة</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown7" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown7">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
												<td className="align-middle">
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck8" />
														<label className="form-check-label" htmlFor="categoryCheck8"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Technology</h5>
													</a>
												</td>
												<td>technology</td>
												<td>1</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown8" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown8">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck9" />
														<label className="form-check-label" htmlFor="categoryCheck9"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Business</h5>
													</a>
												</td>
												<td>business</td>
												<td>1</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown9" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown9">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck10" />
														<label className="form-check-label" htmlFor="categoryCheck10"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Tutorial</h5>
													</a>
												</td>
												<td>tutorial</td>
												<td>4</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td>
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown10" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown10">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
													<div className="form-check">
														<input type="checkbox" className="form-check-input" id="categoryCheck11" />
														<label className="form-check-label" htmlFor="categoryCheck11"></label>
													</div>
												</td>
												<td>
													<a href="#" className="text-inherit">
														<h5 className="mb-0 text-primary-hover">Workshop</h5>
													</a>
												</td>
												<td>workshop</td>
												<td>4</td>
												<td>16 Oct, 2020</td>
												<td>16 Nov, 2020</td>
												<td>
													<span className="badge bg-success">بث مباشر</span>
												</td>
												<td className="align-middle border-bottom-0">
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown11" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu" aria-labelledby="courseDropdown11">
															<span className="dropdown-header">الإجراءات</span>
															<a className="dropdown-item" href="#">
																<i className="fe fe-send dropdown-item-icon"></i>
																نشر
															</a>
															<a className="dropdown-item" href="#">
																<i className="fe fe-inbox dropdown-item-icon"></i>
																نقل إلى المسودة
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
				</section>
  )
}

export default AdminCmsPostCategory