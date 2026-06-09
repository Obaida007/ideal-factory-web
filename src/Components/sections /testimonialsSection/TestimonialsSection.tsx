import React from "react";
import Image, { StaticImageData } from "next/image";

import avatar1 from "@/assets/images/sarah.jpg";
import avatar2 from "@/assets/images/alex.jpg";

interface TestimonialsTranslations {
  label: string;
  title: string;
  titleHighlight: string;
  customer: string;
  review1Name: string;
  review1Text: string;
  review2Name: string;
  review2Text: string;
}

interface TestimonialsSectionProps {
  translations: TestimonialsTranslations;
  lang: string;
}

const QuoteIcon = () => (
  <svg
    viewBox="0 0 40 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-8 mb-5"
  >
    <path
      d="M0 30V18C0 13.6 1.26667 9.86667 3.8 6.8C6.33333 3.73333 9.93333 1.6 14.6 0.4L16.6 3.8C14.0667 4.6 12 6 10.4 8C8.8 10 8 12.2667 8 14.8H15V30H0ZM23 30V18C23 13.6 24.2667 9.86667 26.8 6.8C29.3333 3.73333 32.9333 1.6 37.6 0.4L39.6 3.8C37.0667 4.6 35 6 33.4 8C31.8 10 31 12.2667 31 14.8H38V30H23Z"
      fill="#53b1b1"
      fillOpacity="0.6"
    />
  </svg>
);

const TestimonialsSection = ({
  translations: tr,
  lang,
}: TestimonialsSectionProps) => {
  const isRtl = lang === "ar";

  const reviews = [
    {
      name: tr.review1Name,
      role: tr.customer,
      text: tr.review1Text,
      avatar: avatar1, // استبدل بـ avatar1
      initials: tr.review1Name.charAt(0),
    },
    {
      name: tr.review2Name,
      role: tr.customer,
      text: tr.review2Text,
      avatar: avatar2, // استبدل بـ avatar2
      initials: tr.review2Name.charAt(0),
    },
  ];

  // على الموبايل يظهر كارد واحد فقط، على الديسكتوب اثنان

  return (
    <section className="w-full bg-[#1e1e1e] py-16 px-4 md:px-8 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-center">
        {/* ── الجانب الأيسر: العنوان والأسهم ── */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[#53b1b1] text-sm font-semibold tracking-widest uppercase mb-3">
              {tr.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {tr.title}
              <br />
              <span className="text-white">{tr.titleHighlight}</span>
            </h2>
          </div>

          {/* أزرار التنقل */}
          <div className="flex gap-3 mt-2">
            <button
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:border-white/50 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`}
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:border-white/50 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── الجانب الأيمن: الكروت ── */}
        {/* على الديسكتوب: اثنان جنباً إلى جنب */}
        <div className="hidden md:grid grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {/* على الموبايل: كارد واحد مع التنقل */}
        <div className="md:hidden">
          <ReviewCard review={reviews[0]} />
        </div>
      </div>
    </section>
  );
};

/* ── مكوّن كارد المراجعة ── */
interface ReviewCardProps {
  review: {
    name: string;
    role: string;
    text: string;
    avatar: StaticImageData; // أو StaticImageData عند إضافة الصور
    initials: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => (
  <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/8 bg-[#272727] p-7 transition-all duration-300 hover:border-[#53b1b1]/30">
    <div>
      <QuoteIcon />
      <p className="text-sm md:text-base text-white/70 leading-relaxed">
        {review.text}
      </p>
    </div>

    {/* معلومات العميل */}
    <div className="flex items-center gap-3">
      {review.avatar ? (
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#53b1b1]/20 text-[#53b1b1] font-bold text-lg">
          {review.initials}
        </div>
      )}
      <div>
        <p className="font-semibold text-[#53b1b1] text-sm">{review.name}</p>
        <p className="text-xs text-white/50">{review.role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
