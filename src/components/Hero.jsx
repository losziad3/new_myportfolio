import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { personal, stats, links } from "../data/data";
import "./Hero.css";

const ROLES = [
  "Flutter Developer",
  "Mobile Architect",
  "Clean Code Advocate",
  "Flutter Instructor",
];

function useTypewriter(words, speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
      }, deleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);
  const canvasRef = useRef(null);

  // Particle canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,195,247,${p.alpha})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79,195,247,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__content container">
        <div className="hero__left">
          <motion.div className="hero__tag" {...fadeUp(0.1)}>
            <span className="hero__tag-dot" />
            Available for Opportunities
          </motion.div>

          <motion.h1 className="hero__name" {...fadeUp(0.2)}>
            Ziad<br />
            <span className="hero__name-accent">Ayman.</span>
          </motion.h1>

          <motion.div className="hero__role" {...fadeUp(0.3)}>
            <span className="hero__role-text">{role}</span>
            <span className="hero__cursor">|</span>
          </motion.div>

          <motion.p className="hero__desc" {...fadeUp(0.4)}>
            {personal.tagline}
          </motion.p>

          <motion.div className="hero__ctas" {...fadeUp(0.5)}>
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href="#contact" className="btn btn--outline">Get in Touch</a>
            <a
              href={links.personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              <GithubIcon /> GitHub
            </a>
          </motion.div>

          <motion.div className="hero__stats" {...fadeUp(0.6)}>
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num">{s.number}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 0.88, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring" />
            <div className="hero__photo-ring hero__photo-ring--2" />
            <img
              src="/ziad.jpg"
              alt="Ziad Ayman Mohamed"
              className="hero__photo"
            />
            <div className="hero__photo-badge">
              <FlutterIcon />
              <span>Flutter Dev</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">scroll</span>
      </motion.div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function FlutterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
      <path d="M14 62L41 35h43L57 62z" fill="#4fc3f7" />
      <path d="M14 62l27 27h43L57 62z" fill="#4fc3f7" opacity="0.6" />
      <path d="M57 62l13 13-13 14h13l14-14z" fill="white" opacity="0.3" />
    </svg>
  );
}
