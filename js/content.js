/* ===== Site content — edit here ===== */
const CONFIG = {
  phone: "+916385153008",
  palette: "ivory",
  paletteSwitcher: false
};

const _P = (typeof PHOTOS !== "undefined") ? PHOTOS : {};

const IMAGES = {
  hero: _P.hero || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80",
  d1: _P.t1 || "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
  t1: _P.t1 || "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
  t2: _P.t2 || "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  t3: _P.t3 || "https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80",
  t4: _P.t4 || "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
  t5: _P.t5 || "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
  t6: _P.t1 || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  band: _P.t4 || "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=1600&q=80",
  g1: _P.g1 || "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1000&q=80",
  g2: _P.g2 || "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
  g3: _P.g3 || "https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=600&q=80",
  g4: _P.g1 || "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
  g5: _P.g2 || "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  c1: _P.g1 || "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
  c2: _P.g2 || "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80",
  c3: _P.g3 || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  c4: _P.t3 || "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80"
};

const MENU = [
  { name: "Idli, Sambar & Chutney", description: "Soft steamed idlis with homemade sambar and fresh coconut chutney. A light, comforting start to the week.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80", status: "Monday", tags: ["Veg"] },
  { name: "Veg Upma / Semiya & Chutney", description: "Fluffy upma or semiya cooked with mild spices, served with chutney. Simple home-style breakfast.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80", status: "Tuesday", tags: ["Veg"] },
  { name: "Pongal, Sambar, Chutney & Vada", description: "Creamy ven pongal tempered with ghee and pepper, with sambar, chutney and crisp vada.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80", status: "Wednesday", tags: ["Veg"] },
  { name: "Dosa & Kadala Curry", description: "Crisp dosa paired with spicy black chickpea (kadala) curry — a classic combination.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5972?w=800&q=80", status: "Thursday", tags: ["Veg"] },
  { name: "Idiyappam, Coconut Milk & Kuruma", description: "Soft string hoppers with sweet coconut milk and vegetable kuruma on the side.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80", status: "Friday", tags: ["Veg"] },
  { name: "Poori Masala", description: "Puffed pooris with soft potato masala. A favourite weekend breakfast.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80", status: "Saturday", tags: ["Veg"] },
  { name: "Appam, Coconut Milk & Paya", description: "Lacy appams with coconut milk and paya. Sunday special from the kitchen.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80", status: "Sunday", tags: ["Non-veg option"] },
  { name: "Satham, Moor Kolambu & Sides", description: "Rice with moor kolambu, veg fry, appalam and pickle — everyday Tamil comfort on a plate.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80", status: "Monday", tags: ["Veg"] },
  { name: "Full South Indian Lunch", description: "Satham with sambar, kootu, veg fry, rasam, moor and appalam. A complete home lunch.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80", status: "Tuesday", tags: ["Veg"] },
  { name: "Satham with Egg / Non-Veg Curry", description: "Rice with egg curry or non-veg curry, appalam and rasam. Non-veg day at the kitchen.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80", status: "Wednesday", tags: ["Non-veg"] },
  { name: "Variety Rice, Veg Fry & Egg Fry", description: "Flavourful variety rice with vegetable fry and egg fry on the side.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80", status: "Thursday", tags: ["Non-veg option"] },
  { name: "Veg Biryani Combo", description: "Fragrant veg biryani with fry, raita and a small sweet. Friday favourite.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80", status: "Friday", tags: ["Veg"] },
  { name: "Jeera Rice, Dal Tadka & Veg Fry", description: "Aromatic jeera rice with dal tadka and seasonal veg fry.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1589302168069-af59e3a5a58c?w=800&q=80", status: "Saturday", tags: ["Veg"] },
  { name: "Biryani Combo", description: "Sunday biryani combo — the full treat from Jashu's kitchen.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80", status: "Sunday", tags: ["Non-veg option"] },
  { name: "Chapathi & Kuruma", description: "Soft chapathis with vegetable kuruma. Light and satisfying.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80", status: "Monday", tags: ["Veg"] },
  { name: "Kal Dosa & Empty Salna", description: "Kal dosa with empty salna — simple, flavourful dinner.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5972?w=800&q=80", status: "Tuesday", tags: ["Veg"] },
  { name: "Aloo Paratha & Green Chutney", description: "Stuffed aloo paratha with fresh green chutney. Homestyle and filling.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80", status: "Wednesday", tags: ["Veg"] },
  { name: "Idli & Tomato Kuruma", description: "Soft idlis with tomato kuruma for a gentle evening meal.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80", status: "Thursday", tags: ["Veg"] },
  { name: "Veg Kichadi & Chutney", description: "Comforting vegetable kichadi with chutney. Easy on the stomach.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80", status: "Friday", tags: ["Veg"] },
  { name: "Parotta, Salna & Omelette", description: "Flaky parotta with salna and omelette. Saturday night comfort.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80", status: "Saturday", tags: ["Non-veg option"] },
  { name: "Uthappam & Kuruma", description: "Thick uthappam with kuruma. A relaxed Sunday dinner.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5972?w=800&q=80", status: "Sunday", tags: ["Veg"] }
];

const CHAPTERS = [
  ["The idea", "Everyday South Indian meals cooked the way families eat at home — generous portions, clean ingredients and no fuss."],
  ["The food", "A full weekly menu for morning, lunch and dinner. Mostly vegetarian, with non-veg options on request."],
  ["How it works", "Choose breakfast, lunch or dinner on a weekly or monthly plan. Pause or change anytime. Just message us on WhatsApp."],
  ["Where we are", "Based in Keelkattalai, Chennai. Call or WhatsApp 6385153008 for orders and dietary preferences."]
];

const SUBSCRIPTION = [
  { name: "Breakfast", price: "₹700", period: "Weekly / monthly plan", desc: "Morning tiffin every day — idli, dosa, pongal, upma, poori, appam and more.", image: (_P.sub0 || "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80"), tags: ["Veg", "Non-veg on request"] },
  { name: "Lunch", price: "₹1050", period: "Weekly / monthly plan", desc: "Full midday meals — rice, variety rice, biryani combos with sides.", image: (_P.sub1 || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80"), tags: ["Veg", "Non-veg on request"] },
  { name: "Dinner", price: "₹700", period: "Weekly / monthly plan", desc: "Evening comfort — chapathi, parotta, dosa, idli and uthappam with kuruma.", image: (_P.sub2 || "https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80"), tags: ["Veg", "Non-veg on request"] }
];
