/* ==========================================================
   The Favis Group — shared fleet data, pricing and page chrome
   Vehicles, colors, rates and photos come from rent.thefavis.com.
   MPG, cargo, features, fees and availability are sample values for the concept.
   ========================================================== */

const usd = (n, cents = false) => "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });

const MODEL_INFO = {
  "RAV4":        { mpg: [27, 35], cargo: "37.5 cu ft", doors: 4, drive: "AWD", feats: ["Apple CarPlay", "Backup camera", "Lane departure alert", "Adaptive cruise", "Heated seats", "Leather interior"] },
  "Kona":        { mpg: [30, 35], cargo: "19.2 cu ft", doors: 4, drive: "FWD", feats: ["Apple CarPlay", "Android Auto", "Backup camera", "Blind-spot monitor", "Keyless entry"] },
  "Encore GX":   { mpg: [30, 32], cargo: "23.5 cu ft", doors: 4, drive: "FWD", feats: ["Wireless CarPlay", "Backup camera", "Lane keep assist", "Auto emergency braking", "Remote start"] },
  "Highlander":  { seats: 7, mpg: [21, 29], cargo: "16.0 cu ft", doors: 4, drive: "AWD", feats: ["Apple CarPlay", "Backup camera", "Adaptive cruise", "Tri-zone climate", "Power liftgate"] },
  "Rogue Sport": { mpg: [25, 32], cargo: "22.9 cu ft", doors: 4, drive: "FWD", feats: ["Apple CarPlay", "Backup camera", "Blind-spot warning", "Auto emergency braking"] },
  "Soul":        { mpg: [25, 30], cargo: "18.8 cu ft", doors: 4, drive: "FWD", feats: ["Bluetooth", "Backup camera", "Keyless entry", "USB charging"] },
  "Camry":       { mpg: [51, 49], cargo: "15.1 cu ft", doors: 4, drive: "FWD", feats: ["Wireless CarPlay", "Backup camera", "Adaptive cruise", "Lane tracing assist", "Wireless charging"] },
  "Corolla":     { mpg: [32, 41], cargo: "13.1 cu ft", doors: 4, drive: "FWD", feats: ["Apple CarPlay", "Backup camera", "Adaptive cruise", "Lane departure alert"] },
  "Sonata":      { mpg: [27, 37], cargo: "16.0 cu ft", doors: 4, drive: "FWD", feats: ["Apple CarPlay", "Android Auto", "Backup camera", "Smart cruise", "Blind-spot view"] },
  "Altima":      { mpg: [27, 39], cargo: "15.4 cu ft", doors: 4, drive: "FWD", feats: ["Apple CarPlay", "Backup camera", "ProPILOT assist", "Remote start"] },
  "Forte":       { mpg: [30, 41], cargo: "15.3 cu ft", doors: 4, drive: "FWD", feats: ["Apple CarPlay", "Android Auto", "Backup camera", "Forward collision assist"] },
  "Tacoma":      { mpg: [20, 26], cargo: "5 ft bed", doors: 4, drive: "4x4", feats: ["Apple CarPlay", "Backup camera", "Tow package", "Bed liner", "Adaptive cruise"] },
  "Tundra":      { mpg: [18, 24], cargo: "5.5 ft bed", doors: 4, drive: "4x4", feats: ["14\" touchscreen", "Backup camera", "Tow package", "Heated seats", "Adaptive cruise"] },
};

const COLOR_HEX = { White: "#f5f5f2", Red: "#b3202a", Black: "#16181d", Gray: "#7a7f86", "Dark Gray": "#4a4f57", Brown: "#8a7a64", Blue: "#4a6b86", Silver: "#c4c8cc", Green: "#8a9a83", Yellow: "#efe9da" };

