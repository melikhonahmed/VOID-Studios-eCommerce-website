import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovered ? 24 : 8));
      cursorY.set(e.clientY - (isHovered ? 24 : 8));
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Walk up the DOM tree slightly to catch nested icons inside buttons
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.closest(".group") !== null;

      if (isClickable && !isHovered) {
        setIsHovered(true);
        cursorX.set(e.clientX - 24);
        cursorY.set(e.clientY - 24);
      } else if (!isClickable && isHovered) {
        setIsHovered(false);
        cursorX.set(e.clientX - 8);
        cursorY.set(e.clientY - 8);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered, isVisible, cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0
      }}
      animate={{
        width: isHovered ? 48 : 16,
        height: isHovered ? 48 : 16
      }}
      transition={{ type: "tween", ease: "circOut", duration: 0.2 }}
    />
  );
}
