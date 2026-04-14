import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  let mx = 0, my = 0, rx = 0, ry = 0;

  useEffect(() => {
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    document.addEventListener("mousemove", onMove);

    let animId;
    const tick = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(tick);
    };
    tick();

    // Scale on hover
    const onEnter = () => {
      if (ringRef.current) ringRef.current.classList.add("cursor-ring--hover");
      if (dotRef.current) dotRef.current.classList.add("cursor-dot--hover");
    };
    const onLeave = () => {
      if (ringRef.current) ringRef.current.classList.remove("cursor-ring--hover");
      if (dotRef.current) dotRef.current.classList.remove("cursor-dot--hover");
    };

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Hide on mobile
  if (window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
