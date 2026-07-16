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

  // Smooth trailing spring settings
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
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
          {/* Gaming HUD Crosshair Trailing Ring */}
          <motion.div
            style={{
              translateX: cursorXSpring,
              translateY: cursorYSpring,
            }}
            className="fixed top-0 left-0 w-7 h-7 -ml-3.5 -mt-3.5 pointer-events-none z-[9999] flex items-center justify-center"
            animate={{
              scale: clicked ? 0.75 : hovered ? 1.5 : 1,
              rotate: hovered ? 90 : 0,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            {/* The outer ring with glowing gaming HUD theme */}
            <div className={`w-full h-full rounded-full border-1.5 relative transition-all duration-300 ${
              hovered 
                ? "border-accent bg-accent/5 shadow-[0_0_12px_rgba(255,77,28,0.6)]" 
                : "border-accent/60 bg-transparent shadow-[0_0_6px_rgba(255,77,28,0.2)]"
            }`}>
              {/* Tactical Crosshair Tick Marks */}
              <span className={`absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-accent/70"}`} />
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-1 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-accent/70"}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-1 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-accent/70"}`} />
              <span className={`absolute right-0 top-1/2 -translate-y-1/2 h-0.5 w-1 transition-colors duration-300 ${hovered ? "bg-accent" : "bg-accent/70"}`} />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
