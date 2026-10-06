import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const profile = {
  name: "Vishal Chaurasiya",
  role: "Data Analyst • Data Engineer • AI Enthusiast",
  tagline: "Turning data, code and ideas into practical digital products.",
  email: "vishalchaurasiya46529@gmail.com",
  linkedin: "linkedin.com/in/vishal-chaurasiya-345115227",
  github: "https://github.com/vishalchauras",
};

const projects = [
  {
    number: "01",
    title: "Real Estate Digital Discovery Platform",
    category: "Full-stack / Mobile",
    description:
      "An Android-first real-estate discovery experience connecting property seekers with owners and brokers through reels, listings, enquiries and lead management.",
    stack: ["Expo / React Native", "FastAPI", "MongoDB", "REST API"],
    accent: "gold",
    github: "https://github.com/",
    demo: "#contact",
  },
  {
    number: "02",
    title: "Groco — Online Grocery Store",
    category: "Web Development",
    description:
      "A grocery shopping concept focused on clean product discovery, category browsing and a straightforward customer purchase journey.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "violet",
    github: "https://github.com/",
    demo: "#contact",
  },
  {
    number: "03",
    title: "Data Analytics Portfolio Project",
    category: "Analytics",
    description:
      "A practical analytics workflow covering data cleaning, exploratory analysis, SQL-style business questions and dashboard-ready insights.",
    stack: ["Python", "SQL", "Excel", "Power BI"],
    accent: "blue",
    github: "https://github.com/",
    demo: "#contact",
  },
];

const skills = [
  { name: "Python", level: "Working knowledge", icon: Code2 },
  { name: "SQL", level: "Working knowledge", icon: Database },
  { name: "Power BI", level: "Analytics & dashboards", icon: BarChart3 },
  { name: "Excel", level: "Data analysis", icon: BarChart3 },
  { name: "HTML / CSS", level: "Web fundamentals", icon: Code2 },
  { name: "FastAPI / REST", level: "Backend fundamentals", icon: Database },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) el.classList.add("visible");
      });
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">V</span>
            <span>Vishal<span className="brand-dot">.</span></span>
          </a>

          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="pulse" /> Available for opportunities</div>
            <h1>
              Building with <span>data.</span><br />
              Learning with <span>purpose.</span>
            </h1>
            <p className="hero-text">
              I’m Vishal Chaurasiya, an IT graduate focused on data analytics,
              backend fundamentals and AI-driven technology.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button ghost" href="/Vishal_Chaurasiya_Resume.pdf" download>
                <Download size={16} /> Download resume
              </a>
            </div>
            <div className="quick-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="code-card glass">
              <div className="window-bar"><i /><i /><i /><span>vishal.py</span></div>
              <pre>{`class Vishal:
    focus = [
      "Data Analytics",
      "Python + SQL",
      "AI & Automation"
    ]

    def build(self, idea):
        return idea + " + data"`}</pre>
              <div className="code-footer">
                <span>currently learning</span>
                <strong>Data Engineering → AI</strong>
              </div>
            </div>
            <div className="stat-card glass">
              <Sparkles size={17} />
              <div><strong>3+</strong><span>core project areas</span></div>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-track">
            <span>PYTHON</span><b>✦</b><span>SQL</span><b>✦</b><span>POWER BI</span><b>✦</b>
            <span>DATA ANALYTICS</span><b>✦</b><span>FASTAPI</span><b>✦</b><span>AI</span><b>✦</b>
            <span>PYTHON</span><b>✦</b><span>SQL</span><b>✦</b><span>POWER BI</span><b>✦</b>
          </div>
        </div>

        <section id="about" className="section container reveal">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <div>
              <h2>I like solving <em>real problems</em> with technology.</h2>
            </div>
            <div className="about-copy">
              <p>
                I’m a B.Tech IT graduate who enjoys working with numbers, data and
                computers. My current direction is to grow from data analytics into
                data engineering and AI engineering.
              </p>
              <p>
                I learn best by building. That is why my portfolio focuses on
                practical projects, APIs, dashboards and user-facing products
                rather than only course certificates.
              </p>
              <div className="about-facts">
                <div><strong>B.Tech</strong><span>Information Technology</span></div>
                <div><strong>India</strong><span>Open to opportunities</span></div>
                <div><strong>Focus</strong><span>Data + Technology</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section container reveal">
          <div className="section-label">02 / Skills</div>
          <div className="section-heading">
            <h2>Tools I use to <em>build & analyze.</em></h2>
            <p>Focused on practical, job-ready fundamentals.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, level, icon: Icon }) => (
              <div className="skill-card glass" key={name}>
                <div className="skill-icon"><Icon size={21} /></div>
                <div><h3>{name}</h3><span>{level}</span></div>
                <ArrowUpRight className="skill-arrow" size={17} />
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section container reveal">
          <div className="section-label">03 / Selected work</div>
          <div className="section-heading">
            <h2>Projects with a <em>purpose.</em></h2>
            <p>Selected work that demonstrates how I turn requirements into products and insights.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
                    <a href={project.demo}>View project <ArrowUpRight size={15} /></a>
                  </div>
                </div>
                <div className="project-art">
                  <div className="mini-dashboard">
                    <div className="mini-top"><span /><span /><span /></div>
                    <div className="mini-chart"><i /><i /><i /><i /><i /><i /></div>
                    <div className="mini-lines"><span /><span /><span /></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container reveal">
          <div className="section-label">04 / Journey</div>
          <div className="journey-grid">
            <div>
              <h2>Learning by <em>doing.</em></h2>
              <p className="muted">A simple snapshot of my current professional direction.</p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <span>2025</span>
                <div><h3>B.Tech — Information Technology</h3><p>ABES Engineering College, Ghaziabad</p></div>
              </div>
              <div className="timeline-item">
                <span>Now</span>
                <div><h3>Data & Technology Projects</h3><p>Building practical projects with Python, SQL, Power BI, APIs and modern application tooling.</p></div>
              </div>
              <div className="timeline-item">
                <span>Next</span>
                <div><h3>Data Engineering → AI Engineering</h3><p>Deepening skills in data pipelines, cloud fundamentals, machine learning and AI automation.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container reveal">
          <div className="cert-strip glass">
            <div className="cert-title"><Sparkles size={20} /><span>Certifications</span></div>
            <div className="certs">
              <span>Google Cloud <b>Generative AI</b></span>
              <span>Deloitte <b>Data Analyst</b></span>
              <span>AWS <b>Cloud Computing</b></span>
            </div>
          </div>
        </section>

        <section id="contact" className="contact container reveal">
          <div className="contact-card">
            <div className="contact-glow" />
            <div className="section-label">05 / Contact</div>
            <h2>Have an opportunity?<br /><em>Let’s build something.</em></h2>
            <p>I’m open to entry-level opportunities in data analytics, software and technology.</p>
            <a className="button primary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17} /></a>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Vishal Chaurasiya</span>
        <span>Designed & built with React + TypeScript</span>
        <a href="#home"><ChevronDown size={16} className="back-top" /> Back to top</a>
      </footer>
    </div>
  );
}

export default App;