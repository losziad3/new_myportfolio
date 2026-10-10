import { motion } from "framer-motion";
import { skills } from "../data/data";
import "./Skills.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div className="section-head" {...fade(0)}>
          <p className="eyebrow">Skills</p>
          <h2>The toolkit behind the releases.</h2>
        </motion.div>

        <div className="skills__grid">
          {skills.map((group, index) => (
            <motion.article key={group.category} className="skills__card" {...fade(index * 0.04)}>
              <h3>{group.category}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
