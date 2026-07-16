"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  useEffect(() => {
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const attachHover = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, label, .cursor-pointer, .group")
        .forEach((el) => {
          el.addEventListener("mouseenter", () => setHovered(true));
          el.addEventListener("mouseleave", () => setHovered(false));
        });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ translateX: mouseX, translateY: mouseY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.85 : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 500, damping: 25 } }}
      >
        {/* Gaming Arrow Cursor SVG */}
        <svg
          width="28"
          height="36"
          viewBox="0 0 28 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: hovered
              ? "drop-shadow(0 0 6px #FF4D1C) drop-shadow(0 0 12px rgba(255,77,28,0.5))"
              : "drop-shadow(0 0 3px rgba(255,77,28,0.4)) drop-shadow(1px 1px 0px #0a0a0a)",
            transition: "filter 0.2s ease",
          }}
        >
          {/* Main arrow fill */}
          <path
            d="M2 2L2 28L9 21L14 34L18 32.5L13 19.5L23 19.5L2 2Z"
            fill={hovered ? "#FF4D1C" : "#0a0a0a"}
            style={{ transition: "fill 0.2s ease" }}
          />
          {/* Arrow outline / gaming edge */}
          <path
            d="M2 2L2 28L9 21L14 34L18 32.5L13 19.5L23 19.5L2 2Z"
            stroke="#FF4D1C"
            strokeWidth={hovered ? "2" : "1.5"}
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ transition: "stroke-width 0.2s ease" }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
