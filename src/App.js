import React from 'react';

// Navbar
const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume/CV", href: "#resume" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <div className="logo-icon">NR</div>
        <span>Nishanth Reddy Palugula</span>
      </div>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Hero
function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>
        Data Scientist & AI Engineer<br/>
        specializing in building intelligent systems
      </h1>
      <p>
        I design, deploy and optimize advanced AI, ML, and business analytics solutions delivering real business value for healthcare, financial, and enterprise challenges.
      </p>
      <div className="hero-buttons">
        <a className="cta-btn primary" href="https://data-science-resume-word-edited.tiiny.site">Download Resume</a>
        <a className="cta-btn secondary" href="https://linkedin.com/in/nishanth-reddy-palugula-a06739328">LinkedIn</a>
        <a className="cta-btn secondary" href="https://github.com/Nishanth2501">GitHub</a>
        <a className="cta-btn secondary" href="https://nishanthreddy-portfolio.vercel.app/">Portfolio Demo</a>
      </div>
    </section>
  );
}

// About
function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        I'm Nishanth Reddy Palugula, a passionate and results-driven Data Scientist & AI Engineer with a proven track record of developing and deploying production AI and analytics systems using Python, SQL, FastAPI, and Azure.<br/><br/>
        My expertise: LLMs, RAG, enterprise MLOps, NLP, healthcare analytics, explainable AI, and cloud deployments. 
        I thrive on building robust data pipelines, finding business impact, and coding for transparency & scalability. Ready to drive the next transformation at your organization!
      </div>
    </section>
  );
}

// Education
const education = [
  {
    degree: "Master of Business Administration (MBA)",
    specialization: "Business Analytics",
    university: "Midwestern State University",
    location: "Wichita Falls, Texas",
    duration: "Jan 2024 - Dec 2025",
    status: "In Progress",
    description: "Pursuing a STEM-designated MBA in Business Analytics with a rigorous focus on data-driven strategy, predictive modeling, and business intelligence. The curriculum blends core business management with advanced analytics techniques, including data visualization, machine learning, and quantitative modeling.",
    activities: [
      "Midwestern Indian Student Association (MISA)",
      "Make A Difference (MAD) Community",
      "Business Analytics & Data Science Projects",
      "Case Competitions"
    ],
    coursework: "Cost analysis and control, applied business statistics, data modeling & forecasting, business process optimization, and machine learning applications in business. Hands-on experience in Tableau, Power BI, Python, SQL, R, and SAS.",
    skills: ["Tableau", "Data Visualization", "Data Modeling", "Python", "SQL", "RapidMiner", "Finance", "Statistics", "Predictive Analytics", "R", "SAS"]
  },
  {
    degree: "Bachelor of Technology (B.Tech)",
    specialization: "Electronics and Communication Engineering",
    university: "ICFAI Business School",
    location: "Hyderabad, India",
    duration: "Aug 2019 - Jun 2023",
    status: "Completed",
    description: "Built a strong foundation in circuit design, signal processing, data analysis, and machine learning. Actively participated in coding competitions, hackathons, and tech clubs, collaborating with peers to design and prototype innovative solutions.",
    activities: [
      "Entrepreneurship Cell",
      "Coding Competitions (HackerRank, CodeChef)",
      "Local Tech Clubs",
      "Hackathons"
    ],
    coursework: "Industrial visits to ISRO, Indian Institute of Science (IISc), and KHMD, gaining valuable exposure to real-world R&D practices and applications of technology.",
    skills: ["Data Analysis", "Business Intelligence", "Circuit Design", "Python", "Machine Learning"]
  }
];

