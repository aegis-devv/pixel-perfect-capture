/**
 * ─────────────────────────────────────────────
 * Portfolio Content for Tanmay Joddar
 * Fully updated from LaTeX Curriculum Vitae
 * ─────────────────────────────────────────────
 */

export const content = {
  meta: {
    title: "Tanmay Joddar — Full-Stack Engineer & Systems Architecture",
    description:
      "Portfolio of Tanmay Joddar. Full-Stack Developer & Systems Engineer building proof-based caching engines, biometric verification platforms, and high-throughput web systems.",
  },

  name: { first: "Tanmay", last: "Joddar" },

  role: "Full-Stack Engineer",

  badge: "Full-Stack Developer · Systems Architecture",

  heroLines: ["// Full-Stack Engineer", "Systems Architecture"],

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tanmay-joddar-67107427a" },
    { label: "GitHub", href: "https://github.com/tanmayjoddar" },
    { label: "Email", href: "mailto:tanmayjoddar71@gmail.com" },
  ],

  contactInfo: {
    email: "tanmayjoddar71@gmail.com",
    phone: "+91 9883340912",
    location: "UIT Burdwan, West Bengal, India",
    linkedin: "https://www.linkedin.com/in/tanmay-joddar-67107427a",
    github: "https://github.com/tanmayjoddar",
  },

  marquee: [
    "GO",
    "POSTGRESQL",
    "WAL CDC",
    "1.7μs LATENCY",
    "DISTRIBUTED CACHING",
    "LARAVEL",
    "NESTJS",
    "TYPESCRIPT",
    "DOCKER",
    "REDIS",
    "SYSTEM DESIGN",
    "MICROSERVICES",
  ],

  intro: {
    label: "( 01 Philosophy )",
    statement:
      "I architect {low-latency distributed engines} and {resilient full-stack systems} that stay mathematically sound under heavy load.",
    paragraph:
      "B.Tech Information Technology, UIT Burdwan (8.40 CGPA). I've shipped a production biometric system at NIC, a proof-based Go cache engine clocking 1.7μs verifications, and an npm CLI used 1,000+ times. I work from schema to deployment.",
    cta: { label: "Explore Projects", href: "#work" },
  },

  services: {
    label: "( 02 Technical Skills )",
    headline: "Engineered for scale & precision",
    items: [
      {
        numeral: "01",
        title: "Languages & Core",
        description:
          "Type-safe, memory-conscious, and high-performance languages for robust backend services and interactive frontends.",
        capabilities: [
          "C++ & Go (Low Latency / Concurrency)",
          "TypeScript & JavaScript (Modern ESNext)",
          "Python & PHP (Scripting & Backend)",
          "SQL (Complex Joins & Optimization)",
        ],
        tags: ["C++", "Go", "TypeScript", "JavaScript", "Python", "PHP", "SQL"],
      },
      {
        numeral: "02",
        title: "Frameworks & Backend",
        description:
          "Battle-tested MVC and modern component architectures designed for high concurrency and maintainability.",
        capabilities: [
          "Laravel (Enterprise PHP & Microservices)",
          "NestJS & Express.js (Node Ecosystem)",
          "React.js & Next.js (App Router / SSR)",
          "Django (Python Web Framework)",
        ],
        tags: ["Laravel", "NestJS", "Express.js", "Django", "React.js", "Next.js"],
      },
      {
        numeral: "03",
        title: "Databases & In-Memory",
        description:
          "Relational databases with WAL logical replication, in-memory caches, and document stores.",
        capabilities: [
          "PostgreSQL (WAL CDC Streams & Vector Embeddings)",
          "Redis (Distributed Caching & Sub-millisecond Lookup)",
          "MongoDB & MySQL (Schema Design & Replication)",
          "IndexedDB (Client-side Persistence)",
        ],
        tags: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "IndexedDB"],
      },
      {
        numeral: "04",
        title: "Systems & Infrastructure",
        description:
          "Distributed systems patterns, CI/CD pipelines, containerization, and reliable real-time communication.",
        capabilities: [
          "System Design & Event-Driven Architecture",
          "Microservices & REST APIs",
          "WebSockets & WebRTC (Real-Time Streams)",
          "Docker, Nginx & GitHub Actions CI/CD",
        ],
        tags: ["System Design", "Microservices", "Docker", "Nginx", "GitHub Actions", "WebSockets"],
      },
    ],
  },

  work: {
    label: "( 03 Selected Work )",
    projects: [
      {
        number: "01",
        title: "Wavicle",
        subtitle: "Proof-Based Caching Engine",
        tags: "Go · PostgreSQL · pglogrepl · Docker",
        year: "2025",
        href: "https://github.com/tanmayjoddar/wavicle",
        description:
          "Eliminates manual cache invalidation (TTL, pub/sub, cache busting). Cached composite queries carry version vectors that mathematically verify freshness against PostgreSQL WAL CDC stream in 1.7μs with zero allocations.",
        highlights: [
          "1.7μs cache freshness verification with zero allocations",
          "Incremental re-reduction engine with 32.6× speedup (benchstat p=0.002, n=6)",
          "44M+ operations with zero errors in concurrent soak testing",
        ],
      },
      {
        number: "02",
        title: "apidrift",
        subtitle: "API Schema Drift Detector & CI/CD Gate",
        tags: "Node.js · Commander.js · Axios · npm",
        year: "2025",
        href: "https://github.com/tanmayjoddar/apidrift",
        npmHref: "https://www.npmjs.com/package/apidrift-cli",
        description:
          "Zero-dependency schema inference engine capturing API response shapes without storing data, detecting breaking field removals and type changes across environments before deployment.",
        highlights: [
          "1,000+ downloads on npm registry",
          "CI/CD gate via exit code 1 blocking breaking schema deployments",
          "Supports OpenAPI, GraphQL discovery & HAR traffic ingestion with automated masking",
        ],
      },
    ],
  },

  experience: {
    label: "( 04 Experience )",
    items: [
      {
        company: "National Informatics Centre (NIC)",
        role: "Full Stack Developer Intern",
        location: "Hybrid",
        period: "March 2026 — June 2026",
        bullets: [
          "Collaborated on production biometric attendance platform (Laravel, PostgreSQL) driving 1:1/1:N facial verification against 512-dim embeddings.",
          "Tuned a 0.65 similarity threshold with a 0.08 confidence-margin guard against lookalike matches, plus a 60s debounce engine to kill duplicate punches.",
          "Co-designed a 5-tier file-integrity pipeline (extension, magic-byte, server-side MIME, base64/hex, liveness checks) blocking disguised uploads before reaching the ML microservice.",
          "Implemented dual-write embedding sync between local Postgres and NIC cloud vector gallery for outage-proof recovery.",
          "Contributed to RBAC across 4 roles via 8 custom middlewares, immutable audit logs, and SHA-256-keyed hardware authentication.",
        ],
      },
      {
        company: "Dailygroce",
        role: "Full-Stack Developer Intern",
        location: "Remote",
        period: "June 2025 — August 2025",
        bullets: [
          "Fixed a production N+1 query bug in order-fetch endpoint by batching DB calls into a single JOIN, reducing p95 latency from 850ms to 300ms.",
          "Added Redis caching to 3 frequently-hit API endpoints, cutting average response time by ~40% under peer review.",
          "Wrote 40+ unit tests (Jest) for payments module, boosting test coverage from 61% to 85%.",
          "Configured GitHub Actions workflow to auto-run tests and linting on every PR, eliminating manual review overhead.",
        ],
      },
    ],
  },

  achievements: {
    label: "( 05 Achievements & Open Source )",
    items: [
      {
        title: "Open Source — GreedyBear (GSoC Organization)",
        description:
          "7 merged PRs in threat intelligence pipeline (#885, #933, #974, #1010, #1005, #1178, #1217).",
        href: "https://github.com/GreedyBear-Project/GreedyBear",
        badge: "7 Merged PRs",
      },
      {
        title: "Winner — Brain Battle 2.0 Hackathon",
        description:
          "Engineered winning software solution in high-pressure 24-hour coding hackathon.",
        href: "https://unstop.com/certificate-preview/70114af0-19b9-464f-957f-68088c1aac08",
        badge: "1st Place",
      },
      {
        title: "Top 100 — HackHazards 2025",
        description:
          "Ranked among top 100 finalists out of 2,900+ competing engineering teams nationwide.",
        href: "https://certificate.givemycertificate.com/c/5c24c0cf-ebe3-4e29-8455-57afff22f32b",
        badge: "Top 100 / 2900+",
      },
    ],
  },

  about: {
    label: "( 06 About )",
    bio: [
      "I am an Information Technology undergraduate at University Institute of Technology, Burdwan University (UIT Burdwan) with a strong passion for low-level systems, distributed data consistency, and performant web architecture.",
      "My work spans building zero-allocation CDC cache verifiers in Go to production facial recognition pipelines and high-concurrency Laravel/Postgres systems. I take pride in shipping robust, mathematically validated software that performs seamlessly under pressure.",
    ],
    education: {
      institution: "University Institute of Technology, Burdwan University",
      degree: "Bachelor of Technology in Information Technology",
      period: "Sept 2023 — Present",
      cgpa: "8.40 CGPA",
      location: "Burdwan, West Bengal, India",
    },
    city: "Burdwan",
    timeZone: "Asia/Kolkata",
  },

  contact: {
    label: "( 07 Contact )",
    heading: ["Let's build", "together."],
    email: "tanmayjoddar71@gmail.com",
    phone: "+91 9883340912",
    note: "Feel free to reach out directly for engineering roles, distributed systems discussions, or high-impact technical collaborations.",
  },
} as const;

export type Content = typeof content;
