/* ==========================================================
   Asian Home Appliance — shared catalog, illustrations, chrome
   ========================================================== */

const peso = n => "₱" + Math.round(n).toLocaleString("en-PH");

/* ---------- Appliance illustrations (inline SVG, no image assets needed) ---------- */
const ART = {
  fridge: (c = "#d9dde3") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="32" y="6" width="56" height="106" rx="8" fill="${c}"/>
      <rect x="32" y="6" width="56" height="106" rx="8" fill="url(#gl)" opacity=".5"/>
      <line x1="32" y1="44" x2="88" y2="44" stroke="#00000022" stroke-width="2"/>
      <rect x="78" y="16" width="4" height="20" rx="2" fill="#00000040"/>
      <rect x="78" y="52" width="4" height="30" rx="2" fill="#00000040"/>
      <rect x="40" y="56" width="18" height="10" rx="2" fill="#1f6feb55"/>
      <rect x="36" y="112" width="8" height="4" rx="1" fill="#555"/><rect x="76" y="112" width="8" height="4" rx="1" fill="#555"/>
      <defs><linearGradient id="gl" x1="0" x2="1"><stop stop-color="#fff"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
    </svg>`,
  sbs: (c = "#3a3f47") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="18" y="6" width="84" height="106" rx="8" fill="${c}"/>
      <line x1="60" y1="6" x2="60" y2="112" stroke="#00000055" stroke-width="2"/>
      <rect x="52" y="34" width="4" height="40" rx="2" fill="#ffffff70"/><rect x="64" y="34" width="4" height="40" rx="2" fill="#ffffff70"/>
      <rect x="26" y="18" width="20" height="26" rx="3" fill="#0b0d10"/><rect x="29" y="22" width="14" height="4" rx="1" fill="#19c2ff"/>
      <rect x="18" y="6" width="42" height="106" rx="8" fill="url(#g2)" opacity=".35"/>
      <defs><linearGradient id="g2" x1="0" x2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
    </svg>`,
  tv: (c = "#121418") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="6" y="20" width="108" height="66" rx="4" fill="${c}"/>
      <rect x="10" y="24" width="100" height="58" rx="2" fill="url(#tvg)"/>
      <path d="M10 70 C 40 50, 70 80, 110 46 L110 82 L10 82Z" fill="#ffffff22"/>
      <circle cx="84" cy="40" r="10" fill="#ffd36e" opacity=".85"/>
      <path d="M44 86 L40 100 H80 L76 86" fill="#2a2d33"/><rect x="34" y="100" width="52" height="4" rx="2" fill="#2a2d33"/>
      <defs><linearGradient id="tvg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ff3b5c"/><stop offset=".5" stop-color="#7a3cff"/><stop offset="1" stop-color="#1fb6ff"/></linearGradient></defs>
    </svg>`,
  washer: (c = "#f2f3f5") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="20" y="8" width="80" height="104" rx="10" fill="${c}" stroke="#0000001a" stroke-width="2"/>
      <rect x="20" y="8" width="80" height="20" rx="10" fill="#00000010"/>
      <circle cx="34" cy="18" r="4" fill="#e30b0e"/><rect x="62" y="14" width="28" height="8" rx="2" fill="#1f2937"/>
      <circle cx="60" cy="68" r="30" fill="#c8ccd3"/><circle cx="60" cy="68" r="23" fill="#1f6feb" opacity=".35"/>
      <g class="spin" style="transform-origin:60px 68px"><path d="M45 72 Q60 56 75 72 Q60 84 45 72Z" fill="#ffffff90"/></g>
      <circle cx="60" cy="68" r="23" stroke="#fff" stroke-width="3" opacity=".6"/>
    </svg>`,
  aircon: (c = "#ffffff") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="6" y="34" width="108" height="40" rx="12" fill="${c}" stroke="#0000001a" stroke-width="2"/>
      <rect x="14" y="62" width="92" height="6" rx="3" fill="#00000018"/>
      <circle cx="98" cy="46" r="2.5" fill="#12a150"/>
      <path d="M24 82 q6 8 0 16 M44 82 q6 8 0 16 M64 82 q6 8 0 16 M84 82 q6 8 0 16" stroke="#1fb6ff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    </svg>`,
  window_ac: (c = "#eceef1") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="14" y="22" width="92" height="76" rx="8" fill="${c}" stroke="#0000001a" stroke-width="2"/>
      ${[0,1,2,3,4,5,6].map(i=>`<rect x="22" y="${32+i*7}" width="54" height="3" rx="1.5" fill="#00000026"/>`).join("")}
      <rect x="84" y="32" width="14" height="22" rx="3" fill="#1f2937"/><circle cx="91" cy="66" r="5" fill="#c8ccd3"/><circle cx="91" cy="82" r="5" fill="#c8ccd3"/>
    </svg>`,
  fan: (c = "#e30b0e") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <circle cx="60" cy="46" r="38" stroke="#c4c8cf" stroke-width="3"/>
      <g class="spin" style="transform-origin:60px 46px">
        <ellipse cx="60" cy="28" rx="10" ry="18" fill="${c}" opacity=".9"/>
        <ellipse cx="60" cy="28" rx="10" ry="18" fill="${c}" opacity=".9" transform="rotate(120 60 46)"/>
        <ellipse cx="60" cy="28" rx="10" ry="18" fill="${c}" opacity=".9" transform="rotate(240 60 46)"/>
      </g>
      <circle cx="60" cy="46" r="7" fill="#2a2d33"/>
      <rect x="57" y="84" width="6" height="22" fill="#9aa0aa"/><ellipse cx="60" cy="108" rx="24" ry="6" fill="#2a2d33"/>
    </svg>`,
  ricecooker: (c = "#ffffff") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <path d="M22 54 Q22 30 60 28 Q98 30 98 54Z" fill="${c}" stroke="#0000001a" stroke-width="2"/>
      <rect x="18" y="52" width="84" height="50" rx="16" fill="${c}" stroke="#0000001a" stroke-width="2"/>
      <rect x="50" y="22" width="20" height="8" rx="4" fill="#2a2d33"/>
      <rect x="40" y="66" width="40" height="18" rx="6" fill="#1f2937"/><circle cx="50" cy="75" r="3" fill="#e30b0e"/><circle cx="60" cy="75" r="3" fill="#ffb800"/>
      <path d="M48 16 q4 -6 0 -12 M60 18 q4 -6 0 -12 M72 16 q4 -6 0 -12" stroke="#c4c8cf" stroke-width="2.5" stroke-linecap="round" class="steam"/>
    </svg>`,
  microwave: (c = "#2a2d33") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="8" y="28" width="104" height="64" rx="8" fill="${c}"/>
      <rect x="16" y="36" width="66" height="48" rx="4" fill="#0b0d10"/>
      <rect x="16" y="36" width="66" height="48" rx="4" fill="#ffb80033"/>
      <rect x="88" y="38" width="18" height="10" rx="2" fill="#19c2ff"/>
      ${[0,1,2].map(r=>[0,1].map(c2=>`<rect x="${89+c2*9}" y="${54+r*9}" width="7" height="6" rx="1.5" fill="#ffffff55"/>`).join("")).join("")}
      <rect x="14" y="92" width="10" height="4" rx="1" fill="#555"/><rect x="96" y="92" width="10" height="4" rx="1" fill="#555"/>
    </svg>`,
  speaker: (c = "#1f2937") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="30" y="6" width="60" height="108" rx="12" fill="${c}"/>
      <circle cx="60" cy="36" r="16" fill="#0b0d10"/><circle cx="60" cy="36" r="7" fill="#3a3f47"/>
      <circle cx="60" cy="80" r="22" fill="#0b0d10"/><circle cx="60" cy="80" r="10" fill="#3a3f47"/>
      <circle cx="60" cy="80" r="22" stroke="#e30b0e" stroke-width="2" class="thump"/>
    </svg>`,
  stove: (c = "#1f2937") => `
    <svg class="art" viewBox="0 0 120 120" fill="none">
      <rect x="10" y="44" width="100" height="40" rx="8" fill="${c}"/>
      <ellipse cx="38" cy="56" rx="16" ry="6" fill="#4a4f5a"/><ellipse cx="82" cy="56" rx="16" ry="6" fill="#4a4f5a"/>
      <path d="M30 52 q8 -14 16 0 M74 52 q8 -14 16 0" fill="#1f6feb" opacity=".7" class="flame"/>
      <circle cx="38" cy="74" r="4" fill="#c4c8cf"/><circle cx="82" cy="74" r="4" fill="#c4c8cf"/>
    </svg>`,
};

/* Product visual: real photo when available, illustration as fallback */
function visual(p, cls = "") {
  if (!p.img) return ART[p.art](p.color);
  const fallback = encodeURIComponent(ART[p.art](p.color));
  return `<img class="art photo ${cls}" src="${p.img}" alt="${p.name.replace(/"/g, "&quot;")}" loading="lazy" decoding="async"
    onerror="this.outerHTML=decodeURIComponent('${fallback}')">`;
}

/* Category icons for nav tiles */
const CAT_ICON = {
  all: `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>`,
  Refrigerators: `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 9h12M9 5v2M9 12v4"/></svg>`,
  Televisions: `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  "Air Conditioners": `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><rect x="2" y="5" width="20" height="9" rx="3"/><path d="M6 18v2M12 18v3M18 18v2"/></svg>`,
  "Washing Machines": `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M8 6h.01M11 6h5"/></svg>`,
  Fans: `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="10" r="7"/><path d="M12 10l3-4M12 10l-4 1M12 10l1 4M12 17v4M8 21h8"/></svg>`,
  "Kitchen Appliances": `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><path d="M4 11h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M6 11a6 6 0 0 1 12 0M10 4h4"/></svg>`,
  Audio: `<svg viewBox="0 0 24 24" fill="none" stroke="#e30b0e" stroke-width="2" stroke-linecap="round"><rect x="6" y="2" width="12" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M12 6h.01"/></svg>`,
};

