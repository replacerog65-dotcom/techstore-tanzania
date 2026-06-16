import useTilt from "../hooks/useTilt.js";

// A single customer-benefit card with a 3D tilt-on-hover effect.
export default function BenefitCard({ icon, title, text }) {
  const tiltRef = useTilt({ max: 6, scale: 1.02 });

  return (
    <div className="benefit benefit--tilt" ref={tiltRef}>
      <span className="benefit__icon">{icon}</span>
      <h3 className="benefit__title">{title}</h3>
      <p className="benefit__text">{text}</p>
    </div>
  );
}