/* [year, make, model, color, type, $/day, photo count, fuel] */
const RAW = [
  [2016, "Toyota", "RAV4", "White", "SUV", 85, 6, "Hybrid"],
  [2025, "Toyota", "RAV4", "Red", "SUV", 64, 3],
  [2025, "Toyota", "RAV4", "Black", "SUV", 64, 4],
  [2019, "Toyota", "Highlander", "Brown", "SUV", 79, 4],
  [2019, "Toyota", "Highlander", "Gray", "SUV", 74, 4],
  [2025, "Buick", "Encore GX", "Blue", "SUV", 59, 3],
  [2025, "Buick", "Encore GX", "Brown", "SUV", 59, 3],
  [2021, "Hyundai", "Kona", "Red", "SUV", 54, 2],
  [2020, "Nissan", "Rogue Sport", "White", "SUV", 54, 3],
  [2018, "Kia", "Soul", "White", "SUV", 44, 4],
  [2026, "Toyota", "Camry", "White", "Sedan", 64, 4, "Hybrid"],
  [2025, "Toyota", "Camry", "Dark Gray", "Sedan", 64, 6, "Hybrid"],
  [2025, "Toyota", "Corolla", "Black", "Sedan", 52, 3],
  [2021, "Toyota", "Corolla", "Red", "Sedan", 50, 4],
  [2024, "Nissan", "Altima", "Black", "Sedan", 59, 4],
  [2020, "Hyundai", "Sonata", "Black", "Sedan", 49, 2],
  [2019, "Kia", "Forte", "Gray", "Sedan", 48, 6],
  [2026, "Toyota", "Tundra", "Green", "Truck", 98, 6],
  [2026, "Toyota", "Tundra", "Dark Gray", "Truck", 98, 6],
  [2026, "Toyota", "Tundra", "Yellow", "Truck", 98, 6],
  [2026, "Toyota", "Tacoma", "Blue", "Truck", 98, 5],
  [2025, "Toyota", "Tacoma", "Silver", "Truck", 89, 6],
];

const CARS = RAW.map(([year, make, model, color, type, rate, n, fuel], i) => {
  const slug = `${year}-${make}-${model}-${color}`.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const info = MODEL_INFO[model];
  return {
    id: i + 1, year, make, model, color, type, rate, fuel: fuel || "Gasoline",
    name: `${year} ${make} ${model}`,
    seats: 5, transmission: "Automatic", ...info,
    ...(model === "RAV4" && fuel === "Hybrid" ? { mpg: [34, 31] } : {}),
    photos: Array.from({ length: n }, (_, k) => `images/fleet/${slug}-${k + 1}.jpg`),
    trips: 40 + ((i * 37) % 160),
    rating: [4.9, 5.0, 4.8, 4.9, 4.7, 5.0, 4.9, 4.8][i % 8],
    instant: i % 3 !== 2,
    airport: type !== "Truck" || i % 2 === 0,
  };
});

const LOCATIONS = [
  { id: "hq", name: "Houston HQ", detail: "2315 Greens Rd, Houston, TX 77032", fee: 0 },
  { id: "iah", name: "IAH Airport", detail: "George Bush Intercontinental · curbside", fee: 35 },
  { id: "delivery", name: "Delivery to you", detail: "Anywhere within 25 mi of HQ", fee: 50 },
];

/* Rental terms: weekly and monthly get a lower effective daily rate */
const TERMS = { daily: { label: "Daily", factor: 1 }, weekly: { label: "Weekly", factor: .85, min: 7 }, monthly: { label: "Monthly", factor: .7, min: 28 } };
const termFor = days => days >= 28 ? "monthly" : days >= 7 ? "weekly" : "daily";
const dayRate = (car, days) => Math.round(car.rate * TERMS[termFor(days)].factor);