/* ---------- Catalog (sample data for the concept) ---------- */
const PRODUCTS = [
  // Real Asian Home Appliance items (names, models, prices, photos from asianhomeappliance.com).
  // was-prices, ratings, reviews, stock and tags are sample values for the concept.
  { id: 1, cat: "Refrigerators", brand: "Samsung", model: "RT22M4033UT/TC", name: "Samsung 8.4 cu.ft. Top Mount No Frost Two-Door Refrigerator", img: "images/products/rt22m4033ut-tc.png", art: "fridge", color: "#4a3f5c", price: 22895, was: 26995, rating: 4.8, reviews: 312, tags: ["sale", "free"], stock: 24 },
  { id: 2, cat: "Televisions", brand: "Toshiba", model: "58E300NS", name: "Toshiba 58\" UHD 4K Android TV", img: "images/products/58e300ns.jpg", art: "tv", color: "#121418", price: 22990, was: 29990, rating: 4.7, reviews: 528, tags: ["hot", "sale"], stock: 8 },
  { id: 3, cat: "Air Conditioners", brand: "Hitachi", model: "RAS/RAC15HTP", name: "Hitachi 1.5HP Wall-Mounted Inverter Split-Type Aircon", img: "images/products/ras-rac15htp.jpg", art: "aircon", color: "#ffffff", price: 38800, was: 45800, rating: 4.9, reviews: 204, tags: ["hot", "free"], stock: 15 },
  { id: 4, cat: "Washing Machines", brand: "Whirlpool", model: "WFRB1054BHG", name: "Whirlpool 10.5kg Front Load Washing Machine", img: "images/products/wfrb1054bhg.jpg", art: "washer", color: "#9a958d", price: 43998, was: 51998, rating: 4.6, reviews: 187, tags: ["sale", "free"], stock: 12 },
  { id: 5, cat: "Fans", brand: "Asahi", model: "XF6078", name: "Asahi 16\" Gold Stand Fan", img: "images/products/xf6078.jpg", art: "fan", color: "#d4b483", price: 4255, was: 4995, rating: 4.5, reviews: 961, tags: ["hot"], stock: 120 },
  { id: 6, cat: "Kitchen Appliances", brand: "Beko", model: "CSG42010GB", name: "Beko 4-Burner Gas Range with Gas Oven & Grill", img: "images/products/csg42010gb.png", art: "stove", color: "#1f2937", price: 11990, was: 14490, rating: 4.4, reviews: 408, tags: ["new"], stock: 18 },
  { id: 7, cat: "Refrigerators", brand: "Whirlpool", model: "6WBI160U", name: "Whirlpool 16 cu.ft. Two-Door Inverter Refrigerator", img: "images/products/6wbi160u.jpg", art: "fridge", color: "#b8bcc2", price: 48998, was: 56998, rating: 4.9, reviews: 96, tags: ["new", "free"], stock: 4 },
  { id: 8, cat: "Kitchen Appliances", brand: "Whirlpool", model: "AKR621 IX", name: "Whirlpool Slim Stainless Steel Range Hood", img: "images/products/akr621-ix.jpg", art: "microwave", color: "#b8bcc2", price: 8298, was: 9998, rating: 4.5, reviews: 233, tags: ["sale"], stock: 41 },
  { id: 9, cat: "Televisions", brand: "Skyworth", model: "55SUF6400", name: "Skyworth 55\" 4K Ultra HD Google TV", img: "images/products/55suf6400.jpg", art: "tv", color: "#1a1d22", price: 19990, was: 24990, rating: 4.8, reviews: 341, tags: ["sale", "free"], stock: 11 },
  { id: 10, cat: "Air Conditioners", brand: "Everest", model: "ETM10WDR3-HF", name: "Everest 1.0HP Window-Type Aircon", img: "images/products/etm10wdr3-hf.jpg", art: "window_ac", color: "#eceef1", price: 12395, was: 14495, rating: 4.6, reviews: 517, tags: ["hot"], stock: 27 },
  { id: 11, cat: "Audio", brand: "Sony", model: "MHC-M40D", name: "Sony MHC-M40D Hi-Fi Component System with DVD", img: "images/products/mhcm40d.jpg", art: "speaker", color: "#1f2937", price: 14999, was: 17999, rating: 4.7, reviews: 158, tags: ["sale"], stock: 13 },
  { id: 12, cat: "Washing Machines", brand: "LG", model: "P1400RT", name: "LG 14kg Twin Tub Washing Machine", img: "images/products/p1400rt.png", art: "washer", color: "#f2f3f5", price: 18995, was: 21995, rating: 4.8, reviews: 112, tags: ["new"], stock: 9 },
  { id: 13, cat: "Kitchen Appliances", brand: "La Germania", model: "P905ILNE15", name: "La Germania 90cm Built-In Cooking Hob", img: "images/products/p905ilne15.jpg", art: "stove", color: "#1f2937", price: 66950, was: 74950, rating: 4.3, reviews: 76, tags: ["new", "free"], stock: 5 },
  { id: 14, cat: "Fans", brand: "Camel", model: "CSF1601C", name: "Camel 16\" Stand Fan", img: "images/products/csf1601c.jpg", art: "fan", color: "#1fa3a3", price: 2290, was: 2290, rating: 4.2, reviews: 88, tags: [], stock: 76 },
  { id: 15, cat: "Refrigerators", brand: "Sharp", model: "SJ-FTS09AVSL", name: "Sharp 9 cu.ft. Two-Door Refrigerator", img: "images/products/sjfts09avsl.jpg", art: "fridge", color: "#8f949b", price: 22798, was: 25998, rating: 4.6, reviews: 143, tags: ["free"], stock: 18 },
  { id: 16, cat: "Air Conditioners", brand: "Beko", model: "BPVOW120", name: "Beko 1.5HP Window-Type Aircon", img: "images/products/bpvow120.jpg", art: "window_ac", color: "#f4f6f8", price: 18990, was: 21990, rating: 4.7, reviews: 77, tags: ["new", "free"], stock: 6 },
  { id: 17, cat: "Air Conditioners", brand: "Hitachi", model: "RA10HVQ", name: "Hitachi 1.0HP Window-Type Inverter Aircon", img: "images/products/ra10hvq.jpg", art: "window_ac", color: "#f4f6f8", price: 34500, was: 39500, rating: 4.4, reviews: 690, tags: ["hot", "sale"], stock: 47 },
  { id: 18, cat: "Washing Machines", brand: "Panasonic", model: "NA-S7018BAQ", name: "Panasonic 7kg Single Tub Washing Machine", img: "images/products/nas7018baq.png", art: "washer", color: "#e8f1ff", price: 5999, was: 7499, rating: 4.6, reviews: 822, tags: ["hot", "sale"], stock: 3 },
  { id: 19, cat: "Audio", brand: "Platinum", model: "KS5", name: "Platinum KS5 DVD Karaoke Player", img: "images/products/ks5.jpg", art: "speaker", color: "#1f2937", price: 2695, was: 2695, rating: 4.8, reviews: 64, tags: ["new"], stock: 22 },
  { id: 20, cat: "Refrigerators", brand: "Beko", model: "RCNT340E50VZP", name: "Beko 11.4 cu.ft. (323L) Bottom Freezer Refrigerator", img: "images/products/rcnt340e50vzp.png", art: "fridge", color: "#9aa0a8", price: 25890, was: 29990, rating: 4.3, reviews: 455, tags: ["sale"], stock: 38 },
];

