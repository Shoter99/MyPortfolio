import React, { useEffect } from "react";
import "./App.css";
import ArrowUp from "./utils/uparrow.svg";
import TitlePageBtn from "./components/TitlePageBtn";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./utils/en_text";
import Aboutme_pl from "./components/Aboutme_pl";

function App() {
  const goToTop = () => {
    const element = document.querySelector(`#home`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden">
      <section
        id="home"
        className="snap-start flex md:flex-row flex-col justify-center md:justify-evenly items-center h-screen"
      >
        <div className="text-center md:text-left tracking-[.25rem]">
          <span className="md:text-7xl text-4xl text-neutral-700">Dawid</span>
          <br />
          <span className="text-orange-400 text-5xl md:text-8xl">Roszman</span>
        </div>
        <div className="flex md:block p-3 md:p-0">
          <TitlePageBtn text="My Resume" link="aboutme" />
          <div className="p-2"></div>
          <TitlePageBtn link="projects" text="My Projects" />
        </div>
      </section>
      <section
        id="aboutme"
        className="snap-start h-screen bg-neutral-700 flex flex-col items-center p-4 md:p-10"
      >
        <h1 className="text-neutral-200 font-bold text-3xl md:text-6xl">
          About me
        </h1>
        <Aboutme_pl />
     </section>
      <section
        id="projects"
        className="snap-start min-h-screen bg-neutral-200 p-4 md:p-10 flex flex-col items-center"
      >
        <h1 className="text-neutral-700 font-bold text-3xl md:text-6xl">
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-10">
          {projects.map((val, index) => (
            <ProjectCard key={index} values={val} />
          ))}
        </div>
        <div className="mt-5">
          More projects can be found on my{" "}
          <a
            className="text-orange-500 underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/Shoter99"
          >
            Github
          </a>
        </div>
        <div className="pt-16"></div>
      </section>
      <button
        onClick={goToTop}
        className="transition duration-700 absolute right-0 bottom-0 w-8 h-8 m-4 md:m-10 md:w-12 md:h-12 p-1 flex rounded-full justify-center items-center hover:-translate-y-5"
      >
        <img src={ArrowUp} alt="Arrow Up" />
      </button>
    </div>
  );
}

export default App;
