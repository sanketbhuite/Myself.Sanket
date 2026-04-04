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
    image: "/achievements/programming.jpg",
    description:
      "Awarded First Prize in Dexter Innofest 2023-24 National Level Programming Competition. Secured top position as a first-year student competing against final-year students, demonstrating strong problem-solving and programming ability.",
    tags: ["Programming", "National Level", "First Prize"],
  },
  {
    title: "All India West Zone Inter-University Championship",
    issuer: "Bhupal Nobles University, Udaipur",
    date: "Dec 2025",
    image: "/achievements/basketball.jpg",
    description:
      "Selected to represent Punyashlok Ahilyadevi Holkar Solapur University in Basketball at All India West Zone Inter-University Championship. Recognition of consistent performance and teamwork at national level.",
    tags: ["Basketball", "University Team", "National Level"],
  },
  {
    title: "All-Round Performance Recognition",
    issuer: "Sangola College",
    date: "March 2026",
    image: "/achievements/allround.jpg",
    description:
      "Recognized for excellence in sports and cultural activities. Selected for University Basketball Team and secured 1st Prize in Dance Competition.",
    tags: ["Sports", "Dance", "All-Rounder"],
  },
];

const AchievementsSection = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const elementRef = useRef(null);

  const isOnScreen = useOnScreen(elementRef);
  const achievementSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg 
              bg-white dark:bg-[#23343f]
              hover:scale-[1.02] transition duration-300"
            >
              
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#00C896] mb-1">
                  {item.title}
                </h3>

                <p className="text-sm opacity-70 mb-3">
                  {item.issuer} • {item.date}
                </p>

                <p className="text-sm leading-relaxed mb-4">
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
      </section>
    </div>
  );
};

export default AchievementsSection;
