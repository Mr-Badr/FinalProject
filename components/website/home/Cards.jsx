import Image from "next/image";

const Cards = async () => {
  return (
    <section className="py-lg-14 py-6 text-center bg-white" dir="rtl">
      <div className="container my-lg-8">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-12">
            <div className="mb-6 mb-lg-8">
              <span className="text-uppercase text-primary tajawal-bold ls-md tajawal-bold mb-2">
                بوابات إدارة فعّالة
              </span>
              <h2 className="h1 tajawal-bold tajawal-bold">
                تقنية الإدارة المتميزة
              </h2>
              <h2 className="h1 tajawal-bold tajawal-bold">
                لتحسين أداءك اليومي بفاعلية
              </h2>
              <p className="mb-0 lead">
                استعرض أحدث تحديثات في تكنولوجيا الإدارة لتجربة مركز التكوين المتطورة والفعّالة.
                <br />
                اكتشف حلولًا مبتكرة تعزز كفاءة التعلم وتحسّن الأداء بأسلوب مبتكر و مميز
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 col-12 ">
            <div className="mb-4 card-hover border card">
              <Image
                src="/assets/images/c1.jpg"
                alt="writing"
                className="img-fluid rounded-top-3"
                width={500}
                height={500}
              />
              <div className="card-body p-6" dir="ltr">
                <h3 className="mb-3">بوابة المتدرب</h3>
                متابعة الغياب والتأخر في كل حصة دراسية متابعة الواجبات والمهام
                المطلوبة من الطلاب متابعة المخالفات السلوكية متابعة الملاحظات
                المسجلة متابعة النقاط المرسلة من المعلمين{" "}
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4 col-12 ">
            <div className="mb-4 card-hover border card">
              <Image
                src="/assets/images/c2.jpg"
                alt="writing"
                className="img-fluid rounded-top-3"
                width={500}
                height={500}
              />
              <div className="card-body p-6" dir="ltr">
                <h3 className="mb-3">بوابة المؤطر</h3>
                تسجيل الغياب والتأخر لكل درس. تتبع إلكتروني لأعمال المتدربين على
                مدار السنة. إرسال تعليقات المتدربين إلى مدير المركز. الاطلاع على
                إحصائيات الغياب والتأخر للمتدربين.
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4 col-12 ">
            <div className="mb-4 card-hover border card">
              <Image
                src="/assets/images/c3.jpg"
                alt="writing"
                className="img-fluid rounded-top-3"
                width={500}
                height={500}
              />
              <div className="card-body p-6" dir="ltr">
                <h3 className="mb-3">بوابة المسير والمدير</h3>
                إدارة شؤون الموظفين متابعة الطلاب وتسجيلاتهم متابعة الإيرادات
                والنفقات خدمات الاختبارات إدارة شاملة لجميع تفاصيل المركز
                التكويني
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cards;
