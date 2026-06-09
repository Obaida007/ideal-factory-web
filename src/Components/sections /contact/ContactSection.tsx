"use client";

import React, { useState } from "react";

interface ContactTranslations {
  label: string;
  title: string;
  heading: string;
  desc: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  submitButton: string;
}

interface ContactSectionProps {
  translations: ContactTranslations;
  lang: string;
}

const ContactSection = ({ translations: tr, lang }: ContactSectionProps) => {
  const isRtl = lang === "ar";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // أضف منطق الإرسال هنا
    console.log(form);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white px-5 py-3.5 text-sm text-[#1a1a1a] placeholder:text-gray-400 outline-none focus:border-[#53b1b1] focus:ring-1 focus:ring-[#53b1b1] transition-all duration-200";

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden bg-[#0d0d0d] px-4 py-20 md:px-8 font-sans"
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg
          width="245"
          height="245"
          viewBox="0 0 245 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute top-0 right-0 translate-x-16 "
        >
          <mask
            id="mask0_1_869"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="248"
            height="245"
          >
            <path d="M248 0H0V245H248V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1_869)">
            <g opacity="0.5">
              <mask
                id="mask1_1_869"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="-1"
                y="-199"
                width="447"
                height="445"
              >
                <g opacity="0.5">
                  <path
                    d="M445.216 -198.51H-0.157104V245.068H445.216V-198.51Z"
                    fill="white"
                  />
                </g>
              </mask>
              <g mask="url(#mask1_1_869)">
                <path
                  d="M222.53 -197.577L0.780518 23.28L222.53 244.138L444.279 23.28L222.53 -197.577Z"
                  stroke="#FAFAFA"
                  strokeMiterlimit="10"
                />
              </g>
              <path
                d="M235.53 -160.786L37.7386 10.3782L209.595 207.375L407.386 36.2099L235.53 -160.786Z"
                stroke="#FAFAFA"
                strokeWidth="1.00018"
                strokeMiterlimit="10"
              />
              <path
                d="M248.533 -123.866L74.6976 -2.52304L196.53 170.613L370.365 49.2688L248.533 -123.866Z"
                stroke="#FAFAFA"
                strokeWidth="1.00012"
                strokeMiterlimit="10"
              />
              <path
                d="M261.39 -87.1504L111.655 -15.4255L183.669 133.706L333.404 61.9816L261.39 -87.1504Z"
                stroke="#FAFAFA"
                strokeWidth="1.00012"
                strokeMiterlimit="10"
              />
              <path
                d="M274.343 -50.3398L148.612 -28.3246L170.716 96.8984L296.446 74.8831L274.343 -50.3398Z"
                stroke="#FAFAFA"
                strokeWidth="1.00012"
                strokeMiterlimit="10"
              />
              <path
                d="M185.57 -41.2266L157.763 60.089L259.488 87.7853L287.295 -13.5305L185.57 -41.2266Z"
                stroke="#FAFAFA"
                strokeMiterlimit="10"
              />
              <path
                d="M222.528 -54.1279L144.809 23.281L222.53 100.688L300.249 23.2784L222.528 -54.1279Z"
                stroke="#FAFAFA"
                strokeMiterlimit="10"
              />
            </g>
          </g>
        </svg>

        <svg
          width="236"
          height="235"
          viewBox="0 0 236 235"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute bottom-0 left-0 -translate-x-16 "
        >
          <g opacity="0.5">
            <mask
              id="mask0_1_855"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="-192"
              y="-1"
              width="429"
              height="427"
            >
              <g opacity="0.5">
                <path
                  d="M-191.264 425.407H236.151V-0.0657654H-191.264V425.407Z"
                  fill="white"
                />
              </g>
            </mask>
            <g mask="url(#mask0_1_855)">
              <path
                d="M22.4432 424.513L235.251 212.67L22.4432 0.826891L-190.364 212.67L22.4432 424.513Z"
                stroke="#FFFFFF"
                strokeMiterlimit="10"
              />
            </g>
            <path
              d="M9.96755 389.224L199.783 225.046L34.8566 36.0897L-154.959 200.268L9.96755 389.224Z"
              stroke="#FFFFFF"
              strokeWidth="1.00018"
              strokeMiterlimit="10"
            />
            <path
              d="M-2.5114 353.811L164.314 237.42L47.3946 71.3514L-119.431 187.742L-2.5114 353.811Z"
              stroke="#FFFFFF"
              strokeWidth="1.00012"
              strokeMiterlimit="10"
            />
            <path
              d="M-14.8501 318.593L128.847 249.795L59.7372 106.751L-83.9602 175.548L-14.8501 318.593Z"
              stroke="#FFFFFF"
              strokeMiterlimit="10"
            />
            <path
              d="M-27.2807 283.285L93.3801 262.169L72.1679 142.057L-48.493 163.173L-27.2807 283.285Z"
              stroke="#FFFFFF"
              strokeMiterlimit="10"
            />
            <path
              d="M57.9123 274.544L84.5985 177.364L-13.0246 150.798L-39.7108 247.978L57.9123 274.544Z"
              stroke="#FFFFFF"
              strokeMiterlimit="10"
            />
            <path
              d="M22.4451 286.919L97.0305 212.67L22.4426 138.422L-52.1421 212.672L22.4451 286.919Z"
              stroke="#FFFFFF"
              strokeMiterlimit="10"
            />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* ── الجانب الأيسر ── */}
        <div className="flex flex-col gap-5 md:pt-14">
          <span className="w-fit rounded-full bg-[#53b1b1] px-5 py-2 text-sm font-medium text-white">
            {tr.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {tr.heading}
          </h2>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-sm">
            {tr.desc}
          </p>
        </div>

        {/* ── الجانب الأيمن: الفورم ── */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {tr.title}
          </h3>

          {/* الاسم والإيميل */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={tr.namePlaceholder}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={tr.emailPlaceholder}
              className={inputClass}
            />
          </div>

          {/* رقم الهاتف */}
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder={tr.phonePlaceholder}
            className={inputClass}
          />

          {/* الرسالة */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={tr.messagePlaceholder}
            rows={5}
            className={`${inputClass} resize-none`}
          />

          {/* زر الإرسال */}
          <button
            onClick={handleSubmit}
            className="w-fit rounded-xl bg-[#53b1b1] px-14 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#439999] hover:shadow-[0_0_24px_rgba(83,177,177,0.35)] active:scale-95"
          >
            {tr.submitButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
