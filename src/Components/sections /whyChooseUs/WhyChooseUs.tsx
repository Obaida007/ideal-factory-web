import React from "react";
import Image from "next/image";
import kitchenImg from "@/assets/images/Whychoose.png"; // استبدل بمسار صورتك

interface WhyChooseTranslations {
  title: string;
  titleHighlight: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  ctaButton: string;
}

interface WhyChooseUsProps {
  lang: string;
  translations: WhyChooseTranslations;
}

const CheckIcon = () => (
  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#53b1b1]/20 border border-[#53b1b1]/50">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#53b1b1"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
);

const WhyChooseUs = ({ lang, translations: tr }: WhyChooseUsProps) => {
  const features = [tr.feature1, tr.feature2, tr.feature3, tr.feature4];

  return (
    <section className="w-full bg-white px-4 py-10 md:px-8 font-sans">
      <div className="mx-auto max-w-7xl  rounded-[28px] bg-gradient-to-t from-[#57B7C0] via-[#0f3535] to-[#000000] shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* ── الجانب الأيسر: الصورة ── */}
          <div className="relative h-72 md:h-full min-h-[340px]">
            <Image
              src={kitchenImg}
              alt="3D kitchen render"
              fill
              className=" absolute -left-10 top-0 bject-contain object-center scale-105"
              priority
            />
          </div>

          {/* ── الجانب الأيمن: النصوص ── */}
          <div className="flex flex-col gap-6 px-8 py-10 md:px-10 md:py-12 text-left rtl:text-right">
            {/* العنوان */}
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
              {tr.title}
              <br />
              <span className="text-[#53b1b1]">{tr.titleHighlight}</span>
            </h2>

            {/* قائمة المميزات */}
            <ul className="flex flex-col gap-4">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm md:text-base text-white/85 leading-relaxed"
                >
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* زر CTA */}
            <a
              href="#"
              className="mt-2 inline-flex w-fit items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm md:text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40"
            >
              {/* أيقونة الهاتف */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#53b1b1"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {tr.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
