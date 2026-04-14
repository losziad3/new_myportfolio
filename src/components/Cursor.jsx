import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    let animId;
    const tick = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.13;
      p.ry += (p.my - p.ry) * 0.13;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${p.mx}px, ${p.my}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${p.rx}px, ${p.ry}px) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(tick);
    };
    tick();

    const onEnter = () => {
      ringRef.current?.classList.add("cursor-ring--hover");
      dotRef.current?.classList.add("cursor-dot--hover");
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("cursor-ring--hover");
      dotRef.current?.classList.remove("cursor-dot--hover");
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

  if (window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
