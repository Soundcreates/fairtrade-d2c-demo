export type Product = {
  id: string; sku: string; brand: string; title: string; category: string; categoryLabel: string;
  price: number; mrp: number; rating: number; reviews: number; badge?: string; image: string;
  gallery: string[]; sizes: string[]; colors: string[]; stock: number; seller: string;
  material: string; fit: string; occasion: string;
};

const photos = [
  "photo-1539109136881-3be0616acf4b", "photo-1529139574466-a303027c1d8b", "photo-1515886657613-9f3515b0c78f", "photo-1525507119028-ed4c629a60a3",
  "photo-1490481651871-ab68de25d43d", "photo-1483985988355-763728e1935b", "photo-1539533018447-63fcce2678e3", "photo-1485230895905-ec40ba36b9bc",
  "photo-1503342217505-b0a15ec3261c", "photo-1521572163474-6864f9cf17ab", "photo-1527719327859-c6ce80353573", "photo-1503341504253-dff4815485f1",
  "photo-1598033129183-c4f50c736f10", "photo-1596755094514-f87e34085b2c", "photo-1603252109303-2751441dd157", "photo-1602810318383-e386cc2a3ccf",
  "photo-1542291026-7eec264c27ff", "photo-1543163521-1bf539c55dd2", "photo-1549298916-b41d501d3772", "photo-1600185365483-26d7a4cc7519",
  "photo-1523275335684-37898b6baf30", "photo-1524592094714-0f0654e20314", "photo-1524805444758-089113d48a6d", "photo-1584917865442-de89df76afd3",
  "photo-1590874103328-eac38a683ce7", "photo-1548036328-c9fa89d128fa", "photo-1608248543803-ba4f8c70ae0b", "photo-1596462502278-27bfdc403348",
  "photo-1556229010-6c3f2c9ca5f8", "photo-1611930022073-b7a4ba5fcccd", "photo-1519689680058-324335c77eba", "photo-1519238263530-99bdd11df2ea",
  "photo-1600210492486-724fe5c67fb0", "photo-1616486338812-3dadae4b4ace", "photo-1618221195710-dd6b41faaea6", "photo-1511499767150-a48a237f0083",
  "photo-1503919005314-30d93d07d823", "photo-1516627145497-ae6968895b74",
];

