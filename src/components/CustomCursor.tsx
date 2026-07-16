"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Instant dot position (no spring)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Lagging ring position (spring)
  const ringConfig = { damping: 28, stiffness: 180, mass: 0.8 };
  const ringX = useSpring(dotX, ringConfig);
  const ringY = useSpring(dotY, ringConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const updateHoverListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, label, .cursor-pointer, .group"
      );
      targets.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    updateHoverListeners();

    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [dotX, dotY, isVisible]);

  if (!mounted) return null;

  return (
    <>
      {isVisible && (
        <div className="hidden lg:block">

          {/* Outer trailing ring — large, glowing, lagging behind */}
          <motion.div
            style={{ translateX: ringX, translateY: ringY }}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            animate={{
              width: hovered ? 56 : clicked ? 28 : 38,
              height: hovered ? 56 : clicked ? 28 : 38,
              marginLeft: hovered ? -28 : clicked ? -14 : -19,
              marginTop: hovered ? -28 : clicked ? -14 : -19,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                border: "1.5px solid #FF4D1C",
                boxShadow: hovered
                  ? "0 0 18px 4px rgba(255,77,28,0.55), inset 0 0 10px rgba(255,77,28,0.15)"
                  : "0 0 10px 2px rgba(255,77,28,0.35)",
                background: hovered ? "rgba(255,77,28,0.06)" : "transparent",
                transition: "box-shadow 0.25s, background 0.25s",
              }}
            />
          </motion.div>

          {/* Inner dot — snaps instantly, solid neon */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
            style={{
              translateX: dotX,
              translateY: dotY,
              backgroundColor: "#FF4D1C",
              boxShadow: "0 0 8px 2px rgba(255,77,28,0.7)",
              width: 8,
              height: 8,
              marginLeft: -4,
              marginTop: -4,
            }}
            animate={{
              scale: hovered ? 0 : clicked ? 1.8 : 1,
              opacity: hovered ? 0 : 1,
            }}
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
          />

        </div>
      )}
    </>
  );
}
