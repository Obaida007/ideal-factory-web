import React from "react";
import Image from "next/image";
import mockupVideoImg from "@/assets/images/Approach1.png";
import bottomBg from "@/assets/images/Approach2.jpg";
import { getTranslation, Locale } from "@/app/[lang]/dictionaries";

interface ApproachSectionProps {
  lang: string;
}

const ApproachSection = async ({ lang }: ApproachSectionProps) => {
  const t = await getTranslation(lang as Locale);

  const approachItems = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#53b1b1"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      ),
      title: t("approach.item1Title"),
      desc: t("approach.item1Desc"),
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#53b1b1"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122l9.37-9.445m-1.187-1.308L18.45 4.75a1.5 1.5 0 112.122 2.121l-1.187 1.187a1.5 1.5 0 11-2.122-2.122zM3.621 16.232a1.5 1.5 0 010-2.122l1.187-1.187a1.5 1.5 0 112.122 2.122l-1.187 1.187a1.5 1.5 0 01-2.122 0z"
          />
        </svg>
      ),
      title: t("approach.item2Title"),
      desc: t("approach.item2Desc"),
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#53b1b1"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17L17.25 21A1.5 1.5 0 0019.5 21l2-2a1.5 1.5 0 000-2.25l-5.83-5.83M11.42 15.17l-4.67-4.67m4.67 4.67l-3.34-3.34m6.68 0l2.12-2.12a1.5 1.5 0 000-2.25l-2-2a1.5 1.5 0 00-2.25 0l-2.12 2.12m1.42 5.66L7.12 5.17A1.5 1.5 0 004.87 5.17l-2 2a1.5 1.5 0 000 2.25l5.83 5.83"
          />
        </svg>
      ),
      title: t("approach.item3Title"),
      desc: t("approach.item3Desc"),
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#53b1b1"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v14.25M21 21V7.5L10.5 14.25l-6-4.5"
          />
        </svg>
      ),
      title: t("approach.item4Title"),
      desc: t("approach.item4Desc"),
    },
  ];

  return (
    <>
      <div className="w-full bg-white py-16 px-4 md:px-8 flex flex-col items-center gap-16 font-sans overflow-hidden">
        {/* ── Section 1: Dark card with problems, image, and approach grid ── */}
        <div className="scroll-reveal-dark-card w-full max-w-7xl bg-[#1c1b1b] rounded-[32px] p-6 md:p-12 border border-white/5 text-white shadow-2xl">
          {/* Title & problems */}
          <div className="w-full text-left rtl:text-right mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide text-white">
              {t("approach.whyDifficultTitle")}
            </h2>
            <p className="text-sm text-zinc-400 max-w-4xl leading-relaxed mb-6">
              {t("approach.whyDifficultDesc")}
            </p>

            {/* Problems list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-zinc-300">
              <div className="flex items-center gap-2.5">
                <span className="h-5 w-5 rounded-full border border-zinc-500 flex items-center justify-center text-xs text-zinc-400">
                  →
                </span>
                <span>{t("approach.problemQuality")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="h-5 w-5 rounded-full border border-zinc-500 flex items-center justify-center text-xs text-zinc-400">
                  →
                </span>
                <span>{t("approach.problemDelays")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="h-5 w-5 rounded-full border border-zinc-500 flex items-center justify-center text-xs text-zinc-400">
                  →
                </span>
                <span>{t("approach.problemValue")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="h-5 w-5 rounded-full border border-zinc-500 flex items-center justify-center text-xs text-zinc-400">
                  →
                </span>
                <span>{t("approach.problemSupport")}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-12 border border-white/10 group cursor-pointer shadow-xl">
            <Image
              src={mockupVideoImg}
              alt="Craftsman working with wood"
              fill
              className="object-cover brightness-90 group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20"></div>
          </div>

          {/* Approach grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/5">
            <div className="lg:col-span-1 text-left rtl:text-right">
              <h3 className="text-2xl font-extrabold tracking-tight leading-snug whitespace-pre-line text-white">
                {t("approach.idealFactoryApproach")}
              </h3>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 text-left rtl:text-right">
              {approachItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-2.5">
                  <div className="mb-1">{item.icon}</div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Section 2: Design your villa before spending a dirham ── */}
        <div className="scroll-reveal-dark-card relative w-full max-w-7xl rounded-[32px] overflow-hidden border border-white/5 bg-[#1c1b1b] shadow-2xl">
          <Image
            src={bottomBg}
            alt="Luxury modern kitchen background"
            fill
            className="object-cover z-0 brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent z-10" />

          <div className="relative z-20 grid gap-12 px-8 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_1.3fr] lg:items-center lg:px-14 lg:py-16 text-left rtl:text-right">
            {/* Left: text & CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                {t("approach.ctaSectionTitle")}
                <br />
                <span className="text-[#53b1b1]">
                  {t("approach.ctaSectionTitleHighlight")}
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-base md:text-lg leading-8 md:leading-9 text-white/90 font-normal">
                {t("approach.ctaSectionDesc")}
              </p>

              {/* Features list */}
              <ul className="mt-7 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-4 text-sm md:text-base text-white sm:grid-cols-2 font-medium">
                {(
                  [
                    "featureNoGuessing",
                    "featureNoRedesigns",
                    "featureNoDelays",
                  ] as const
                ).map((key) => (
                  <li key={key} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0E0E0E]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                    {t(`approach.${key}`)}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="mt-8">
                <a
                  className="inline-flex items-center gap-4 rounded-2xl bg-[#53b1b1] px-6 py-4 text-base md:text-lg font-medium text-white transition-all duration-300 hover:bg-[#439999] hover:shadow-[0_0_20px_rgba(83,177,177,0.3)]"
                  href=""
                >
                  {t("approach.ctaButton")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 rtl:rotate-180"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: 3 step cards */}
            <div className="grid gap-5 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="flex min-h-[260px] h-full flex-col items-center justify-center rounded-[1.75rem] border border-[#53b1b1]/40 bg-black/25 px-5 py-8 text-center backdrop-blur-md transition-all duration-300 hover:border-[#53b1b1]">
                <span className="mb-6 flex gap-4 h-20 w-20 items-center justify-center rounded-full bg-[#53b1b1] text-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-9 w-9"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </span>
                <p className="text-sm font-semibold leading-tight text-white">
                  {t("approach.card1Label")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex min-h-[260px] h-full flex-col items-center justify-center rounded-[1.75rem] border border-[#53b1b1]/40 bg-black/25 px-5 py-8 text-center backdrop-blur-md transition-all duration-300 hover:border-[#53b1b1]">
                <span className="mb-6 flex h-20 gap-4 w-20 items-center justify-center rounded-full bg-[#53b1b1] text-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-9 w-9"
                  >
                    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                    <path d="m8 6 2-2"></path>
                    <path d="m18 16 2-2"></path>
                    <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </span>
                <p className="text-sm font-semibold leading-tight text-white">
                  {t("approach.card2Label")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex min-h-[260px] h-full flex-col items-center justify-center rounded-[1.75rem] border border-[#53b1b1]/40 bg-black/25 px-5 py-8 text-center backdrop-blur-md transition-all duration-300 hover:border-[#53b1b1]">
                <span className="mb-6 flex gap-4 h-20 w-20 items-center justify-center rounded-full bg-[#53b1b1] text-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-9 w-9"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                </span>
                <p className="text-sm font-semibold leading-tight text-white">
                  {t("approach.card3Label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApproachSection;
