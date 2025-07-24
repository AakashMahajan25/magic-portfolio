import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Aakash",
  lastName: "Mahajan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "me@aakashmahajan.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AakashMahajan25",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aakash-mahajan/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/AakashM_25",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering clean systems, building real-world impact</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Quiro.in</strong></>,
    href: "https://quiro-prod.vercel.app/",
  },
  subline: (
    <>
      I'm Aakash — I build scalable web apps, automate DevOps pipelines,
      <br /> and craft trading strategies for fun. I’m building skills, systems, and freedom.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/aakash-mahajan/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aakash is a Delhi-based full-stack and DevOps engineer with a passion for building clean, scalable systems — from intuitive user interfaces to backend automation. His work spans web platforms, internal tooling, and algorithmic trading strategies, driven by a balance of engineering precision and entrepreneurial curiosity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Numatix Solutions",
        timeframe: "June 2025 - Sept 2025",
        role: "Quant Developer Intern",
        achievements: [
          <>
            Built internal dashboards and monitoring tools for real-time PnL tracking, system health, and execution diagnostics, improving transparency and response time for trading failures.
          </>,
          <>
            Automated CI/CD pipelines and infrastructure provisioning using Docker, GitHub Actions, and Terraform, reducing manual deployment time by over 70%.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Build In Bharat",
        timeframe: "May 2024 - Dec 2024",
        role: "Frontend Developer Intern",
        achievements: [
          <>
            ID8DevHub: Implemented 10+ frontend features (auth, feeds, profiles) in Next.js, improving page performance
            scores from 68 to 91 and accelerating user onboarding by 30%.
          </>,
          <>
            Omni Vibe: Architected the frontend for a B2B AI automation platform used by 100+ clients. Built dashboards
            and real-time flows with React, Zustand, and Tailwind, reducing dashboard load time by 45%.
          </>,
          <>
            Bhasha Bandhu Hackathon: Collaborated as a core team member under the BHASHINI initiative. Designed
            and shipped the hackathon dashboard in under 3 weeks, supporting 500+ participants across India.
          </>,
        ],
        images: [],
      },
      {
        company: "Code Folder",
        timeframe: "Jan 2024 - Apr 2024",
        role: "Frontend Developer Intern",
        achievements: [
          <>
            Core Product: Delivered core platform modules including landing page, authentication, and dashboard using
            Next.js, Tailwind, and Prisma. Boosted user session retention by 27% through backend optimizations.
          </>,
        ],
        images: [],
      },
      {
        company: "StudyByU",
        timeframe: "Sept 2023 - Dec 2023",
        role: "Freelance",
        achievements: [
          <>
            Core Product: Built dashboard and video learning modules for NCERT-based platform with 5,000+ users.
            Contributed to a 40% increase in daily active users during exams and improved video load times by 33%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Bharati Vidyapeeth’s College of Engineering",
        description: <>Bachelor of Technology in Information Technology</>,
      },
      {
        name: "Salwan Public School",
        description: <>Senior Secondary (CBSE)</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
