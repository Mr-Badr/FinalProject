import Image from 'next/image'
import React from 'react'

function Section() {
  return (
    <section className="px-0 container" dir='rtl'>
				<div className="row align-items-center min-vh-100">
					<div className="offset-xl-1 col-xl-5 col-lg-6 col-md-12 col-12">
						<div className="py-8" style={{
							marginRight: "1rem !important"
						}}>
							<div className="d-flex justify-content-between mb-7 align-items-center">
								<a href="/home">
								<Image
                src="/assets/images/lgg.png"
                width={100}
                height={100}
                className="logo-inverse"
                alt=""
              />
</a>
								<div className="form-check form-switch theme-switch d-none">
									<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
									<label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
								</div>
							</div>
							<div>
								<h1 className="display-4 tajawal-bold">انضم إلينا الآن</h1>
								<p className="lead text-dark">وابدأ رحلة نجاحك وتفوقك</p>
								<div className="mt-8 fs-4">
								<p className="mb-4">
                  إذا كنت بحاجة إلى دعم، يرجى زيارة بوابة الدعم
                  قبل التواصل مباشرة.
                </p>

									<p>
										<i className="bi bi-telephone text-primary me-2"></i>
										+ 0123-456-7890
									</p>
									<p>
										<i className="bi bi-envelope-open text-primary me-2"></i>
										mohammed@gmail.com
									</p>
									<p className="d-flex">
										<i className="bi bi-geo-alt text-primary me-2"></i>
										2652 Kooter Lane Charlotte, NC 28263
									</p>
								</div>
							</div>
						</div>

					</div>
					
					<div className="col-lg-6 d-lg-flex align-items-center w-lg-50 min-vh-lg-100 position-fixed-lg bg-cover bg-light top-0 right-0">
						<div className="pr-4 pr-xl-8 mr-xl-8 py-8 py-lg-0">
							
							<div>
								
								<form className="row needs-validation" novalidate="">
									
								<div className="mb-3 col-12 col-md-6">
                    <label className="form-label" htmlFor="fname">
                      الاسم الأول:
                      <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="first name" id="fname" placeholder="الاسم الأول" required />
                    <div className="invalid-feedback">الرجاء إدخال الاسم الأول</div>
                  </div>
									
									<div className="mb-3 col-12 col-md-6">
                    <label className="form-label" htmlFor="lname">
                      الاسم الأخير:
                      <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="last name" id="lname" placeholder="الاسم الأخير" required />
                    <div className="invalid-feedback">الرجاء إدخال الاسم الأخير</div>
                  </div>
									
									<div className="mb-3 col-12 col-md-6">
                    <label className="form-label" htmlFor="email">
                      البريد الإلكتروني:
                      <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="email" id="email" placeholder="البريد الإلكتروني" required />
                    <div className="invalid-feedback">الرجاء إدخال البريد الإلكتروني</div>
                  </div>
                  
                  <div className="mb-3 col-12 col-md-6">
                    <label className="form-label" htmlFor="phone">
                      رقم الهاتف:
                      <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="phone" id="phone" placeholder="رقم الهاتف" required />
                    <div className="invalid-feedback">الرجاء إدخال رقم الهاتف</div>
                  </div>
                  
                  <div className="mb-3 col-12">
                    <label className="text-dark form-label" htmlFor="contactReason">
                      سبب الاتصال:
                      <span className="text-danger">*</span>
                    </label>
                    <select className="form-select" id="contactReason" required>
                      <option value="">اختيار</option>
                      <option value="تصميم">تصميم</option>
                      <option value="تطوير">تطوير</option>
                      <option value="آخر">آخر</option>
                    </select>
                    <div className="invalid-feedback">الرجاء اختيار سبب الاتصال</div>
                  </div>
                  
                  <div className="mb-3 col-12">
                    <label className="text-dark form-label" htmlFor="messages">رسالة:</label>
                    <textarea className="form-control" id="messages" rows="3" placeholder="رسالة"></textarea>
                  </div>
									

									
									<div className="col-12">
                    <button type="submit" className="btn btn-primary w-20">إرسال</button>
                  </div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default Section