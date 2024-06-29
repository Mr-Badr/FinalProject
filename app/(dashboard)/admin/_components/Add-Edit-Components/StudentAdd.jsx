import Link from 'next/link'
import React from 'react'

function CourseNew() {
  return (
    <section className="container-fluid p-4">
					<div className="row">
						{/*  Page header  */}
						<div className="col-lg-12 col-md-12 col-12">
							<div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
								<div className="mb-3 mb-md-0">
									<h1 className="mb-1 tajawal-bold">إضافة طالب جديد</h1>
									{/*  Breadcrumb  */}
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item">
												<Link href="/admin">لوحة التحكم</Link>
											</li>
											<li className="breadcrumb-item"><a href="#">CMS</a></li>
											<li className="breadcrumb-item active" aria-current="page">إضافة طالب جديد</li>
										</ol>
									</nav>
								</div>
								<div>
									<Link href="/admin/students" className="btn btn-outline-secondary">العودة إلى كافة الطلاب</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-9 col-lg-8 col-md-12 col-12">
							{/*  Card  */}
							<div className="card border-0 mb-4">
								{/*  Card header  */}
								<div className="card-header">
									<h4 className="mb-0 tajawal-bold">تسجيل طالب  </h4>
								</div>
								<form className="needs-validation">
									{/*  Card body  */}
									<div className="card-body">
										<input type="radio" className="btn-check mb-1 mb-md-0" name="options" id="option1" autocomplete="off" />
										<label className="btn btn-outline-secondary me-1" htmlFor="option1">
											<i className="fe fe-image me-1"></i>
											صورة
										</label>

										<input type="radio" className="btn-check mb-1 mb-md-0" name="options" id="option2" autocomplete="off" />
										<label className="btn btn-outline-secondary me-1" htmlFor="option2">
											<i className="fe fe-video me-1"></i>
											فيديو
										</label>
										<input type="radio" className="btn-check mb-1 mb-md-0" name="options" id="option3" autocomplete="off" />
										<label className="btn btn-outline-secondary me-1" htmlFor="option3">اقتباس</label>
										<input type="radio" className="btn-check mb-1 mb-md-0" name="options" id="option4" autocomplete="off" />
										<label className="btn btn-outline-secondary me-1" htmlFor="option4">
											<i className="fe fe-link me-1"></i>
											رابط
										</label>

										<div id="my-dropzone" className="dropzone mt-4 border-dashed rounded-2 min-h-0 dz-clickable"><div className="dz-default dz-message"><button className="dz-button" type="button">قم بوضع الملفات هنا للتحميل</button></div></div>
										{/*  Add the "Upload" button  */}
										<div className="mt-4">
											{/*  Form  */}
											<div className="row">
												{/*  Date  */}
												<div className="mb-3 col-md-4">
													<label htmlFor="selectDate" className="form-label">التاريخ</label>
													<input type="text" id="selectDate" className="form-control text-dark flatpickr flatpickr-input" placeholder="حدد تاريخ" required="" readonly="readonly" />
													<div className="invalid-feedback">الرجاء إدخال تاريخ.</div>
												</div>
												<div className="mb-3 col-md-9">
													{/*  Title  */}
													<label htmlFor="postTitle" className="form-label">العنوان</label>
													<input type="text" id="postTitle" className="form-control text-dark" placeholder="عنوان الطالب" required="" />
													<small>اجعل عناوين دوراتك أقل من 60 حرفًا. اكتب عنوانًا يصف محتوى الموضوع. ضع سياقًا لجمهورك.</small>
													<div className="invalid-feedback">المرجو ادخال العنوان.</div>
												</div>
												{/* Teacher */}
												<div className="mb-3 col-md-9">
													<label htmlFor="postTitle" className="form-label">الأستاذ</label>
													<input type="text" id="postTitle" className="form-control text-dark" placeholder=" إسم الأستاذ" required="" />
													<div className="invalid-feedback">المرجو ادخال إسم الأستاذ.</div>
												</div>
												{/*  Slug  */}
												<div className="mb-3 col-md-9">
													<label htmlFor="basic-url" className="form-label">السمة</label>
													<div className="input-group mb-1">
														<span className="input-group-text" id="basic-addon3">https://example.com/</span>
														<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
													</div>
													<small>يجب أن يحتوي الحقل على قيمة فريدة</small>
												</div>
												{/*  Excerpt  */}
												<div className="mb-3 col-md-9">
													<label htmlFor="Excerpt" className="form-label">الوصف</label>
													<textarea rows="3" id="Excerpt" className="form-control text-dark" placeholder="الوصف"></textarea>
													<small>مقتطف قصير من الكتابة.</small>
												</div>
												{/*  Category  */}
												<div className="mb-3 col-md-9">
													<label className="form-label" htmlFor="category">المادة</label>
													<select className="form-select" id="category" required="">
														<option value="">اختيار المادة</option>
														<option value="Marketing">تربية إسلامية</option>
														<option value="Post Category"> رياضيات</option>
														<option value="Workshop"> علوم</option>
													</select>
													<div className="invalid-feedback">الرجاء اختيار الفئة.</div>
												</div>
											</div>
										</div>
										{/*  Editor  */}
										<div className="mt-2 mb-4">
                      {/* Editor Shuold be here */}
										</div>
										{/*  button  */}
										<button type="submit" className="btn btn-primary">نشر</button>
										<button type="submit" className="btn btn-outline-secondary me-2">حفظ في المسودة</button>
									</div>
								</form>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-12 col-12">
							{/*  Card  */}
							<div className="card mt-4 mt-lg-0 mb-4">
								{/*  Card Header  */}
								<div className="card-header d-lg-flex">
									<h4 className="mb-0 tajawal-bold">معلومات الطالب</h4>
								</div>
								{/*  List Group  */}
								<ul className="list-group list-group-flush">
									<li className="list-group-item">
										<span className="text-body">الطالب ID</span>
										<h5>8693637308</h5>
									</li>
									<li className="list-group-item">
										<span className="text-body">الحالة</span>
										<h5>
											<span className="badge-dot bg-success d-inline-block me-1"></span>
											تم النشر
										</h5>
									</li>
									<li className="list-group-item">
										<span className="text-body">تم إنشائه بواسطة</span>
										<div className="d-flex mt-2">
											<img src="../../assets/images/avatar/avatar-1.jpg" alt="" className="avatar-sm rounded-circle" />
											<div className="ms-2">
												<h5 className="mb-n1">دروس</h5>
												<small>مدير</small>
											</div>
										</div>
									</li>
									<li className="list-group-item">
										<span className="text-body">تم إنشائه في</span>
										<h5>Jul 30, 2:21 PM</h5>
									</li>
									<li className="list-group-item">
										<span className="text-body">نشرت لأول مرة في</span>
										<h5>Jul 30, 2:21 PM</h5>
									</li>
									<li className="list-group-item">
										<span className="text-body">اخر تحديث</span>
										<h5>Aug 31, 12:21 PM</h5>
									</li>
									<li className="list-group-item">
										<span className="text-body">آخر نشر</span>
										<h5>Aug 31, 12:21 PM</h5>
									</li>
								</ul>
								{/*  Card  */}
							</div>
							<div className="card mb-4">
								{/*  Card Header  */}
								<div className="card-header d-lg-flex">
									<h4 className="mb-0 tajawal-bold">العمليات</h4>
								</div>
								{/*  List group  */}
								<ul className="list-group list-group-flush">
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<span className="text-body">عدم نشر</span>
										<a href="#" className="text-inherit"><i className="fe fe-x-circle fs-4"></i></a>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<span className="text-body">تكرار</span>
										<a href="#" className="text-inherit"><i className="fe fe-copy fs-4"></i></a>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<span className="text-body">حذف</span>
										<a href="#"><i className="fe fe-trash text-danger fs-4"></i></a>
									</li>
								</ul>
							</div>
							{/*  Card   */}
							<div className="card">
								{/*  Card header  */}
								<div className="card-header d-lg-flex">
									<h4 className="mb-0 tajawal-bold">مراجعة التاريخ</h4>
								</div>
								{/*  List group  */}
								<ul className="list-group list-group-flush">
									<li className="list-group-item d-flex justify-content-between align-items-center">
										<div>
											<h5 className="mb-0 tajawal-bold">Aug 31, 12:21 PM</h5>
											<span className="text-body">Geeks Coures</span>
										</div>
										<div>
											<span className="badge bg-success badge-pill">تم النشر</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
  )
}

export default CourseNew