import React, { useEffect, useState } from "react";
import "./App.css";
import ArrowUp from "./utils/uparrow.svg";
import TitlePageBtn from "./components/TitlePageBtn";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./utils/en_text";
import { projects_pl } from "./utils/pl_text";
import AboutMePL from "./components/AboutMePL";
import AboutMeEN from "./components/AboutMeEN";
import { main_text_en } from "./utils/en_text";
import { main_text_pl } from "./utils/pl_text";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "EN");
  const [langFile, setLangFile] = useState(main_text_en);
  const [projectFile, setProjectFile] = useState(projects);
  const changeLang = (l: string = lang) => {
    setLangFile(l == "PL" ? main_text_pl : main_text_en);
    setProjectFile(l == "PL" ? projects_pl : projects);
  };

  const goToTop = () => {
    const element = document.querySelector(`#home`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    changeLang();
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <section
        id="home"
        className="relative bg-wrapper z-[11] snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen"
      >
        {/* <div className="bg-wrapper z-[12]"></div> */}
        <div className="text-neutral-700 z-10 absolute top-0 right-0 p-5 text-lg bg-wrapper">
          <button
            onClick={() => {
              setLang("PL");
              changeLang("PL");
              localStorage.setItem("lang", "PL");
            }}
          >
            PL
          </button>
          |
          <button
            onClick={() => {
              setLang("EN");
              changeLang("EN");
              localStorage.setItem("lang", "EN");
            }}
          >
            EN
          </button>
        </div>
        <div className="relative z-20 text-center md:text-left tracking-[.25rem] text-shadow">
          <span className="md:text-7xl text-4xl text-neutral-700">Dawid</span>
          <br />
          <span className="text-orange-400 text-5xl md:text-8xl">Roszman</span>
        </div>
        <div className="relative z-20 flex md:block p-3 md:p-0">
          <TitlePageBtn text={langFile.about_me} link="aboutme" />
          <div className="p-2"></div>
          <TitlePageBtn link="projects" text={langFile.my_projects} />
        </div>
        <div className="absolute w-screen z-20 -bottom-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#404040"
              fill-opacity="1"
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
          {langFile.about_me}
        </h1>
        {lang == "PL" ? <AboutMePL /> : <AboutMeEN />}
        <div className="absolute w-screen -bottom-2 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#e5e5e5"
              fill-opacity="1"
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
          {langFile.my_projects}
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-10">
          {projectFile.map((val, index) => (
            <ProjectCard
              key={index}
              values={val}
              here={lang === "PL" ? "tutaj" : "here"}
            />
          ))}
        </div>
        <div className="mt-5">
          {lang == "PL"
            ? "Wiecej projektów można znaleźć na moim "
            : "More projects can be found on my "}
          <a
            className="text-orange-500 underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/Shoter99"
          >
            {lang == "PL" ? "Github'ie" : "Github"}
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
