/* ===== Site content — edit here ===== */
const CONFIG = {
  phone: "+916385153008",
  palette: "ivory",
  paletteSwitcher: false
};

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/d/1yftox_y1Z0bYncvHbubgsQarVym77ewF=w1600",
  d1: "https://lh3.googleusercontent.com/d/1ZcigxGw_aQYDvxll_H661yBqH8WBOHTA=w1000",
  t1: "https://lh3.googleusercontent.com/d/1LrisAc6vF_dN8DHygFnMt07uyk6notma=w800",
  t2: "https://lh3.googleusercontent.com/d/1hQMX7zjLwHHMECmx5ME9x_6V2ZN3-ep9=w800",
  t3: "https://lh3.googleusercontent.com/d/1mVTPHOrCLGSY2g_ZdrDhyMXakE9mpdNU=w800",
  t4: "https://lh3.googleusercontent.com/d/1FaeW0E0_SRmQJDmxEfuEXgRZfok8-pH6=w800",
  t5: "https://lh3.googleusercontent.com/d/1bf6kihtMe8OBp3K2DBsHmwE4I1vkhF7G=w800",
  t6: "https://lh3.googleusercontent.com/d/1ZcigxGw_aQYDvxll_H661yBqH8WBOHTA=w800",
  band: "https://lh3.googleusercontent.com/d/1yftox_y1Z0bYncvHbubgsQarVym77ewF=w1600",
  g1: "https://lh3.googleusercontent.com/d/1LrisAc6vF_dN8DHygFnMt07uyk6notma=w1000",
  g2: "https://lh3.googleusercontent.com/d/1hQMX7zjLwHHMECmx5ME9x_6V2ZN3-ep9=w800",
  g3: "https://lh3.googleusercontent.com/d/1ZcigxGw_aQYDvxll_H661yBqH8WBOHTA=w800",
  g4: "https://lh3.googleusercontent.com/d/1bf6kihtMe8OBp3K2DBsHmwE4I1vkhF7G=w800",
  g5: "https://lh3.googleusercontent.com/d/1FaeW0E0_SRmQJDmxEfuEXgRZfok8-pH6=w800",
  c1: "https://lh3.googleusercontent.com/d/1mVTPHOrCLGSY2g_ZdrDhyMXakE9mpdNU=w800",
  c2: "https://lh3.googleusercontent.com/d/16nSZu-3tEiGJdEmZgBay1JjVCJj0_mOg=w800",
  c3: "https://lh3.googleusercontent.com/d/1FaeW0E0_SRmQJDmxEfuEXgRZfok8-pH6=w800",
  c4: "https://lh3.googleusercontent.com/d/1yl91uX7Fp1MfuPGVBULsu0Ru_DL6cqB8=w800"
};

