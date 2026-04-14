import { motion } from "framer-motion";
import { experience } from "../data/data";
import "./Experience.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

function ExternalIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div className="section-label" {...fadeUp(0)}>Career</motion.div>
        <motion.h2 className="section-title" {...fadeUp(0.08)}>Experience</motion.h2>

        <div className="exp__timeline">
          {experience.map((item, i) => (
            <motion.div key={i} className="exp__item" {...fadeUp(0.1 + i * 0.08)}>
              <div className="exp__dot" />
              <div className="exp__body">
                <div className="exp__header">
                  <div className="exp__header-left">
                    <h3 className="exp__role">{item.role}</h3>
                    <div className="exp__meta">
                      <span className="exp__period">{item.period}</span>
                      <span className="exp__sep">·</span>
                      <span className="exp__location">{item.location}</span>
                    </div>
                  </div>
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="exp__company-link"
                  >
                    {item.company}
                    <ExternalIcon />
                  </a>
                </div>
                <ul className="exp__points">
                  {item.points.map((p, j) => (
                    <li key={j} className="exp__point">{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
