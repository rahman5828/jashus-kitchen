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
// Menu: category is Meals | Snacks | Specials | Sweet (rename freely). status and tags are optional, e.g. status:"Available today", tags:["Veg"].
// Photos default to assets/images/menu-01.jpg ... menu-08.jpg. Delete ph:1 once a dish is real.
const MENU=["Meals","Meals","Snacks","Snacks","Specials","Specials","Sweet","Sweet"].map((category,i)=>({name:"[Dish name]",description:"[Description]",price:"[Price]",category,image:"assets/images/menu-"+String(i+1).padStart(2,"0")+".jpg",status:"",tags:[],ph:1}));
const CHAPTERS=[["The idea","[Why Jashu’s Kitchen exists. One honest sentence.]"],["The food","[What the kitchen cooks and what makes it its own.]"],["The people","[Who is in the kitchen.]"],["The place","[Keelkattalai: where the food is made and why it’s home.]"]];
