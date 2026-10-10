import { links, personal } from "../data/data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <strong>ZA</strong>
        <p>
          {personal.fullName}
          <span>
            {personal.role} · {personal.location}
          </span>
        </p>
        <div className="footer__links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  );
}
