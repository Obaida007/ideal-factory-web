import React from "react";
import logo from "@/assets/images/logo.png";
import footerBg from "@/assets/images/footer.jpg"; // استبدل بمسار صورتك
import Image from "next/image";
import Link from "next/link";
import { getTranslation, Locale } from "@/app/[lang]/dictionaries";

interface FooterProps {
  lang: string;
}

const Footer = async ({ lang }: FooterProps) => {
  const t = await getTranslation(lang as Locale);
  const isRtl = lang === "ar";
  const homePath = lang === "ar" ? "/ar" : "/";

  const quickLinks = [
    { label: t("footer.home"), href: homePath },
    { label: t("footer.about"), href: `/${lang}/about` },
    { label: t("footer.testimonials"), href: `/${lang}/testimonials` },
    { label: t("footer.projects"), href: `/${lang}/projects` },
  ];

  const exploreLinks = [
    { label: t("footer.linkCloset"), href: `/${lang}/closet` },
    { label: t("footer.linkWardrobe"), href: `/${lang}/wardrobe` },
    { label: t("footer.linkUKitchen"), href: `/${lang}/u-kitchen` },
    { label: t("footer.linkPantry"), href: `/${lang}/pantry` },
    { label: t("footer.linkDoors"), href: `/${lang}/doors` },
  ];

  const linkClass =
    "text-sm text-white/70 transition-colors duration-200 hover:text-white";

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="relative w-full overflow-hidden font-sans"
    >
      {/* ── خلفية الصورة المعتمة ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={footerBg}
          alt=""
          fill
          className="object-cover brightness-[0.22]"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ── المحتوى الرئيسي ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* العمود 1: الشعار والوصف */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Ideal Factory Logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-[220px]">
              {t("footer.desc")}
            </p>
          </div>

          {/* العمود 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold text-[#53b1b1]">
              {t("footer.quickLinks")}
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 3: Explore */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold text-[#53b1b1]">
              {t("footer.explore")}
            </h3>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 4: Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-base font-semibold text-[#53b1b1]">
              {t("footer.contact")}
            </h3>
            <ul className="flex flex-col gap-4">
              {/* الموقع */}
              <li className="flex items-center gap-3 text-sm text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#53b1b1"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <a
                  href="https://www.idealhome.ae"
                  className="hover:text-white transition-colors duration-200"
                >
                  www.idealhome.ae
                </a>
              </li>
              {/* الإيميل */}
              <li className="flex items-center gap-3 text-sm text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#53b1b1"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:info@idealhome.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@idealhome.com
                </a>
              </li>
              {/* الهاتف */}
              <li className="flex items-start gap-3 text-sm text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#53b1b1"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+97100000000"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +971-000-00-000
                  </a>
                  <a
                    href="tel:+97150312230"
                    className="hover:text-white transition-colors duration-200"
                  >
                    971 (0)50 312 2300
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── الشريط السفلي ── */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 md:px-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">{t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <Link
              href={`/${lang}/terms`}
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              {t("footer.terms")}
            </Link>
            <Link
              href={`/${lang}/privacy`}
              className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              {t("footer.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
