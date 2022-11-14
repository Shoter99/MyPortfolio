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
        className="relative snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen"
      >
        <div className="text-neutral-700 absolute top-0 right-0 p-5 text-lg">
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
        <div className="text-center md:text-left tracking-[.25rem]">
          <span className="md:text-7xl text-4xl text-neutral-700">Dawid</span>
          <br />
          <span className="text-orange-400 text-5xl md:text-8xl">Roszman</span>
        </div>
        <div className="flex md:block p-3 md:p-0">
          <TitlePageBtn text={langFile.about_me} link="aboutme" />
          <div className="p-2"></div>
          <TitlePageBtn link="projects" text={langFile.my_projects} />
        </div>
      </section>
      <section
        id="aboutme"
        className="snap-start h-screen bg-neutral-700 flex flex-col items-center p-4 md:p-10"
      >
        <h1 className="text-neutral-200 font-bold text-3xl md:text-6xl">
          {langFile.about_me}
        </h1>
        {lang == "PL" ? <AboutMePL /> : <AboutMeEN />}
      </section>
      <section
        id="projects"
        className="snap-start min-h-screen bg-neutral-200 p-4 md:p-10 flex flex-col items-center"
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
            {lang == "PL" ? "Githb'ie" : "Github"}
          </a>
        </div>
      </section>
      <button
        onClick={goToTop}
        className="transition duration-700 fixed right-0 bottom-0 w-8 h-8 m-4 md:m-10 md:w-12 md:h-12 p-1 flex rounded-full justify-center items-center "
      >
        <img className="hover:-translate-y-5" src={ArrowUp} alt="Arrow Up" />
      </button>
    </div>
  );
}

export default App;
