export const subject = {
  name: "Swan Htet Aung",
  role: "Software Engineer",
  email: "swanhtetag09@gmail.com",
  linkedin: "https://www.linkedin.com/in/swan-htet-aung09",
  github: "https://github.com/swanhtetaung01",
  location: "Operating after dark",
  bio: "Computer Engineering graduate with a strong pull toward backend systems. Builds practical software with Java, Spring Boot, and web technologies — full-stack apps, UI work, and the occasional machine learning model. Interested in problem-solving and in shipping applications people actually enjoy using. Currently sharpening skills through personal and academic projects while hunting for real-world experience.",
  stats: [
    { label: "Field experience", value: "1+ yrs", detail: "full-stack development" },
    { label: "Training", value: "B.Eng.", detail: "Computer Engineering" },
    { label: "Preferred theatre", value: "Backend", detail: "systems & APIs" },
  ],
};

export type Skill = {
  name: string;
  level: "Experienced" | "Intermediate" | "Basic";
};

export const arsenal: { division: string; brief: string; skills: Skill[] }[] = [
  {
    division: "Frontend",
    brief: "The public face. What the city sees.",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Flutter", level: "Basic" },
      { name: "Python", level: "Basic" },
    ],
  },
  {
    division: "Backend",
    brief: "The machinery underneath. Where the real work happens.",
    skills: [
      { name: "Java", level: "Experienced" },
      { name: "Spring Boot", level: "Experienced" },
      { name: "Spring Security", level: "Intermediate" },
      { name: "Node.js", level: "Basic" },
    ],
  },
];

export const levelWidth: Record<Skill["level"], string> = {
  Experienced: "92%",
  Intermediate: "62%",
  Basic: "34%",
};

export type CaseFile = {
  id: string;
  title: string;
  classification: string;
  summary: string;
  stack: string[];
  image: string;
  github: string;
  demo?: string;
};

export const caseFiles: CaseFile[] = [
  {
    id: "CF-001",
    title: "Ecommerce Backend",
    classification: "Backend Systems",
    summary:
      "A Spring Boot commerce engine — products, carts, orders, and the security layer holding it all together.",
    stack: ["Java", "Spring Boot", "Spring Security"],
    image: "/project-ecommerce.png",
    github: "https://github.com/swanhtetaung01/Ecommerce-SpringBoot.git",
  },
  {
    id: "CF-002",
    title: "AI Studio",
    classification: "Web Application",
    summary:
      "An AI-powered studio for generating and exploring content, deployed and live on the open web.",
    stack: ["React", "JavaScript", "AI APIs"],
    image: "/project-ai-studio.png",
    github: "https://github.com/swanhtetaung01/",
    demo: "https://brannys-ai-studio.netlify.app",
  },
  {
    id: "CF-003",
    title: "Breast Cancer Predictor",
    classification: "Machine Learning",
    summary:
      "A diagnostic ML model wrapped in a Streamlit app — cell measurements in, malignancy prediction out.",
    stack: ["Python", "Streamlit", "scikit-learn"],
    image: "/project-cancer.png",
    github: "https://github.com/swanhtetaung01/Streamlit-BreastCancerPredictorApp.git",
    demo: "https://breast-cancer-predictor-09.streamlit.app/",
  },
];

export const marqueeItems = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "React",
  "JavaScript",
  "Node.js",
  "Python",
  "Flutter",
  "HTML",
  "CSS",
];