const image = (index: number, width = 850) => `https://images.unsplash.com/${photos[index]}?auto=format&fit=crop&w=${width}&q=84`;
const sizeSet = ["XS", "S", "M", "L", "XL", "XXL"];
const rows: Array<[string, string, string, string, number, number, string | undefined, string, string, string]> = [
  ["BA-WOM-1042", "Biba", "Printed Straight Kurta", "women", 1299, 2599, "BESTSELLER", "Cotton blend", "Straight", "Everyday"],
  ["BA-WOM-1035", "ONLY", "Floral Wrap Midi Dress", "women", 1899, 3799, "TRENDING", "Viscose", "Regular", "Weekend"],
  ["BA-WOM-1108", "Sangria", "Embroidered Anarkali Set", "women", 2499, 4999, "NEW", "Rayon", "Flared", "Festive"],
  ["BA-WOM-1172", "Vero Moda", "High-Rise Wide Leg Jeans", "women", 1799, 3599, undefined, "Denim", "Wide leg", "Casual"],
  ["BA-WOM-1219", "DressBerry", "Textured Co-ord Set", "women", 1599, 3199, "LIMITED", "Poly blend", "Relaxed", "Travel"],
  ["BA-WOM-1230", "Biba", "Printed Cotton Kurta Set", "women", 1999, 3999, undefined, "Cotton", "Straight", "Workwear"],
  ["BA-WOM-1255", "ONLY", "Ribbed Knit Sweater", "women", 1499, 2999, "NEW", "Acrylic", "Relaxed", "Winter"],
  ["BA-WOM-1288", "Sangria", "Floral Tiered Maxi Dress", "women", 2199, 4399, undefined, "Georgette", "Flared", "Party"],
  ["BA-MEN-2214", "Roadster", "Men Relaxed Fit Cotton Shirt", "men", 899, 1799, "BESTSELLER", "Cotton", "Relaxed", "Casual"],
  ["BA-MEN-2227", "Levi's", "Men Graphic Crew Neck T-Shirt", "men", 799, 1599, "TRENDING", "Cotton", "Regular", "Everyday"],
  ["BA-MEN-2245", "Allen Solly", "Slim Fit Oxford Shirt", "men", 1499, 2999, undefined, "Cotton", "Slim", "Workwear"],
  ["BA-MEN-2282", "Roadster", "Men Solid Oversized T-Shirt", "men", 699, 1399, "NEW", "Cotton", "Oversized", "Streetwear"],
  ["BA-MEN-2319", "Levi's", "511 Slim Fit Mid-Rise Jeans", "men", 2299, 4599, "LIMITED", "Denim", "Slim", "Casual"],
  ["BA-MEN-2344", "Puma", "Essentials Track Jacket", "men", 1999, 3999, undefined, "Polyester", "Regular", "Athleisure"],
  ["BA-MEN-2390", "Allen Solly", "Textured Polo T-Shirt", "men", 1099, 2199, undefined, "Cotton blend", "Regular", "Smart casual"],
  ["BA-MEN-2408", "Roadster", "Checked Casual Shirt", "men", 1199, 2399, "NEW", "Cotton", "Regular", "Weekend"],
  ["BA-FTW-3001", "Nike", "Air Max Pulse Sneakers", "footwear", 10795, 11995, "TRENDING", "Mesh and suede", "Regular", "Running"],
  ["BA-FTW-3024", "Puma", "Caven 2.0 Sneakers", "footwear", 4499, 7499, "BESTSELLER", "Synthetic leather", "Regular", "Everyday"],
  ["BA-FTW-3048", "Adidas", "Runfalcon 3.0 Running Shoes", "footwear", 3999, 5999, undefined, "Mesh", "Regular", "Training"],
  ["BA-FTW-3093", "Metro", "Block Heel Sandals", "footwear", 1699, 3399, "NEW", "Synthetic", "Regular", "Occasion"],
  ["BA-ACC-4102", "Fossil", "Minimalist Leather Watch", "accessories", 8995, 12995, "LIMITED", "Stainless steel", "One size", "Everyday"],
  ["BA-ACC-4125", "Titan", "Neo Analog Watch", "accessories", 3495, 4995, "BESTSELLER", "Stainless steel", "One size", "Workwear"],
  ["BA-ACC-4171", "Casio", "Vintage Digital Watch", "accessories", 2995, 3995, undefined, "Resin", "One size", "Casual"],
  ["BA-ACC-4207", "Lavie", "Structured Tote Bag", "accessories", 1999, 3999, "TRENDING", "Faux leather", "One size", "Workwear"],
  ["BA-ACC-4229", "Lavie", "Mini Crossbody Bag", "accessories", 1499, 2999, "NEW", "Faux leather", "One size", "Weekend"],
  ["BA-ACC-4266", "Caprese", "Quilted Shoulder Bag", "accessories", 2599, 5199, undefined, "Vegan leather", "One size", "Party"],
  ["BA-BEA-5008", "Plum", "Hydrating Skincare Set", "beauty", 899, 1299, "BESTSELLER", "Plant-derived", "Set of 3", "Daily care"],
  ["BA-BEA-5031", "Minimalist", "Vitamin C Face Serum", "beauty", 599, 699, "TRENDING", "Vitamin C", "30 ml", "Daily care"],
  ["BA-BEA-5056", "Maybelline", "Fit Me Matte Foundation", "beauty", 499, 699, undefined, "Liquid", "30 ml", "Makeup"],
  ["BA-BEA-5098", "The Face Shop", "Rice Water Cleanser", "beauty", 699, 1099, "NEW", "Rice extract", "150 ml", "Daily care"],
  ["BA-KID-6104", "H&M Kids", "Cotton Graphic T-Shirt", "kids", 499, 799, "BESTSELLER", "Cotton", "Regular", "Everyday"],
  ["BA-KID-6136", "U.S. Polo Assn.", "Kids Denim Dungarees", "kids", 1299, 2599, "NEW", "Denim", "Regular", "Weekend"],
  ["BA-HOM-7001", "Home Centre", "Textured Cushion Cover Set", "home", 799, 1499, undefined, "Cotton", "Set of 2", "Living room"],
  ["BA-HOM-7048", "Home Centre", "Ceramic Table Lamp", "home", 1899, 2999, "LIMITED", "Ceramic", "One size", "Home"],
  ["BA-HOM-7077", "Spaces", "Printed Cotton Bedsheet Set", "home", 1599, 2999, "NEW", "Cotton", "Queen", "Bedroom"],
  ["BA-ACC-4301", "Fastrack", "Aviator Sunglasses", "accessories", 1299, 2599, "TRENDING", "Acetate", "One size", "Travel"],
];