/* ---------- Trip (search) state shared across pages via URL + localStorage ---------- */
function defaultTrip() {
  const start = new Date(); start.setDate(start.getDate() + 1);
  const end = new Date(start); end.setDate(end.getDate() + 3);
  return { loc: "hq", ret: "hq", start: iso(start), end: iso(end), stime: "10:00", etime: "10:00" };
}
function iso(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; } // local date, not UTC
function parseISO(s) { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); }
function tripDays(t) { return Math.max(1, Math.round((parseISO(t.end) - parseISO(t.start)) / 864e5)); }
function fmtDate(s, opts = { month: "short", day: "numeric" }) { return parseISO(s).toLocaleDateString("en-US", opts); }
function fmtTime(t) { const [h, m] = t.split(":").map(Number); return `${(h % 12) || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "AM" : "PM"}`; }
function loadTrip() {
  const q = new URLSearchParams(location.search);
  let t;
  try { t = JSON.parse(localStorage.getItem("favis-trip")); } catch { t = null; }
  t = { ...defaultTrip(), ...(t || {}) };
  ["loc", "ret", "start", "end", "stime", "etime"].forEach(k => q.get(k) && (t[k] = q.get(k)));
  if (parseISO(t.start) < parseISO(iso(new Date()))) t = { ...t, ...(({ start, end }) => ({ start, end }))(defaultTrip()) };
  if (parseISO(t.end) <= parseISO(t.start)) { const e = parseISO(t.start); e.setDate(e.getDate() + 1); t.end = iso(e); }
  return t;
}
function saveTrip(t) { try { localStorage.setItem("favis-trip", JSON.stringify(t)); } catch {} }
const tripQuery = t => new URLSearchParams({ loc: t.loc, ret: t.ret, start: t.start, end: t.end, stime: t.stime, etime: t.etime }).toString();

/* Sample availability: a few booked days per car, deterministic */
function bookedDays(car) {
  const out = new Set(), base = new Date(); base.setHours(0, 0, 0, 0);
  for (let k = 0; k < 3; k++) {
    const s = new Date(base); s.setDate(s.getDate() + 5 + ((car.id * 7 + k * 13) % 50));
    const len = 2 + ((car.id + k) % 4);
    for (let j = 0; j < len; j++) { const d = new Date(s); d.setDate(d.getDate() + j); out.add(iso(d)); }
  }
  return out;
}
function isAvailable(car, t) {
  const b = bookedDays(car);
  for (let d = parseISO(t.start); d < parseISO(t.end); d.setDate(d.getDate() + 1)) if (b.has(iso(d))) return false;
  return true;
}

/* ---------- Shared date + time range picker (flight-style) ----------
   rangePicker({ host, triggers: { start, end }, get, set, onChange, onApply, blocked, cls })
   - host: positioned element the panel is attached to
   - blocked: Set of ISO days this car is already booked (optional)            */
