import React from "react";

function Section3() {
  return (
    <section className="py-7 py-lg-8" dir="rtl">
      <div className="container my-lg-8">
        <div className="row mb-8 justify-content-center">
          <div className="col-lg-8 col-md-12 col-12 text-center">
            <span className="text-primary mb-3 d-block text-uppercase tajawal-bold ls-xl">
              شريكك في النجاح
            </span>
            <h2 className="mb-2 display-4 tajawal-bold">ماذا سنقدم لك؟</h2>
            <p className="lead">نرافقك خطوة خطوة، حتى تحقيق نجاحك الدراسي</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-12">
          <div className="card border card-hover mb-4">
              <div className="card-body p-6">
                <div className="d-md-flex mb-4">
                  <div className="mb-3 mb-md-0">
                    <img
                      src="../../assets/images/ico3.avif"
                      alt="icon"
                      className="bg-primary icon-shape icon-3xl rounded-circle"
                    />
                  </div>

                  <div
                    className="ms-md-4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="tajawal-bold mb-1">برامج تعليمية شاملة</h2>
                  </div>
                </div>
                <p className="mb-4 fs-4">
                  نحرص على توفير مواد دراسية متجددة ومحدثة لتلبي أحدث المعايير
                  التعليمية، وتوفر لك أفضل تجربة تعليمية.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
          <div className="card border card-hover mb-4">
              <div className="card-body p-6">
                <div className="d-md-flex mb-4">
                  <div className="mb-3 mb-md-0">
                    <img
                      src="../../assets/images/ico1.avif"
                      alt="icon"
                      className="bg-primary icon-shape icon-3xl rounded-circle"
                    />
                  </div>
                  <div
                    className="ms-md-4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="tajawal-bold mb-1">أفضل الأساتذة</h2>
                  </div>
                </div>
                <p className="mb-4 fs-4">
                  ننتقي أفضل الأساتذة الأكفاء الذين يمتلكون تجربة وخبرة طويلة
                  تمكنهم من تقديم الأفضل لكم
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <div className="card border card-hover mb-4">
              <div className="card-body p-6">
                <div className="d-md-flex mb-4">
                  <div className="mb-3 mb-md-0">
                    <img
                      src="../../assets/images/ico4.avif"
                      alt="icon"
                      className="bg-primary icon-shape icon-3xl rounded-circle"
                    />
                  </div>
                  <div
                    className="ms-md-4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="tajawal-bold mb-1">اختبارات و تمارين</h2>
                  </div>
                </div>
                <p className="mb-4 fs-4">
                  نوفر لكم اختبارات لتقويم مستواكم ومدى استيعابكم ولتساعدكم على
                  تحديد نقاط القوة والضعف لديك، مما يتيح لك تحسين أدائك وضمان
                  تحقيق أفضل النتائج.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
          <div className="card border card-hover mb-4">
              <div className="card-body p-6">
                <div className="d-md-flex mb-4">
                  <div className="mb-3 mb-md-0">
                    <img
                      src="../../assets/images/ico7.avif"
                      alt="icon"
                      className="bg-primary icon-shape icon-3xl rounded-circle"
                    />
                  </div>
                  <div
                    className="ms-md-4"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h2 className="tajawal-bold mb-1">مناهج وتحضير للامتحانات </h2>
                  </div>
                </div>
                <p className="mb-4 fs-4">
                  نحن هنا لنضمن أنك مستعد تمامًا لتحقيق النجاح في امتحاناتك
                  الدراسية، لذلك نحرص على إعطائك مناهج إجابة فعالة وطرقاََ
                  مضمونة للتعامل الجيد مع الامتحانات.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