const BRAND_LOGO = {
  Samsung: "samsung.jpeg", LG: "lg.png", Hitachi: "hitachi.png", Whirlpool: "whirlpool.png", Toshiba: "toshiba.png",
  Sharp: "sharp.png", Panasonic: "panasonic.png", Beko: "beko.png", Sony: "sony.png", Skyworth: "skyworth.jpg",
  Asahi: "asahi.png", Everest: "everest.png", "La Germania": "la-germania.png", Camel: "camel.png", Platinum: "platinum.png",
};

const CATEGORIES = ["Refrigerators", "Televisions", "Air Conditioners", "Washing Machines", "Fans", "Kitchen Appliances", "Audio"];

const discountOf = p => Math.round((1 - p.price / p.was) * 100);

const STAR = `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z"/></svg>`;
function starsHTML(r) {
  let s = "";
  for (let i = 1; i <= 5; i++) s += `<span class="${r >= i - 0.25 ? "" : "off"}">${STAR}</span>`;
  return `<span class="stars">${s}</span>`;
}

const ICON = {
  heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  eye: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
  cart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,
};

/* Product card (used on PLP grid and PDP related rail) */
function cardHTML(p, i = 0) {
  const d = discountOf(p);
  const tags = p.tags.map(t => `<span class="tag ${t}">${{ sale: "Sale", hot: "Hot Item", new: "New", free: "Free Delivery" }[t]}</span>`).join("");
  return `
  <article class="card" style="--i:${i}" data-id="${p.id}">
    <a class="card-media" href="product.html?id=${p.id}" aria-label="${p.name}">
      <div class="card-badges">${tags}</div>
      ${d > 0 ? `<div class="discount-burst">-${d}%<small>OFF</small></div>` : ""}
      ${visual(p)}
      ${p.stock < 10 ? `<span class="stock low"><span class="dot"></span>Only ${p.stock} left</span>` : ""}
    </a>
    <div class="card-actions">
      <button class="act" data-quick="${p.id}" aria-label="Quick view">${ICON.eye}</button>
    </div>
    <div class="card-body">
      <span class="card-brand">${p.brand}</span>
      <a class="card-title" href="product.html?id=${p.id}">${p.name}</a>
      <div class="card-rating">${starsHTML(p.rating)} <span>${p.rating} (${p.reviews})</span></div>
      <p class="card-desc">Genuine ${p.brand} unit with official warranty. Available for pickup at any Asian Home Appliance branch or delivered to your door.</p>
      <div class="price-row"><span class="price">${peso(p.price)}</span>${d > 0 ? `<span class="was">${peso(p.was)}</span>` : ""}</div>
      <div class="installment">As low as <b>${peso(p.price / 12)}/mo</b> · 0% for 12 mos</div>
      <div class="card-foot">
        <button class="add-btn" data-add="${p.id}">${ICON.cart}<span>Add to Cart</span></button>
      </div>
    </div>
  </article>`;
}