const MENU = [
  { name: "Idli, Sambar & Chutney", description: "Soft steamed idlis with homemade sambar and fresh coconut chutney. A light, comforting start to the week.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80", status: "Monday", tags: ["Veg"] },
  { name: "Veg Upma / Semiya & Chutney", description: "Fluffy upma or semiya cooked with mild spices, served with chutney. Simple home-style breakfast.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80", status: "Tuesday", tags: ["Veg"] },
  { name: "Pongal, Sambar, Chutney & Vada", description: "Creamy ven pongal tempered with ghee and pepper, with sambar, chutney and crisp vada.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80", status: "Wednesday", tags: ["Veg"] },
  { name: "Dosa & Kadala Curry", description: "Crisp dosa paired with spicy black chickpea (kadala) curry — a classic combination.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=800&q=80", status: "Thursday", tags: ["Veg"] },
  { name: "Idiyappam, Coconut Milk & Kuruma", description: "Soft string hoppers with sweet coconut milk and vegetable kuruma on the side.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=800&q=80", status: "Friday", tags: ["Veg"] },
  { name: "Poori Masala", description: "Puffed pooris with soft potato masala. A favourite weekend breakfast.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80", status: "Saturday", tags: ["Veg"] },
  { name: "Appam, Coconut Milk & Paya", description: "Lacy appams with coconut milk and paya. Sunday special from the kitchen.", price: "Morning", category: "Morning", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80", status: "Sunday", tags: ["Non-veg option"] },
  { name: "Satham, Moor Kolambu & Sides", description: "Rice with moor kolambu, veg fry, appalam and pickle — everyday Tamil comfort on a plate.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80", status: "Monday", tags: ["Veg"] },
  { name: "Full South Indian Lunch", description: "Satham with sambar, kootu, veg fry, rasam, moor and appalam. A complete home lunch.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80", status: "Tuesday", tags: ["Veg"] },
  { name: "Satham with Egg / Non-Veg Curry", description: "Rice with egg curry or non-veg curry, appalam and rasam. Non-veg day at the kitchen.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80", status: "Wednesday", tags: ["Non-veg"] },
  { name: "Variety Rice, Veg Fry & Egg Fry", description: "Flavourful variety rice with vegetable fry and egg fry on the side.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80", status: "Thursday", tags: ["Non-veg option"] },
  { name: "Veg Biryani Combo", description: "Fragrant veg biryani with fry, raita and a small sweet. Friday favourite.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80", status: "Friday", tags: ["Veg"] },
  { name: "Jeera Rice, Dal Tadka & Veg Fry", description: "Aromatic jeera rice with dal tadka and seasonal veg fry.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80", status: "Saturday", tags: ["Veg"] },
  { name: "Biryani Combo", description: "Sunday biryani combo — the full treat from Jashu's kitchen.", price: "Lunch", category: "Lunch", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80", status: "Sunday", tags: ["Non-veg option"] },
  { name: "Chapathi & Kuruma", description: "Soft chapathis with vegetable kuruma. Light and satisfying.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80", status: "Monday", tags: ["Veg"] },
  { name: "Kal Dosa & Empty Salna", description: "Kal dosa with empty salna — simple, flavourful dinner.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80", status: "Tuesday", tags: ["Veg"] },
  { name: "Aloo Paratha & Green Chutney", description: "Stuffed aloo paratha with fresh green chutney. Homestyle and filling.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80", status: "Wednesday", tags: ["Veg"] },
  { name: "Idli & Tomato Kuruma", description: "Soft idlis with tomato kuruma for a gentle evening meal.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80", status: "Thursday", tags: ["Veg"] },
  { name: "Veg Kichadi & Chutney", description: "Comforting vegetable kichadi with chutney. Easy on the stomach.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80", status: "Friday", tags: ["Veg"] },
  { name: "Parotta, Salna & Omelette", description: "Flaky parotta with salna and omelette. Saturday night comfort.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80", status: "Saturday", tags: ["Non-veg option"] },
  { name: "Uthappam & Kuruma", description: "Thick uthappam with kuruma. A relaxed Sunday dinner.", price: "Dinner", category: "Dinner", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80", status: "Sunday", tags: ["Veg"] }
];

const CHAPTERS = [
  ["The idea", "Everyday South Indian meals cooked the way families eat at home — generous portions, clean ingredients and no fuss."],
  ["The food", "A full weekly menu for morning, lunch and dinner. Mostly vegetarian, with non-veg options on request."],
  ["How it works", "Choose breakfast, lunch or dinner on a weekly or monthly plan. Pause or change anytime. Just message us on WhatsApp."],
  ["Where we are", "Based in Keelkattalai, Chennai. Call or WhatsApp 6385153008 for orders and dietary preferences."]
];

/* Prices from kitchen flyers: B ₹75/day, L ₹100/day, D ₹75/day */
const SUBSCRIPTION = [
  {
    name: "Breakfast",
    price: "₹525",
    period: "per week · ₹75 / day",
    desc: "Morning tiffin every day — idli, dosa, pongal, upma, poori, appam and more. Monthly full-meal plans also available.",
    image: "https://lh3.googleusercontent.com/d/1LrisAc6vF_dN8DHygFnMt07uyk6notma=w800",
    tags: ["Veg", "₹75 / day"]
  },
  {
    name: "Lunch",
    price: "₹700",
    period: "per week · ₹100 / day",
    desc: "Full midday meals — rice, variety rice, biryani combos with sides. Non-veg options on request.",
    image: "https://lh3.googleusercontent.com/d/1hQMX7zjLwHHMECmx5ME9x_6V2ZN3-ep9=w800",
    tags: ["Veg", "₹100 / day"]
  },
  {
    name: "Dinner",
    price: "₹525",
    period: "per week · ₹75 / day",
    desc: "Evening comfort — chapathi, parotta, dosa, idli and uthappam with kuruma.",
    image: "https://lh3.googleusercontent.com/d/1mVTPHOrCLGSY2g_ZdrDhyMXakE9mpdNU=w800",
    tags: ["Veg", "₹75 / day"]
  }
];
