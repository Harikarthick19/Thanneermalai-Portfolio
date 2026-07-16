"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .cursor-pointer, .group"
      );
      
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted) return null;

  return (
    <>
      {isVisible && (
        <div className="hidden lg:block">
          {/* Outer Gaming Reticle / Crosshair */}
          <motion.div
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
            className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 pointer-events-none z-[9999] flex items-center justify-center"
            animate={{
              scale: clicked ? 0.8 : hovered ? 1.4 : 1,
              rotate: hovered ? 135 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* The outer ring */}
            <div className={`w-full h-full rounded-full border-1.5 relative transition-colors duration-300 ${
              hovered ? "border-accent bg-accent/10 shadow-[0_0_12px_rgba(255,77,28,0.5)]" : "border-ink"
            }`}>
              {/* Tactical Crosshair Tick Marks */}
              <span className={`absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-ink"}`} />
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-ink"}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-ink"}`} />
              <span className={`absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-1.5 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-ink"}`} />
            </div>
          </motion.div>

          {/* Inner Laser Dot */}
          <motion.div
            style={{
              translateX: cursorX,
              translateY: cursorY,
            }}
            className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full pointer-events-none z-[10000] bg-accent shadow-[0_0_6px_#FF4D1C]"
            animate={{
              scale: clicked ? 0.5 : hovered ? 1.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          />
        </div>
      )}
    </>
  );
}
