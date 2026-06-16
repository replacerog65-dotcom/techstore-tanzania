import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import ProductCard from "../components/ProductCard.jsx";
import BenefitCard from "../components/BenefitCard.jsx";
import Reveal from "../components/Reveal.jsx";
import Marquee from "../components/Marquee.jsx";
import products from "../data/products.js";

const brands = [
  "Apple",
  "Samsung",
  "Dell",
  "HP",
  "Sony",
  "Lenovo",
  "Asus",
  "Xiaomi",
  "JBL",
  "Anker",
];

const benefits = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    text: "Quick and reliable delivery to your doorstep anywhere in Tanzania.",
  },
  {
    icon: "✅",
    title: "Quality Products",
    text: "Only genuine, carefully selected electronics from trusted brands.",
  },
  {
    icon: "🔒",
    title: "Secure Shopping",
    text: "Shop with confidence — your data and payments are always protected.",
  },
];

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <Hero />

      <div className="brand-strip">
        <Marquee items={brands} />
      </div>

      <section className="section">
        <div className="container">
          <Reveal className="section__head" direction="up">
            <h2 className="section__title">Featured Products</h2>
            <p className="section__subtitle">
              Hand-picked favourites our customers love the most.
            </p>
          </Reveal>

          <div className="grid grid--products">
            {featured.map((product, i) => (
              <Reveal key={product.id} direction="up" delay={i * 120}>
                <ProductCard product={product} variant="featured" />
              </Reveal>
            ))}
          </div>

          <Reveal className="section__cta" direction="zoom">
            <Link to="/products" className="btn btn--primary">
              Browse All Products →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__head" direction="up">
            <h2 className="section__title">Why Shop With Us</h2>
            <p className="section__subtitle">
              The TechStore Tanzania promise on every order.
            </p>
          </Reveal>

          <div className="grid grid--benefits">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
                delay={i * 120}
              >
                <BenefitCard icon={b.icon} title={b.title} text={b.text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal direction="zoom">
            <div className="cta-banner">
              <div>
                <h2>Ready to upgrade your tech?</h2>
                <p>Explore our full catalogue and find your next favourite device.</p>
              </div>
              <Link to="/products" className="btn btn--accent">
                Shop Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