const photoGroup = (index: number, category: string) => category === "accessories"
  ? index >= 20 && index <= 22 ? "watches" : index >= 23 && index <= 25 ? "bags" : "accessories"
  : category;
const productGallery = (index: number, category: string) => {
  const sameStyle = rows.map((_, i) => i).filter(i => i !== index && photoGroup(i, rows[i][3]) === photoGroup(index, category));
  const sameCategory = rows.map((_, i) => i).filter(i => i !== index && rows[i][3] === category);
  const kidsExtras = category === "kids" ? [36, 37] : [];
  return [index, ...sameStyle, ...sameCategory, ...kidsExtras].slice(0, 4).map(image);
};

export const products: Product[] = rows.map(([sku, brand, title, category, price, mrp, badge, material, fit, occasion], i) => ({
  id: sku.toLowerCase(), sku, brand, title, category,
  categoryLabel: ({ women: "Women's Fashion", men: "Men's Fashion", footwear: "Footwear", accessories: "Accessories", beauty: "Beauty", kids: "Kids", home: "Home & Living" } as Record<string, string>)[category],
  price, mrp, rating: Number((4.1 + (i % 9) * 0.1).toFixed(1)), reviews: [142, 82, 1200, 423, 96, 780, 215, 1420][i % 8], badge: badge || undefined,
  image: image(i), gallery: productGallery(i, category),
  sizes: category === "footwear" ? ["6", "7", "8", "9", "10", "11"] : category === "beauty" || category === "home" || category === "accessories" ? [fit === "One size" ? "One Size" : fit] : sizeSet,
  colors: ["#232323", "#d8b7aa", "#5b1647"], stock: [18, 42, 8, 31, 3, 26, 15, 9][i % 8], seller: i % 4 === 0 ? "Brand Avenue Retail" : ["Style Square Retail LLP", "Urban Thread Co.", "Northstar Lifestyle", "Brand Avenue Retail"][i % 4],
  material, fit, occasion,
}));

export const categories = [
  { label: "Women", slug: "women", image: image(1, 500) }, { label: "Men", slug: "men", image: image(2, 500) },
  { label: "Kids", slug: "kids", image: image(33, 500) }, { label: "Footwear", slug: "footwear", image: image(16, 500) },
  { label: "Beauty", slug: "beauty", image: image(28, 500) }, { label: "Watches", slug: "accessories", image: image(20, 500) },
  { label: "Bags", slug: "accessories", image: image(24, 500) }, { label: "Home", slug: "home", image: image(34, 500) },
];

