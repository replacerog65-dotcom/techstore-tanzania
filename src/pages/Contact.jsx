import { useState } from "react";
import Reveal from "../components/Reveal.jsx";

const faqs = [
  {
    q: "Do you deliver across all of Tanzania?",
    a: "Yes! We deliver to all major towns and cities nationwide, with fast delivery to Dodoma, Dar es Salaam, Arusha and Mwanza.",
  },
  {
    q: "What is your return policy?",
    a: "Products can be returned within 7 days of delivery if they are unused and in their original packaging.",
  },
  {
    q: "Are your products genuine?",
    a: "Absolutely. All our electronics are 100% genuine and come with a manufacturer's warranty.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, we'll send you a tracking link via SMS and email.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Frontend-only: just show a confirmation message.
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-header__title">Get in Touch</h1>
          <p className="page-header__subtitle">
            Have a question? We'd love to hear from you. Reach out and our team
            will respond shortly.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact information */}
          <Reveal className="contact-info" direction="left">
            <h2 className="contact-info__title">Contact Information</h2>
            <ul className="contact-info__list">
              <li>
                <span className="contact-info__icon">🏢</span>
                <div>
                  <strong>TechStore Tanzania</strong>
                  <p>Your trusted electronics partner</p>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Dodoma, Tanzania</p>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+255 712 345 678</p>
                </div>
              </li>
              <li>
                <span className="contact-info__icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>support@techstore.co.tz</p>
                </div>
              </li>
            </ul>

            <div className="business-hours">
              <h3>🕘 Business Hours</h3>
              <ul>
                <li><span>Monday – Friday</span><span>8:00 – 18:00</span></li>
                <li><span>Saturday</span><span>9:00 – 16:00</span></li>
                <li><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal className="contact-form-wrap" direction="right">
            <h2 className="contact-info__title">Send Us a Message</h2>
            {submitted && (
              <div className="form-success">
                ✓ Thanks for reaching out! We'll get back to you soon.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn--primary btn--block">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>

        {/* Map placeholder */}
        <Reveal className="map-placeholder" direction="zoom">
          <div className="map-placeholder__overlay">
            <span className="map-placeholder__icon">📍</span>
            <strong>TechStore Tanzania</strong>
            <span>Dodoma, Tanzania</span>
          </div>
        </Reveal>

        {/* FAQ */}
        <div className="faq">
          <div className="section__head">
            <h2 className="section__title">Frequently Asked Questions</h2>
          </div>
          <div className="faq__list">
            {faqs.map((item, index) => (
              <Reveal
                key={index}
                direction="up"
                delay={index * 80}
                className={`faq__item ${openFaq === index ? "is-open" : ""}`}
              >
                <button
                  className="faq__question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  aria-expanded={openFaq === index}
                >
                  {item.q}
                  <span className="faq__toggle">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p className="faq__answer">{item.a}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
