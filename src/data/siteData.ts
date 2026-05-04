/** A logo tile rendered by the skills grid. */
export interface Skill {
  readonly name: string;
  readonly logo: string;
}

/** One entry in the (auth-gated) work-history timeline. */
export interface ExperienceEntry {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly description: string;
}

export interface ContactInfo {
  readonly phone: string;
  readonly email: string;
  readonly location: string;
}

/** Tailwind text-color utility used to highlight a run of About Me prose. */
export type HighlightClass = "text-primary" | "text-secondary" | "text-accent";

/**
 * A run of prose in an About Me paragraph. A segment with a `color` is
 * highlighted with that class; one without renders as plain body text.
 */
export type ProseSegment =
  | { readonly text: string; readonly color: HighlightClass }
  | { readonly text: string; readonly color?: undefined };

export interface AboutMe {
  readonly resumeLink: string;
  readonly paragraphs: readonly (readonly ProseSegment[])[];
}

/**
 * Roles the landing page types out, one after another. Each is an HTML
 * string (Typewriter's `typeString` renders raw markup) so the inline
 * `<span>` tags can highlight a role's language-flavored prefix, matching
 * the syntax that language: "public class" for Java, "import ... as" for
 * Python. HTML angle brackets meant to display literally, like the `<h1>`
 * tags framing "Frontend Engineer", must be entity-escaped rather than
 * typed raw, or the browser parses them as real tags.
 */
export const heroRoles: readonly string[] = [
  '&lt;<span class="text-secondary">h1</span>&gt;Frontend Engineer&lt;/<span class="text-secondary">h1</span>&gt;',
  '<span class="text-primary">public class</span> Backend Developer',
  '<span class="text-accent">import</span> pandas <span class="text-accent">as</span> Data Engineer',
];

export const languages: readonly Skill[] = [
  {
    name: "Vue",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Grafana",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  },
  {
    name: "InfluxDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/influxdb/influxdb-original.svg",
  },
];

export const tools: readonly Skill[] = [
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Terraform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  },
];

export const experiences: readonly ExperienceEntry[] = [
  {
    title: "Software Engineer II",
    company: "Cisco Systems",
    period: "Aug. 2022 – Present",
    description:
      "Architected Vue.js contact center solution serving 50+ enterprise customers, generating $1M+ in bookings. Built bulk operations tool consuming REST APIs, reducing manual workflows by 80%. Designed real-time agent routing system processing 1000+ weekly call distributions.",
  },
  {
    title: "Software Development Engineer Intern",
    company: "Colgate Palmolive",
    period: "May 2022 – Aug. 2022",
    description:
      "Designed Vue and FastAPI supply chain app, resolving 5 major customer issues and cutting support requests by 29%. Developed notification service boosting daily user activity by 4000+. Enhanced new user retention by 22% through improved onboarding.",
  },
  {
    title: "Software Engineer Intern",
    company: "Cisco Systems",
    period: "May 2021 – Aug. 2021",
    description:
      "Architected automated call center platform connecting 1000+ agents using Java and React. Consolidated 4 database connections into a unified platform, improving data accessibility by 75%. Optimized agent state transitions, accelerating response times by 23%.",
  },
];

export const contactInfo: ContactInfo = {
  phone: "+1 (551) 358-3376",
  email: "nikkyjsoriano@gmail.com",
  location: "East Brunswick, NJ",
};

export const aboutMe: AboutMe = {
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1-jxTcrXF17w7_XAPt122e_uX9aJdvCB0",
  paragraphs: [
    [
      { text: "Hi! 👋 I'm Nikky, a " },
      { text: "full-stack developer", color: "text-primary" },
      {
        text: " focused on building modern web applications and cloud solutions. I enjoy creating impactful software that solves real-world problems.",
      },
    ],
    [
      { text: "On the frontend, I work with " },
      { text: "React", color: "text-secondary" },
      { text: ", " },
      { text: "Vue", color: "text-secondary" },
      { text: ", " },
      { text: "HTML", color: "text-secondary" },
      { text: ", and " },
      { text: "JavaScript", color: "text-secondary" },
      {
        text: " to build responsive and intuitive interfaces. For the backend, I use ",
      },
      { text: "Spring Boot", color: "text-accent" },
      { text: ", " },
      { text: "FastAPI", color: "text-accent" },
      { text: ", and " },
      { text: "Python", color: "text-accent" },
      { text: " to develop scalable applications." },
    ],
    [
      { text: "I also specialize in " },
      { text: "data engineering", color: "text-primary" },
      {
        text: ", where I build data pipelines, work with time-series databases like ",
      },
      { text: "InfluxDB", color: "text-secondary" },
      { text: ", and create visualizations using " },
      { text: "Grafana", color: "text-secondary" },
      { text: ". My experience includes data processing, " },
      { text: "ETL workflows", color: "text-accent" },
      { text: ", and " },
      { text: "real-time analytics", color: "text-accent" },
      { text: "." },
    ],
  ],
};

export const githubUsername = "nikkyjsoriano";

export const leetcodeUsername = "Nikky0510";
