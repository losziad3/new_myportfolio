import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personal, highlights, chips, proof, links } from "../data/data";
import "./Hero.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function Portrait() {
  const ref = useRef(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), {
    stiffness: 140,
    damping: 18,
  });

  const move = (event) => {
    const box = ref.current.getBoundingClientRect();
    px.set((event.clientX - box.left) / box.width - 0.5);
    py.set((event.clientY - box.top) / box.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      className="portrait"
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
    >
      <motion.div
        className="portrait__tilt"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="portrait__card">
          <img src="/portrait.png" alt="Ziad Ayman at a hospitality expo" />
          <span className="portrait__caption">Ziad Ayman</span>
        </div>

        <motion.aside
          className="float float--play"
          style={{ translateZ: 56 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="float__mark" aria-hidden="true">
            ▶
          </span>
          <div>
            <strong>Google Play</strong>
            <span>5 apps live</span>
          </div>
        </motion.aside>

        <motion.aside
          className="float float--stat"
          style={{ translateZ: 72 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        >
          <strong>1,000+</strong>
          <span>combined installs</span>
        </motion.aside>

        <motion.aside
          className="float float--years"
          style={{ translateZ: 40 }}
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <strong>~3</strong>
          <span>years shipping</span>
        </motion.aside>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <Portrait />

        <div className="hero__copy">
          <motion.p className="eyebrow" {...fade(0.05)}>
            Available for new roles · {personal.location}
          </motion.p>

          <motion.p className="hero__hello" {...fade(0.09)}>
            Hi, I’m Ziad — a <span>Software Engineer</span>.
          </motion.p>

          <motion.h1 className="display hero__title" {...fade(0.12)}>
            I build the app
            <br />
            and the system under it.
          </motion.h1>

          <motion.p className="hero__sub" {...fade(0.2)}>
            {personal.tagline}{" "}
            <span className="mark">Five apps live on Google Play.</span>
          </motion.p>

          <motion.div className="hero__chips" {...fade(0.28)}>
            {chips.map((chip) => (
              <span key={chip} className="pill">
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div className="hero__actions" {...fade(0.36)}>
            <a className="btn btn--teal" href="#projects">
              See the apps
            </a>
            <a className="btn btn--ghost" href={`mailto:${personal.email}`}>
              {personal.email}
            </a>
            <a className="btn btn--ghost" href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </motion.div>

          <motion.dl className="hero__metrics" {...fade(0.44)}>
            {highlights.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>

      <div className="proof">
        <div className="container proof__row">
          {proof.map((item) => (
            <p key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
