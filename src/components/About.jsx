import { motion } from "framer-motion";
import { personal, education, layers } from "../data/data";
import "./About.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__intro">
          <motion.div {...fade(0)}>
            <p className="eyebrow">About</p>
            <h2 className="display">
              End to end,
              <br />
              on purpose.
            </h2>
          </motion.div>
          <motion.div {...fade(0.08)}>
            {personal.bio.map((paragraph) => (
              <p key={paragraph} className="about__para">
                {paragraph}
              </p>
            ))}
            <a
              className="about__edu"
              href={education.facultyUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="about__edu-mark">FCAI</span>
              <span>
                <strong>
                  {education.degree} · {education.university}
                </strong>
                <em>
                  {education.faculty} · {education.period}
                </em>
              </span>
            </a>
          </motion.div>
        </div>

        <div className="layers">
          {layers.map((layer, index) => (
            <motion.article
              key={layer.title}
              className={`layer layer--${layer.tone}`}
              {...fade(0.05 * index)}
            >
              <h3>{layer.title}</h3>
              <p>{layer.text}</p>
              <ul>
                {layer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
