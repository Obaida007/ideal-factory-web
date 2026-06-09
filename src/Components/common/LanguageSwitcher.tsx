"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  lang: string;
  text: string;
}

export default function LanguageSwitcher({
  lang,
  text,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getTargetUrl = () => {
    if (!pathname) return "/";

    const segments = pathname.split("/");

    if (lang === "en") {
      // Current language is English, switch to Arabic.
      if (segments[1] === "en") {
        segments[1] = "ar";
        return segments.join("/");
      } else {
        // Prepend /ar prefix
        return `/ar${pathname === "/" ? "" : pathname}`;
      }
    } else {
      // Current language is Arabic, switch to English.
      if (segments[1] === "ar") {
        segments.splice(1, 1); // Remove the 'ar' segment
        const newPath = segments.join("/");
        return newPath === "" ? "/" : newPath;
      }
      return pathname;
    }
  };

  return (
    <Link
      href={getTargetUrl()}
      className="inline-flex justify-center md:justify-normal w-full md:w-fit items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-primary/30 transition-all duration-200 text-zinc-700 dark:text-zinc-300"
    >
      <svg
        className="w-4 h-4 text-zinc-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
        />
      </svg>
      {text}
    </Link>
  );
}
