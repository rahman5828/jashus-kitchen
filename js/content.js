/* ===== EDIT ME: all site content lives here ===== */
const CONFIG={
  phone:"+916385153008",  // WhatsApp / call
  palette:"ivory",        // ivory | terracotta | forest | midnight | oxblood
  paletteSwitcher:true    // set false before launch to hide the palette picker
};
// Photos: drop JPGs named after these keys into assets/images/ (hero.jpg, t1.jpg ... g5.jpg, c1.jpg ...),
// or point any key at a full URL. Missing files fall back to the styled placeholder automatically.
const IMG_KEYS="hero d1 t1 t2 t3 t4 t5 t6 band g1 g2 g3 g4 g5 c1 c2 c3 c4".split(" ");
const IMAGES=Object.fromEntries(IMG_KEYS.map(k=>[k,"assets/images/"+k+".jpg"]));

// Weekly home-style menu (from Jashu's Kitchen flyer)
const MENU=[
  // Morning
  {name:"Idli, Sambar & Chutney",description:"Soft idlis with fresh sambar and coconut chutney. Classic Monday morning start.",price:"Morning",category:"Morning",image:"assets/images/menu-01.jpg",status:"Monday",tags:["Veg"],ph:1},
  {name:"Veg Upma / Semiya & Chutney",description:"Light upma or semiya with chutney. Simple and filling.",price:"Morning",category:"Morning",image:"assets/images/menu-02.jpg",status:"Tuesday",tags:["Veg"],ph:1},
  {name:"Pongal, Sambar, Chutney & Vada",description:"Ven pongal with sambar, chutney and crisp vada.",price:"Morning",category:"Morning",image:"assets/images/menu-03.jpg",status:"Wednesday",tags:["Veg"],ph:1},
  {name:"Dosa & Kadala Curry",description:"Crisp dosa paired with spicy kadala curry.",price:"Morning",category:"Morning",image:"assets/images/menu-04.jpg",status:"Thursday",tags:["Veg"],ph:1},
  {name:"Idiyappam, Coconut Milk & Kuruma",description:"Soft string hoppers with coconut milk and vegetable kuruma.",price:"Morning",category:"Morning",image:"assets/images/menu-05.jpg",status:"Friday",tags:["Veg"],ph:1},
  {name:"Poori Masala",description:"Fluffy pooris with potato masala.",price:"Morning",category:"Morning",image:"assets/images/menu-06.jpg",status:"Saturday",tags:["Veg"],ph:1},
  {name:"Appam, Coconut Milk & Paya",description:"Soft appams with coconut milk and paya. Sunday special.",price:"Morning",category:"Morning",image:"assets/images/menu-07.jpg",status:"Sunday",tags:["Non-veg option"],ph:1},

  // Lunch
  {name:"Satham, Moor Kolambu & Sides",description:"Rice with moor kolambu, veg fry, appalam and pickle.",price:"Lunch",category:"Lunch",image:"assets/images/menu-08.jpg",status:"Monday",tags:["Veg"],ph:1},
  {name:"Full South Indian Lunch",description:"Satham, sambar, kootu, veg fry, rasam, moor and appalam.",price:"Lunch",category:"Lunch",image:"assets/images/menu-01.jpg",status:"Tuesday",tags:["Veg"],ph:1},
  {name:"Satham with Egg / Non-Veg Curry",description:"Rice with egg curry or non-veg curry, appalam and rasam.",price:"Lunch",category:"Lunch",image:"assets/images/menu-02.jpg",status:"Wednesday",tags:["Non-veg"],ph:1},
  {name:"Variety Rice, Veg Fry & Egg Fry",description:"Variety rice with veg fry and egg fry.",price:"Lunch",category:"Lunch",image:"assets/images/menu-03.jpg",status:"Thursday",tags:["Non-veg option"],ph:1},
  {name:"Veg Biryani Combo",description:"Veg biryani with fry, raita and sweet.",price:"Lunch",category:"Lunch",image:"assets/images/menu-04.jpg",status:"Friday",tags:["Veg"],ph:1},
  {name:"Jeera Rice, Dal Tadka & Veg Fry",description:"Fragrant jeera rice with dal tadka and veg fry.",price:"Lunch",category:"Lunch",image:"assets/images/menu-05.jpg",status:"Saturday",tags:["Veg"],ph:1},
  {name:"Biryani Combo",description:"Sunday biryani combo — the full treat.",price:"Lunch",category:"Lunch",image:"assets/images/menu-06.jpg",status:"Sunday",tags:["Non-veg option"],ph:1},

  // Dinner
  {name:"Chapathi & Kuruma",description:"Soft chapathis with vegetable kuruma.",price:"Dinner",category:"Dinner",image:"assets/images/menu-07.jpg",status:"Monday",tags:["Veg"],ph:1},
  {name:"Kal Dosa & Empty Salna",description:"Kal dosa with empty salna.",price:"Dinner",category:"Dinner",image:"assets/images/menu-08.jpg",status:"Tuesday",tags:["Veg"],ph:1},
  {name:"Aloo Paratha & Green Chutney",description:"Stuffed aloo paratha with fresh green chutney.",price:"Dinner",category:"Dinner",image:"assets/images/menu-01.jpg",status:"Wednesday",tags:["Veg"],ph:1},
  {name:"Idli & Tomato Kuruma",description:"Idlis with tomato kuruma.",price:"Dinner",category:"Dinner",image:"assets/images/menu-02.jpg",status:"Thursday",tags:["Veg"],ph:1},
  {name:"Veg Kichadi & Chutney",description:"Comforting veg kichadi with chutney.",price:"Dinner",category:"Dinner",image:"assets/images/menu-03.jpg",status:"Friday",tags:["Veg"],ph:1},
  {name:"Parotta, Salna & Omelette",description:"Flaky parotta with salna and omelette.",price:"Dinner",category:"Dinner",image:"assets/images/menu-04.jpg",status:"Saturday",tags:["Non-veg option"],ph:1},
  {name:"Uthappam & Kuruma",description:"Thick uthappam with kuruma.",price:"Dinner",category:"Dinner",image:"assets/images/menu-05.jpg",status:"Sunday",tags:["Veg"],ph:1}
];

const CHAPTERS=[
  ["The idea","Homely food, healthy food, happy you. Everyday South Indian meals cooked the way families eat — generous, clean and made with love."],
  ["The food","A full weekly menu for morning, lunch and dinner. Veg by default, non-veg options on request. Fresh ingredients, no preservatives."],
  ["How it works","Weekly or monthly subscription for breakfast, lunch or dinner. Customise, pause or change your plan anytime. WhatsApp for dietary preferences."],
  ["The place","Keelkattalai, Chennai. Orders and queries on WhatsApp or call — 6385153008."]
];

// Subscription rates (from flyer)
const SUBSCRIPTION={
  breakfast:"₹700",
  lunch:"₹1050",
  dinner:"₹700",
  note:"Veg meals included in all plans. Non-veg options available on request with menu & price adjustment."
};
