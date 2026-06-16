import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Reveal from "../components/Reveal.jsx";
import products, { categories } from "../data/products.js";

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Our Products</h1>
          <p className="page-header__subtitle">
            Browse our full range of laptops, smartphones, accessories and smart
            devices.
          </p>
        </div>

        <div className="products-toolbar">
          <div className="search">
            <span className="search__icon">🔍</span>
            <input
              type="search"
              className="search__input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filters__btn ${
                  activeCategory === category ? "is-active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="products-count">
          Showing <strong>{filtered.length}</strong> of {products.length} products
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid--products">
            {filtered.map((product, i) => (
              <Reveal key={product.id} direction="up" delay={(i % 4) * 90}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state__icon">🔍</span>
            <h3>No products found</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
