import { useEffect, useRef, useState } from "react";

/**
 * Counts up from 0 to `end` once it scrolls into view.
 * @param {number} end - final value to count to
 * @param {string} suffix - text appended after the number (e.g. "+", "k+")
 * @param {string} prefix - text shown before the number
 * @param {number} duration - animation length in ms
 */
export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1800,
}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let raf;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo for a fast-then-settle feel
          const eased =
            progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setValue(Math.round(end * eased));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