function EducationCard({ education }) {
  return (
    <div className="education-card">
      <div className="education-header">
        <div className="education-degree-section">
          <h3 className="education-degree">{education.degree}</h3>
          <div className="education-specialization">{education.specialization}</div>
          <div className="education-university">{education.university}</div>
          <div className="education-details">
            <span className="education-duration">{education.duration}</span>
            <span className="education-status">{education.status}</span>
          </div>
          <div className="education-location">{education.location}</div>
        </div>
      </div>
      
      <div className="education-description">
        {education.description}
      </div>
      
      <div className="education-activities">
        <h4>Activities & Societies:</h4>
        <ul>
          {education.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      
      <div className="education-coursework">
        <h4>Key Coursework & Experience:</h4>
        <p>{education.coursework}</p>
      </div>
      
      <div className="education-skills">
        <h4>Skills:</h4>
        <div className="skills-tags">
          {education.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
}

// Experience
const experiences = [
  {
    title: "Data Scientist Intern",
    company: "neuralapps.ai",
    location: "Dallas, Texas, United States · Remote",
    duration: "Sep 2025 - Present (2 mos)",
    type: "Internship",
    description: "Developing and deploying innovative AI solutions focused on intelligent conversational systems and workflow automation for enterprise and higher ed clients.",
    achievements: [
      "Built and fine-tuned advanced conversational AI agents using Retrieval-Augmented Generation (RAG), LangChain, and vector databases—improving contextual response accuracy at scale",
      "Prototyped Digital Campus Advisor (Anáhuac Digital Advisor), deploying multilingual (English & Spanish) generative AI models for student engagement and dynamic query resolution, serving 10,000+ users",
      "Engineered production backends with FastAPI, Docker, and Azure Machine Learning to ensure robust, monitored, and easily managed ML workflows",
      "Automated data integrations between Cal.com scheduling APIs and Zoho CRM, achieving a 60% reduction in manual workflow through real-time analytics and synchronization",
      "Partnered with cross-functional teams to translate business requirements into AI-powered features, drive KPI definition, and accelerate product delivery cycles",
      "Led model retraining, performance monitoring, and LLM evaluation using Azure ML and Python (Pandas, NumPy, Scikit-learn)—continuously improving model stability and reliability"
    ],
    skills: ["Large Language Models (LLM)", "Retrieval-Augmented Generation (RAG)", "Microsoft Azure Machine Learning", "FastAPI", "LangChain", "Python"]
  },
  {
    title: "Data Scientist",
    company: "CitiusTech",
    location: "Hyderabad, Telangana, India - Hybrid",
    duration: "Jul 2022 - Dec 2023 (1 yr 6 mos)",
    type: "Full-time",
    description: "Architected and delivered scalable end-to-end data pipelines and AI solutions driving measurable impact in healthcare and financial services.",
    achievements: [
      "Built robust ETL pipelines (Azure Data Factory, Data Lake, Spark, Hadoop) — increased efficiency by 40% and reliability across multi-terabyte datasets",
      "Developed fraud detection models (KNN, Gradient Boosting) - improved credit risk classification accuracy by 25% and prevented $2M+ in fraud loss",
      "Enhanced customer segmentation (NLP pipelines) — led to 35% lift in targeted campaign conversions",
      "Processed 3M+ records (Python, SQL, Pandas, Hadoop) — automated predictive analytics, feature engineering, and validation",
      "Designed scalable REST APIs (Flask, SQLAlchemy, AWS, Azure) — enabled <100ms model response for production apps",
      "Integrated advanced LLM models (Azure OpenAI, LLaMA) using RAG - unlocked insights from unstructured healthcare data for analytics and automation",
      "Delivered autonomous financial agents (AutoGen) - reduced manual analysis time by 50%",
      "Enabled real-time dashboards (Power BI) - improved executive decision speed by 30%",
      "Led CI/CD for ML workflows (Git, Azure DevOps) - ensured reliable deployments with automated version control"
    ],
    skills: ["Machine Learning", "Azure Data Factory", "Natural Language Processing (NLP)", "Apache Spark", "Fraud Detection", "Python", "SQL", "Retrieval-Augmented Generation (RAG)", "REST APIs", "Azure DevOps Server", "Deep Learning", "Predictive Modeling"]
  },
  {
    title: "Data Scientist Intern",
    company: "Previous Company",
    location: "Remote",
    duration: "Jan 2022 - Jun 2022 (6 mos)",
    type: "Internship",
    description: "Built production-grade ML pipelines and interactive data visualization tools to accelerate analytics, reduce bottlenecks, and improve predictive outcomes.",
    achievements: [
      "Developed ML classification models (Decision Trees, Random Forests, SVM) and NLP pipelines (PyTorch, Scikit-learn), increasing customer lifetime value prediction by 10% and reducing pre-processing time 40%",
      "Delivered reproducible MLOps workflows (FastAPI, Docker, GitHub Actions, Azure DevOps) for seamless training, deployment, version control, and rollback",
      "Designed real-time Tableau dashboards for executive analytics, enabling 25% faster decision-making for leadership and stakeholders",
      "Deployed cloud-native ML solutions using Azure AI Search, driving a 3x speedup in enterprise knowledge retrieval and document intelligence"
    ],
    skills: ["PyTorch", "Docker", "Tableau", "Scikit-Learn", "Azure AI Search", "MLOps", "Data Visualization"]
  }
];

function ExperienceCard({ experience }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="experience-title-section">
          <h3 className="experience-title">{experience.title}</h3>
          <div className="experience-company">{experience.company}</div>
          <div className="experience-details">
            <span className="experience-duration">{experience.duration}</span>
            <span className="experience-type">{experience.type}</span>
          </div>
          <div className="experience-location">{experience.location}</div>
        </div>
      </div>
      
      <div className="experience-description">
        {experience.description}
      </div>
      
      <div className="experience-achievements">
        <h4>Key Achievements:</h4>
        <ul>
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      
      <div className="experience-skills">
        <h4>Skills:</h4>
        <div className="skills-tags">
          {experience.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
}

// Skills
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "R", "Java"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["FastAPI", "LangChain", "Streamlit", "scikit-learn", "Pandas", "NumPy", "LightGBM", "Keras"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Azure ML", "Docker", "GitHub Actions", "AWS EC2", "Tableau", "Power BI", "Jupyter"]
  },
  {
    title: "Specialties",
    skills: ["Generative AI", "NLP", "RAG", "XAI/SHAP", "MLOps", "Business Analytics"]
  }
];
function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map(group => (
          <div key={group.title} className="skill-category">
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Projects
const projects = [
  {
    title: "Anáhuac Digital Advisor (AI Student Guidance, RAG)",
    metrics: "Query accuracy +45%, resolution time -60%",
    desc: "Bilingual academic chatbot using RAG, LangChain, Azure, and Zoho CRM integration, deployed at university scale.",
    stack: ["Python", "LangChain", "Azure", "RAG", "Vector DB", "Zoho CRM"],
    github: "https://github.com/Nishanth2501/anahuac-digital-advisor",
    demo: "https://nishanthreddy-portfolio.vercel.app/",
    demoStatus: "Live"
  },
  {
    title: "SafeLend – Credit Risk Prediction",
    metrics: "92% accuracy, 40% more defaults caught",
    desc: "AI-powered risk scoring app for lending, with SHAP explanations, FastAPI backend, Streamlit UI, and real finance data pipeline.",
    stack: ["Python", "LightGBM", "FastAPI", "Streamlit", "SQL", "SHAP"],
    github: "https://github.com/Nishanth2501/Safelend",
    demo: "https://nishanth2501-safelend-uisafelend-app-wacmff.streamlit.app/",
    demoStatus: "Live"
  },
  {
    title: "Text2SQL AI – Natural Language to SQL System",
    metrics: "91% translation accuracy, 55% faster",
    desc: "FLAN-T5-based system for converting English to SQL with FastAPI, Docker, and Azure deployment.",
    stack: ["Python", "FLAN-T5", "FastAPI", "Azure", "Docker", "SQL"],
    github: "https://github.com/Nishanth2501/text2sqlai",
    demo: "https://github.com/Nishanth2501/text2sqlai",
    demoStatus: "View Code"
  },
  {
    title: "AI MedGuard – Clinical Decision Support System",
    metrics: "Clinical retrieval -70%, accuracy +48%",
    desc: "Generative AI for medical decision support. FastAPI backend, FAISS for vector search. Realtime, explainable.",
    stack: ["Python", "FAISS", "OpenAI API", "AWS EC2"],
    github: "https://github.com/Nishanth2501/aimedguard",
    demo: "https://github.com/Nishanth2501/aimedguard",
    demoStatus: "View Code"
  },
  {
    title: "A/B Testing for Game Feature Optimization",
    metrics: "+4.5% retention, actionable insights",
    desc: "Statistical analysis and visualization for mobile game monetization decisions. EDA, test automation.",
    stack: ["Python", "EDA", "Pandas", "Visualization"],
    github: "https://github.com/Nishanth2501/A-B-Testing-for-Game-Feature-Optimization",
    demo: null,
    demoStatus: "Code Only"
  },
  {
    title: "Superstore Customer Segmentation Analysis",
    metrics: "KMeans clustering, 35% marketing lift",
    desc: "Advanced customer segmentation using KMeans clustering and RFM analysis for targeted marketing strategies and business growth optimization.",
    stack: ["Python", "KMeans", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/Nishanth2501/superstore-segmentation-analysis",
    demo: null,
    demoStatus: "Code Only"
  }
];
function ProjectCard({ title, metrics, desc, stack, github, demo, demoStatus }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <div className="project-metrics">{metrics}</div>
      <div className="project-description">{desc}</div>
      <div className="project-tech">
        {stack.map(s => <span key={s} className="tech-tag">{s}</span>)}
      </div>
      <div className="project-links">
        <a href={github} className="project-link github-link">
          <span className="link-icon">📁</span>
          GitHub
        </a>
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
            <span className="link-icon">🚀</span>
            Live Demo
            <span className="demo-status live">{demoStatus}</span>
          </a>
        ) : (
          <div className="project-link demo-link disabled">
            <span className="link-icon">💻</span>
            {demoStatus}
          </div>
        )}
      </div>
    </div>
  );
}
function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(proj => <ProjectCard key={proj.title} {...proj} />)}
      </div>
    </section>
  );
}

