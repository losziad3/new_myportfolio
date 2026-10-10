import { motion } from "framer-motion";
import { experience } from "../data/data";
import "./Experience.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div className="section-head" {...fade(0)}>
          <p className="eyebrow">Experience</p>
          <h2>Where the work happened.</h2>
        </motion.div>

        <div className="exp">
          {experience.map((job, index) => (
            <motion.article key={job.company + job.role} className="exp__card" {...fade(index * 0.04)}>
              <header className="exp__top">
                <div>
                  <h3>{job.role}</h3>
                  <p className="exp__company">
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                    <span>
                      {job.location} · {job.period}
                    </span>
                  </p>
                </div>
                <span className="exp__check" aria-hidden="true">
                  ✓
                </span>
              </header>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="exp__stack">
                {job.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
