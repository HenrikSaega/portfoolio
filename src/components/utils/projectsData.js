import AIRSOFT_HERO from "../pics/Projects/MTU_VU/AIRSOFT-HERO.PNG"
import AIRSOFT_PRE1 from "../pics/Projects/MTU_VU/AIRSOFT-PRE1.PNG"
import AIRSOFT_PRE2 from "../pics/Projects/MTU_VU/AIRSOFT-PRE2.PNG"
import AIRSOFT_PRE3 from "../pics/Projects/MTU_VU/AIRSOFT-PRE3.PNG"

const projects = [
  {
    id: 1,
    title: "MTÜ VALGA UNDERGROUND",
    category: "WEB",
    releaseDate: "November, 2024",
    description: "Idea was that people outside community can see what’s going on and future events.",
    tags: ["HTML", "CSS"],
    image: AIRSOFT_HERO,
    gallery: [AIRSOFT_PRE1, AIRSOFT_PRE2, AIRSOFT_PRE3],
    live: "https://vso24saega.ita.voco.ee/veebiarendus/l6puprojekt/Leht/index.html"
  },
  /* {
    id: 2,
    title: "Portfolio Website",
    category: "WEB",
    releaseDate: "May, 2025",
    description: "Personal portfolio site to showcase projects and skills.",
    tags: ["React", "Tailwind"],
    image: "/img/portfolio-main.jpg",
    gallery: ["/img/portfolio1.jpg", "/img/portfolio2.jpg"],
    live: "https://portfolio.example.com"
  } */
];

export default projects;
