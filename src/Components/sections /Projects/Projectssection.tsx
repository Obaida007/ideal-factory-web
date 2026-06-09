"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ── استبدل هذه الـ imports بمسارات صورك الفعلية ──
import img1 from "@/assets/images/kitchen-1.jpg";
import img2 from "@/assets/images/windows-1.jpg";
import img3 from "@/assets/images/kitchen-2.jpg";
import img4 from "@/assets/images/windows-2.jpg";
import img5 from "@/assets/images/closet-1.jpg";
import img6 from "@/assets/images/door-1.jpg";
import img7 from "@/assets/images/door-2.jpg";

type FilterKey = "all" | "kitchen" | "door" | "closet" | "windows";

interface ProjectItem {
  id: number;
  src: StaticImageData;
  alt: string;
  category: Exclude<FilterKey, "all">;
}

const projects: ProjectItem[] = [
  { id: 1, src: img1, alt: "Kitchen project 1", category: "kitchen" },
  { id: 2, src: img2, alt: "uPVC windows 1", category: "windows" },
  { id: 3, src: img3, alt: "Kitchen project 2", category: "kitchen" },
  { id: 4, src: img4, alt: "uPVC windows 2", category: "windows" },
  { id: 5, src: img5, alt: "Walk-in closet 1", category: "closet" },
  { id: 6, src: img6, alt: "Wooden door 1", category: "door" },
  { id: 7, src: img7, alt: "Wooden door 2", category: "door" },
];

// ✅ الحل: نمرر translations كـ object بدلاً من دالة t
interface ProjectsTranslations {
  title: string;
  filterAll: string;
  filterKitchen: string;
  filterDoor: string;
  filterCloset: string;
  filterWindows: string;
  exploreProjects: string;
}

interface ProjectsSectionProps {
  translations: ProjectsTranslations;
  lang: string;
}

const ProjectsSection = ({ translations: tr, lang }: ProjectsSectionProps) => {
  const [active, setActive] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: tr.filterAll },
    { key: "kitchen", label: tr.filterKitchen },
    { key: "door", label: tr.filterDoor },
    { key: "closet", label: tr.filterCloset },
    { key: "windows", label: tr.filterWindows },
  ];

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full bg-[#1a1a1a] py-16 px-4 md:px-8 flex flex-col items-center gap-10 font-sans overflow-hidden">
      {/* ── العنوان ── */}
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide text-center">
        {tr.title}
      </h2>

      {/* ── أزرار الفلتر ── */}
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200
              ${
                active === key
                  ? "bg-white text-[#1a1a1a] border-white"
                  : "bg-transparent text-white border-white/30 hover:border-white/60"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── شبكة الصور ── */}
      <div className="w-full max-w-7xl grid grid-cols-3 gap-3">
        {/* الصورة الكبيرة على اليسار — تمتد صفين */}
        {(active === "all" || active === projects[0].category) && (
          <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[440px]">
            <Image
              src={projects[0].src}
              alt={projects[0].alt}
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        )}

        {/* الصف الأول — عمودان على اليمين */}
        {(active === "all" ? projects.slice(1, 3) : visible.slice(0, 2)).map(
          (p) => (
            <div
              key={p.id}
              className="col-span-1 relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ),
        )}

        {/* الصف الثاني — صورة عريضة على اليمين */}
        {active === "all" && (
          <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[16/7]">
            <Image
              src={projects[3].src}
              alt={projects[3].alt}
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        )}

        {/* الصف الثالث — ثلاث صور متساوية */}
        {(active === "all" ? projects.slice(4) : visible.slice(2)).map((p) => (
          <div
            key={p.id}
            className="col-span-1 relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* ── زر استكشف المشاريع ── */}
      <Link
        href={`/${lang}/projects`}
        className="mt-2 inline-flex items-center gap-3 rounded-2xl bg-[#53b1b1] px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#439999] hover:shadow-[0_0_20px_rgba(83,177,177,0.3)]"
      >
        {tr.exploreProjects}
      </Link>
    </section>
  );
};

export default ProjectsSection;
