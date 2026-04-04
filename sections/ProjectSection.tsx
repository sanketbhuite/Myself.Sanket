  import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

// import terminalPortfolio from "@/public/projects/notepad.jpg";
// import haruFashion from "@/public/projectS/noteshub.jpg";
// import haruApi from "@/public/projects/pet.png";
// import talkmate from "@/public/projects/talkmate.jpg";
// import nextBookstore from "@/public/projects/portfolio.png";
// import shadcnAdmin from "@/public/projects/sims.png";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/sanketbhuite"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "TalkMate",
    type: "Fullstack",
    image: (
      <Image
        src="/projects/talkmate.jpg"
        sizes="100vw"
        fill
        alt="TalkMate"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "a web-based virtual English tutor that helps users improve their spoken English by having natural conversations. replies like a real friend.",
    tags: ["gptAPI", "Flask", "Python", "WebTools"],
    liveUrl: "https://github.com/sanketbhuite/TalkMate-v1.0",
    codeUrl: "https://github.com/sanketbhuite/TalkMate-v1.0",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/sanketbhuite/TalkMate-v1.0",
  },
  {
    title: "PlacementPrep",
    type: "Fullstack",
    image: (
      <Image
        src="/projects/placementprep.png"
        sizes="100vw"
        fill
        alt="PlacementPrep"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Placement preparation platform with mock tests, aptitude practice, dashboard analytics, and AI chatbot built using React and Spring Boot.",
    tags: ["React", "Spring Boot", "Java", "RestAPI"],
    liveUrl: "https://github.com/sanketbhuite/PlacementPrep",
    codeUrl: "https://github.com/sanketbhuite/PlacementPrep",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/sanketbhuite/PlacementPrep",
  },
  {
    title: "NotesHub™",
    type: "Fullstack",
    image: (
      <Image
        src="/projectS/noteshub.jpg"
        sizes="100vw"
        fill
        alt="NotesHub"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "a simple and efficient platform where students can upload, share, and download academic notes with ease.",
    tags: ["Mysql", "PHP", "WebTools"],
    liveUrl: "https://github.com/sanketbhuite/NotesHub-v0",
    codeUrl: "https://github.com/sanketbhuite/NotesHub-v0",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/sanketbhuite/NotesHub-v0",
  },
  {
    title: "AES-GCM Image Encryption & Decryption Tool",
    type: "Cybersecurity",
    image: (
      <Image
        src="/projects/aes-gcm.png"
        sizes="100vw"
        fill
        alt="AES-GCM Image Encryption & Decryption Tool"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A modern Windows desktop application built using Java Swing that allows users to securely encrypt and decrypt image files using AES-GCM, an industry-standard encryption algorithm.",
    tags: ["Java", "AES-GCM", "Cryptography", "Swing"],
    liveUrl: "https://github.com/sanketbhuite/AES-GCM-Image-Encryption-Decryption-Tool",
    codeUrl: "https://github.com/sanketbhuite/AES-GCM-Image-Encryption-Decryption-Tool",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/sanketbhuite/AES-GCM-Image-Encryption-Decryption-Tool",
  },
  {
    title: "Photographer Portfolio",
    type: "Frontend",
    image: (
      <Image
        src="/projects/portfolio.png"
        sizes="100vw"
        fill
        alt="Pratik pol photography"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: " a personal portfolio website showcasing the photographic works of Pratik Pol. This project aims to create an engaging and visually appealing platform for displaying a diverse range of photography.",
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
    liveUrl: "https://sanketbhuite.github.io/pratik-pol-photography/",
    codeUrl: "https://github.com/sanketbhuite/pratik-pol-photography",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/sanketbhuite/pratik-pol-photography",
  },
  {
    title: "FlowFleet",
    type: "Fullstack",
    image: (
      <Image
        src="/projects/flowfleet.png"
        sizes="100vw"
        fill
        alt="FlowFleet"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: " a fleet management system that provides real-time tracking, maintenance scheduling, and route optimization for efficient fleet operations.",
    tags: ["React", "Django", "Python", "RestAPI"],
    liveUrl: "https://github.com/sanketbhuite/FlowFleet",
    codeUrl: "https://github.com/sanketbhuite/FlowFleet",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/sanketbhuite/FlowFleet",
  },
];

export default ProjectSection;
