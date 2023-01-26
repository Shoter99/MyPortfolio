import React from "react";

const AboutMePL = () => {
  return (
    <div className="bg-neutral-700 relative z-30 shadow-2xl text-neutral-200 md:w-[80%] lg:w-[60%] md:m-10 border-neutral-200 md:p-8 p-2 mt-4 rounded border-2 overflow-auto">
      <h2 className="md:text-3xl ">Hej!</h2>
      <br />
      <h3 className="md:text-xl text-justify">
        Nazywam się Dawid i obecnie studiuje na
        <span className="text-orange-400"> Uniwersytecie Gdańskim</span>. Moją
        przygodę z programowaniem rozpocząłem kilka lat temu. Na początku
        uczyłem się
        <span className="text-orange-400"> C++</span>, następnie nauczyłem się
        podstaw
        <span className="text-orange-400"> HTML </span>,
        <span className="text-orange-400"> CSS </span>,
        <span className="text-orange-400"> JavaScript</span> i
        <span className="text-orange-400"> PHP</span>. Kolejnym krokiem było
        nauczenie się
        <span className="text-orange-400"> Python </span> i związanych z nim
        framework'ów takich jak
        <span className="text-orange-400"> Flask</span> i
        <span className="text-orange-400"> Django</span>. Podczas mojej nauki
        brałem udział w kilku{" "}
        <a
          target="_blank"
          href="https://pl.wikipedia.org/wiki/Game_jam"
          className="underline italic"
        >
          Game Jam'ach
        </a>{" "}
        i używałem silników takich jak
        <span className="text-orange-400"> Unity</span> czy
        <span className="text-orange-400"> Godot</span>. Miałem, także styczność
        z tworzeniem aplikacji na telefon i
        <span className="text-orange-400"> React Native</span>. Obecnie
        najwięcej czasu poświęcam na naukę
        <span className="text-orange-400"> ReactJS</span>.
        <br />
        <br className="hidden md:block" />
        <div className="md:flex text-center md:text-left">
          <div>Moje CV</div>
          <span className="md:block hidden px-2"> - </span>
          <div>
            <a
              href={process.env.PUBLIC_URL + "/CV.pdf"}
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 underline cursor-pointer"
            >
              Po polsku
            </a>

            <span className="px-2"> | </span>

            <a
              href="https://resume.io/r/O93tWGpTz"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 underline cursor-pointer"
            >
              {" "}
              Po angielsku
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
            Mój Github
          </a>
        </div>
      </h3>
    </div>
  );
};

export default AboutMePL;