// Certifications
const certs = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
    icon: "🔬",
    link: "https://learn.microsoft.com/en-us/users/nishanthreddypalugula-4969/credentials/5ec89cdf2dac866c?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
  {
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    icon: "📊",
    link: "https://learn.microsoft.com/en-us/users/nishanthreddy-2929/credentials/d91d6111e8764927?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  }
];
function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certs.map(c => (
          <a key={c.title} href={c.link} target="_blank" rel="noopener noreferrer" className="cert-card cert-link">
            <div className="cert-icon">{c.icon}</div>
            <div className="cert-title">{c.title}</div>
            <div className="cert-verify">View Certificate →</div>
          </a>
        ))}
      </div>
    </section>
  );
}

// Resume
function Resume() {
  return (
    <section id="resume" className="section">
      <h2 className="section-title">Resume/CV</h2>
      <div className="resume-content">
        For a detailed overview of my experience and qualifications, download my latest resume.<br/><br/>
        <a className="cta-btn primary" href="https://data-science-resume-word-edited.tiiny.site">Download Resume</a>
      </div>
    </section>
  );
}

// Contact
function Contact() {
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-links">
        <a href="mailto:palugulanishanthreddy@gmail.com">📧 Email</a>
        <a href="https://linkedin.com/in/nishanth-reddy-palugula-a06739328">💼 LinkedIn</a>
        <a href="https://github.com/Nishanth2501">🐙 GitHub</a>
      </div>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div>&copy; 2025 Nishanth Reddy Palugula</div>
    </footer>
  );
}

// --- Main App ---
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
