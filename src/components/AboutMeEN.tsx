import React from "react";

const AboutMeEN = () => {
  return (
    <div className="bg-neutral-700 relative z-30 text-neutral-200 md:w-[80%] lg:w-[60%] md:m-10 border-neutral-200 md:p-8 p-2 mt-4 rounded border-2 overflow-auto">
      <h2 className="md:text-3xl ">Hi!</h2>
      <br />
      <h3 className="md:text-xl text-justify">
        My name is Dawid I am studying at
        <span className="text-orange-400"> University of Gdańsk</span> and I
        have been learning programming for a couple of years now. My journey
        started with
        <span className="text-orange-400"> C++</span> then I learned basics of
        <span className="text-orange-400"> HTML</span>,
        <span className="text-orange-400"> CSS</span>,
        <span className="text-orange-400"> JavaScript</span> and
        <span className="text-orange-400"> PHP</span>. After these I switched to
        <span className="text-orange-400"> Python</span> and learned language
        and frameworks like
        <span className="text-orange-400"> Flask</span> and
        <span className="text-orange-400"> Django</span>. I also took part in a
        few{" "}
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/Game_jam"
          className="underline italic"
        >
          Game Jams
        </a>{" "}
        and used engines like
        <span className="text-orange-400"> Unity</span> or
        <span className="text-orange-400"> Godot</span>. I had contact with
        Mobile Development and
        <span className="text-orange-400"> React Native</span> as well.
        Currently I am learning
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
