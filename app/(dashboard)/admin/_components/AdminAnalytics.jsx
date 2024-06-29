import React from 'react'

function AdminAnalytics() {
  return (
    <section className="container-fluid p-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
                <div className="mb-3 mb-lg-0">
                  <h1 className="mb-0 h2 tajawal-bold">التحليلات</h1>
                </div>
                <div className="d-flex">
                  <div className="input-group me-3">
                    <input
                      className="form-control flatpickr flatpickr-input"
                      type="text"
                      placeholder="حدد تاريخ"
                      aria-describedby="basic-addon2"
                      readOnly="readOnly"
                    />

                    <span className="input-group-text" id="basic-addon2">
                      <i className="fe fe-calendar"></i>
                    </span>
                  </div>
                  <a href="#" className="btn btn-primary">
                    الإعدادات
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-12 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                    <div>
                      <span className="fs-6 text-uppercase tajawal-bold ls-md">
                        المبيعات
                      </span>
                    </div>
                    <div>
                      <span className="fe fe-shopping-bag fs-3 text-primary"></span>
                    </div>
                  </div>
                  <h2 className="tajawal-bold mb-1">$10,800</h2>
                  <span className="text-success tajawal-bold">
                    <i className="fe fe-trending-up me-1"></i>
                    +20.9$
                  </span>
                  <span className="me-1 fw-medium">عدد المبيعات</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                    <div>
                      <span className="fs-6 text-uppercase tajawal-bold ls-md">
                        الدورات
                      </span>
                    </div>
                    <div>
                      <span className="fe fe-book-open fs-3 text-primary"></span>
                    </div>
                  </div>
                  <h2 className="tajawal-bold mb-1">2,456</h2>
                  <span className="text-danger tajawal-bold">120+</span>
                  <span className="me-1 fw-medium">عدد المنتظرين</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                    <div>
                      <span className="fs-6 text-uppercase tajawal-bold ls-md">
                        الطلاب
                      </span>
                    </div>
                    <div>
                      <span className="fe fe-users fs-3 text-primary"></span>
                    </div>
                  </div>
                  <h2 className="tajawal-bold mb-1">1,22,456</h2>
                  <span className="text-success tajawal-bold">
                    <i className="fe fe-trending-up me-1"></i>
                    +1200
                  </span>
                  <span className="me-1 fw-medium">طلاب</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card body */}
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
                    <div>
                      <span className="fs-6 text-uppercase tajawal-bold ls-md">
                        أستاذ
                      </span>
                    </div>
                    <div>
                      <span className="fe fe-user-check fs-3 text-primary"></span>
                    </div>
                  </div>
                  <h2 className="tajawal-bold mb-1">22,786</h2>
                  <span className="text-success tajawal-bold">
                    <i className="fe fe-trending-up me-1"></i>
                    +200
                  </span>
                  <span className="me-1 fw-medium">أستاذ</span>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}

export default AdminAnalytics