/**
 * ─────────────────────────────────────────────
 * EDIT EVERYTHING HERE. This is the only file
 * you need to touch to change the site's copy.
 * ─────────────────────────────────────────────
 */

export const content = {
  meta: {
    title: "Tanmay Joddar — Full-Stack Developer",
    description:
      "Portfolio of Tanmay Joddar, a full-stack developer building fast, careful web products with React, Node and Postgres.",
  },

  /*
   * Name used in hero. Mixed case — displayed exactly as written.
   * `first` and `last` are joined with a space; the hero renders them
   * as ONE single line at fit-width size.
   */
  name: { first: "Tanmay", last: "Joddar" },

  role: "Full-Stack Developer",

  /* HERO bottom-right, two lines */
  heroLines: ["// Web Developer", "Full-Stack Engineer"],

  /* Fill in your real usernames below */
  socials: [
    { label: "LinkedIn",  href: "https://linkedin.com/in/tanmay-joddar" },
    { label: "GitHub",    href: "https://github.com/tanmayjoddar" },
    { label: "Instagram", href: "https://instagram.com/tanmayjoddar" },
  ],

  /* Tech names for the marquee strip */
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
    /* Phrases in {curly braces} render in the accent colour */
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
    /*
     * REPLACE with your real projects.
     * title: displayed as-is (outline → solid on hover).
     * tags: category / type string.
     * year: 4-digit string.
     * href: link to the live project or case study.
     */
    projects: [
      { number: "01", title: "Project One",   tags: "web app / full-stack",   year: "2024", href: "#" },
      { number: "02", title: "Project Two",   tags: "dashboard / analytics",  year: "2024", href: "#" },
      { number: "03", title: "Project Three", tags: "api / backend",          year: "2023", href: "#" },
      { number: "04", title: "Project Four",  tags: "mobile / react native",  year: "2023", href: "#" },
      { number: "05", title: "Project Five",  tags: "open source / tooling",  year: "2022", href: "#" },
    ],
  },

  about: {
    label: "( 04 About )",
    bio: [
      "I started in backend work and drifted toward the front once I realised how much of a product's feel lives in the last ten percent.",
      "Now I take projects end to end: schema, API, interface, deploy. I work best with small teams who want to decide quickly.",
    ],
    /* Your city and IANA timezone — used for the live clock */
    city: "Kolkata",
    timeZone: "Asia/Kolkata",
    timeline: [
      { year: "2023", place: "Freelance",      role: "Full-stack developer" },
      { year: "2021", place: "Northwind Labs", role: "Senior engineer" },
      { year: "2019", place: "Copper Studio",  role: "Web developer" },
      { year: "2018", place: "University",     role: "Computer Science" },
    ],
  },

  contact: {
    label: "( 05 Contact )",
    heading: ["Let's work", "together"],
    /* Replace with your real email */
    email: "hello@example.com",
    note: "Messages sent through this form reach my inbox only. Nothing is stored or shared.",
  },
} as const;

export type Content = typeof content;
