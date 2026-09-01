export const profile = {
  name: "Anjana Sivanandan",
  tagline: "Software Engineer & Independent Researcher",
  focus: "Quantum Computing · Machine Learning · Cybersecurity",
  location: "Singapore",
  summary:
    "I build high-throughput financial systems by day and chase open questions in quantum machine learning and quantum search algorithms in my own time. My background spans compiler engineering, distributed systems, and applied research - with a Gold Award-winning research project, a TechRxiv preprint, and ongoing independent work toward journal publication.",
  now: "Currently building mission-critical transaction infrastructure at Singapore's Land Transport Authority, and researching quantum-classical hybrid models for music information retrieval and entropy-aware encodings for Grover's search.",
  email: "anjana@sivanandan.com",
  links: {
    github: "https://github.com/SAnjana",
    linkedin: "https://linkedin.com/in/AnjanaSi",
    orcid: "https://orcid.org/0009-0004-4081-9472",
  },
};

export type TimelineCategory = "work" | "research" | "education";

export interface TimelineEntry {
  id: string;
  category: TimelineCategory;
  title: string;
  org: string;
  location?: string;
  start: string;
  end?: string;
  sortYear: number;
  current?: boolean;
  summary: string;
  bullets?: string[];
  tags?: string[];
  link?: { href: string; label: string };
}

export const timeline: TimelineEntry[] = [
  {
    id: "lta",
    category: "work",
    title: "Software Engineer → Senior Software Engineer",
    org: "Land Transport Authority",
    location: "Singapore",
    start: "Jan 2024",
    current: true,
    sortYear: 2024,
    summary:
      "Transforming a high-frequency financial transaction backend that processes over S$2 billion a year, from monolith toward a cloud-targeted, microservices architecture.",
    bullets: [
      "Resolved mission-critical race conditions in concurrent transaction streams by redesigning the locking mechanism for a Spring Boot 3 cloud deployment.",
      "Formulated a modulo-arithmetic (number-theoretic) equation to compute travelled distances on cyclic bus routes with distance resets at the route origin.",
      "Migrated the primary database from DB2 to PostgreSQL, supporting 2.5M+ daily transactions, and led the Maven → Gradle build migration.",
      "Promoted to Senior Software Engineer in January 2026.",
    ],
    tags: ["Java 21", "Spring Boot 3", "AWS", "PostgreSQL", "Solace MQ", "Hazelcast", "Docker"],
  },
  {
    id: "quantum-mir",
    category: "research",
    title: "Quantum Music Information Retrieval",
    org: "Independent Research",
    start: "Nov 2025",
    current: true,
    sortYear: 2025.9,
    summary:
      "Popularity analysis of songs using acoustic features via classical and quantum machine learning — an extension of undergraduate research to 426 songs and 91 acoustic features.",
    bullets: [
      "Applied SHAP feature ranking and classical ML benchmarking alongside preliminary QML experiments in PennyLane and PyTorch.",
      "Manuscript in preparation for the ICTer Journal.",
    ],
    tags: ["PennyLane", "PyTorch", "QML", "SHAP"],
  },
  {
    id: "entropy-grover",
    category: "research",
    title: "Entropy-Aware Encoding for Quantum Search",
    org: "Independent Research",
    start: "Dec 2025",
    current: true,
    sortYear: 2025.92,
    summary:
      "A Huffman-inspired fixed-length data encoding for Grover's search algorithm, repurposing structures from classical compression as probabilistic priors.",
    bullets: [
      "Using frequency information to bias the initial superposition towards high-likelihood elements, ahead of amplitude amplification.",
    ],
    tags: ["Quantum Search", "Grover's Algorithm", "Information Theory"],
  },
  {
    id: "consortium-lending",
    category: "research",
    title: "A Consortium Lending System with Open Banking for Retail Loans",
    org: "TechRxiv Preprint",
    start: "2026",
    sortYear: 2026,
    summary:
      "Mathematical model for consortium-based retail lending under open banking, published as a preprint — building on a concept that won a Bronze Award in 2020.",
    link: {
      href: "https://doi.org/10.36227/techrxiv.176784333.38716895/v1",
      label: "Read the preprint",
    },
    tags: ["FinTech", "Open Banking"],
  },
  {
    id: "pg-cert",
    category: "education",
    title: "PG Certificate in Big Data Analytics",
    org: "Robert Gordon University, UK",
    location: "studied at the Informatics Institute of Technology, Sri Lanka",
    start: "2021",
    end: "2024",
    sortYear: 2021,
    summary:
      "Exit award from an MSc in Big Data Analytics following work relocation to Singapore.",
    bullets: ["Data Warehousing (A) · Big Data Programming (A) · Cloud Computing (A) · Text Analytics (C)"],
  },
  {
    id: "cpf",
    category: "work",
    title: "Systems Analyst, Site Reliability Engineering",
    org: "Central Provident Fund Board",
    location: "Singapore",
    start: "Aug 2023",
    end: "Dec 2023",
    sortYear: 2023.6,
    summary:
      "Short-term assignment on the SRE team, monitoring and troubleshooting Kubernetes-based microservices on Azure.",
    bullets: [
      "Analysed failure patterns across CI/CD pipelines and rolled out environment configuration fixes to de-risk deployments.",
      "Scripted utilities to generate reporting on users and Git repository activity.",
    ],
    tags: ["Kubernetes", "Azure", "CI/CD"],
  },
  {
    id: "wso2",
    category: "work",
    title: "Software Engineer — Compilers",
    org: "WSO2",
    location: "Colombo, Sri Lanka",
    start: "Mar 2020",
    end: "Jun 2023",
    sortYear: 2020.2,
    summary:
      "Core contributor and committer on Ballerina, the open-source cloud-native programming language compiler.",
    bullets: [
      "Designed and led the implementation of the “Types API”, exposing internal semantics and type compatibility for 30+ data types.",
      "Refactored Abstract Syntax Tree construction, semantic analysis, and parser logic.",
      "Reduced cyclomatic complexity by rewriting source-range containment checks as invariant-based Boolean expressions using lexicographic interval logic.",
      "Automated the Homebrew release pipeline and resolved 120+ critical compiler issues.",
    ],
    tags: ["Java", "Compiler Design", "Open Source"],
  },
  {
    id: "song-popularity",
    category: "research",
    title: "Final Year Research — Song Popularity Analysis",
    org: "University of Colombo School of Computing",
    start: "Feb 2019",
    end: "Feb 2020",
    sortYear: 2019.1,
    summary:
      'Thesis: "A Robust Approach to Predict the Popularity of Songs by Identifying Appropriate Properties," supervised by Prof. K. L. Jayaratne.',
    bullets: [
      "Trained an XGBoost model reaching 71% accuracy, using Fourier analysis to extract acoustic features from web-scraped data.",
    ],
    link: {
      href: "https://dl.ucsc.cmb.ac.lk/jspui/handle/123456789/4157",
      label: "Read the thesis",
    },
    tags: ["XGBoost", "Signal Processing"],
  },
  {
    id: "research-intern",
    category: "research",
    title: "Academic Research Intern",
    org: "University of Colombo School of Computing",
    start: "Sep 2018",
    end: "Feb 2019",
    sortYear: 2018.7,
    summary:
      "Re-engineered a manual radio broadcast monitoring process into a cloud-based system for music royalty collection, using FFT for near-real-time audio fingerprinting.",
    bullets: [
      "Increased overall efficiency by 87%.",
      "The project won the Gold Award at Sri Lanka's National ICT Awards (2021) for Best Research & Development Project of the Year.",
    ],
    tags: ["Java", "Python", "FFT", "AWS"],
  },
  {
    id: "bsc",
    category: "education",
    title: "BSc (Hons.) in Computer Science",
    org: "University of Colombo School of Computing",
    start: "2016",
    end: "2020",
    sortYear: 2016,
    summary: "GPA: 3.06 / 4.0.",
    bullets: [
      'Winner, "LetMeHack" Inter-University API Development Hackathon (2018).',
      "Award winner, University's Best Software Product Competition (2018).",
    ],
  },
];

