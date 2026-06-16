// Format a number as a Tanzanian Shilling price string, e.g. "TSh 2,850,000".
export function formatPrice(amount) {
  return "TSh " + Number(amount).toLocaleString("en-US");
}

// Fallback image used when a remote product photo fails to load.
export const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450">
      <rect width="100%" height="100%" fill="#e2e8f0"/>
      <text x="50%" y="50%" font-family="Inter, sans-serif" font-size="24"
        fill="#94a3b8" text-anchor="middle" dominant-baseline="middle">
        TechStore Tanzania
      </text>
    </svg>`
  );
