import Link from "next/link";
import "./Image.module.css"

const ImageLayout = async () => {
  const Color1 = `#c7c7c747`;
  const Color2 = `#ffffff`;

  const imageUrl = "https://t3.ftcdn.net/jpg/03/25/13/44/360_F_325134428_Au0z61aShtXoDP6y2r9YLJkjIZj69r1A.jpg";

  const css = `
  #imgBtn {
    border: 1px solid ${Color2};
  }
  #imgBtn:hover {
    background-color: ${Color1};
    border: 1px solid ${Color2};
  }
`;

  return (

    <section
      className="py-20 w-full relative jarallax"
      data-jarallax=""
      data-speed="0.5"
      style={{
        zIndex: 0,
        backgroundImage: `url(${imageUrl})`,
        backgroundAttachment: "fixed",
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{
        paddingTop: "5rem !important",
        paddingBottom: "5rem !important",
        backgroundColor: 'rgba(15, 23, 42, .7) !important'
      }}>
        <style>{css}</style>
        <div className="absolute inset-0 bg-slate-900/70" style={{
          backgroundColor: 'rgba(15, 23, 42, .7) !important'
        }}></div>
        <div className="container relative">
          <div
            className="grid grid-cols-1 pb-8 text-center"
            style={{
              zIndex: 1000000,
              position: "relative",
            }}
          >
            <h1 className="mb-4 md:text-3xl text-2xl font-medium tajawal-bold" style={{
              color: 'white !important'
            }}>
              انطلق في رحلة التعلم معنا اليوم
            </h1>

            <p className="max-w-xl mx-auto text-lg tajawal-bold" style={{
              color: 'white !important'
            }}>
              انضم إلينا لتجرب تعليمية فريدة وملهمة. احصل على فرصة لاستكشاف محتوى تعليمي شامل والتواصل مع مدرسين متخصصين. سجّل الآن للحصول على فترة تجريبية مجانية وابدأ في تحقيق أهدافك الأكاديمية بثقة!
            </p>

            <div className="relative mt-8">
              <Link
                href="/auth/register"
                target="_blank"
                id="imgBtn"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded-md me-2"
                style={{
                  color: 'white !important'
                }}
              >
                اشترك الآن
              </Link>
            </div>
          </div>
        </div>
        <div
          id="jarallax-container-1"
          className="jarallax-container absolute top-0 left-0 w-full h-full overflow-hidden -z-100"
        >
          <div className="bg-center bg-cover bg-no-repeat fixed top-0 left-0 w-1366 h-336.5 overflow-hidden pointer-events-none transform-style-preserver-3d backface-hidden -mt-16.75 transform-translate-y-101.342"></div>
        </div>
      </div>
    </section>
  );
};
export default ImageLayout;
