/* ===== Site content — edit here ===== */
const CONFIG = {
  phone: "+916385153008",
  palette: "ivory",
  paletteSwitcher: false
};

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/d/1yftox_y1Z0bYncvHbubgsQarVym77ewF=w1600",
  d1: "https://lh3.googleusercontent.com/d/1ZcigxGw_aQYDvxll_H661yBqH8WBOHTA=w1200",
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
  {
    name: "Idli, Sambar & Chutney",
    description: "Soft steamed idlis with homemade sambar and fresh coconut chutney. A light, comforting start to the week.",
    price: "Morning", category: "Morning",
    image: "https://lh3.googleusercontent.com/d/1LrisAc6vF_dN8DHygFnMt07uyk6notma=w800",
    status: "Monday", tags: ["Veg"]
  },
  {
    name: "Veg Upma / Semiya & Chutney",
    description: "Fluffy upma or semiya cooked with mild spices, served with chutney. Simple home-style breakfast.",
    price: "Morning", category: "Morning",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Semiya_upma.jpg/960px-Semiya_upma.jpg",
    status: "Tuesday", tags: ["Veg"]
  },
  {
    name: "Pongal, Sambar, Chutney & Vada",
    description: "Creamy ven pongal tempered with ghee and pepper, with sambar, chutney and crisp vada.",
    price: "Morning", category: "Morning",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Ven_pongal.jpg/960px-Ven_pongal.jpg",
    status: "Wednesday", tags: ["Veg"]
  },
  {
    name: "Dosa & Kadala Curry",
    description: "Crisp dosa paired with spicy black chickpea (kadala) curry — a classic combination.",
    price: "Morning", category: "Morning",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Dosa_with_chutney_and_sambar_traditionally_served_in_banana_leaf.jpg/960px-Dosa_with_chutney_and_sambar_traditionally_served_in_banana_leaf.jpg",
    status: "Thursday", tags: ["Veg"]
  },
  {
    name: "Idiyappam, Coconut Milk & Kuruma",
    description: "Soft string hoppers with sweet coconut milk and vegetable kuruma on the side.",
    price: "Morning", category: "Morning",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Idiyappam_-_Kerala.jpg/960px-Idiyappam_-_Kerala.jpg",
    status: "Friday", tags: ["Veg"]
  },
  {
    name: "Poori Masala",
    description: "Puffed pooris with soft potato masala. A favourite weekend breakfast.",
    price: "Morning", category: "Morning",
    image: "https://lh3.googleusercontent.com/d/1mVTPHOrCLGSY2g_ZdrDhyMXakE9mpdNU=w800",
    status: "Saturday", tags: ["Veg"]
  },
  {
    name: "Appam, Coconut Milk & Paya",
    description: "Lacy appams with coconut milk and paya. Sunday special from the kitchen.",
    price: "Morning", category: "Morning",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Palappam.jpg/960px-Palappam.jpg",
    status: "Sunday", tags: ["Non-veg option"]
  },
  {
    name: "Satham, Moor Kolambu & Sides",
    description: "Rice with moor kolambu, veg fry, appalam and pickle — everyday Tamil comfort on a plate.",
    price: "Lunch", category: "Lunch",
    image: "https://lh3.googleusercontent.com/d/1ZcigxGw_aQYDvxll_H661yBqH8WBOHTA=w800",
    status: "Monday", tags: ["Veg"]
  },
  {
    name: "Full South Indian Lunch",
    description: "Satham with sambar, kootu, veg fry, rasam, moor and appalam. A complete home lunch.",
    price: "Lunch", category: "Lunch",
    image: "https://lh3.googleusercontent.com/d/1ZcigxGw_aQYDvxll_H661yBqH8WBOHTA=w800",
    status: "Tuesday", tags: ["Veg"]
  },
  {
    name: "Satham with Egg / Non-Veg Curry",
    description: "Rice with egg curry or non-veg curry, appalam and rasam. Non-veg day at the kitchen.",
    price: "Lunch", category: "Lunch",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Egg_curry%2C_dahl_and_rice_%28423243840%29.jpg/960px-Egg_curry%2C_dahl_and_rice_%28423243840%29.jpg",
    status: "Wednesday", tags: ["Non-veg"]
  },
  {
    name: "Variety Rice, Veg Fry & Egg Fry",
    description: "Flavourful variety rice with vegetable fry and egg fry on the side.",
    price: "Lunch", category: "Lunch",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Egg_Fried_Rice.jpg/960px-Egg_Fried_Rice.jpg",
    status: "Thursday", tags: ["Non-veg option"]
  },
  {
    name: "Veg Biryani Combo",
    description: "Fragrant veg biryani with fry, raita and a small sweet. Friday favourite.",
    price: "Lunch", category: "Lunch",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    status: "Friday", tags: ["Veg"]
  },
  {
    name: "Jeera Rice, Dal Tadka & Veg Fry",
    description: "Aromatic jeera rice with dal tadka and seasonal veg fry.",
    price: "Lunch", category: "Lunch",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Jeera_rice.jpg/960px-Jeera_rice.jpg",
    status: "Saturday", tags: ["Veg"]
  },
  {
    name: "Biryani Combo",
    description: "Sunday biryani combo — the full treat from Jashu's kitchen.",
    price: "Lunch", category: "Lunch",
    image: "https://lh3.googleusercontent.com/d/1hQMX7zjLwHHMECmx5ME9x_6V2ZN3-ep9=w1000",
    status: "Sunday", tags: ["Non-veg option"]
  },
  {
    name: "Chapathi & Kuruma",
    description: "Soft chapathis with vegetable kuruma. Light and satisfying.",
    price: "Dinner", category: "Dinner",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Chapati.jpg/960px-Chapati.jpg",
    status: "Monday", tags: ["Veg"]
  },
  {
    name: "Kal Dosa & Empty Salna",
    description: "Kal dosa with empty salna — simple, flavourful dinner.",
    price: "Dinner", category: "Dinner",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Masala_Dosa_in_Banana_Leaf_with_Chutney.jpg/960px-Masala_Dosa_in_Banana_Leaf_with_Chutney.jpg",
    status: "Tuesday", tags: ["Veg"]
  },
  {
    name: "Aloo Paratha & Green Chutney",
    description: "Stuffed aloo paratha with fresh green chutney. Homestyle and filling.",
    price: "Dinner", category: "Dinner",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Aloo_paratha.jpg/960px-Aloo_paratha.jpg",
    status: "Wednesday", tags: ["Veg"]
  },
  {
    name: "Idli & Tomato Kuruma",
    description: "Soft idlis with tomato kuruma for a gentle evening meal.",
    price: "Dinner", category: "Dinner",
    image: "https://lh3.googleusercontent.com/d/1LrisAc6vF_dN8DHygFnMt07uyk6notma=w800",
    status: "Thursday", tags: ["Veg"]
  },
  {
    name: "Veg Kichadi & Chutney",
    description: "Comforting vegetable kichadi with chutney. Easy on the stomach.",
    price: "Dinner", category: "Dinner",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Khichdi.jpg/960px-Khichdi.jpg",
    status: "Friday", tags: ["Veg"]
  },
  {
    name: "Parotta, Salna & Omelette",
    description: "Flaky parotta with salna and omelette. Saturday night comfort.",
    price: "Dinner", category: "Dinner",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Parotta_in_Salem.jpg/960px-Parotta_in_Salem.jpg",
    status: "Saturday", tags: ["Non-veg option"]
  },
  {
    name: "Uthappam & Kuruma",
    description: "Thick uthappam with kuruma. A relaxed Sunday dinner.",
    price: "Dinner", category: "Dinner",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Onion_Uttappam_01.jpg/960px-Onion_Uttappam_01.jpg",
    status: "Sunday", tags: ["Veg"]
  }
];

const CHAPTERS = [
  ["The idea", "Everyday South Indian meals cooked the way families eat at home — generous portions, clean ingredients and no fuss."],
  ["The food", "A full weekly menu for morning, lunch and dinner. Mostly vegetarian, with non-veg options on request."],
  ["How it works", "Choose breakfast, lunch or dinner on a weekly or monthly plan. Pause or change anytime. Just message us on WhatsApp."],
  ["Where we are", "Based in Keelkattalai, Chennai. Call or WhatsApp 6385153008 for orders and dietary preferences."]
];

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
