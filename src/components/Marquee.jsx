/**
 * A seamless, infinitely-scrolling marquee.
 * The items are rendered twice back-to-back so the loop has no visible seam.
 * @param {string[]} items - text items to scroll
 * @param {boolean} reverse - scroll right-to-left (default) or left-to-right
 */
export default function Marquee({ items, reverse = false }) {
  const track = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`}>
        {track.map((item, i) => (
          <span className="marquee__item" key={i}>
            <span className="marquee__dot">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
