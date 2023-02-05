export const main_text_en = {
  my_resume: "",
  my_projects: "",
  about_me: "",
};
export const about_me_text_en = {
  text: "",
};

interface project {
  id: number;
  category: string;
  description: string;
  name: string;
  links: link[];
}
interface link {
  name: string;
  url: string;
}
export const projects: project[] = [];

// {
//     id: 0,
//     category: "",
//     name: "",
//     description: "",
//     links: [
//         {
//             name: "Check on Github",
//             url: "https://www.github.com/Shoter99/",
//         },
//         {
//             name: "Live version",
//             url: "",
//         }
// ]
// },
