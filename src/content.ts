/**
 * ─────────────────────────────────────────────
 * EDIT EVERYTHING HERE. This is the only file
 * you need to touch to change the site's copy.
 * ─────────────────────────────────────────────
 */

export const content = {
  meta: {
    title: "Sandeep Sah — Full-Stack Developer",
    description:
      "Portfolio of Sandeep Sah, a full-stack developer building fast, careful web products with React, Node and Postgres.",
  },

  /* PLACEHOLDER: your name, split for the hero */
  name: { first: "SANDEEP", last: "SAH" },

  role: "Full-Stack Developer",

  /* HERO bottom-right, two lines */
  heroLines: ["// Web Developer", "Full-Stack Engineer"],

  /* PLACEHOLDER: social links */
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
  ],

  /* PLACEHOLDER: tech names for the marquee */
  marquee: [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Docker",
    "REST APIs",
    "Prisma",
  ],

  intro: {
    label: "( 01 Intro )",
    /* Words wrapped in {} render in the accent colour */
    statement:
      "I build {digital architecture} that balances performant engineering with a {slow, intentional} aesthetic rhythm.",
    paragraph:
      "Six years writing software for small teams. I like shipping things that stay simple under load, and I care about how a page reads as much as how fast it renders.",
    cta: { label: "See my work", href: "#work" },
  },

  services: {
    label: "( 02 Capabilities )",
    items: [
      {
        numeral: "01",
        title: "Frontend Engineering",
        description:
          "Interfaces built from a real design system, typed end to end, tested where it matters.",
        capabilities: ["React and TypeScript", "Design systems", "Motion and interaction", "Accessibility"],
      },
      {
        numeral: "02",
        title: "Backend and APIs",
        description:
          "Services that are boring on purpose: clear boundaries, predictable data, honest error states.",
        capabilities: ["Node and REST APIs", "PostgreSQL schema design", "Auth and permissions", "Caching"],
      },
      {
        numeral: "03",
        title: "Infrastructure",
        description:
          "Deployments you can repeat at 2am without reading a wiki. Containers, pipelines, monitoring.",
        capabilities: ["Docker", "CI and CD pipelines", "Observability", "Cost tuning"],
      },
    ],
  },

  work: {
    label: "( 03 Selected Work )",
    /* PLACEHOLDER: replace with your real projects. Use real screenshots only. */
    projects: [
      { number: "01", title: "AETHERIS", tags: "e-commerce / headless", year: "2024", href: "#" },
      { number: "02", title: "VERIDIAN", tags: "dashboard / saas", year: "2023", href: "#" },
      { number: "03", title: "NOCTUA", tags: "studio site / motion", year: "2023", href: "#" },
      { number: "04", title: "KINETIC", tags: "fintech / mobile", year: "2022", href: "#" },
    ],
  },

  about: {
    label: "( 04 About )",
    bio: [
      "I started in backend work and drifted toward the front once I realised how much of a product's feel lives in the last ten percent.",
      "Now I take projects end to end: schema, API, interface, deploy. I work best with small teams who want to decide quickly.",
    ],
    /* PLACEHOLDER: your city and IANA timezone for the live clock */
    city: "Kolkata",
    timeZone: "Asia/Kolkata",
    timeline: [
      { year: "2023", place: "Freelance", role: "Full-stack developer" },
      { year: "2021", place: "Northwind Labs", role: "Senior engineer" },
      { year: "2019", place: "Copper Studio", role: "Web developer" },
      { year: "2018", place: "University", role: "Computer Science" },
    ],
  },

  contact: {
    label: "( 05 Contact )",
    heading: ["Let's work", "together"],
    /* PLACEHOLDER: your email */
    email: "hello@example.com",
    note: "Messages sent through this form reach my inbox only. Nothing is stored or shared.",
  },
} as const;

export type Content = typeof content;
