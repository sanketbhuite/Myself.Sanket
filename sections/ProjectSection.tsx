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
        src={talkmate}
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
    title: "HTML notepad",
    type: "Frontend",
    image: (
      <Image
        src="/projects/notepad.jpg"
        sizes="100vw"
        fill
        alt="HTML notepad"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "a application that allows users to write, save, open, and run HTML/JavaScript code. Features include a large text area for writing, buttons for saving and opening .txt files, and an iframe to display code output.",
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
    liveUrl: "html-notepad.netlify.app",
    codeUrl: "https://github.com/sanketbhuite/Simple-web-based-Notepad",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/sanketbhuite/Simple-web-based-Notepad",
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
    title: "Personal Expense Tracker",
    type: "Backend",
    image: (
      <Image
        src="/projects/pet.png"
        sizes="100vw"
        fill
        alt="Personal-Expense-Tracker"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "a simple personal expense tracker that allows users to manage and view their expenses effectively.",
    tags: ["Python"],
    liveUrl: "https://github.com/sanketbhuite/Personal-Expense-Tracker",
    codeUrl: "https://github.com/sanketbhuite/Personal-Expense-Tracker",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/sanketbhuite/Personal-Expense-Tracker",
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
    title: "Student Information Management System",
    type: "Backend",
    image: (
      <Image
        src="/projects/sims.png"
        sizes="100vw"
        fill
        alt="Student Information Management System"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: " The program allows you to perform basic operations such as adding, searching, updating, and deleting student records. The data is stored in a plain text file.",
    tags: ["PHP"],
    liveUrl: "https://github.com/sanketbhuite/Student-Information-Management-System-PHP",
    codeUrl: "https://github.com/sanketbhuite/Student-Information-Management-System-PHP",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/sanketbhuite/Student-Information-Management-System-PHP",
  },
];

export default ProjectSection;
