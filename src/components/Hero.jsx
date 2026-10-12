import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { personal, highlights, chips, proof, links } from "../data/data";
import "./Hero.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function GooglePlayIcon() {
  return (
    <svg width="34" height="34" viewBox="1.2 1.2 21.2 21.2" aria-hidden="true">
      <path fill="#4285F4" d="M3 20.5V3.5c0-.6.3-1.1.8-1.4L14 12 3.8 21.9c-.5-.3-.8-.8-.8-1.4z" />
      <path fill="#34A853" d="M16.7 15.1 14 12.4l-10.2 9.5c.5.5 1.3.6 2 .1l10.9-6.9z" />
      <path fill="#FBBC04" d="M20.1 10.8 16.7 8.9 14 11.6l2.7 2.7 3.4-2c.7-.4.7-1.4 0-1.5z" />
      <path fill="#EA4335" d="M16.7 8.9 5.8 2.1c-.7-.5-1.5-.4-2 .1L14 11.6l2.7-2.7z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="#1d1d1f" aria-hidden="true">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c.7-1 1-2 1-2.1-.1 0-1.9-.7-1.9-2.9zM14.7 6.2c.6-.8 1.1-1.9.9-3-1 .1-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3z" />
    </svg>
  );
}

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
            <GooglePlayIcon />
          </span>
          <div>
            <strong>Google Play</strong>
            <span>5 apps live</span>
          </div>
        </motion.aside>

        <motion.aside
          className="float float--store"
          style={{ translateZ: 64 }}
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
        >
          <span className="float__mark" aria-hidden="true">
            <AppleIcon />
          </span>
          <div>
            <strong>App Store</strong>
            <span>2 apps live</span>
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
