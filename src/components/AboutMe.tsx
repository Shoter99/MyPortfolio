import parse from "html-react-parser";
const AboutMe = (props: { text: string; lang: string }) => {
  let t = {
    hi: "Hi!",
    en: "English",
    pl: "Polish",
    my: "My Github",
    cv: "My Resume",
  };
  if (props.lang !== "EN") {
    t = {
      hi: "Hej!",
      en: "Angielskie",
      pl: "Polskie",
      my: "Mój Github",
      cv: "Moje CV",
    };
  }
  return (
    <div data-aos="zoom-in" className="bg-neutral-700 relative z-30 text-neutral-200 w-screen md:w-[80%] lg:w-[60%] md:m-10 border-neutral-200 md:p-8 p-2 mt-4 rounded border-2 overflow-auto">
      <h2 className="md:text-3xl ">{t.hi}</h2>
      <br />
      <h3 className="md:text-xl text-justify">
        {parse(props.text)}
        <br />
        <br />
        <br className="hidden md:block" />
        <div className="md:flex text-center md:text-left">
          <div>{t.cv}</div>
          {""}
          <span className="md:block hidden px-2"> - </span>
          <div>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/portfoliowebsite-81b53.appspot.com/o/CV-PL_2023.pdf?alt=media&token=8763e6ea-054f-4420-8082-be2feba730ba"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 underline cursor-pointer"
            >
              {t.pl}
            </a>

            <span className="px-2"> | </span>

            <a
              href="https://firebasestorage.googleapis.com/v0/b/portfoliowebsite-81b53.appspot.com/o/CV-EN_2023.pdf?alt=media&token=d463d49e-0fc1-4b67-9ecb-139a3dbf4705"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 underline cursor-pointer"
            >
              {" "}
              {t.en}
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
            {t.my}
          </a>
        </div>
      </h3>
    </div>
  );
};

export default AboutMe;
