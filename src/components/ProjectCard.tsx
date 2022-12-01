import React from "react";

interface Props {
  values: {
    id: number;
    category: string;
    name: string;
    description: string;
    links: {
      name: string;
      url: string;
    }[];
  };
  here: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="border border-neutral-700 rounded shadow-2xl flex flex-col md:flex-row justify-between md:items-center  text-neutral-200 bg-neutral-700">
      <div className="md:w-[600px] p-10">
        <div className="md:flex justify-between">
          <h2 className="font-bold text-xl notranslate">{props.values.name}</h2>
          <br />
          <h3 className="font-bold text-xl notranslate">
            {props.values.category}
          </h3>
        </div>
        <br />
        <h3 className="text-justify">{props.values.description}</h3>
      </div>
      <div className="mx-4 h-[80%] rounded border-x-2 hidden md:block border border-slate-200 w-[0px]"></div>
      <div className="py-5 md:mt-0 px-10">
        {props.values.links.map((val, id) => (
          <div key={id}>
            <h2>
              {val.name}
              <a
                target="_blank"
                rel="noreferrer"
                href={val.url}
                className="text-orange-400 italic pl-2 hover:underline"
              >
                {props.here}
              </a>
            </h2>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