/* ---------- Persistent cart / wishlist (per-browser convenience) ---------- */
function store(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }
const cartItems = () => { const v = store("aha-cart-items", []); return Array.isArray(v) ? v : []; };
const cartCount = () => cartItems().reduce((n, x) => n + x.qty, 0);
const FREE_DELIVERY = 10000;
const wishlist = () => store("aha-wish", []);

/* Promo bar under the header (Shopee-style campaign links) */
const PI = d => `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const PROMO_NAV = [
  ["index.html?tag=hot", "Hot Deals", `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2s5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 1-3s0 3 2 3c0-4 2-10 2-10z"/></svg>`, "hot"],
  ["index.html?tag=sale", "Flash Sale", PI('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>')],
  ["index.html?tag=free", "Free Delivery", PI('<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>')],
  ["#", "Coin Rewards", PI('<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.8-2.5 2s1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6.5v1.5M12 16v1.5"/>')],
  ["#", "Vouchers", PI('<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4z"/><path d="M9 9h.01M15 15h.01M15 9l-6 6"/>')],
  ["#", "0% Installment", PI('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>')],
  ["#", "Buy Now, Pay Later", PI('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>')],
  ["#", "Bundle Deals", PI('<path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7S10 2 7.5 3 9 7 12 7zM12 7s2-5 4.5-4S15 7 12 7z"/>')],
  ["index.html?tag=new", "New Arrivals", PI('<path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>')],
  ["#", "Store Pickup", PI('<path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6"/>')],
];

