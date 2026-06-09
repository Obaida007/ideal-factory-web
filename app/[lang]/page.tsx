import { notFound } from "next/navigation";
import { getTranslation, hasLocale } from "./dictionaries";
import HeroSection from "@/Components/sections /hero/HeroSection";
import OurSolutions from "@/Components/sections /ourSolutions/OurSolutions";
import Approach from "@/Components/sections /approach/Approach";
import ProjectsSection from "@/Components/sections /Projects/Projectssection";
import WhyChooseUs from "@/Components/sections /whyChooseUs/WhyChooseUs";
import TestimonialsSection from "@/Components/sections /testimonialsSection/TestimonialsSection";
import ContactSection from "@/Components/sections /contact/ContactSection";
import { SolutionsAssets } from "@/Components/sections /ourSolutions/data-solutions";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const t = await getTranslation(lang);
  const solutionsTranslations = {
    title: t("solutions.title"),
    subtitle: t("solutions.subtitle"),
    subtitle1: t("solutions.subtitle1"),
    maskText: t("solutions.maskText"),
    stage1Title: t("solutions.stage1Title"),
    stage1Desc: t("solutions.stage1Desc"),
    stage3Desc: t("solutions.stage3Desc"),
    kitchens: t("solutions.kitchens"),
    kitchensDesc: t("solutions.kitchensDesc"),
    wardrobes: t("solutions.wardrobes"),
    wardrobesDesc: t("solutions.wardrobesDesc"),
    doors: t("solutions.doors"),
    doorsDesc: t("solutions.doorsDesc"),
    windows: t("solutions.windows"),
    windowsDesc: t("solutions.windowsDesc"),
    modularSubtitle: t("solutions.modularSubtitle"),
    kitchensClosetsDoorsServices: t("solutions.kitchensClosetsDoorsServices"),
    exploreProjects: t("solutions.exploreProjects"),
  };

  // Build cards as a plain serialisable array (images handled separately in the component)
  const cardTranslations = [
    {
      title: t("solutions.solutionsCards.kitchens.title"),
      description: t("solutions.solutionsCards.kitchens.description"),
    },
    {
      title: t("solutions.solutionsCards.wardrobes.title"),
      description: t("solutions.solutionsCards.wardrobes.description"),
    },
    {
      title: t("solutions.solutionsCards.doors.title"),
      description: t("solutions.solutionsCards.doors.description"),
    },
    {
      title: t("solutions.solutionsCards.windows.title"),
      description: t("solutions.solutionsCards.windows.description"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen relative ">
      <main className="flex-1 flex flex-col items-center justify-center  w-full relative">
        <HeroSection lang={lang} />
        <OurSolutions
          lang={lang}
          translations={solutionsTranslations}
          cardTranslations={cardTranslations}
        />
        <Approach lang={lang} />
        <ProjectsSection
          translations={{
            title: t("projects.title"),
            filterAll: t("projects.filterAll"),
            filterKitchen: t("projects.filterKitchen"),
            filterDoor: t("projects.filterDoor"),
            filterCloset: t("projects.filterCloset"),
            filterWindows: t("projects.filterWindows"),
            exploreProjects: t("projects.exploreProjects"),
          }}
          lang={lang}
        />{" "}
        <WhyChooseUs
          lang={lang}
          translations={{
            title: t("whyChoose.title"),
            titleHighlight: t("whyChoose.titleHighlight"),
            feature1: t("whyChoose.feature1"),
            feature2: t("whyChoose.feature2"),
            feature3: t("whyChoose.feature3"),
            feature4: t("whyChoose.feature4"),
            ctaButton: t("whyChoose.ctaButton"),
          }}
        />
        <TestimonialsSection
          lang={lang}
          translations={{
            label: t("testimonials.label"),
            title: t("testimonials.title"),
            titleHighlight: t("testimonials.titleHighlight"),
            customer: t("testimonials.customer"),
            review1Name: t("testimonials.review1Name"),
            review1Text: t("testimonials.review1Text"),
            review2Name: t("testimonials.review2Name"),
            review2Text: t("testimonials.review2Text"),
          }}
        />
        <ContactSection
          lang={lang}
          translations={{
            label: t("contact.label"),
            title: t("contact.title"),
            heading: t("contact.heading"),
            desc: t("contact.desc"),
            namePlaceholder: t("contact.namePlaceholder"),
            emailPlaceholder: t("contact.emailPlaceholder"),
            phonePlaceholder: t("contact.phonePlaceholder"),
            messagePlaceholder: t("contact.messagePlaceholder"),
            submitButton: t("contact.submitButton"),
          }}
        />
      </main>
    </div>
  );
}
