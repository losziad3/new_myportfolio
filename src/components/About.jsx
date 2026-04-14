import { motion } from "framer-motion";
import { personal, education } from "../data/data";
import "./About.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const CARDS = [
  { icon: "📱", title: "Cross-Platform Excellence", text: "One codebase, two platforms. Pixel-perfect UI that feels native on every device." },
  { icon: "🏛️", title: "Clean Architecture", text: "SOLID principles, layered design, maintainable code that scales with your product." },
  { icon: "🚀", title: "CI/CD Pipelines", text: "Automated deployment pipelines on Azure DevOps for fast, reliable releases." },
  { icon: "🎓", title: "Instructor & Mentor", text: "Teaching Flutter at NTI and CS at iSchool — sharing knowledge at scale." },
];

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Text */}
          <div className="about__text">
            <motion.div className="section-label" {...fadeUp(0)}>About Me</motion.div>
            <motion.h2 className="section-title" {...fadeUp(0.1)}>
              Crafting apps that<br />
              <span className="italic-accent">just work.</span>
            </motion.h2>

            {personal.bio.map((para, i) => (
              <motion.p key={i} className="about__para" {...fadeUp(0.15 + i * 0.08)}>
                {para}
              </motion.p>
            ))}

            {/* Education badge with links */}
            <motion.div className="about__edu" {...fadeUp(0.4)}>
              <div className="about__edu-icon">🎓</div>
              <div className="about__edu-body">
                <a
                  href={education.facultyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="about__edu-degree"
                >
                  {education.degree}
                  <ExternalIcon />
                </a>
                <div className="about__edu-meta">
                  <a
                    href={education.universityUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="about__edu-uni"
                  >
                    {education.university}
                  </a>
                  <span className="about__edu-sep">·</span>
                  <span className="about__edu-period">{education.period}</span>
                </div>
                <span className="about__edu-location">{education.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="about__cards">
            {CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                className="about__card"
                {...fadeUp(0.1 + i * 0.09)}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="about__card-icon">{c.icon}</div>
                <div>
                  <div className="about__card-title">{c.title}</div>
                  <div className="about__card-text">{c.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
