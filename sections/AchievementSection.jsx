import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const achievements = [
  {
    title: "First Prize – National Level Programming Competition",
    issuer: "Punyashlok Ahilyadevi Holkar Solapur University",
    date: "March 2024",
    image: "/achievements/programming.png",
    description:
      "Awarded First Prize in Dexter Innofest 2023-24 National Level Programming Competition. Secured top position as a first-year student competing against final-year students, demonstrating my programming ability.",
    tags: ["Programming", "National Level", "First Prize"],
  },
  {
    title: "All India West Zone Inter-University Championship",
    issuer: "Bhupal Nobles University, Udaipur",
    date: "Dec 2025",
    image: "/achievements/basketball.png",
    description:
      "Selected to represent Punyashlok Ahilyadevi Holkar Solapur University in Basketball at All India West Zone Inter-University Championship at Bhupal Nobles University, Udaipur. Recognition of consistent performance and teamwork at national level.",
    tags: ["Basketball", "University Team", "National Level"],
  },
  {
    title: "All-Round Performance Recognition",
    issuer: "Sangola College",
    date: "March 2026",
    image: "/achievements/allround.jpg",
    description:
      "Recognized at the college Annual Function for achievements in both sports and cultural activities. Selected for the University Basketball Team, reflecting consistent performance and dedication on the court, and awarded 1st Prize in the Dance Competition.",
    tags: ["Sports", "Dance", "All-Rounder"],
  },
  {
    title: "Published Poet – Manadesh Magazine (2025–26)",
    issuer: "Sangola College",
    date: "2025 - Present",
    image: "/achievements/poetry.jpg",
    description:
      "Recognized for expressing creativity through poetry and spoken word performances, showcasing strong emotional storytelling, originality, and artistic expression alongside academic and technical pursuits.",
    tags: ["Poetry", "Creative Writing", "Artistic Expression"],
  },
];

const AchievementsSection = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
const elementRef = useRef(null);
const scrollRef = useRef(null);

const isDragging = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);

  const isOnScreen = useOnScreen(elementRef);
  const achievementSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

 const scroll = (direction) => {
  if (!scrollRef.current) return;

  scrollRef.current.scrollBy({
    left: direction === "left" ? -420 : 420,
    behavior: "smooth",
  });
};

const handleWheel = (e) => {
  if (window.innerWidth < 1024) return;

  if (!scrollRef.current) return;

  e.preventDefault();

  scrollRef.current.scrollLeft += e.deltaY;
};

const handleMouseDown = (e) => {
  if (!scrollRef.current) return;

  isDragging.current = true;
  startX.current = e.pageX - scrollRef.current.offsetLeft;
  scrollLeft.current = scrollRef.current.scrollLeft;
};

const handleMouseLeave = () => {
  isDragging.current = false;
};

const handleMouseUp = () => {
  isDragging.current = false;
};

const handleMouseMove = (e) => {
  if (!isDragging.current || !scrollRef.current) return;

  e.preventDefault();

  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX.current) * 2;

  scrollRef.current.scrollLeft = scrollLeft.current - walk;
};

useEffect(() => {
  achievementSection && onSectionChange("achievements");
}, [achievementSection]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="achievements" className="section md:px-10">
        
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}
            strokeWidth={2}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">Achievements & Honors</h2>
          </RoughNotation>
        </div>

        <div className="text-center mb-12" ref={elementRef}>
          A few milestones that reflect consistency, leadership,
          and performance beyond academics.
        </div>

        <div className="relative mt-8">

  {/* Left Fade */}
  <div className="hidden lg:block absolute left-0 top-0 h-full w-16 z-20 pointer-events-none bg-gradient-to-r from-[#F5F5F5] dark:from-[#1B2731] to-transparent" />

  {/* Right Fade */}
  <div className="hidden lg:block absolute right-0 top-0 h-full w-16 z-20 pointer-events-none bg-gradient-to-l from-[#F5F5F5] dark:from-[#1B2731] to-transparent" />

  {/* Left Button */}
  <button
    onClick={() => scroll("left")}
    className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 dark:bg-[#23343f]/90 shadow-xl items-center justify-center hover:scale-110 transition"
  >
    ←
  </button>

  {/* Right Button */}
  <button
    onClick={() => scroll("right")}
    className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 dark:bg-[#23343f]/90 shadow-xl items-center justify-center hover:scale-110 transition"
  >
    →
  </button>

  <div
    ref={scrollRef}
    onWheel={handleWheel}
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    className="
      flex
      gap-8
      overflow-x-auto
      overflow-y-hidden
      snap-x
      snap-mandatory
      scroll-smooth
      hide-scrollbar
      cursor-grab
      active:cursor-grabbing
      px-2
      pb-4
    "
  >
          {achievements.map((item, index) => (
            <div
  key={index}
  className="
    group
    flex-shrink-0
    snap-center
    w-[330px]
    md:w-[360px]
    rounded-xl
    overflow-hidden
    shadow-lg
    bg-white
    dark:bg-[#23343f]
    hover:shadow-2xl
    hover:-translate-y-3
    transition-all
    duration-300
  "
>
              
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              
                <div className="absolute inset-0 bg-gradient-to-b 
                from-transparent 
                via-transparent 
                to-[#23343f] 
                dark:to-[#23343f]" />
              </div>

              <div className="px-5 pb-5 pt-3">
                <h3 className="text-lg font-semibold text-[#00C896] mb-1">
                  {item.title}
                </h3>

                <p className="text-sm opacity-70 mb-3">
                  {item.issuer} • {item.date}
                </p>

                <p className="text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded 
                      bg-[#00C896]/10 text-[#00C896]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsSection;