export const stores = [
  { name: "Brand Avenue - Phoenix Marketcity", city: "Mumbai", address: "LBS Road, Kurla West, Mumbai, Maharashtra 400070", manager: "Rohan Mehta", code: "MUM-PHX", products: 18429, stock: 84210, orders: 184, pos: "Connected", sync: "2 min ago", status: "Active", distance: "6.2 km", hours: "11:00 AM – 10:00 PM", phone: "+91 22 6180 4100" },
  { name: "Brand Avenue - Viviana Mall", city: "Thane", address: "Eastern Express Highway, Thane West, Maharashtra 400606", manager: "Aditi Nair", code: "THN-VIV", products: 14382, stock: 62400, orders: 126, pos: "Delayed", sync: "12 min ago", status: "Active", distance: "3.7 km", hours: "11:00 AM – 10:00 PM", phone: "+91 22 6170 2200" },
  { name: "Brand Avenue - Infiniti Mall", city: "Mumbai", address: "New Link Road, Malad West, Mumbai, Maharashtra 400064", manager: "Kabir Shah", code: "MUM-INF", products: 15940, stock: 71980, orders: 142, pos: "Connected", sync: "4 min ago", status: "Active", distance: "8.2 km", hours: "11:00 AM – 10:00 PM", phone: "+91 22 6780 9000" },
  { name: "Brand Avenue - Nexus Seawoods", city: "Navi Mumbai", address: "Seawoods Grand Central, Sector 40, Nerul, Navi Mumbai 400706", manager: "Priya Kulkarni", code: "NVM-SEA", products: 13268, stock: 58210, orders: 98, pos: "Connected", sync: "3 min ago", status: "Active", distance: "12.4 km", hours: "11:00 AM – 10:00 PM", phone: "+91 22 6170 3110" },
  { name: "Brand Avenue - Phoenix Pune", city: "Pune", address: "Viman Nagar, Pune, Maharashtra 411014", manager: "Neha Joshi", code: "PUN-PHX", products: 12650, stock: 51420, orders: 87, pos: "Connected", sync: "5 min ago", status: "Active", distance: "149 km", hours: "11:00 AM – 10:00 PM", phone: "+91 20 6689 4100" },
  { name: "Brand Avenue - Select Citywalk", city: "Delhi", address: "Saket District Centre, New Delhi 110017", manager: "Arjun Bhatia", code: "DEL-SCW", products: 17824, stock: 79610, orders: 173, pos: "Connected", sync: "2 min ago", status: "Active", distance: "1,150 km", hours: "11:00 AM – 10:00 PM", phone: "+91 11 4211 1700" },
  { name: "Brand Avenue - Orion Mall", city: "Bengaluru", address: "Dr Rajkumar Road, Rajajinagar, Bengaluru 560055", manager: "Meera Rao", code: "BLR-ORI", products: 15004, stock: 65380, orders: 112, pos: "Offline", sync: "46 min ago", status: "Active", distance: "980 km", hours: "11:00 AM – 10:00 PM", phone: "+91 80 6724 2000" },
  { name: "Brand Avenue - Inorbit Cyberabad", city: "Hyderabad", address: "APIIC Software Layout, Madhapur, Hyderabad 500081", manager: "Vikram Reddy", code: "HYD-INO", products: 13990, stock: 60240, orders: 105, pos: "Connected", sync: "3 min ago", status: "Active", distance: "710 km", hours: "11:00 AM – 10:00 PM", phone: "+91 40 6722 7800" },
];

const sellerRows: Array<[string, string, string, number, number, number, number, string, string]> = [
  ["Style Square Retail LLP", "SEL-2401", "Women's Fashion", 486, 324, 2840000, 4.7, "98.2%", "Active"],
  ["Urban Thread Co.", "SEL-2402", "Men's Fashion", 328, 286, 1960000, 4.5, "96.8%", "Active"],
  ["Northstar Lifestyle", "SEL-2403", "Footwear", 214, 248, 4150000, 4.8, "99.1%", "Active"],
  ["Natura Beauty House", "SEL-2404", "Beauty", 142, 186, 1280000, 4.4, "94.6%", "Active"],
  ["Everyday Living India", "SEL-2405", "Home & Living", 196, 98, 840000, 4.2, "91.8%", "Active"],
  ["Aarohi Ethnic Studio", "SEL-2406", "Ethnic Wear", 268, 142, 1740000, 4.6, "97.2%", "Active"],
  ["Stride Sports India", "SEL-2407", "Sportswear", 132, 119, 2370000, 4.3, "92.4%", "Pending"],
  ["Little Lane Kids", "SEL-2408", "Kids", 174, 87, 620000, 4.5, "96.1%", "Active"],
  ["Canvas & Co.", "SEL-2409", "Accessories", 96, 44, 390000, 4.1, "89.5%", "Pending"],
  ["Metro Footwear House", "SEL-2410", "Footwear", 88, 62, 760000, 3.9, "86.4%", "Suspended"],
];
export const sellers = sellerRows.map(([name, id, category, products, orders, gmv, rating, sla, status]) => ({ name, id, category, products, orders, gmv, rating, sla, status }));

