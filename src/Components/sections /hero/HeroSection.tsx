import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/Hero.jpg";
import Link from "next/link";
import { getTranslation, Locale } from "@/app/[lang]/dictionaries";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  lang: string;
}

async function HeroSection({ lang }: HeroSectionProps) {
  const t = await getTranslation(lang as Locale);
  const ArrowIcon = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="w-full h-screen flex items-center  overflow-hidden relative bg-gray-900">
      <Image src={HeroImage} alt="Hero Section" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative m-auto  lg:mx-72 rounded-2xl bg-background/45 backdrop-blur-xs z-20 px-7 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          {t("hero.title")}
          <span className=" block">{t("hero.titlePart2")} </span>
          <span className=" block text-primary bg-clip-text ">
            {t("hero.titlePart3")}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-10 max-w-3xl ">
          {t("hero.description")}
          <span className="block"> {t("hero.description1")}</span>
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2  px-5 py-3 rounded-xl text-base font-semibold bg-white text-black"
        >
          {t("hero.cta")}{" "}
          <ArrowIcon className="size-5 border rounded-full p-1" />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
