import { useEffect, useRef } from "react";

/**
 * Adds a 3D tilt-on-hover effect to the returned ref element.
 * The element rotates toward the pointer and lifts slightly, then smoothly
 * resets when the pointer leaves. Disabled on touch and reduced-motion.
 *
 * @param {object} opts
 * @param {number} opts.max - maximum tilt angle in degrees (default 9)
 * @param {number} opts.scale - hover scale factor (default 1.03)
 * @returns {React.RefObject} ref to attach to the tilt target
 */
export default function useTilt({ max = 9, scale = 1.03 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;

    let raf = 0;
    let rx = 0;
    let ry = 0;
    let active = false;

    const apply = () => {
      node.style.transform = active
        ? `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`
        : "perspective(800px) rotateX(0) rotateY(0) scale(1)";
      raf = 0;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onMove = (e) => {
      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      ry = px * max * 2;
      rx = -py * max * 2;
      active = true;
      schedule();
    };
    const onLeave = () => {
      active = false;
      schedule();
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [max, scale]);

  return ref;
}
