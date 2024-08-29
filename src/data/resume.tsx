import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mayuri Khapne",
  initials: "MK",
  url: "https://dillion.io",
  location: "Nagpur, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Turning Ideas into Interactive Experiences | React & Next.js Developer",
  summary:"As a motivated frontend developer, I specialize in creating dynamic, user-centric web applications using React and Next.js. With a solid foundation in modern JavaScript frameworks and a keen eye for design, I am dedicated to building seamless and engaging user experiences. My goal is to leverage my skills to contribute to innovative projects and continue growing in the ever-evolving field of web development.",
  avatarUrl: "/hero-img.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "SQL",
    "SASS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "khapnemayuri48@gmail.com",
    tel: "9527410540",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/mayuri-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/Mayuri-linkdin",
        icon: Icons.linkedin,

        navbar: true,
      },
      Peerlist: {
        name: "Peerlist",
        url: "https://dub.sh/mayuri-peerlist",
        icon: Icons.peerlist,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Botbyte Ai",
      badges: [],
      href: "https://www.botbyte.in/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "https://www.botbyte.in/",
      start: "Aug 2024",
      end: "Current",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Perla IT solutions",
      href: "https://atomic.finance",
      badges: [],
      location: "Nagpur",
      title: "Software Developer Intern",
      logoUrl: "/atomic.png",
      start: "Feb 2024",
      end: "Aug 2024",
      description:"Developed and enhanced features for an event management and tracking system, including calendar integration. Collaborated with senior developers and gained hands-on experience in React, Node, MongoDB"
    },
  
  
  ],
  education: [
    {
      school: "G.H. Raisoni university, Amravati",
      href: "https://buildspace.so",
      degree: "Master of computer application",
      logoUrl: "/raisoni.jpeg",
      start: "2022",
      end: "2024",
    },
    {
      school: "Prerna College of Commerce, Nagpur",
      href: "https://uwaterloo.ca",
      degree: "Bachelor of Computer Application",
      logoUrl: "/prerna.webp",
      start: "2019",
      end: "2022",
    },
    {
      school: "Vidarbha Buniyadi Jr. Colllege",
      href: "https://wlu.ca",
      degree: "HSC",
      logoUrl: "/vbjc.ico",
      start: "2018",
      end: "2019",
    },
    {
      school: "Late Daulatrou Dhawale High School",
      href: "https://ibo.org",
      degree: "SSC",
      logoUrl: "/ib.png",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Event Creation and Event Management",
      href: "https://chatcollect.com",
      dates: "April 2024 - May  2024",
      active: true,
      description:"Developed and enhanced features for an event management and tracking system, including calendar integration. Collaborated with senior developers and gained hands-on experience in React, Node, MongoDB",
      technologies: [
        "React.js",
        "Node js",
        "MongoDb",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Plant- Online Store",
      href: "https://magicui.design",
      dates: "Feb 2024",
      active: true,
      description:
        "Ecommerce Website for Plant Store. Using HTML, CSS, Javascript",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Youtube Homepage Clone",
      href: "https://llm.report",
      dates: "September 2023",
      active: true,
      description:"Youtube Homepage Clone using HTML, CSS, Javascript",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },

  ],
  hackathons: [
    {
      title: "C Programming",
      dates: "January 2022 - March 2022",
      location: "Nagpur, India",
      description:
        "C Programming Certification.",
        
      image:
        "https://tse2.mm.bing.net/th?id=OIP.w9AIOO6Cfup6aToV1E-dEQHaIr&pid=Api&P=0&h=220",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "C++ Programming",
      dates: "March 2022 - June 2022",
      location: "Nagpur, India",
      description:
        "C Programming Certification.",
      image:
        "https://logodix.com/logo/1137946.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Web Designing and Development",
      dates: "June 2022 - February 2023",
      location: "Nagpur, India",
      description:
        "Web Designing and Developement Certification.",
      image:
        "https://e7.pngegg.com/pngimages/758/371/png-clipart-web-development-web-service-web-developer-digital-marketing-develop-trademark-logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    ],
} as const;
