import { motion } from "framer-motion";

export default function Quote({ text, author }) {
  return (
    <section className="quote" aria-label={`Quote by ${author}`}>
      <motion.figure
        className="container"
        initial={{ opacity: 0, y: 24, rotateX: 12 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 900 }}
      >
        <blockquote>{text}</blockquote>
        <figcaption>{author}</figcaption>
      </motion.figure>
    </section>
  );
}
