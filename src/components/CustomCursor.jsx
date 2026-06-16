import { useEffect, useRef, useState } from "react";

// A custom cursor: a small solid dot plus a larger ring that trails behind
// and grows when hovering interactive elements. Hidden on touch devices and
// when the user prefers reduced motion.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  // Decide whether the custom cursor should be used at all.
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isTouch && !reduced) setEnabled(true);
  }, []);

  // Wire up the animation only once the cursor elements are actually rendered.
  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    // Ring position is eased toward the pointer for a trailing effect.
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, input, textarea, .product-card, .filters__btn")) {
        ring.classList.add("cursor__ring--active");
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a, button, input, textarea, .product-card, .filters__btn")) {
        ring.classList.remove("cursor__ring--active");
      }
    };
    const onDown = () => ring.classList.add("cursor__ring--down");
    const onUp = () => ring.classList.remove("cursor__ring--down");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor__dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor__ring" aria-hidden="true" />
    </>
  );
}
