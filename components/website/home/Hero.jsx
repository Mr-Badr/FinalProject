import React from 'react'

function Hero() {
  return (
    <section className="py-lg-8 py-6 bg-auto bg-light hero-graphics">
      <div className="container my-lg-8">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-12">
            <div className="text-center">
              <h1 className="display-2 tajawal-bold mb-3 text-primary">
                <span className="text-dark px-3 px-md-0">CLIC SCHOOL</span>
                <span className="headingTyped text-primary"></span>
              </h1>
              <p className="mb-6 h2 text-dark">تعلم بدون حدود مع مدرستنا الرقمية</p>
              <a href="../pricing.html" className="btn btn-primary me-2">View Plans</a>
              <a href="../sign-up.html" className="btn btn-outline-primary">Try for Free</a>
              <div className="mt-8 mb-0">
                <ul className="list-inline">
                  <li className="list-inline-item text-dark tajawal-bold lh-1 fs-4 me-3 mb-2 mb-md-0">
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check text-success" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                    </span>
                    <span className="align-middle">30,000 online courses</span>
                  </li>

                  <li className="list-inline-item text-dark tajawal-bold lh-1 fs-4 me-3 mb-2 mb-md-0">
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check text-success" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                    </span>
                    <span className="align-middle">Expert instruction</span>
                  </li>
                  <li className="list-inline-item text-dark tajawal-bold lh-1 fs-4">
                    <span className="icon-shape icon-xs rounded-circle bg-light-success text-center me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check text-success" viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                    </span>
                    <span className="align-middle">Lifetime access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero