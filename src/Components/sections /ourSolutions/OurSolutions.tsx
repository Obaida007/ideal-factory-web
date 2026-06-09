"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import bgImg from "@/assets/images/bg.png";
import mainImg from "@/assets/images/image.png";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import { SolutionsAssets } from "./data-solutions";
import Link from "next/link";

interface OurSolutionsProps {
  lang: string;
  cardTranslations: { title: string; description: string }[];
  translations: {
    title: string;
    subtitle: string;
    subtitle1: string;
    maskText: string;
    exploreProjects: string;
  };
}

/** حساب كل القيم من scrollProgress في مكان واحد */
function useScrollValues(p: number) {
  const ease = (x: number) => 1 - Math.pow(1 - x, 3);
  const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
  const range = (from: number, to: number) => clamp((p - from) / (to - from));

  return {
    // طبقة 1 – outline + mask
    outlineOpacity: clamp(1 - range(0.15, 0.3) / 1), // يختفي بين 0.15→0.3 — الحساب ثابت
    maskOpacity:
      p < 0.15
        ? 0
        : p < 0.3
          ? range(0.15, 0.3)
          : p < 0.58
            ? 1
            : p < 0.66
              ? 1 - range(0.58, 0.66)
              : 0,
    scale:
      p < 0.3 ? 1 : p > 0.66 ? 180 : 1 + Math.pow(range(0.3, 0.66), 3.5) * 179,

    // طبقة 2 – خلفية
    bgOpacity: range(0.52, 0.66),
    bgBlur: clamp((p - 0.55) / 0.1) * 6,
    overlay: 0.35 + ease(range(0.81, 1)) * 0.4,

    // طبقة 3 – نص الوسط
    layer3Opacity:
      p < 0.66
        ? 0
        : p < 0.7
          ? range(0.66, 0.7)
          : p < 0.76
            ? 1
            : p < 0.81
              ? 1 - range(0.76, 0.81)
              : 0,

    // طبقة 4 – بطاقات
    layer4Opacity: range(0.81, 0.86),
    cardsY: (1 - ease(range(0.81, 0.98))) * 60,
    interactive: p >= 0.94,
  };
}

export default function OurSolutions({
  lang,
  translations,
  cardTranslations,
}: OurSolutionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0); // scrollProgress

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return;
      setP(Math.max(0, Math.min(1, -rect.top / total)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const v = useScrollValues(p);

  const solutionsList = SolutionsAssets.map((asset, i) => ({
    ...asset,
    title: cardTranslations[i]?.title ?? "",
    description: cardTranslations[i]?.description ?? "",
  }));

  return (
    <div
      ref={containerRef}
      id="solutions"
      className="relative h-[310vh] w-full bg-black"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* ── خلفيتان ── */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImg.src})`,
            opacity: 1 - v.bgOpacity,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${mainImg.src})`,
            opacity: v.bgOpacity,
          }}
        />
        {/* طبقة التعتيم / blur */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundColor: `rgba(0,0,0,${v.overlay})`,
            backdropFilter: `blur(${v.bgBlur}px)`,
            WebkitBackdropFilter: `blur(${v.bgBlur}px)`,
          }}
        />

        {/* ── طبقة 1: نص الـ Zoom ── */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            transform: `scale(${v.scale})`,
            transformOrigin: "center center",
          }}
        >
          {/* Outline */}
          <h2
            className="absolute text-5xl md:text-7xl lg:text-[7vw] font-black tracking-widest text-transparent flex flex-col items-center gap-6 font-lexend text-center uppercase"
            style={{
              opacity: v.outlineOpacity,
              WebkitTextStroke: "2px #ffffff",
            }}
          >
            {translations.maskText.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </h2>
          {/* Mask fill */}
          <span
            className="absolute text-5xl md:text-7xl lg:text-[7vw] font-black tracking-widest text-transparent bg-clip-text flex flex-col items-center gap-6 font-lexend text-center uppercase"
            style={{
              opacity: v.maskOpacity,
              backgroundImage: `url(${mainImg.src})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "2px #ffffff",
            }}
          >
            {translations.maskText.split(" ").map((w, i) => (
              <span key={i} className="block">
                {w}
              </span>
            ))}
          </span>
        </div>

        {/* ── طبقة 3: نص الوسط ── */}
        {v.layer3Opacity > 0 && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 pointer-events-none"
            style={{ opacity: v.layer3Opacity }}
          >
            <div className="max-w-3xl w-full flex flex-col items-center text-center">
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className="h-14 w-auto object-contain mb-4"
                priority
              />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                {translations.title}
              </h2>
              <p className="text-base md:text-lg font-bold text-zinc-200 max-w-2xl leading-relaxed">
                {translations.subtitle}
              </p>
              <p className="text-base md:text-lg font-bold text-primary max-w-2xl leading-relaxed">
                {translations.subtitle1}
              </p>
            </div>
          </div>
        )}

        {/* ── طبقة 4: البطاقات ── */}
        {v.layer4Opacity > 0 && (
          <div
            className="absolute inset-0 z-30 flex flex-col items-center overflow-y-auto"
            style={{
              opacity: v.layer4Opacity,
              pointerEvents: v.interactive ? "auto" : "none",
            }}
          >
            {/* هيدر الطبقة */}
            <div className="w-full max-w-[1440px] mx-auto px-[clamp(1.25rem,3.2vw,2.875rem)] pt-[calc(var(--header-height,4rem)+2rem)] pb-6 text-center flex-shrink-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                {translations.title}
              </h2>
              <p className="text-xs md:text-sm lg:text-base font-bold text-zinc-300 max-w-xl mx-auto">
                {translations.subtitle}
              </p>
              <p className="text-xs md:text-sm lg:text-base font-bold text-primary max-w-xl mx-auto">
                {translations.subtitle1}
              </p>
            </div>

            {/* البطاقات — ارتفاع auto بدل ثابت */}
            <div
              className="w-full max-w-[1440px] mx-auto px-[clamp(1.25rem,3.2vw,2.875rem)] grid grid-cols-1 lg:grid-cols-2 gap-4 flex-shrink-0"
              style={{
                transform: `translateY(${v.cardsY}px)`,
                opacity: v.layer4Opacity,
              }}
            >
              {solutionsList.map((data) => (
                <div
                  key={data.id}
                  className="group flex flex-col rounded-2xl md:rounded-3xl border border-white/5 bg-[rgba(35,31,32,0.8)] backdrop-blur-sm overflow-hidden hover:-translate-y-1 cursor-pointer transition-all duration-300 shadow-2xl"
                >
                  {/* صورة — نسبة ثابتة بدل ارتفاع ثابت */}
                  <div className="relative w-full aspect-[16/7] overflow-hidden">
                    <Image
                      src={data.image}
                      alt={data.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                    <div className="absolute left-3 top-3 h-9 w-9 md:h-11 md:w-11 rounded-xl bg-white flex items-center justify-center shadow-md z-10">
                      <Image
                        src={data.icon}
                        alt=""
                        width={22}
                        height={22}
                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                      />
                    </div>
                  </div>

                  {/* النص والزر */}
                  <div className="p-3 md:p-5 flex items-center justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-sm md:text-lg text-white truncate group-hover:text-[#53b1b1] transition-colors duration-200">
                        {data.title}
                      </h4>
                      <p className="text-[11px] md:text-xs text-zinc-400 mt-0.5 line-clamp-2">
                        {data.description}
                      </p>
                    </div>

                    <Link
                      href=""
                      className="flex-shrink-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl bg-[#53b1b1] transition-all duration-300 group-hover:bg-[#439999] group-hover:shadow-[0_0_15px_rgba(83,177,177,0.4)]"
                      aria-label={data.title}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-white rtl:rotate-180"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* زر استكشاف */}
            <div
              className="py-6 flex-shrink-0"
              style={{ transform: `translateY(${v.cardsY}px)` }}
            >
              <button className="px-8 py-2.5 md:px-10 md:py-3.5 bg-[#53b1b1] hover:bg-[#439999] text-white font-bold text-xs md:text-sm rounded-xl transition-all duration-300 hover:scale-105 shadow-xl">
                {translations.exploreProjects}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