const customerRows: Array<[string, string, string, number, number]> = [
  ["Aarav Sharma", "Mumbai", "aarav.sharma@email.com", 12, 28450], ["Diya Iyer", "Thane", "diya.iyer@email.com", 8, 18240],
  ["Vivaan Patel", "Pune", "vivaan.patel@email.com", 5, 11980], ["Ananya Rao", "Bengaluru", "ananya.rao@email.com", 16, 42800],
  ["Ishaan Gupta", "Delhi", "ishaan.gupta@email.com", 3, 6420], ["Meera Nair", "Navi Mumbai", "meera.nair@email.com", 9, 22650],
  ["Kabir Desai", "Ahmedabad", "kabir.desai@email.com", 4, 8750], ["Saanvi Reddy", "Hyderabad", "saanvi.reddy@email.com", 7, 16490],
  ["Arjun Menon", "Chennai", "arjun.menon@email.com", 11, 31900], ["Kiara Shah", "Mumbai", "kiara.shah@email.com", 2, 3890],
  ["Reyansh Kulkarni", "Pune", "reyansh.k@email.com", 6, 13780], ["Myra Banerjee", "Kolkata", "myra.b@email.com", 13, 36200],
  ["Advik Joshi", "Thane", "advik.j@email.com", 1, 2199], ["Zoya Khan", "Delhi", "zoya.khan@email.com", 4, 9850], ["Ayaan Verma", "Bengaluru", "ayaan.v@email.com", 10, 24800],
];
export const customers = customerRows.map(([name, city, email, orders, spend], i) => ({ name, city, email, orders, spend, phone: `+91 98${String(43012000 + i * 73519).slice(0, 8)}`, loyalty: ["Gold", "Silver", "Platinum"][i % 3], status: i === 10 ? "Inactive" : "Active" }));

export const orders = Array.from({ length: 20 }, (_, i) => {
  const states = ["Processing", "Packed", "Shipped", "Delivered", "Delivered", "Out for Delivery", "Cancelled", "Returned"];
  const product = products[(i * 3 + 8) % products.length];
  return {
    id: `BA${10298423 + i}`, customer: customers[i % customers.length].name, date: `0${(i % 8) + 1} Oct 2026`,
    items: i % 3 + 1, product: product.title, sku: product.sku, productId: product.id,
    amount: [1299, 2798, 10795, 3498, 1899, 4599, 899, 5397][i % 8],
    source: i % 4 === 0 ? "Marketplace" : "Brand Avenue", fulfilment: i % 5 === 0 ? "Seller Delivery" : i % 4 === 0 ? "Store Pickup" : "Store Delivery",
    store: stores[i % stores.length].name, payment: i % 4 === 0 ? "UPI" : i % 4 === 1 ? "Card" : i % 4 === 2 ? "COD" : "Wallet",
    status: states[i % states.length], city: customers[i % customers.length].city,
  };
});

export const promotions = [
  { name: "Festive Sale", code: "FESTIVE20", type: "20% OFF", category: "All Categories", status: "Active", uses: 2840, ends: "20 Oct 2026" },
  { name: "Women's Weekend", code: "WEEKEND2+1", type: "Buy 2 Get 1", category: "Women's Fashion", status: "Active", uses: 963, ends: "12 Oct 2026" },
  { name: "Avenue First", code: "AVENUE10", type: "10% OFF", category: "All Categories", status: "Active", uses: 4206, ends: "31 Dec 2026" },
  { name: "New User Offer", code: "WELCOME200", type: "₹200 OFF", category: "All Categories", status: "Scheduled", uses: 0, ends: "31 Dec 2026" },
];

export const reviews = [
  { name: "Rhea Kapoor", city: "Mumbai", date: "2 Oct 2026", rating: 5, title: "Even better in person", body: "The fabric feels premium and the fit is exactly as described. Delivery was quick too." },
  { name: "Mihir Shah", city: "Thane", date: "28 Sep 2026", rating: 4, title: "Great everyday pick", body: "Good quality for the price. I would have loved one more colour option." },
  { name: "Pooja Menon", city: "Pune", date: "21 Sep 2026", rating: 5, title: "Lovely quality", body: "Looks just like the pictures. The store pickup option made it super convenient." },
];