export const timelineSorted = [...timeline].sort((a, b) => b.sortYear - a.sortYear);

export interface Publication {
  title: string;
  venue: string;
  year: string;
  status: "published" | "preprint" | "in-preparation";
  link?: string;
}

export const publications: Publication[] = [
  {
    title: "A Consortium Lending System with Open Banking for Retail Loans",
    venue: "TechRxiv Preprint",
    year: "2026",
    status: "preprint",
    link: "https://doi.org/10.36227/techrxiv.176784333.38716895/v1",
  },
  {
    title:
      "Popularity Analysis of Songs Using Acoustic Features via Classical and Quantum Machine Learning",
    venue: "ICTer Journal (manuscript in preparation)",
    year: "2026",
    status: "in-preparation",
  },
  {
    title: "Collaborative Lending With Open Banking and Smart Contracts",
    venue: "InnovBank — International Symposium on Innovative Banking (Bronze Award)",
    year: "2020",
    status: "published",
    link: "https://fb.watch/6eN6jH4C6A/",
  },
];

export interface Award {
  title: string;
  org: string;
  year: string;
  detail: string;
}

export const awards: Award[] = [
  {
    title: "Gold Award",
    org: "National ICT Awards (NBQSA), Sri Lanka",
    year: "2021",
    detail: "Best Research & Development Project of the Year — Radio Broadcast Monitoring System",
  },
  {
    title: "Bronze Award",
    org: "InnovBank International Symposium of Innovative Banking, Sri Lanka",
    year: "2020",
    detail: "Consortium lending with open banking and smart contracts",
  },
  {
    title: "Winner",
    org: '"LetMeHack" Inter-University API Development Hackathon',
    year: "2018",
    detail: "Inter-university competitive hackathon",
  },
  {
    title: "Award Winner",
    org: "Best Software Product Competition",
    year: "2018",
    detail: "University of Colombo School of Computing",
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Research & Machine Learning",
    skills: ["Quantum Machine Learning", "PennyLane", "PyTorch", "SHAP", "Data Analysis", "Literature Review"],
  },
  {
    title: "Programming & Frameworks",
    skills: ["Java", "Spring Boot", "Python", "TypeScript / JavaScript", "Microservices", "REST APIs"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "PostgreSQL", "Docker", "Kubernetes", "Distributed Systems"],
  },
  {
    title: "Security & Core CS",
    skills: ["Cryptography", "OpenSSL", "Compiler Design", "Data Structures & Algorithms"],
  },
];
