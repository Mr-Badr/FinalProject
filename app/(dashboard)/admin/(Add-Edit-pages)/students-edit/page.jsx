import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <section className="container d-flex flex-column" dir="rtl">
        <div className="align-items-center justify-content-center g-0 min-vh-100 row">
          <div className="py-8 py-xl-0 col-lg-5 col-md-5">
            <div className="card">
              <div className="p-6 card-body">
                <div className="mb-4">
                  <h1 className="mb-1 fw-bold">تعديل معلومات الطالب</h1>

                </div>
                <form className="">
                  <div className="row">
                    <div className="mb-3 col-lg6 col-md-6">
                      <label className="form-label">الإسم الكامل</label>
                      <input
                        placeholder="الإسم الكامل"
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
                      <label className="form-label">العنوان </label>
                      <input
                        placeholder="العنوان الكامل"
                        required=""
                        type="text"
                        id="text"
                        className="form-control"
                        style={{
                          textAlign: "right"
                        }}
                      />
                    </div>
                    <div className="mb-0 mt-2 d-grid gap-2 col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        تعديل 
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
