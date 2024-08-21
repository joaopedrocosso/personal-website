import ludovicoBanner from "../_assets/projects/ludovicoBanner.webp";
import polaroidSeBanner from "../_assets/projects/polaroidSeBanner.webp";
import zoomCloneBanner from "../_assets/projects/zoomCloneBanner.webp";
import personalWebsiteBanner from "../_assets/projects/personalWebsiteBanner.webp";

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Assistant 2",
    company: "Nelogica",
    description: `Worked on the installation, configuration and management of partner brokers' databases. Developed Change Management (CM) to improve SQL proccedures and GIT workflows.`,
    technologies: ["SQL", "Git", "Jira", "Python"],
    link: "https://www.nelogica.com.br/",
  },
  {
    year: "2021 - 2023",
    role: "Undergraduate Research Student",
    company: "LCC Uerj",
    description: `Responsible for developing the website for the bachelor's degree course in Computer Science at UERJ. Also developed an application using the Python OpenCV library to identify the number of people in classrooms.`,
    technologies: ["JavaScript", "Python", "Docker", "IoT", "ThingsBoard"],
    link: "http://www.bcc.ime.uerj.br/",
  },
  {
    year: "2023 - 2024",
    role: "Freelancer",
    company: "Ludovico Pet",
    description: `Developed a Wordpress e-commerce site that contains all the logic needed to run a store, including authentication, product listing, shopping cart, category filtering and reviews.`,
    technologies: ["Wordpress", "CSS", "JavaScript"],
    link: "https://ludovicopet.com/",
  },
  {
    year: "2022 - 2023",
    role: "Systems Developer",
    company: "GFRJ",
    description: `Contributed to the development of algorithms for esp32 and arduino microcontrollers. Both embarked and successfully completed their tasks on a rocket with an apogee of 3 km.`,
    technologies: ["C++", "Python"],
    link: "http://www.gfrj.uerj.br/",
  },
];

export const PROJECTS = [
  {
    title: "Zoom Clone",
    image: zoomCloneBanner,
    description:
      "Full-stack clone of the Zoom software. The clone contains authentication, call creation, device configuration and much more!",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Clerk"],
    link: "https://zoom-clone-nine-mu.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-clone-nine-mu.vercel.app%2F",
  },
  {
    title: "Ludovico Pet E-Commerce",
    image: ludovicoBanner,
    description:
      "Fully functional e-commerce with features such as product listing, shopping cart and user authentication.",
    technologies: ["Wordpress", "CSS", "JavaScript"],
    link: "https://ludovicopet.com/",
  },
  {
    title: "Polaroid-se",
    image: polaroidSeBanner,
    description:
      "A website where you can generate polaroids of different sizes by uploading any photo from your gallery.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    link: "https://polaroid-se.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: personalWebsiteBanner,
    description:
      "Personal website where I share my experiences, portfolio, services and some content.",
    technologies: ["Next.js 14", "TypeScript", "Framer Motion"],
    link: "",
  },
];


export const TECHSTACK = [
  {
    title: "Front-End",
    description:
      "I build incredible interfaces with the most widely used technologies on the market.",
    technologies: ["HTML5", "CSS3", "JS", "TS", "React", "Next.js", "Tailwind CSS", "Sass"],
  },
  {
    title: "Back-End",
    description:
      "I create optimized servers with high-performance tools.",
    technologies: ["Node.js", "Express", "Django"],
  },
  {
    title: "DataBases",
    image: polaroidSeBanner,
    description:
      "I integrate applications into databases seeking high project scalability.",
    technologies: ["MongoDB", "My SQL", "SQL Server", "Redis", "Supabase"],
  },
];

export const CONTACT = {
  email: "contact@joaopedrocosso.com",
};
