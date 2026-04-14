
import { motion } from "framer-motion";
import { projects } from "../data/data";
import "./Projects.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ── Phone mockup with 4 mini screen cards ── */
function AppPreview({ project }) {
  const { accent, bg, icon, screens, name } = project;
  return (
    <div className="app-preview" style={{ "--app-accent": accent, "--app-bg": bg }}>
      {/* Phone frame */}
      <div className="phone-frame">
        {/* Status bar */}
        <div className="phone-status">
          <span className="phone-time">9:41</span>
          <div className="phone-icons">
            <svg width="10" height="10" viewBox="0 0 24 24" fill={accent}><path d="M1 6l11 11L23 6" stroke={accent} strokeWidth="2.5" fill="none"/></svg>
            <svg width="12" height="10" viewBox="0 0 24 16" fill={accent}><rect x="0" y="4" width="5" height="12" rx="1"/><rect x="7" y="2" width="5" height="14" rx="1"/><rect x="14" y="0" width="5" height="16" rx="1"/><rect x="21" y="5" width="2" height="8" rx="1" opacity="0.4"/></svg>
          </div>
        </div>

        {/* App header */}
        <div className="phone-header" style={{ borderBottom: `1px solid ${accent}22` }}>
          <span className="phone-app-icon">{icon}</span>
          <span className="phone-app-name" style={{ color: accent }}>{name}</span>
        </div>

        {/* Screen grid — 4 mini cards */}
        <div className="phone-screens">
          {screens.map((label, i) => (
            <div
              key={i}
              className="phone-screen"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="screen-bar screen-bar--title" style={{ background: accent, opacity: 0.7, width: `${55 + i * 8}%` }} />
              <div className="screen-bar" style={{ background: accent, opacity: 0.25, width: "80%" }} />
              <div className="screen-bar" style={{ background: accent, opacity: 0.18, width: "60%" }} />
              <div className="screen-icon" style={{ background: `${accent}20`, border: `1px solid ${accent}30`, color: accent }}>
                {["💳","📍","💬","🔧","🗺️","📊","📋","📈"][i % 8]}
              </div>
              <span className="screen-label" style={{ color: accent }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="phone-nav" style={{ borderTop: `1px solid ${accent}22` }}>
          {["⊞","⊙","◎","☰"].map((ic, i) => (
            <span key={i} className="phone-nav-ic" style={{ color: i === 0 ? accent : undefined }}>{ic}</span>
          ))}
        </div>

        {/* Home indicator */}
        <div className="phone-home-bar" style={{ background: accent }} />
      </div>
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.33.18.7.24 1.07.18L14.48 12 4.25.06c-.37-.06-.74 0-1.07.18C2.49.65 2 1.46 2 2.4v19.2c0 .94.49 1.75 1.18 2.16zM16.54 9.54l2.1-1.21-10.08-5.83-2.22 2.22 10.2 4.82zM22.07 10.7l-2.9-1.67-2.38 2.38L19.17 13l2.9-1.67c.87-.5.87-1.63 0-2.13zM8.55 14.84L6.33 17.06l10.08 5.83 2.1-1.21-9.96-6.84z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div className="section-label" {...fadeUp(0)}>Work</motion.div>
        <motion.h2 className="section-title" {...fadeUp(0.08)}>
          Projects on<br />
          <span className="italic-accent">Play Store.</span>
        </motion.h2>

        <div className="projects__list">
          {projects.map((proj, i) => (
            <motion.article
              key={proj.id}
              className="proj-row"
              style={{ "--acc": proj.accent, "--bg": proj.bg }}
              {...fadeUp(0.06 + i * 0.07)}
            >
              {/* Left: info */}
              <div className="proj-row__info">
                <div className="proj-row__top">
                  <span className="proj-row__num">{proj.id}</span>
                  <span className="proj-row__category">{proj.category}</span>
                </div>
                <h3 className="proj-row__name">{proj.name}</h3>
                <p className="proj-row__desc">{proj.description}</p>
                <div className="proj-row__tags">
                  {proj.tags.map((t) => (
                    <span key={t} className="proj-row__tag">{t}</span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-row__btn"
                >
                  <PlayStoreIcon />
                  View on Play Store
                  <ExternalIcon />
                </a>
              </div>

              {/* Right: app preview */}
              <div className="proj-row__preview">
                <AppPreview project={proj} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