const TIMES = Array.from({ length: 29 }, (_, i) => { const m = 7 * 60 + i * 30; return `${String(m / 60 | 0).padStart(2, "0")}:${m % 60 ? "30" : "00"}`; });
function rangePicker(o) {
  const blocked = o.blocked || new Set();
  const el = document.createElement("div");
  el.className = "dp " + (o.cls || "");
  el.hidden = true;
  el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Choose pickup and return dates");
  const chev = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="${d}"/></svg>`;
  const tpBtn = k => `<button type="button" class="tp-btn" data-tp="${k}" aria-haspopup="listbox" aria-expanded="false"></button><div class="tp" data-for="${k}" role="listbox"></div>`;
  el.innerHTML = `
    <div class="dp-head">
      <div class="dp-step"><span class="dp-dots"><i data-r="dot1"></i><i data-r="dot2"></i></span><div><b data-r="title"></b><small data-r="hint"></small></div></div>
      <div class="dp-quick"><div data-r="quick"></div></div>
    </div>
    <div class="dp-cals" data-r="cals"></div>
    <div class="dp-foot">
      <div class="dp-when">
        <div class="dp-w"><span>Pickup</span><b data-r="sday"></b>${tpBtn("stime")}</div>
        <span class="dp-arrow">${I.arrow}</span>
        <div class="dp-w"><span>Return</span><b data-r="eday"></b>${tpBtn("etime")}</div>
      </div>
      <div class="dp-actions"><button type="button" class="btn btn-ghost btn-sm" data-r="reset">Reset</button><button type="button" class="btn btn-primary btn-sm" data-r="apply"></button></div>
    </div>`;
  o.host.appendChild(el);
  const R = k => el.querySelector(`[data-r="${k}"]`);
  const today = parseISO(iso(new Date()));
  const addD = (s, n) => { const d = parseISO(s); d.setDate(d.getDate() + n); return iso(d); };
  const short = s => fmtDate(s, { weekday: "short", month: "short", day: "numeric" });
  const T = () => o.get();
  let mode = "start", hover = null, view = new Date(today.getFullYear(), today.getMonth(), 1), snap;

  const free = (s, e) => { for (let d = parseISO(s); d < parseISO(e); d.setDate(d.getDate() + 1)) if (blocked.has(iso(d))) return false; return true; };
  const limitAfter = s => { const d = parseISO(s); for (let i = 0; i < 400; i++) { d.setDate(d.getDate() + 1); if (blocked.has(iso(d))) return iso(d); } return null; };

  function month(first) {
    const t = T(), days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const previewing = mode === "end" && hover && parseISO(hover) > parseISO(t.start);
    const end = previewing ? hover : t.end, lim = mode === "end" ? limitAfter(t.start) : null;
    let out = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => `<span class="dow">${d}</span>`).join("") + "<span></span>".repeat(first.getDay());
    for (let d = 1; d <= days; d++) {
      const dt = new Date(first.getFullYear(), first.getMonth(), d), s = iso(dt);
      const past = dt < today, isB = blocked.has(s);
      const beyond = lim && parseISO(s) > parseISO(lim);                 // return can't cross another booking
      const dis = past || (isB && !(mode === "end" && s === lim)) || beyond;
      const isS = s === t.start, isE = s === end, isT = s === iso(today);
      const cls = [past ? "past" : "", isB ? "booked" : "", beyond && !isB ? "beyond" : "", isS ? "start" : "", isE ? "end" : "",
        dt > parseISO(t.start) && dt < parseISO(end) ? "in" : "", isT ? "today" : "", previewing && isE ? "preview" : ""].join(" ");
      const tag = isS ? "Pickup" : isE ? "Return" : isB ? "Booked" : isT ? "Today" : "";
      const n = tripDays({ start: t.start, end: s });
      const tip = previewing && isE ? ` data-tip="${n} day${n > 1 ? "s" : ""}"` : "";
      out += `<button type="button" data-d="${s}" class="${cls}"${tip} ${dis ? "disabled" : ""} aria-label="${dt.toDateString()}${tag ? ", " + tag : ""}"><span>${d}</span>${tag ? `<small>${tag}</small>` : ""}</button>`;
    }
    return `<div class="dp-month"><h4>${first.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h4><div class="dp-grid">${out}</div></div>`;
  }

  function render() {
    const t = T(), days = tripDays(t), term = termFor(days), ok = free(t.start, t.end);
    const next = new Date(view.getFullYear(), view.getMonth() + 1, 1);
    const canPrev = view > new Date(today.getFullYear(), today.getMonth(), 1);
    R("cals").innerHTML = `<button type="button" class="dp-nav prev" data-r="prev" ${canPrev ? "" : "disabled"} aria-label="Previous month">${chev("M15 18l-6-6 6-6")}</button>
      ${month(view)}${month(next)}<button type="button" class="dp-nav next" data-r="next" aria-label="Next month">${chev("M9 18l6-6-6-6")}</button>`;
    const lim = limitAfter(t.start);
    R("title").textContent = mode === "start" ? "Select your pickup date" : "Now select your return date";
    R("hint").innerHTML = mode === "start"
      ? `Step 1 of 2 · ${blocked.size ? "crossed-out days are already booked" : "tap a day to start your trip"}`
      : `Step 2 of 2 · pickup ${short(t.start)}${lim && parseISO(lim) - parseISO(t.start) < 60 * 864e5 ? ` · return by ${short(lim)} at the latest` : ". Book 7+ days for 15% off"}`;
    R("dot1").className = mode === "start" ? "on" : "done"; R("dot2").className = mode === "end" ? "on" : "";
    R("sday").textContent = short(t.start); R("eday").textContent = short(t.end);
    el.querySelectorAll(".tp-btn").forEach(b => b.innerHTML = `${I.clock}${fmtTime(t[b.dataset.tp])}<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>`);
    const ap = R("apply");
    ap.disabled = !ok;
    ap.innerHTML = ok ? `Apply · ${days} day${days > 1 ? "s" : ""}${term !== "daily" ? ` <em>−${Math.round((1 - TERMS[term].factor) * 100)}%</em>` : ""}` : "Dates overlap a booking";
    const base = t.start < iso(today) ? iso(today) : t.start;
    const sat = (() => { const d = new Date(today); d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7 || 7)); return iso(d); })();
    const Q = [["This weekend", sat, addD(sat, 2)], ["3 days", base, addD(base, 3)], ["1 week", base, addD(base, 7), "−15%"], ["1 month", base, addD(base, 30), "−30%"]];
    R("quick").innerHTML = Q.map(([l, s, e, tag]) => `<button type="button" data-qs="${s}" data-qe="${e}" ${free(s, e) && !blocked.has(s) ? "" : "disabled"} class="${t.start === s && t.end === e ? "on" : ""}">${l}${tag ? `<em>${tag}</em>` : ""}</button>`).join("");
    Object.entries(o.triggers || {}).forEach(([k, b]) => b && b.classList.toggle("on", !el.hidden && k === mode));
    o.onChange && o.onChange();
  }

  const GROUPS = [["Morning", x => x < "12:00"], ["Afternoon", x => x >= "12:00" && x < "17:00"], ["Evening", x => x >= "17:00"]];
  function toggleTP(key) {
    el.querySelectorAll(".tp").forEach(p => {
      const on = p.dataset.for === key && !p.classList.contains("open");
      p.classList.toggle("open", on); p.previousElementSibling.setAttribute("aria-expanded", on);
      if (on) p.innerHTML = `<div class="tp-head">${key === "stime" ? "Pickup" : "Return"} time <small>Houston HQ open 7 AM – 9 PM</small></div>` + GROUPS.map(([g, f]) =>
        `<div class="tp-group"><h6>${g}</h6><div>${TIMES.filter(f).map(x => `<button type="button" role="option" aria-selected="${T()[key] === x}" data-tk="${key}" data-tv="${x}" class="${T()[key] === x ? "on" : ""}">${fmtTime(x).replace(":00", "")}</button>`).join("")}</div></div>`).join("");
    });
  }
  const closeTP = () => el.querySelectorAll(".tp.open").forEach(p => { p.classList.remove("open"); p.previousElementSibling.setAttribute("aria-expanded", "false"); });

  function open(m) {
    snap = { ...T() }; mode = m; hover = null;
    const s = parseISO(T().start); view = new Date(s.getFullYear(), s.getMonth(), 1);
    el.hidden = false; requestAnimationFrame(() => el.classList.add("open"));
    Object.values(o.triggers || {}).forEach(b => b && b.setAttribute("aria-expanded", "true"));
    render();
  }
  function close(apply) {
    if (el.hidden) return;
    if (!apply && snap) o.set(snap);
    closeTP(); el.classList.remove("open"); setTimeout(() => el.hidden = true, 200);
    Object.values(o.triggers || {}).forEach(b => { if (b) { b.setAttribute("aria-expanded", "false"); b.classList.remove("on"); } });
    o.onChange && o.onChange();
    if (apply && o.onApply) o.onApply();
  }

  Object.entries(o.triggers || {}).forEach(([k, b]) => b && b.addEventListener("click", e => {
    e.stopPropagation();
    if (!el.hidden && mode === k) return close(true);
    el.hidden ? open(k) : (mode = k, render());
  }));
  el.addEventListener("click", e => {
    e.stopPropagation();
    const tg = e.target, t = T();
    const tb = tg.closest(".tp-btn"); if (tb) return toggleTP(tb.dataset.tp);
    const tv = tg.closest("[data-tv]"); if (tv) { o.set({ ...t, [tv.dataset.tk]: tv.dataset.tv }); closeTP(); return render(); }
    if (!tg.closest(".tp")) closeTP();
    if (tg.closest('[data-r="prev"]')) { view.setMonth(view.getMonth() - 1); return render(); }
    if (tg.closest('[data-r="next"]')) { view.setMonth(view.getMonth() + 1); return render(); }
    const q = tg.closest("[data-qs]"); if (q && !q.disabled) { o.set({ ...t, start: q.dataset.qs, end: q.dataset.qe }); mode = "start"; return render(); }
    const d = tg.closest("[data-d]");
    if (d && !d.disabled) {
      const s = d.dataset.d;
      if (mode === "start" || parseISO(s) <= parseISO(t.start)) {
        const len = tripDays(t); let e2 = parseISO(t.end) > parseISO(s) ? t.end : addD(s, Math.min(len, 3));
        if (!free(s, e2)) e2 = addD(s, 1);
        o.set({ ...t, start: s, end: e2 }); mode = "end";
      } else { o.set({ ...t, end: s }); mode = "start"; }
      hover = null; return render();
    }
    if (tg.closest('[data-r="apply"]')) close(true);
    if (tg.closest('[data-r="reset"]')) { const d0 = defaultTrip(); o.set({ ...t, start: d0.start, end: d0.end, stime: "10:00", etime: "10:00" }); mode = "start"; render(); }
  });
  el.addEventListener("mouseover", e => {
    if (mode !== "end") return;
    const d = e.target.closest("[data-d]"), v = d && !d.disabled ? d.dataset.d : null;
    if (v !== hover) { hover = v; render(); }
  });
  document.addEventListener("click", e => { if (!el.hidden && !el.contains(e.target)) close(true); });
  addEventListener("keydown", e => { if (e.key !== "Escape" || el.hidden) return; if (el.querySelector(".tp.open")) return closeTP(); close(false); });
  return { open, close, render, isOpen: () => !el.hidden, el };
}

/* ---------- Custom select: keeps the native <select> as the source of truth ----------
   customSelect(select, { columns, search, placeholder })                                  */
function customSelect(sel, o = {}) {
  const wrap = document.createElement("div");
  wrap.className = "cs" + (o.columns ? " cs-grid" : "");
  sel.parentNode.insertBefore(wrap, sel); wrap.appendChild(sel);
  sel.classList.add("cs-native"); sel.tabIndex = -1; sel.setAttribute("aria-hidden", "true");
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "cs-btn"; btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false");
  if (sel.id) { btn.id = sel.id + "_btn"; document.querySelector(`label[for="${sel.id}"]`)?.setAttribute("for", btn.id); }
  btn.setAttribute("aria-label", sel.getAttribute("aria-label") || "");
  const menu = document.createElement("div");
  menu.className = "cs-menu"; menu.setAttribute("role", "listbox");
  if (o.columns) menu.style.setProperty("--cols", o.columns);
  wrap.append(btn, menu);
  let focus = -1;
  const opts = () => [...sel.options].filter(x => x.value !== "");
  function paint() {
    const cur = sel.options[sel.selectedIndex];
    btn.innerHTML = `<span class="${cur && cur.value ? "" : "ph"}">${cur && cur.value ? cur.text : (o.placeholder || cur?.text || "Select")}</span><svg class="cs-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;
  }
  function list(q = "") {
    const items = opts().filter(x => x.text.toLowerCase().includes(q.toLowerCase()));
    menu.querySelector(".cs-list").innerHTML = items.length ? items.map((x, i) => `<button type="button" role="option" data-v="${x.value}" aria-selected="${x.value === sel.value}" class="${x.value === sel.value ? "on" : ""} ${i === focus ? "focus" : ""}">${x.text}</button>`).join("") : `<p class="cs-empty">No matches</p>`;
  }
  menu.innerHTML = (o.search ? `<input class="cs-search" placeholder="Search…" aria-label="Search">` : "") + `<div class="cs-list"></div>`;
  const search = menu.querySelector(".cs-search");
  const open = on => {
    document.querySelectorAll(".cs.open").forEach(x => x !== wrap && x.classList.remove("open"));
    wrap.classList.toggle("open", on); btn.setAttribute("aria-expanded", on);
    if (on) { focus = -1; if (search) search.value = ""; list(); requestAnimationFrame(() => { (search || menu).focus?.(); menu.querySelector(".on")?.scrollIntoView({ block: "center" }); }); }
  };
  const pick = v => { sel.value = v; sel.dispatchEvent(new Event("change", { bubbles: true })); sel.dispatchEvent(new Event("input", { bubbles: true })); paint(); open(false); btn.focus(); };
  btn.addEventListener("click", e => { e.stopPropagation(); open(!wrap.classList.contains("open")); });
  menu.addEventListener("click", e => { e.stopPropagation(); const b = e.target.closest("[data-v]"); if (b) pick(b.dataset.v); });
  search?.addEventListener("input", () => { focus = 0; list(search.value); });
  wrap.addEventListener("keydown", e => {
    const items = [...menu.querySelectorAll("[data-v]")], isOpen = wrap.classList.contains("open");
    if (["ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault(); if (!isOpen) return open(true);
      focus = Math.max(0, Math.min(items.length - 1, focus + (e.key === "ArrowDown" ? (o.columns || 1) : -(o.columns || 1))));
    } else if (["ArrowRight", "ArrowLeft"].includes(e.key) && isOpen && o.columns) {
      e.preventDefault(); focus = Math.max(0, Math.min(items.length - 1, focus + (e.key === "ArrowRight" ? 1 : -1)));
    } else if (e.key === "Enter" && isOpen) { e.preventDefault(); if (items[focus]) pick(items[focus].dataset.v); return; }
    else if (e.key === "Escape" && isOpen) { e.stopPropagation(); open(false); btn.focus(); return; }
    else return;
    items.forEach((x, i) => x.classList.toggle("focus", i === focus)); items[focus]?.scrollIntoView({ block: "nearest" });
  });
  document.addEventListener("click", () => open(false));
  sel.addEventListener("change", paint);
  paint();
  return { paint };
}

/* ---------- Icons ---------- */
const I = {
  seat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="6" r="3"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v8M12 8v8M18 8v4H6"/></svg>',
  fuel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M4 10h11"/><path d="M15 8h2a2 2 0 0 1 2 2v6a1.5 1.5 0 0 0 3 0V9l-3-3"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-6.5-8-13a8 8 0 0 1 16 0c0 6.5-8 13-8 13z"/><circle cx="12" cy="9" r="3"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h8l-1 8 10-12h-8z"/></svg>',
  star: '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L10 14.9l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
};
const stars = r => `<span class="stars">${I.star}</span><b>${r.toFixed(1)}</b>`;

/* ---------- Header + footer ---------- */
function renderChrome(active) {
  document.getElementById("top").innerHTML = `
  <div class="util-bar">
    <div class="wrap util-row">
      <span class="u-item">${I.pin}2315 Greens Rd, Houston · IAH pickup available</span>
      <span class="u-item u-hours" id="uHours"></span>
      <span class="u-spacer"></span>
      <a class="u-item" href="tel:2818251514">${I.phone}281-825-1514</a>
      <a class="u-item" href="dashboard.html">${I.user}Sign in</a>
    </div>
  </div>
  <header class="site-header">
    <div class="wrap header-row">
      <a class="brand" href="cars.html" aria-label="The Favis Group home">
        <span class="mark"><img src="images/brand/favis-hand.png" alt=""></span>
        <span class="word"><b>THE FAVIS</b><small>GROUP · HOUSTON</small></span>
      </a>
      <nav class="main-nav" aria-label="Primary">
        <a href="cars.html" class="nav-link ${active === "fleet" ? "on" : ""}">Fleet</a>
        ${navMenu("Rentals", [
          ["Long-term rentals", "Weekly and monthly, up to 30% off", I.cal],
          ["Corporate & government", "Accounts, invoicing, fleet plans", I.bag],
          ["Airport pickup", "Meet your car at IAH, curbside", I.plane],
        ])}
        ${navMenu("Owners", [
          ["Fleet co-hosting", "We manage your car on Turo for you", I.user],
          ["Vehicle investment", "Earn from cars we buy and run", I.star],
          ["Fleet management", "Maintenance, cleaning, reporting", I.gear],
        ])}
        <a href="#" class="nav-link">About</a>
      </nav>
      <a class="hdr-book" href="cars.html">
        <span class="hb-key" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M16 7l3 3M18.5 4.5l2 2"/></svg></span>
        <span class="hb-text"><b>Book a car</b><small>from ${usd(Math.min(...CARS.map(c => c.rate)))}/day</small></span>
      </a>
    </div>
  </header>`;
  initHeader();
  document.getElementById("bottom").innerHTML = `
  <footer class="site-footer">
    <div class="wrap foot-grid">
      <div>
        <a class="brand" href="cars.html"><span class="mark"><img src="images/brand/favis-hand.png" alt=""></span><span class="word"><b>THE FAVIS</b><small>GROUP · HOUSTON</small></span></a>
        <p>Daily, weekly and monthly rentals across Houston. Airport pickup at IAH, delivery to your door, and fleet management for owners.</p>
      </div>
      <div><h4>Rent</h4><a href="cars.html">Browse fleet</a><a href="#">Long-term rentals</a><a href="#">Corporate & government</a><a href="#">Airport pickup</a></div>
      <div><h4>Owners</h4><a href="#">Fleet co-hosting</a><a href="#">Vehicle investment</a><a href="#">Fleet management</a></div>
      <div><h4>Visit us</h4><p>2315 Greens Rd<br>Houston, TX 77032</p><a href="tel:2818251514">281-825-1514</a></div>
    </div>
    <div class="wrap foot-base"><span>© 2026 The Favis Group LLC</span><span>Privacy · Terms · Rental policies · <a href="admin.html">Staff portal</a></span></div>
  </footer>
  <div class="toast" id="toast" role="status"></div>`;
}

/* Header: dropdown menus + live open/closed hours */
function navMenu(label, items) {
  return `<div class="nav-menu">
    <button class="nav-link" type="button" aria-expanded="false">${label}<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></button>
    <div class="nav-drop">${items.map(([t, s, ico]) => `<a href="#"><span class="nd-ico">${ico}</span><span><b>${t}</b><small>${s}</small></span></a>`).join("")}</div>
  </div>`;
}
function initHeader() {
  document.querySelectorAll(".nav-menu").forEach(m => {
    const btn = m.querySelector("button");
    const set = open => { m.classList.toggle("open", open); btn.setAttribute("aria-expanded", open); };
    m.addEventListener("mouseenter", () => set(true));
    m.addEventListener("mouseleave", () => set(false));
    btn.addEventListener("click", () => set(!m.classList.contains("open")));
    m.addEventListener("keydown", e => { if (e.key === "Escape") { set(false); btn.focus(); } });
    m.addEventListener("focusout", e => { if (!m.contains(e.relatedTarget)) set(false); });
  });
  /* Houston time: open 7 AM – 9 PM daily (sample hours) */
  const h = +new Date().toLocaleString("en-US", { timeZone: "America/Chicago", hour: "numeric", hour12: false });
  const open = h >= 7 && h < 21;
  document.getElementById("uHours").innerHTML = `<i class="${open ? "open" : ""}"></i>${open ? "Open now · until 9 PM" : "Closed · opens 7 AM"}`;
}

let toastTimer;
function toast(msg) {
  const t = document.getElementById("toast");
  t.innerHTML = `<span>${I.check}</span>${msg}`;
  t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* Scroll reveal */
function reveal() {
  const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .1 }) : null;
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in"));
}