/* ---------- Shared header + footer ---------- */
function renderChrome(activeCat) {
  const promos = [
    "<b>0% Installment</b> up to 24 months with BDO, BPI & Metrobank cards",
    "<b>FREE Delivery</b> within Metro Manila for orders ₱10,000 and up",
    "<b>Buy Now, Pay Later</b> with Home Credit, BillEase & Atome",
    "<b>Pick up in-store</b> at any of our branches nationwide",
    "<b>100% Genuine</b> products with official brand warranty",
  ].map(t => `<span>✦ ${t}</span>`).join("");

  document.getElementById("chrome-top").innerHTML = `
  <div class="promo-strip"><div class="promo-track">${promos}${promos}</div></div>
  <header class="header" id="header">
    <div class="container header-main">
      <a href="index.html" class="logo" aria-label="Asian Home Appliance home">
        <span class="logo-mark">A</span>
        <span class="logo-text"><strong>ASIAN</strong><small>Home Appliance</small></span>
      </a>
      <form class="search" role="search" id="searchForm">
        <div class="dd search-cat" id="searchCat">
          <button class="dd-btn" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Search category">
            <span class="dd-label">All</span>
            <svg class="dd-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <ul class="dd-menu" role="listbox" tabindex="-1" aria-label="Search category">
            ${[["", "All Categories", "all"], ...CATEGORIES.map(c => [c, c, c])].map(([v, l, ic]) =>
              `<li role="option" data-value="${v}" aria-selected="${v === (activeCat || "")}"><span class="si">${CAT_ICON[ic]}</span>${l}</li>`).join("")}
          </ul>
        </div>
        <input name="q" id="searchInput" autocomplete="off" role="combobox" aria-expanded="false" aria-controls="suggest" aria-autocomplete="list" type="search" placeholder="Search refrigerators, aircons, TVs…" value="${new URLSearchParams(location.search).get("q") || ""}">
        <div class="suggest" id="suggest" role="listbox" aria-label="Search suggestions"></div>
        <button type="submit"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>Search</button>
      </form>
      <div class="header-actions">
        <a class="icon-btn" href="#"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-6.5-8-13a8 8 0 0 1 16 0c0 6.5-8 13-8 13z"/><circle cx="12" cy="9" r="3"/></svg><span class="lbl"><small>Find a</small>Branch</span></a>
        <span class="ha-sep" aria-hidden="true"></span>
        <a class="icon-btn icon-only" href="#" id="cartIcon" aria-label="My Cart"><span class="ib"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg><span class="badge-count" id="cartCount">${cartCount()}</span></span></a>
        <div class="acct">
          <button class="icon-btn icon-only" type="button" aria-label="Account" aria-haspopup="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></button>
          <div class="acct-menu">
            <p class="acct-hello">Hello! Welcome to Asian Home Appliance</p>
            <div class="acct-cta"><a href="#" class="acct-login">Login</a><a href="#" class="acct-signup">Sign Up</a></div>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Track My Order</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="cat-nav" aria-label="Promos"><ul class="container">
      ${PROMO_NAV.map(([href, label, icon, cls]) => {
        const tag = new URLSearchParams(href.split("?")[1] || "").get("tag");
        const on = !!tag && new URLSearchParams(location.search).get("tag") === tag;
        return `<li><a href="${href}" class="${cls || ""}${on ? " active" : ""}"${tag ? ` data-tag="${tag}"` : ""}>${icon}${label}</a></li>`;
      }).join("")}
    </ul></nav>
  </header>`;

  document.getElementById("chrome-bottom").innerHTML = `
  <section class="container trust reveal">
    <div><span class="ti"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="6" width="15" height="11" rx="1"/><path d="M16 9h4l3 4v4h-7"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg></span><span><b>Free Delivery</b><small>Metro Manila, ₱10k+ orders</small></span></div>
    <div><span class="ti"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg></span><span><b>0% Installment</b><small>Up to 24 months</small></span></div>
    <div><span class="ti"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></span><span><b>Official Warranty</b><small>100% genuine brands</small></span></div>
    <div><span class="ti"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l1-5h16l1 5M3 9v11h18V9M3 9h18M9 20v-6h6v6"/></svg></span><span><b>Store Pickup</b><small>Branches nationwide</small></span></div>
  </section>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <a class="logo" href="index.html"><span class="logo-mark">A</span><span class="logo-text"><strong>ASIAN</strong><small>Home Appliance</small></span></a>
        <p>Your trusted home appliance store — quality brands, friendly prices and flexible payment terms for every Filipino home.</p>
        <p class="pay-label">We accept</p>
        <div class="pay-icons">
          <span class="pay visa" title="Visa"><b>VISA</b></span>
          <span class="pay mc" title="Mastercard"><i></i><i></i></span>
          <span class="pay gcash" title="GCash"><em>G</em>Cash</span>
          <span class="pay maya" title="Maya">maya</span>
          <span class="pay bdo" title="BDO">BDO</span>
          <span class="pay hc" title="Home Credit">HOME<br>CREDIT</span>
        </div>
      </div>
      <div><h4>Shop</h4><ul>${CATEGORIES.slice(0, 5).map(c => `<li><a href="index.html?cat=${encodeURIComponent(c)}">${c}</a></li>`).join("")}</ul></div>
      <div><h4>Customer Care</h4><ul><li><a href="#">Customer Inquiry</a></li><li><a href="#">Track My Order</a></li><li><a href="#">Installment Guide</a></li><li><a href="#">Warranty & Returns</a></li><li><a href="#">FAQs</a></li></ul></div>
      <div><h4>Company</h4><ul><li><a href="#">About Us</a></li><li><a href="#">Store Locator</a></li><li><a href="#">Careers</a></li><li><a href="#">Contact Us</a></li></ul></div>
      <div><h4>Get exclusive deals</h4><p>Be first to know about flash sales and new arrivals.</p>
        <form class="newsletter" onsubmit="event.preventDefault(); toast('Thanks for subscribing!'); this.reset();"><input type="email" required placeholder="Your email address"><button>Join</button></form>
      </div>
    </div>
    <div class="container footer-bottom"><span>© 2026 Asian Home Appliance. All rights reserved.</span><span>Privacy Policy · Terms of Use</span></div>
  </footer>
  <button class="to-top" id="toTop" aria-label="Back to top"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg></button>
  <div class="toast" id="toast"><span class="ok">${ICON.check}</span><span id="toastMsg"></span></div>

  <div class="overlay" id="overlay"></div>

  <aside class="cart-drawer" id="cartDrawer" role="dialog" aria-modal="true" aria-labelledby="cartTitle" aria-hidden="true">
    <header class="cd-head">
      <h3 id="cartTitle">My Cart <span id="cdCount"></span></h3>
      <button class="x-btn" data-close aria-label="Close cart"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    </header>
    <div class="cd-free" id="cdFree"></div>
    <div class="cd-body" id="cdBody"></div>
    <footer class="cd-foot" id="cdFoot"></footer>
  </aside>

  <div class="qv" id="quickView" role="dialog" aria-modal="true" aria-label="Quick view" aria-hidden="true">
    <div class="qv-panel" id="qvPanel"></div>
  </div>`;

  /* Search category dropdown + submit (searches within the chosen category) */
  let searchCat = activeCat || "";
  const catDD = dropdown(document.getElementById("searchCat"), v => { searchCat = v; });
  if (activeCat) catDD.setLabel(activeCat);
  const form = document.getElementById("searchForm"), input = document.getElementById("searchInput"), box = document.getElementById("suggest");
  let active = -1;
  const go = (q, cat = searchCat) => {
    const params = new URLSearchParams();
    if (cat) params.set("cat", cat);
    if (q.trim()) params.set("q", q.trim());
    location.href = "index.html" + (params.toString() ? "?" + params : "");
  };
  const mark = (text, q) => q ? text.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig"), "<mark>$1</mark>") : text;
  function renderSuggest() {
    const q = input.value.trim().toLowerCase();
    active = -1;
    if (!q) {
      box.innerHTML = `<div class="sg-label">Popular searches</div>
        <div class="sg-chips">${["Inverter aircon", "Smart TV", "Refrigerator", "Washing machine", "Stand fan"].map(t => `<button type="button" data-q="${t}">${t}</button>`).join("")}</div>`;
    } else {
      const words = q.split(/\s+/);
      const hits = PRODUCTS.filter(p => (!searchCat || p.cat === searchCat) && words.every(w => `${p.name} ${p.brand} ${p.cat} ${p.model}`.toLowerCase().includes(w))).slice(0, 6);
      box.innerHTML = hits.length ? `<div class="sg-label">Products</div>` + hits.map(p => `
        <a class="sg-item" role="option" href="product.html?id=${p.id}">
          <span class="sg-img">${visual(p)}</span>
          <span class="sg-text"><b>${mark(p.name, words[0])}</b><small>${p.cat} · ${p.brand}</small></span>
          <span class="sg-price">${peso(p.price)}</span>
        </a>`).join("") + `<button type="button" class="sg-all" data-all>See all results for “${input.value.trim()}” →</button>`
        : `<div class="sg-empty">No matches for “${input.value.trim()}”. Try “aircon” or “TV”.</div>`;
    }
    box.classList.add("show"); input.setAttribute("aria-expanded", "true");
  }
  const hideSuggest = () => { box.classList.remove("show"); input.setAttribute("aria-expanded", "false"); };
  input.addEventListener("focus", renderSuggest);
  input.addEventListener("input", renderSuggest);
  input.addEventListener("keydown", e => {
    const items = [...box.querySelectorAll(".sg-item")];
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      if (!items.length) return;
      e.preventDefault();
      active = (active + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
      items.forEach((x, i) => x.classList.toggle("active", i === active));
    } else if (e.key === "Enter" && active > -1 && items[active]) {
      e.preventDefault(); location.href = items[active].href;
    } else if (e.key === "Escape") hideSuggest();
  });
  box.addEventListener("mousedown", e => e.preventDefault()); // keep focus in the input while clicking
  box.addEventListener("click", e => {
    const chip = e.target.closest("[data-q]");
    if (chip) { input.value = chip.dataset.q; renderSuggest(); input.focus(); }
    if (e.target.closest("[data-all]")) go(input.value);
  });
  document.addEventListener("click", e => { if (!form.contains(e.target)) hideSuggest(); });
  form.onsubmit = e => { e.preventDefault(); go(input.value); };

  document.getElementById("cartIcon").addEventListener("click", e => { e.preventDefault(); openCart(); });
  document.getElementById("overlay").addEventListener("click", closeOverlays);
  document.getElementById("quickView").addEventListener("click", e => { if (e.target.id === "quickView") closeOverlays(); });
  addEventListener("keydown", e => { if (e.key === "Escape") closeOverlays(); });
  refreshCart();

  /* expose the real header height so sticky panels sit just below it */
  const setHeaderH = () => document.documentElement.style.setProperty("--header-h", document.getElementById("header").offsetHeight + "px");
  setHeaderH(); addEventListener("resize", setHeaderH);

  /* Header shadow + back-to-top on scroll */
  const header = document.getElementById("header");
  const toTop = document.getElementById("toTop");
  addEventListener("scroll", () => {
    header.classList.toggle("scrolled", scrollY > 10);
    toTop.classList.toggle("show", scrollY > 600);
  }, { passive: true });
  toTop.onclick = () => scrollTo({ top: 0 });

  initGlobalInteractions();
}

