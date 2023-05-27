import React from "react";
const TitlePageBtn = ({ text, link, animation }: { text: string; link: string, animation: string }) => {
  const scrollToId = () => {
    const element = document.querySelector(`#${link}`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      // data-aos={animation}
      onClick={scrollToId}
      className="title-transition rounded bg-neutral-200 border-neutral-700
      p-3 border-2 text-neutral-700 hover:text-neutral-200 hover:bg-neutral-700 shadow-md"
    >
      <span className="font-bold md:text-3xl">{text}</span>
    </button>
  );
};

export default TitlePageBtn;
