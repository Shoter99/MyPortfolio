import React from "react";

const AboutMeEN = () => {
  return (
    <div className="bg-neutral-700 relative z-30 text-neutral-200 md:w-[80%] lg:w-[60%] md:m-10 border-neutral-200 md:p-8 p-2 mt-4 rounded border-2 overflow-auto">
      <h2 className="md:text-3xl ">Hi!</h2>
      <br />
      <h3 className="md:text-xl text-justify">
        I'm Dawid, a student at{" "}
        <span className="text-orange-400"> the University of Gdańsk </span>.
        I've honed my programming skills over the past few years, starting with{" "}
        <span className="text-orange-400"> C++</span>. From there, I gained a
        solid foundation in{" "}
        <span className="text-orange-400">
          {" "}
          HTML, CSS, JavaScript, and PHP{" "}
        </span>
        . I then shifted my focus to{" "}
        <span className="text-orange-400"> Python</span> and have since mastered
        frameworks like{" "}
        <span className="text-orange-400"> Flask and Django</span>. I have
        participated in several game jams, utilizing engines such as{" "}
        <span className="text-orange-400"> Unity and Godot</span>. Additionally,
        I've dabbled in mobile development and gained experience with{" "}
        <span className="text-orange-400"> React Native and Flutter</span>.
        Currently, I'm expanding my skillset by learning{" "}
        <span className="text-orange-400"> ReactJS</span>.
        <br />
        <br className="hidden md:block" />
        <div className="md:flex text-center md:text-left">
          <div>My CV</div>
          <span className="md:block hidden px-2"> - </span>
          <div>
            <a
              href={process.env.PUBLIC_URL + "/CV.pdf"}
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 underline cursor-pointer"
            >
              Polish
            </a>

            <span className="px-2"> | </span>

            <a
              href="https://resume.io/r/O93tWGpTz"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 underline cursor-pointer"
            >
              {" "}
              English
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <a
            href="https://www.github.com/Shoter99"
            target="_blank"
            rel="noreferrer"
            className="text-orange-400 underline cursor-pointer"
          >
            My Github
          </a>
        </div>
      </h3>
    </div>
  );
};

export default AboutMeEN;
