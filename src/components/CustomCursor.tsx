"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  // Raw cursor position (no lag)
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth lagging ball
  const ballX = useSpring(mouseX, { stiffness: 120, damping: 22, mass: 0.8 });
  const ballY = useSpring(mouseY, { stiffness: 120, damping: 22, mass: 0.8 });

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
      {/* === Large trailing ball (nukepc style) === */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          translateX: ballX,
          translateY: ballY,
          borderRadius: "50%",
          border: "2px solid rgba(255,77,28,0.6)",
          top: 0,
          left: 0,
        }}
        animate={{
          width: clicked ? 28 : hovered ? 60 : 40,
          height: clicked ? 28 : hovered ? 60 : 40,
          marginLeft: clicked ? -14 : hovered ? -30 : -20,
          marginTop: clicked ? -14 : hovered ? -30 : -20,
          background: hovered ? "rgba(255, 77, 28, 0.15)" : "transparent",
          borderColor: hovered ? "#FF4D1C" : "rgba(255,77,28,0.6)",
          boxShadow: hovered
            ? "0 0 24px 6px rgba(255,77,28,0.45), 0 0 6px 1px rgba(255,77,28,0.6)"
            : "0 0 12px 3px rgba(255,77,28,0.25)",
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />

      {/* === Small instant dot === */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          translateX: mouseX,
          translateY: mouseY,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          background: "#FF4D1C",
          boxShadow: "0 0 8px 3px rgba(255,77,28,0.8)",
          top: 0,
          left: 0,
        }}
        animate={{
          scale: hovered ? 0 : clicked ? 2 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
