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
    <svg width="22" height="22" viewBox="1.2 1.2 21.2 21.2" aria-hidden="true">
      <path fill="#4285F4" d="M3 20.5V3.5c0-.6.3-1.1.8-1.4L14 12 3.8 21.9c-.5-.3-.8-.8-.8-1.4z" />
      <path fill="#34A853" d="M16.7 15.1 14 12.4l-10.2 9.5c.5.5 1.3.6 2 .1l10.9-6.9z" />
      <path fill="#FBBC04" d="M20.1 10.8 16.7 8.9 14 11.6l2.7 2.7 3.4-2c.7-.4.7-1.4 0-1.5z" />
      <path fill="#EA4335" d="M16.7 8.9 5.8 2.1c-.7-.5-1.5-.4-2 .1L14 11.6l2.7-2.7z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c.7-1 1-2 1-2.1-.1 0-1.9-.7-1.9-2.9zM14.7 6.2c.6-.8 1.1-1.9.9-3-1 .1-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.3z" />
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
                <div className="project__stores">
                  <a className="btn btn--teal" href={project.link} target="_blank" rel="noreferrer">
                    <PlayIcon />
                    Google Play
                  </a>
                  {project.appStore && (
                    <a className="btn btn--ghost" href={project.appStore} target="_blank" rel="noreferrer">
                      <AppleIcon />
                      App Store
                    </a>
                  )}
                </div>
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
