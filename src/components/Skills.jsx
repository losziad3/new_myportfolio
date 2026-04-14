import { motion } from "framer-motion";
import { skills } from "../data/data";
import "./Skills.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div className="section-label" {...fadeUp(0)}>Tech Stack</motion.div>
        <motion.h2 className="section-title" {...fadeUp(0.08)}>Skills</motion.h2>

        <div className="skills__grid">
          {skills.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="skills__card"
              {...fadeUp(0.05 + i * 0.05)}
              whileHover={{ y: -6, borderColor: "rgba(79,195,247,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="skills__cat-header">
                <span className="skills__cat-icon">{cat.icon}</span>
                <span className="skills__cat-title">{cat.category}</span>
              </div>
              <div className="skills__tags">
                {cat.items.map((tag) => (
                  <motion.span
                    key={tag}
                    className="skills__tag"
                    whileHover={{ color: "var(--accent)", borderColor: "rgba(79,195,247,0.4)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
