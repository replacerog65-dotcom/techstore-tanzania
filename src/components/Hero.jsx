import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter.jsx";

export default function Hero() {
  const heroRef = useRef(null);
  const mediaRef = useRef(null);
  const badgeRef = useRef(null);

  // Parallax: the hero image reacts to mouse movement, while the image and
  // floating badge drift on scroll at different speeds for a layered effect.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = heroRef.current;
    const media = mediaRef.current;
    const badge = badgeRef.current;
    if (!hero || !media) return;

    let mx = 0;
    let my = 0;
    let scrollY = 0;
    let raf;

    const render = () => {
      // Combine scroll-based and mouse-based offsets.
      media.style.transform = `translate3d(${mx * 18}px, ${my * 18 + scrollY * 0.12}px, 0) rotateX(${-my * 4}deg) rotateY(${mx * 4}deg)`;
      if (badge) {
        badge.style.transform = `translate3d(${mx * -26}px, ${my * -26 - scrollY * 0.06}px, 0)`;
      }
      raf = 0;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onMouse = (e) => {
      const rect = hero.getBoundingClientRect();
      // Normalise pointer position to a -0.5 .. 0.5 range.
      mx = (e.clientX - rect.left) / rect.width - 0.5;
      my = (e.clientY - rect.top) / rect.height - 0.5;
      schedule();
    };
    const onLeave = () => {
      mx = 0;
      my = 0;
      schedule();
    };
    const onScroll = () => {
      scrollY = window.scrollY;
      schedule();
    };

    hero.addEventListener("mousemove", onMouse);
    hero.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      hero.removeEventListener("mousemove", onMouse);
      hero.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <span className="hero__blob hero__blob--1" aria-hidden="true" />
      <span className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">🔥 New arrivals every week</span>
          <h1 className="hero__title">
            Discover the Latest Technology at Affordable Prices
          </h1>
          <p className="hero__text">
            Welcome to <strong>TechStore Tanzania</strong> — your one-stop shop
            for premium laptops, smartphones, accessories and smart devices.
            Quality products, fast delivery across Tanzania, and prices you will
            love.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn btn--accent">
              Shop Now
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Contact Us
            </Link>
          </div>
          <div className="hero__stats">
            <div>
              <strong>
                <AnimatedCounter end={500} suffix="+" />
              </strong>
              <span>Products</span>
            </div>
            <div>
              <strong>
                <AnimatedCounter end={10} suffix="k+" />
              </strong>
              <span>Happy Customers</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>

        <div className="hero__media" ref={mediaRef}>
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80"
            alt="Latest electronics and gadgets"
            className="hero__image"
            loading="eager"
          />
          <div className="hero__media-badge" ref={badgeRef}>
            <span>Free Delivery</span>
            <small>on orders over TSh 500,000</small>
          </div>
        </div>
      </div>
    </section>
  );
}
