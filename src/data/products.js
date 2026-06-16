// Dummy product catalogue for TechStore Tanzania (frontend-only data).
// Prices are stored as plain numbers in Tanzanian Shillings (TZS).

const products = [
  {
    id: 1,
    name: "UltraBook Pro 14",
    category: "Laptops",
    price: 2850000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    description:
      "Slim 14-inch laptop with a 12-core processor, 16GB RAM and an all-day battery.",
    featured: true,
  },
  {
    id: 2,
    name: "PowerBook Air 13",
    category: "Laptops",
    price: 2150000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    description:
      "Featherlight everyday laptop with a crisp Retina-class display and fast SSD.",
    featured: false,
  },
  {
    id: 3,
    name: "Gaming Beast X15",
    category: "Laptops",
    price: 3950000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=600&q=80",
    description:
      "High-refresh 15-inch gaming laptop with dedicated graphics and RGB keyboard.",
    featured: false,
  },
  {
    id: 4,
    name: "Galaxy S Ultra",
    category: "Smartphones",
    price: 1980000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80",
    description:
      "Flagship smartphone with a 200MP camera, 5G and a stunning AMOLED screen.",
    featured: true,
  },
  {
    id: 5,
    name: "Pixel Vision 8",
    category: "Smartphones",
    price: 1450000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    description:
      "Pure software experience with the best computational photography around.",
    featured: false,
  },
  {
    id: 6,
    name: "Aurora 15 Pro",
    category: "Smartphones",
    price: 2650000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    description:
      "Premium titanium phone with a pro camera system and blazing-fast chip.",
    featured: false,
  },
  {
    id: 7,
    name: "SoundWave Pro Wireless Headphones",
    category: "Accessories",
    price: 385000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description:
      "Over-ear wireless headphones with active noise cancellation and 40h battery.",
    featured: true,
  },
  {
    id: 8,
    name: "Mechanical RGB Keyboard",
    category: "Accessories",
    price: 165000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    description:
      "Tactile hot-swappable mechanical keyboard with per-key RGB lighting.",
    featured: false,
  },
  {
    id: 9,
    name: "TurboCharge Power Bank 20000mAh",
    category: "Accessories",
    price: 95000,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=600&q=80",
    description:
      "Fast-charging 20000mAh power bank with dual USB-C ports and a digital display.",
    featured: false,
  },
  {
    id: 10,
    name: "AeroPulse Smart Watch",
    category: "Smart Devices",
    price: 420000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description:
      "Fitness-focused smart watch with GPS, heart-rate and sleep tracking.",
    featured: true,
  },
  {
    id: 11,
    name: "HomeHub Smart Speaker",
    category: "Smart Devices",
    price: 230000,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=600&q=80",
    description:
      "Voice-controlled smart speaker with rich 360° sound and home automation.",
    featured: false,
  },
  {
    id: 12,
    name: "VisionCam Security Camera",
    category: "Smart Devices",
    price: 175000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
    description:
      "1080p indoor security camera with night vision and motion alerts.",
    featured: false,
  },
];

export const categories = [
  "All",
  "Laptops",
  "Smartphones",
  "Accessories",
  "Smart Devices",
];

export default products;
