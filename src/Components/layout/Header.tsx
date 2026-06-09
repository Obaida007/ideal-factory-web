import React from "react";
import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { getTranslation, Locale } from "@/app/[lang]/dictionaries";

interface HeaderProps {
  lang: string;
}

const Header = async ({ lang }: HeaderProps) => {
  const t = await getTranslation(lang as Locale);
  const homePath = lang === "ar" ? "/ar" : "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      {/* Hidden checkbox toggle for mobile menu */}
      <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />

      {/* Navigation Menu */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 bg-black/45 peer-checked:[&_#open-menu-label]:hidden peer-checked:[&_#close-menu-label]:block">
        <div className={`flex items-center gap-3`}>
          {/* Open Menu Hamburger Icon */}
          <label
            htmlFor="mobile-menu-toggle"
            id="open-menu-label"
            className="block lg:hidden text-white  transition-colors p-1 cursor-pointer"
            aria-label="Open Menu"
          >
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
              className="h-6 w-6"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </label>

          {/* Close Menu X Icon */}
          <label
            htmlFor="mobile-menu-toggle"
            id="close-menu-label"
            className="hidden lg:hidden text-white hover:text-primary transition-colors p-1 cursor-pointer"
            aria-label="Close Menu"
          >
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
              className="h-6 w-6"
              aria-hidden="true"
            >
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          </label>

          <ul className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
            <Link
              href="#service"
              className="text-sm font-semibold hover:text-primary transition-colors duration-200"
            >
              {t("nav.ourService")}
            </Link>
            <Link
              href="#projects"
              className="text-sm font-semibold hover:text-primary transition-colors duration-200"
            >
              {t("nav.ourProjects")}
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold hover:text-primary transition-colors duration-200"
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-semibold hover:text-primary transition-colors duration-200"
            >
              {t("nav.contact")}
            </Link>
          </ul>
        </div>
        <Link href={homePath} className="flex items-center gap-2 group">
          <Image
            src={logo}
            alt="Ideal Factory Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain "
            priority
          />
        </Link>
        {/* Actions & Language Switcher */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} text={t("nav.switchLanguage")} />

          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-white justify-center px-4 py-2 rounded-xl text-sm font-medium bg-primary hover:bg-teal-400 shadow-md shadow-primary/10 hover:shadow-primary/25 transition-all duration-200"
          >
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
              className="lucide lucide-phone h-4 w-4"
              aria-hidden="true"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            {t("nav.startYourProject")}
          </Link>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl lg:hidden hidden peer-checked:block">
        <ul className="space-y-2">
          <li>
            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-primary"
                href="#service"
              >
                {t("nav.ourService")}
              </Link>
            </label>
          </li>
          <li>
            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-primary"
                href="#projects"
              >
                {t("nav.ourProjects")}
              </Link>
            </label>
          </li>
          <li>
            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-primary"
                href="#about"
              >
                {t("nav.about")}
              </Link>
            </label>
          </li>
          <li>
            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-primary"
                href="#contact"
              >
                {t("nav.contact")}
              </Link>
            </label>
          </li>
          <li>
            <label htmlFor="mobile-menu-toggle" className="block">
              <Link
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
                href="#contact"
              >
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
                  className="lucide lucide-phone h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                {t("nav.startYourProject")}
              </Link>
            </label>
          </li>
          <li className="pt-2 flex justify-center">
            <LanguageSwitcher lang={lang} text={t("nav.switchLanguage")} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
