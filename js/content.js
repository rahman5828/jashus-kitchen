/* ===== EDIT ME: all site content lives here ===== */
const CONFIG={
  phone:"+916385153008",
  palette:"ivory",
  paletteSwitcher:true
};

// Section / mood images (Unsplash — replace with your own photos later)
const IMAGES={
  hero:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80",
  d1:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
  t1:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",
  t2:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",
  t3:"https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80",
  t4:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
  t5:"https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
  t6:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  band:"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=1600&q=80",
  g1:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1000&q=80",
  g2:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80",
  g3:"https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=600&q=80",
  g4:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
  g5:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  c1:"https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",
  c2:"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80",
  c3:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  c4:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80"
};

// Weekly menu with food images
const MENU=[
  {name:"Idli, Sambar & Chutney",description:"Soft idlis with fresh sambar and coconut chutney. Classic Monday morning start.",price:"Morning",category:"Morning",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",status:"Monday",tags:["Veg"],ph:0},
  {name:"Veg Upma / Semiya & Chutney",description:"Light upma or semiya with chutney. Simple and filling.",price:"Morning",category:"Morning",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",status:"Tuesday",tags:["Veg"],ph:0},
  {name:"Pongal, Sambar, Chutney & Vada",description:"Ven pongal with sambar, chutney and crisp vada.",price:"Morning",category:"Morning",image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",status:"Wednesday",tags:["Veg"],ph:0},
  {name:"Dosa & Kadala Curry",description:"Crisp dosa paired with spicy kadala curry.",price:"Morning",category:"Morning",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5972?w=800&q=80",status:"Thursday",tags:["Veg"],ph:0},
  {name:"Idiyappam, Coconut Milk & Kuruma",description:"Soft string hoppers with coconut milk and vegetable kuruma.",price:"Morning",category:"Morning",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80",status:"Friday",tags:["Veg"],ph:0},
  {name:"Poori Masala",description:"Fluffy pooris with potato masala.",price:"Morning",category:"Morning",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",status:"Saturday",tags:["Veg"],ph:0},
  {name:"Appam, Coconut Milk & Paya",description:"Soft appams with coconut milk and paya. Sunday special.",price:"Morning",category:"Morning",image:"https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&q=80",status:"Sunday",tags:["Non-veg option"],ph:0},

  {name:"Satham, Moor Kolambu & Sides",description:"Rice with moor kolambu, veg fry, appalam and pickle.",price:"Lunch",category:"Lunch",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",status:"Monday",tags:["Veg"],ph:0},
  {name:"Full South Indian Lunch",description:"Satham, sambar, kootu, veg fry, rasam, moor and appalam.",price:"Lunch",category:"Lunch",image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",status:"Tuesday",tags:["Veg"],ph:0},
  {name:"Satham with Egg / Non-Veg Curry",description:"Rice with egg curry or non-veg curry, appalam and rasam.",price:"Lunch",category:"Lunch",image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",status:"Wednesday",tags:["Non-veg"],ph:0},
  {name:"Variety Rice, Veg Fry & Egg Fry",description:"Variety rice with veg fry and egg fry.",price:"Lunch",category:"Lunch",image:"https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80",status:"Thursday",tags:["Non-veg option"],ph:0},
  {name:"Veg Biryani Combo",description:"Veg biryani with fry, raita and sweet.",price:"Lunch",category:"Lunch",image:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",status:"Friday",tags:["Veg"],ph:0},
  {name:"Jeera Rice, Dal Tadka & Veg Fry",description:"Fragrant jeera rice with dal tadka and veg fry.",price:"Lunch",category:"Lunch",image:"https://images.unsplash.com/photo-1589302168069-af59e3a5a58c?w=800&q=80",status:"Saturday",tags:["Veg"],ph:0},
  {name:"Biryani Combo",description:"Sunday biryani combo — the full treat.",price:"Lunch",category:"Lunch",image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&q=80",status:"Sunday",tags:["Non-veg option"],ph:0},

  {name:"Chapathi & Kuruma",description:"Soft chapathis with vegetable kuruma.",price:"Dinner",category:"Dinner",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",status:"Monday",tags:["Veg"],ph:0},
  {name:"Kal Dosa & Empty Salna",description:"Kal dosa with empty salna.",price:"Dinner",category:"Dinner",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5972?w=800&q=80",status:"Tuesday",tags:["Veg"],ph:0},
  {name:"Aloo Paratha & Green Chutney",description:"Stuffed aloo paratha with fresh green chutney.",price:"Dinner",category:"Dinner",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",status:"Wednesday",tags:["Veg"],ph:0},
  {name:"Idli & Tomato Kuruma",description:"Idlis with tomato kuruma.",price:"Dinner",category:"Dinner",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",status:"Thursday",tags:["Veg"],ph:0},
  {name:"Veg Kichadi & Chutney",description:"Comforting veg kichadi with chutney.",price:"Dinner",category:"Dinner",image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80",status:"Friday",tags:["Veg"],ph:0},
  {name:"Parotta, Salna & Omelette",description:"Flaky parotta with salna and omelette.",price:"Dinner",category:"Dinner",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80",status:"Saturday",tags:["Non-veg option"],ph:0},
  {name:"Uthappam & Kuruma",description:"Thick uthappam with kuruma.",price:"Dinner",category:"Dinner",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5972?w=800&q=80",status:"Sunday",tags:["Veg"],ph:0}
];

const CHAPTERS=[
  ["The idea","Homely food, healthy food, happy you. Everyday South Indian meals cooked the way families eat — generous, clean and made with love."],
  ["The food","A full weekly menu for morning, lunch and dinner. Veg by default, non-veg options on request. Fresh ingredients, no preservatives."],
  ["How it works","Weekly or monthly subscription for breakfast, lunch or dinner. Customise, pause or change your plan anytime. WhatsApp for dietary preferences."],
  ["The place","Keelkattalai, Chennai. Orders and queries on WhatsApp or call — 6385153008."]
];

const SUBSCRIPTION=[
  {name:"Breakfast",price:"₹700",period:"per week / month plan",desc:"Morning tiffin every day. Idli, dosa, pongal, upma, poori, appam & more.",image:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&q=80",tags:["Veg","Non-veg on request"]},
  {name:"Lunch",price:"₹1050",period:"per week / month plan",desc:"Full midday meals — satham, variety rice, biryani combos with sides.",image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",tags:["Veg","Non-veg on request"]},
  {name:"Dinner",price:"₹700",period:"per week / month plan",desc:"Evening comfort — chapathi, parotta, dosa, idli, uthappam with kuruma & more.",image:"https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=800&q=80",tags:["Veg","Non-veg on request"]}
];
