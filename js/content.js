/* ===== EDIT ME: all site content lives here ===== */
const CONFIG={
  phone:"",               // "+91XXXXXXXXXX" turns on every Call button
  palette:"ivory",        // ivory | terracotta | forest | midnight | oxblood
  paletteSwitcher:true    // set false before launch to hide the palette picker
};
// Photos: drop JPGs named after these keys into assets/images/ (hero.jpg, t1.jpg ... g5.jpg, c1.jpg ...),
// or point any key at a full URL. Missing files fall back to the styled placeholder automatically.
const IMG_KEYS="hero d1 t1 t2 t3 t4 t5 t6 band g1 g2 g3 g4 g5 c1 c2 c3 c4".split(" ");
const IMAGES=Object.fromEntries(IMG_KEYS.map(k=>[k,"assets/images/"+k+".jpg"]));
// Menu: category is Meals | Snacks | Specials | Sweet (rename freely). status and tags are optional.
const MENU=[
  {name:"Chicken Biryani",description:"Fragrant basmati layered with slow-cooked chicken, whole spices and saffron. Served with raita.",price:"₹280",category:"Meals",image:"assets/images/menu-01.jpg",status:"Popular",tags:["Non-veg"],ph:1},
  {name:"Vegetable Kurma + Parotta",description:"Soft flaky parottas with a rich coconut-cashew vegetable kurma. Home-style comfort.",price:"₹160",category:"Meals",image:"assets/images/menu-02.jpg",status:"",tags:["Veg"],ph:1},
  {name:"Egg Roast",description:"Soft-boiled eggs in a thick, spicy onion-tomato masala. Best with appam or bread.",price:"₹120",category:"Snacks",image:"assets/images/menu-03.jpg",status:"",tags:["Non-veg"],ph:1},
  {name:"Medu Vada (4 pcs)",description:"Crisp lentil doughnuts, golden and airy inside. Served with coconut chutney & sambar.",price:"₹90",category:"Snacks",image:"assets/images/menu-04.jpg",status:"Available today",tags:["Veg"],ph:1},
  {name:"Fish Fry",description:"Fresh catch marinated in coastal spices, shallow-fried until the edges crisp.",price:"₹320",category:"Specials",image:"assets/images/menu-05.jpg",status:"Weekend only",tags:["Non-veg"],ph:1},
  {name:"Mutton Pepper Fry",description:"Tender mutton tossed with cracked pepper, curry leaves and a dark, intense masala.",price:"₹380",category:"Specials",image:"assets/images/menu-06.jpg",status:"",tags:["Non-veg"],ph:1},
  {name:"Payasam",description:"Creamy rice payasam finished with ghee-roasted cashews and cardamom.",price:"₹80",category:"Sweet",image:"assets/images/menu-07.jpg",status:"",tags:["Veg"],ph:1},
  {name:"Gulab Jamun (2 pcs)",description:"Soft milk solids dumplings soaked in warm rose-cardamom syrup.",price:"₹60",category:"Sweet",image:"assets/images/menu-08.jpg",status:"",tags:["Veg"],ph:1}
];
const CHAPTERS=[
  ["The idea","A Keelkattalai kitchen that cooks the way families eat — generous, honest and full of the spices we grew up with."],
  ["The food","Everyday South Indian comfort and a few special plates. Nothing overcomplicated, everything made to order."],
  ["The people","Jashu and the small team who turn the same recipes into something people keep coming back for."],
  ["The place","Keelkattalai, Chennai. Orders go out from a real home kitchen — phone or Instagram, no fuss."]
];
