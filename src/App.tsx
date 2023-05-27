import React, { useEffect, useState } from "react";
import "./App.css";
import ArrowUp from "./utils/uparrow.svg";
import TitlePageBtn from "./components/TitlePageBtn";
import ProjectCard from "./components/ProjectCard";
import { getTextData } from "./firebase/connect";
import AboutMe from "./components/AboutMe";
import pacman from "./utils/pacman.gif";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  interface main_text {
    about_me: string;
    my_projects: string;
    my_resume: string;
  }
  interface project {
    id: number;
    category: string;
    description: string;
    name: string;
    links: link[];
    order: number;
  }
  interface link {
    name: string;
    url: string;
  }

  const [lang, setLang] = useState(localStorage.getItem("lang") || "EN");
  const [mainText, setMainText] = useState<main_text>();
  const [aboutMe, setAboutMe] = useState<string>("");
  const [projects, setProjects] = useState<project[]>();

  const goToTop = () => {
    const element = document.querySelector(`#home`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    const fetchData = () => {
      getTextData(lang).then((fetched) => {
        const data = fetched;
        setMainText(data.main_text);
        setAboutMe(data.about_me_text.text);
        setProjects(data.projects);
      });
    };
    fetchData();
  }, [lang]);
  if (!mainText)
    return (
      <>
        <div className="flex flex-col h-screen w-screen justify-center items-center text-3xl bg-wrapper">
          <span>Loading ... </span>
          <img src={pacman} alt="Pacman loader svg" />
        </div>
      </>
    );
  return (
    <div className="">
      <section
        id="home"
        className="relative bg-wrapper z-[11] snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen"
      >
        {/* <div className="bg-wrapper z-[12]"></div> */}
        <div
          data-aos="fade-down-left"
          className="text-neutral-700 z-10 absolute top-0 right-0 p-5 text-lg bg-wrapper"
        >
          <button
            onClick={() => {
              setLang("PL");
              localStorage.setItem("lang", "PL");
            }}
          >
            PL
          </button>
          |
          <button
            onClick={() => {
              setLang("EN");
              localStorage.setItem("lang", "EN");
            }}
          >
            EN
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="relative z-20 text-center md:text-left tracking-[.25rem] text-shadow"
        >
          <span className="md:text-7xl text-4xl text-neutral-700">Dawid</span>
          <br />
          <span className="text-orange-400 text-5xl md:text-8xl">Roszman</span>
        </div>
        <div className="relative z-20 flex md:block p-3 md:p-0">
          <TitlePageBtn
            animation="fade-down"
            text={mainText?.about_me || "About me"}
            link="aboutme"
          />
          <div data-aos="fade-up" className="p-2"></div>
          <TitlePageBtn
            animation="fade-up"
            link="projects"
            text={mainText?.my_projects || "My Projects"}
          />
        </div>
        <div className="absolute w-screen z-1 -bottom-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#404040"
              fillOpacity="1"
              d="M0,160L60,154.7C120,149,240,139,360,165.3C480,192,600,256,720,240C840,224,960,128,1080,112C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section
        id="aboutme"
        className="relative z-[10] snap-start h-screen bg-neutral-700 flex flex-col items-center p-4 md:p-10"
      >
        <div className="absolute -translate-y-10 w-screen h-screen vortex-bg"></div>
        <h1 className="text-neutral-200 font-bold text-3xl md:text-6xl text-shadow-black">
          {mainText?.about_me}
        </h1>
        <AboutMe text={aboutMe} lang={lang} />
        <div className="absolute w-screen -bottom-2 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#e5e5e5"
              fillOpacity="1"
              d="M0,160L60,154.7C120,149,240,139,360,165.3C480,192,600,256,720,240C840,224,960,128,1080,112C1200,96,1320,160,1380,192L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <section
        id="projects"
        className="z-10 relative snap-start min-h-screen bg-neutral-200 p-4 md:p-10 flex flex-col items-center scribble"
      >
        <h1 className="text-neutral-700 font-bold text-3xl md:text-6xl">
          {mainText?.my_projects}
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-10">
          {projects
            ?.sort((a,b) => a.order - b.order)
            .map((val, index) => (
              <ProjectCard
                key={index}
                values={val}
                index={index}
                here={lang === "PL" ? "tutaj" : "here"}
              />
            ))}
        </div>
        <div className="mt-5">
          {lang === "PL"
            ? "Wiecej projektów można znaleźć na moim "
            : "More projects can be found on my "}
          <a
            className="text-orange-500 underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/Shoter99"
          >
            {lang === "PL" ? "Github'ie" : "Github"}
          </a>
        </div>
      </section>
      <button
        onClick={goToTop}
        className="fixed right-0 bottom-0 w-8 h-8 m-4 md:m-10 md:w-12 md:h-12 p-1 z-40 group flex rounded-full justify-center items-center "
      >
        <img
          className="group-hover:-translate-y-5 transition-all duration-700"
          src={ArrowUp}
          alt="Arrow Up"
        />
      </button>
    </div>
  );
}

export default App;
