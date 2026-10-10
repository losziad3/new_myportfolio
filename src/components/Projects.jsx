import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../data/data";
import "./Projects.css";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function wrapOffset(index, active, total) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function PhoneStage({ images, name }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const total = images.length;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 720px)");
    const apply = () => setNarrow(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || total < 2) return undefined;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 3400);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const go = (direction) => {
    setActive((current) => (current + direction + total) % total);
  };

  return (
    <div
      className="stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="stage__scene">
        {images.map((src, index) => {
          const offset = wrapOffset(index, active, total);
          const distance = Math.abs(offset);
          if (narrow && offset !== 0) return null;
          return (
            <motion.button
              key={src}
              type="button"
              className="stage__phone"
              aria-label={`${name} screen ${index + 1}`}
              onClick={() => setActive(index)}
              animate={{
                x: narrow ? 0 : offset * 118,
                z: narrow ? 0 : -distance * 90,
                rotateY: narrow ? 0 : offset * -26,
                scale: offset === 0 ? 1 : 0.84,
                opacity: distance > 2 ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              style={{ zIndex: 20 - distance, transformStyle: "preserve-3d" }}
            >
              <img src={src} alt="" />
            </motion.button>
          );
        })}
      </div>

      {total > 1 && (
        <div className="stage__controls">
          <button type="button" onClick={() => go(-1)} aria-label={`Previous ${name} screen`}>
            ‹
          </button>
          <div className="stage__dots">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                className={index === active ? "is-on" : ""}
                aria-label={`Show ${name} screen ${index + 1}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label={`Next ${name} screen`}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}

function WideShot({ src, name }) {
  const refX = useMotionValue(0);
  const refY = useMotionValue(0);
  const rotateX = useSpring(useTransform(refY, [-0.5, 0.5], [6, -6]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(refX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 140,
    damping: 18,
  });

  const move = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    refX.set((event.clientX - box.left) / box.width - 0.5);
    refY.set((event.clientY - box.top) / box.height - 0.5);
  };

  return (
    <div
      className="wide"
      onMouseMove={move}
      onMouseLeave={() => {
        refX.set(0);
        refY.set(0);
      }}
    >
      <motion.img
        src={src}
        alt={`${name} on Google Play`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      />
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.2 23.8c.3.2.7.2 1 .2L14.5 12 4.2.1c-.3 0-.7 0-1 .2C2.5.6 2 1.5 2 2.4v19.2c0 .9.5 1.7 1.2 2.2zM16.5 9.5l2.1-1.2L8.6 2.5 6.3 4.7l10.2 4.8zM22 10.7l-2.9-1.7-2.4 2.4 2.4 1.6 2.9-1.7c.9-.5.9-1.6 0-2.1zM8.6 14.8 6.3 17l10.1 5.8 2.1-1.2-9.9-6.8z"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div className="section-head" {...fade(0)}>
          <p className="eyebrow">Selected work</p>
          <h2>
            Live on
            <br />
            Google Play.
          </h2>
          <p className="lede">
            <span className="mark">All five.</span> Real estate, security operations, facilities, fleet logistics, and events.
          </p>
        </motion.div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project ${project.wide ? "project--wide" : ""} ${index % 2 ? "project--flip" : ""}`}
              {...fade(0.04)}
            >
              <div className="project__copy">
                <p className="project__kicker">
                  <span>{project.id}</span>
                  {project.category}
                </p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="btn btn--teal" href={project.link} target="_blank" rel="noreferrer">
                  <PlayIcon />
                  View on Google Play
                </a>
              </div>

              <div className="project__visual">
                {project.wide ? (
                  <WideShot src={project.images[0]} name={project.name} />
                ) : (
                  <PhoneStage images={project.images} name={project.name} />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