/* ---------- Custom dropdown (replaces native <select>; keyboard: ↑ ↓ Enter Esc) ---------- */
function dropdown(root, onChoose) {
  const btn = root.querySelector(".dd-btn");
  const label = root.querySelector(".dd-label");
  const opts = [...root.querySelectorAll("[role=option]")];
  let focus = 0;
  const highlight = () => opts.forEach((o, i) => o.classList.toggle("focus", i === focus));
  const open = on => {
    root.classList.toggle("open", on);
    btn.setAttribute("aria-expanded", on);
    if (on) { focus = Math.max(0, opts.findIndex(o => o.getAttribute("aria-selected") === "true")); highlight(); }
  };
  const textOf = o => o.lastChild.textContent.trim();
  const choose = (o, viaKeyboard) => {
    opts.forEach(x => x.setAttribute("aria-selected", x === o));
    label.textContent = o.dataset.short || textOf(o);
    open(false);
    if (viaKeyboard) btn.focus(); else btn.blur();
    onChoose(o.dataset.value, o);
  };
  btn.addEventListener("click", () => open(!root.classList.contains("open")));
  opts.forEach((o, i) => {
    o.addEventListener("click", () => choose(o));
    o.addEventListener("mouseenter", () => { focus = i; highlight(); });
  });
  root.addEventListener("keydown", e => {
    const isOpen = root.classList.contains("open");
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) return open(true);
      focus = (focus + (e.key === "ArrowDown" ? 1 : -1) + opts.length) % opts.length; highlight();
    } else if ((e.key === "Enter" || e.key === " ") && isOpen) { e.preventDefault(); choose(opts[focus], true); }
    else if (e.key === "Escape") open(false);
  });
  document.addEventListener("click", e => { if (!root.contains(e.target)) open(false); });
  return { setLabel: t => label.textContent = t };
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg, link) {
  const t = document.getElementById("toast");
  document.getElementById("toastMsg").innerHTML = msg + (link ? ` <a href="#" data-open-cart>${link}</a>` : "");
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Fly-to-cart animation ---------- */
function addToCart(product, fromEl, qty = 1) {
  const target = document.getElementById("cartIcon");
  const a = fromEl.getBoundingClientRect();
  const b = target.getBoundingClientRect();
  const fly = document.createElement("div");
  fly.className = "fly";
  fly.innerHTML = visual(product);
  fly.style.left = a.left + a.width / 2 - 28 + "px";
  fly.style.top = a.top + a.height / 2 - 28 + "px";
  document.body.appendChild(fly);
  requestAnimationFrame(() => {
    fly.style.transform = `translate(${b.left - a.left - a.width / 2 + 40}px, ${b.top - a.top - a.height / 2 + 20}px) scale(.3)`;
    fly.style.opacity = ".4";
  });
  setTimeout(() => {
    fly.remove();
    const items = cartItems();
    const line = items.find(x => x.id === product.id);
    line ? line.qty += qty : items.push({ id: product.id, qty });
    save("aha-cart-items", items);
    refreshCart(true);
  }, 800);
  toast(`Added to cart: ${product.brand} ${product.cat.replace(/s$/, "")}`, "View cart");
}

/* ---------- Mini cart drawer ---------- */
let lastFocus;
function openCart() {
  closeQuick();
  lastFocus = document.activeElement;
  refreshCart();
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
  document.getElementById("overlay").classList.add("show");
  document.body.classList.add("lock");
  setTimeout(() => document.querySelector("#cartDrawer .x-btn").focus(), 50);
}
function closeQuick() {
  const qv = document.getElementById("quickView");
  if (!qv || !qv.classList.contains("open")) return;
  qv.classList.remove("open"); qv.setAttribute("aria-hidden", "true");
}
function closeOverlays() {
  const drawer = document.getElementById("cartDrawer");
  drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true");
  closeQuick();
  document.querySelectorAll(".modal.open").forEach(m => { m.classList.remove("open"); m.setAttribute("aria-hidden", "true"); });
  document.getElementById("overlay").classList.remove("show");
  document.body.classList.remove("lock");
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
function changeQty(id, delta) {
  const items = cartItems(), line = items.find(x => x.id === id); if (!line) return;
  const p = PRODUCTS.find(x => x.id === id);
  line.qty = Math.max(1, Math.min(p.stock, line.qty + delta));
  save("aha-cart-items", items); refreshCart(true);
}
function removeLine(id, el) {
  const done = () => { save("aha-cart-items", cartItems().filter(x => x.id !== id)); refreshCart(true); };
  if (el) { el.classList.add("leaving"); setTimeout(done, 280); } else done();
}
function refreshCart(bump) {
  const items = cartItems().filter(x => PRODUCTS.some(p => p.id === x.id));
  const count = items.reduce((n, x) => n + x.qty, 0);
  const subtotal = items.reduce((s, x) => s + PRODUCTS.find(p => p.id === x.id).price * x.qty, 0);
  const badge = document.getElementById("cartCount");
  if (badge) {
    badge.textContent = count;
    if (bump) { badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump"); }
  }
  const body = document.getElementById("cdBody"); if (!body) return;
  document.getElementById("cdCount").textContent = count ? `(${count})` : "";
  const left = Math.max(0, FREE_DELIVERY - subtotal);
  document.getElementById("cdFree").innerHTML = items.length ? `
    <p>${left ? `You're <b>${peso(left)}</b> away from <b>FREE delivery</b>` : `🎉 You've unlocked <b>FREE delivery</b> in Metro Manila`}</p>
    <div class="bar"><i style="width:${Math.min(100, subtotal / FREE_DELIVERY * 100)}%"></i></div>` : "";
  body.innerHTML = items.length ? items.map(x => {
    const p = PRODUCTS.find(q => q.id === x.id);
    return `<div class="cd-item">
      <a class="cd-thumb" href="product.html?id=${p.id}">${visual(p)}</a>
      <div class="cd-info">
        <small>${p.brand}</small>
        <a href="product.html?id=${p.id}">${p.name}</a>
        <div class="cd-row">
          <div class="cd-qty">
            <button data-qty="-1" data-id="${p.id}" aria-label="Decrease quantity" ${x.qty <= 1 ? "disabled" : ""}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h12"/></svg></button>
            <span>${x.qty}</span>
            <button data-qty="1" data-id="${p.id}" aria-label="Increase quantity"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v12M5 12h12"/></svg></button>
          </div>
          <b>${peso(p.price * x.qty)}</b>
        </div>
      </div>
      <button class="cd-remove" data-remove="${p.id}" aria-label="Remove ${p.name}"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg></button>
    </div>`;
  }).join("") : `
    <div class="cd-empty">
      <span>${ICON.cart}</span>
      <b>Your cart is empty</b>
      <p>Browse our deals and add your next appliance.</p>
      <button class="btn btn-primary" data-close>Start shopping</button>
    </div>`;
  document.getElementById("cdFoot").innerHTML = items.length ? `
    <div class="cd-sum"><span>Subtotal</span><b>${peso(subtotal)}</b></div>
    <div class="cd-inst">or <b>${peso(subtotal / 12)}/mo</b> for 12 months at 0% interest</div>
    <button class="btn btn-primary" onclick="toast('Proceeding to secure checkout…')">Checkout</button>
    <button class="btn btn-ghost" data-close>Continue shopping</button>` : "";
}

/* ---------- Quick view ---------- */
function openQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id); if (!p) return;
  const d = discountOf(p);
  lastFocus = document.activeElement;
  document.getElementById("qvPanel").innerHTML = `
    <button class="x-btn qv-close" data-close aria-label="Close quick view"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="qv-media">
      <div class="card-badges">${p.tags.map(t => `<span class="tag ${t}">${{ sale: "Sale", hot: "Hot Item", new: "New", free: "Free Delivery" }[t]}</span>`).join("")}</div>
      ${d > 0 ? `<div class="discount-burst">-${d}%<small>OFF</small></div>` : ""}
      ${visual(p)}
    </div>
    <div class="qv-info">
      <span class="card-brand">${p.brand}</span>
      <h3>${p.name}</h3>
      <div class="card-rating">${starsHTML(p.rating)} <span>${p.rating} (${p.reviews} reviews) · Model ${p.model}</span></div>
      <div class="price-row"><span class="price">${peso(p.price)}</span>${d > 0 ? `<span class="was">${peso(p.was)}</span><span class="save-pill">Save ${peso(p.was - p.price)}</span>` : ""}</div>
      <div class="installment">As low as <b>${peso(p.price / 24)}/mo</b> · 0% for 24 months</div>
      <ul class="qv-points">
        <li>${ICON.check} 100% genuine with official ${p.brand} warranty</li>
        <li>${ICON.check} ${p.price >= FREE_DELIVERY ? "Free delivery in Metro Manila" : "Store pickup available nationwide"}</li>
        <li>${ICON.check} ${p.stock < 10 ? `<span class="low">Only ${p.stock} left in stock</span>` : "In stock and ready to ship"}</li>
      </ul>
      <div class="qv-actions">
        <button class="add-btn" data-add="${p.id}">${ICON.cart}<span>Add to Cart</span></button>
      </div>
      <a class="qv-more" href="product.html?id=${p.id}">View full details →</a>
    </div>`;
  const qv = document.getElementById("quickView");
  qv.classList.add("open"); qv.setAttribute("aria-hidden", "false");
  document.getElementById("overlay").classList.add("show");
  document.body.classList.add("lock");
  setTimeout(() => qv.querySelector(".qv-close").focus(), 50);
}

function toggleWish(id, btn) {
  const list = wishlist();
  const i = list.indexOf(id);
  i > -1 ? list.splice(i, 1) : list.push(id);
  save("aha-wish", list);
  btn.classList.toggle("on", i === -1);
  const badge = document.getElementById("wishCount");
  badge.textContent = list.length;
  badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
  toast(i === -1 ? "Saved to your wishlist" : "Removed from wishlist");
}

/* Delegated handlers: add-to-cart, wishlist, button ripples, scroll reveal */
function initGlobalInteractions() {
  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");
    if (add) {
      e.preventDefault();
      const p = PRODUCTS.find(x => x.id === +add.dataset.add);
      addToCart(p, add);
      add.classList.add("done");
      add.innerHTML = `${ICON.check}<span>Added to Cart</span>`;
      setTimeout(() => { add.classList.remove("done"); add.innerHTML = `${ICON.cart}<span>Add to Cart</span>`; }, 1600);
    }
    const quick = e.target.closest("[data-quick]");
    if (quick) { e.preventDefault(); openQuickView(+quick.dataset.quick); }
    if (e.target.closest("[data-open-cart]")) { e.preventDefault(); openCart(); }
    if (e.target.closest("[data-close]")) { e.preventDefault(); closeOverlays(); }
    const step = e.target.closest("[data-qty]");
    if (step) { changeQty(+step.dataset.id, +step.dataset.qty); }
    const rm = e.target.closest("[data-remove]");
    if (rm) { removeLine(+rm.dataset.remove, rm.closest(".cd-item")); }
    const wish = e.target.closest("[data-wish]");
    if (wish) { e.preventDefault(); toggleWish(+wish.dataset.wish, wish); }

    const btn = e.target.closest(".btn");
    if (btn) {
      const r = btn.getBoundingClientRect();
      const s = Math.max(r.width, r.height);
      const rip = document.createElement("span");
      rip.className = "ripple";
      rip.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
      btn.appendChild(rip);
      setTimeout(() => rip.remove(), 600);
    }
  });
  observeReveal();
}

const io = "IntersectionObserver" in window
  ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 })
  : null;
function observeReveal() {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in"));
}

/* Spinning fan blades / washer drum, steam etc. (SVG animations) */
const svgAnim = document.createElement("style");
svgAnim.textContent = `
  .card:hover .spin, .stage .spin, .hero-stage .spin { animation: spin 1.2s linear infinite; }
  .stage .steam, .card:hover .steam { animation: steam 2s ease-in-out infinite; }
  .stage .thump, .card:hover .thump { animation: thump .6s ease-in-out infinite; transform-origin: 60px 80px; }
  .stage .flame, .card:hover .flame { animation: flame .5s ease-in-out infinite alternate; transform-origin: center bottom; }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes steam { 0% { opacity: 0; transform: translateY(6px); } 50% { opacity: 1; } 100% { opacity: 0; transform: translateY(-6px); } }
  @keyframes thump { 50% { transform: scale(1.12); opacity: .4; } }
  @keyframes flame { to { transform: scaleY(1.2); opacity: .9; } }
`;
document.head.appendChild(svgAnim);
