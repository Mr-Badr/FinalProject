"use client"
import React from "react";
import Link from "next/link";

function HeroSection() {
  const Background = "/assets/images/group.png";

  return (
    <section className=" bg-white hero-sec" dir="rtl" style={{
      
    }}>
      <div className="container">
        <div className="align-items-center row">
          <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-12 col-12">
            <div className="">
              <h5 className="text-dark mb-4">
                <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2"></i>{" "}
                منصة التعليم الأكثر ثقة
              </h5>
              <h1 className="display-3 mb-3">
                تعلم بدون حدود مع مدرستنا الرقمية    
                <u className="text-warning mx-2"><span className="text-primary">CLIC SCHOOL</span></u>          
                </h1>
              <p className="pe-lg-10 mb-5">
              منصة تساعدك على النجاح و التميز وتسهل عليك الوصول إلى محتوى مستواك الدراسي من دروس ، تطبيقات، ملخصات، امتحانات وفروض من خلال ملفات و قنوات يوتيوب لعدة أساتذة
              </p>
              <Link
                className="btn btn-primary"
                href="/marketing/landings/home-academy/"
              >
                أشترك مجانا الأن
              </Link>
              <Link
                className="popup-youtube fs-4 text-inherit ms-3"
                href="https://www.youtube.com/watch?v=0uiIbTBm7Jk"
                target="_blank"
              >
                <img
                  src="https://geeks-react.netlify.app/static/media/play-btn.6d9c876694a0fc0f743209a4058b5815.svg"
                  alt=""
                  className="me-2"
                />
                شاهد الآن
              </Link>
              {/* <VideoPopup /> */}
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 col-md-12 col-12">
          <div className="mt-12 mt-lg-0 position-relative hero-img">
              <div className="position-absolute top-0 start-0  d-none d-md-block" style={{
                transform: "translate(15%, -50%) !important"
              }}>
                <img
                  src="../../../assets/images/svg/graphics-2.svg"
                  alt="graphics-2"
                  className=""
                />
              </div>
              <img
                  src="../../../assets/images/education/skils.jpg"
                  alt="online course"
                className="img-fluid rounded-4 w-100 z-1 position-relative"
              />
              <div className="position-absolute top-100 translate-middle  d-none d-md-block" style={{
                right: "100% !important"
              }}>
                <img
                  src="../../../assets/images/svg/graphics-1.svg"
                  alt="graphics-1"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
