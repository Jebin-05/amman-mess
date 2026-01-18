// Category images for Swiggy-style tiles - Accurate dish-specific images
const categoryImages = {
  // Spring Roll - Crispy vegetable spring rolls
  springRoll: 'https://images.unsplash.com/photo-1548507200-81e9c0920d0b?w=400&h=300&fit=crop',

  // 65 Varieties - Gobi 65 / Paneer 65 (crispy fried with red masala)
  special65: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',

  // Starters - Indian Pakoda/Fritters
  starters: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',

  // Dry & Fry - Gobi Manchurian / Chilli dishes (Indo-Chinese)
  dryFry: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=300&fit=crop',

  // Noodles & Rice - Hakka Noodles / Fried Rice
  noodlesRice: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',

  // Soup - Hot vegetable soup in bowl
  soup: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',

  // Biryani & Pulao - Vegetable Biryani with aromatic rice
  biryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',

  // Parotta - Kerala layered flatbread (flaky layers)
  parotta: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',

  // Chapathi - Indian whole wheat flatbread/roti
  chapathi: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',

  // Idiyappam - String hoppers (white rice noodle nests)
  idiyappam: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',

  // Idli Fry - Crispy fried idli pieces with masala
  idliFry: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop',

  // Gravy - Paneer Butter Masala / Rich curry
  gravy: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',

  // Kadai & Kofta - Kadai Paneer / Malai Kofta in gravy
  kadaiKofta: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',

  // Tandoori & Kulcha - Naan bread / Tandoori breads
  tandoori: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',

  // Meals - South Indian Thali (banana leaf meals)
  meals: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',

  // Dosa - Crispy Masala Dosa with potato filling
  dosa: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop',

  // South Indian - Idli with sambar and chutney
  southIndian: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop',

  // Uttapam - Thick savory pancake with onion toppings
  uttapam: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
};

export const categories = [
  { id: 'all', name: 'All', emoji: '🍽️', tamilName: 'அனைத்தும்' },
  { id: 'spring-roll', name: 'Spring Roll & Fry', emoji: '🌯', tamilName: 'ஸ்பிரிங் ரோல்', image: categoryImages.springRoll, itemCount: 6 },
  { id: 'special-65', name: '65 Varieties', emoji: '🌶️', tamilName: '65 வகைகள்', image: categoryImages.special65, itemCount: 4 },
  { id: 'starters', name: 'Starters', emoji: '🍽️', tamilName: 'ஸ்டார்டர்ஸ்', image: categoryImages.starters, itemCount: 6 },
  { id: 'dry-fry', name: 'Dry & Fry', emoji: '🔥', tamilName: 'டிரை & ஃப்ரை', image: categoryImages.dryFry, itemCount: 18 },
  { id: 'noodles-rice', name: 'Noodles & Rice', emoji: '🍜', tamilName: 'நூடுல்ஸ் & ரைஸ்', image: categoryImages.noodlesRice, itemCount: 19 },
  { id: 'soup', name: 'Soup Bowl', emoji: '🍲', tamilName: 'சூப்', image: categoryImages.soup, itemCount: 6 },
  { id: 'biryani', name: 'Biryani & Pulao', emoji: '🍚', tamilName: 'பிரியாணி & புலாவ்', image: categoryImages.biryani, itemCount: 12 },
  { id: 'parotta', name: 'Parotta', emoji: '🫓', tamilName: 'பரோட்டா', image: categoryImages.parotta, itemCount: 6 },
  { id: 'chapathi', name: 'Chapathi', emoji: '🫓', tamilName: 'சப்பாத்தி', image: categoryImages.chapathi, itemCount: 4 },
  { id: 'idiyappam', name: 'Idiyappam', emoji: '🍛', tamilName: 'இடியாப்பம்', image: categoryImages.idiyappam, itemCount: 6 },
  { id: 'idli-fry', name: 'Idli Fry', emoji: '🍥', tamilName: 'இட்லி ஃப்ரை', image: categoryImages.idliFry, itemCount: 9 },
  { id: 'gravy', name: 'Gravy', emoji: '🍛', tamilName: 'கிரேவி', image: categoryImages.gravy, itemCount: 15 },
  { id: 'kadai-kofta', name: 'Kadai & Kofta', emoji: '🍲', tamilName: 'கடாய் & கோஃப்தா', image: categoryImages.kadaiKofta, itemCount: 7 },
  { id: 'tandoori', name: 'Tandoori & Kulcha', emoji: '🔥', tamilName: 'தந்தூரி & குல்ச்சா', image: categoryImages.tandoori, itemCount: 15 },
  { id: 'meals', name: 'Lunch SPL Meals', emoji: '🍽️', tamilName: 'மதிய உணவு', image: categoryImages.meals, itemCount: 8 },
  { id: 'dosa', name: 'Amman SPL Dosa', emoji: '🥞', tamilName: 'அம்மன் தோசை', image: categoryImages.dosa, itemCount: 8 },
  { id: 'south-indian', name: 'South Indian', emoji: '🌙', tamilName: 'தென்னிந்திய உணவு', image: categoryImages.southIndian, itemCount: 26 },
  { id: 'uttapam', name: 'Uttapam', emoji: '🫓', tamilName: 'ஊத்தப்பம்', image: categoryImages.uttapam, itemCount: 10 },
];

// Production-grade curated image URLs for specific dish types
const images = {
  // ============ SPRING ROLL & FRY CATEGORY ============
  // French Fries - Golden crispy fries
  frenchFries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
  // Spring Roll - Crispy vegetable spring rolls
  springRoll: 'https://images.unsplash.com/photo-1548507200-81e9c0920d0b?w=400&h=300&fit=crop',
  // Veg Omelette - Fluffy egg omelette with veggies
  vegOmelette: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',

  // ============ 65 VARIETIES CATEGORY ============
  // Gobi 65 - Crispy fried cauliflower with red spices
  gobi65: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
  // Baby Corn 65 - Crispy fried baby corn
  babyCorn65: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
  // Mushroom 65 - Crispy fried mushroom with spices
  mushroom65: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400&h=300&fit=crop',
  // Paneer 65 - Crispy fried paneer with red masala
  paneer65: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',

  // ============ STARTERS CATEGORY ============
  // Pakoda - Indian deep fried fritters
  pakoda: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
  // Paneer Pakoda - Paneer fritters
  paneerPakoda: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
  // Paneer Tikka - Grilled marinated paneer
  paneerTikka: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',

  // ============ DRY & FRY CATEGORY ============
  // Manchurian - Indo-Chinese crispy balls in sauce
  manchurian: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400&h=300&fit=crop',
  // Chilli Paneer - Spicy Indo-Chinese paneer
  chilliPaneer: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
  // Mushroom Fry - Stir fried mushroom
  mushroomFry: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=400&h=300&fit=crop',
  // Paneer Bhurji - Scrambled spiced paneer
  paneerBhurji: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',

  // ============ NOODLES & RICE CATEGORY ============
  // Veg Noodles - Stir fried noodles with vegetables
  vegNoodles: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
  // Schezwan Noodles - Spicy red noodles
  schezwanNoodles: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
  // Hakka Noodles - Classic Indo-Chinese noodles
  hakkaNoodles: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
  // Fried Rice - Vegetable fried rice
  friedRice: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
  // Schezwan Rice - Spicy red fried rice
  schezwanRice: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop',

  // ============ SOUP CATEGORY ============
  // Veg Soup - Clear vegetable soup
  vegSoup: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
  // Mushroom Soup - Creamy mushroom soup
  mushroomSoup: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop',
  // Hot & Sour Soup - Spicy tangy soup
  hotSourSoup: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop',

  // ============ BIRYANI & PULAO CATEGORY ============
  // Veg Biryani - Fragrant rice with vegetables and spices
  vegBiryani: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop',
  // Hyderabadi Biryani - Authentic dum biryani style
  hyderabadiBiryani: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
  // Pulao - Mild spiced rice with vegetables
  pulao: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',

  // ============ PAROTTA CATEGORY ============
  // Parotta - Kerala style layered flaky flatbread
  parotta: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',

  // ============ CHAPATHI CATEGORY ============
  // Chapathi - Soft whole wheat Indian flatbread
  chapathi: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',

  // ============ IDIYAPPAM CATEGORY ============
  // Idiyappam - String hoppers (white rice noodle nests)
  idiyappam: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',

  // ============ IDLI FRY CATEGORY ============
  // Idli - Soft steamed rice cakes
  idli: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop',

  // ============ GRAVY CATEGORY ============
  // Aloo Masala - Spiced potato curry
  alooMasala: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=400&h=300&fit=crop',
  // Paneer Butter Masala - Creamy tomato paneer curry
  paneerButterMasala: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
  // Dal Tadka - Tempered yellow lentils
  dalTadka: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
  // Mix Veg Curry - Mixed vegetable curry
  mixVegCurry: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
  // Chana Masala - Spiced chickpea curry
  chanaMasala: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',

  // ============ KADAI & KOFTA CATEGORY ============
  // Kadai Paneer - Paneer in spiced bell pepper gravy
  kadaiPaneer: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
  // Malai Kofta - Creamy dumpling curry
  malaiKofta: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',

  // ============ TANDOORI & KULCHA CATEGORY ============
  // Naan - Tandoor baked leavened bread
  naan: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
  // Butter Naan - Buttery soft naan bread
  butterNaan: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
  // Garlic Naan - Garlic flavored naan
  garlicNaan: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
  // Kulcha - Stuffed leavened bread
  kulcha: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
  // Roti - Whole wheat tandoor bread
  roti: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',

  // ============ MEALS CATEGORY ============
  // South Indian Meals - Full thali with rice and sides
  southIndianMeals: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
  // Lemon Rice - Tangy turmeric lemon rice
  lemonRice: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
  // Curd Rice - Cooling yogurt rice
  curdRice: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',

  // ============ DOSA CATEGORY ============
  // Plain Dosa - Crispy fermented rice crepe
  dosa: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop',
  // Masala Dosa - Dosa with spiced potato filling
  masalaDosa: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop',
  // Rava Dosa - Crispy semolina dosa
  ravaDosa: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop',

  // ============ SOUTH INDIAN EVENING CATEGORY ============
  // Uttapam - Thick savory pancake with toppings
  uttapam: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
  // Pongal - Creamy rice and lentil dish
  pongal: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
  // Poori - Puffed deep fried bread
  poori: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
};

export const menuItems = [
  // Special Spring Roll & Fry (12:30 PM – 10:30 PM)
  { id: 'sr-001', name: 'French Fry', tamilName: 'பிரெஞ்ச் ஃப்ரை', description: 'Crispy golden french fries', price: 150, category: 'spring-roll', isVeg: true, isBestseller: true, placeholderColor: '#FFD700', emoji: '🍟', preparationTime: '10-12 min', image: images.frenchFries },
  { id: 'sr-002', name: 'Veg Spring Roll', tamilName: 'காய்கறி ஸ்பிரிங் ரோல்', description: 'Crispy rolls stuffed with mixed vegetables', price: 180, category: 'spring-roll', isVeg: true, isBestseller: true, placeholderColor: '#FFA500', emoji: '🌯', preparationTime: '12-15 min', image: images.springRoll },
  { id: 'sr-003', name: 'Baby Corn Spring Roll', tamilName: 'பேபி கார்ன் ஸ்பிரிங் ரோல்', description: 'Crispy rolls with baby corn filling', price: 180, category: 'spring-roll', isVeg: true, isBestseller: false, placeholderColor: '#FFEB3B', emoji: '🌯', preparationTime: '12-15 min', image: images.springRoll },
  { id: 'sr-004', name: 'Mushroom Spring Roll', tamilName: 'காளான் ஸ்பிரிங் ரோல்', description: 'Crispy rolls with mushroom stuffing', price: 180, category: 'spring-roll', isVeg: true, isBestseller: false, placeholderColor: '#D7CCC8', emoji: '🌯', preparationTime: '12-15 min', image: images.springRoll },
  { id: 'sr-005', name: 'Paneer Spring Roll', tamilName: 'பன்னீர் ஸ்பிரிங் ரோல்', description: 'Crispy rolls with paneer filling', price: 180, category: 'spring-roll', isVeg: true, isBestseller: true, placeholderColor: '#FFF9C4', emoji: '🌯', preparationTime: '12-15 min', image: images.springRoll },
  { id: 'sr-006', name: 'Veg Omelette', tamilName: 'காய்கறி ஆம்லெட்', description: 'Fluffy vegetable omelette', price: 80, category: 'spring-roll', isVeg: true, isBestseller: false, placeholderColor: '#FFCC80', emoji: '🍳', preparationTime: '8-10 min', image: images.vegOmelette },

  // Special 65 (12:30 PM – 10:30 PM)
  { id: '65-001', name: 'Gobi 65', tamilName: 'கோபி 65', description: 'Crispy fried cauliflower with spices', price: 160, category: 'special-65', isVeg: true, isBestseller: true, placeholderColor: '#FF5722', emoji: '🌶️', preparationTime: '12-15 min', image: images.gobi65 },
  { id: '65-002', name: 'Baby Corn 65', tamilName: 'பேபி கார்ன் 65', description: 'Crispy fried baby corn with spices', price: 160, category: 'special-65', isVeg: true, isBestseller: true, placeholderColor: '#FF7043', emoji: '🌶️', preparationTime: '12-15 min', image: images.babyCorn65 },
  { id: '65-003', name: 'Mushroom 65', tamilName: 'காளான் 65', description: 'Crispy fried mushroom with spices', price: 160, category: 'special-65', isVeg: true, isBestseller: false, placeholderColor: '#FF8A65', emoji: '🌶️', preparationTime: '12-15 min', image: images.mushroom65 },
  { id: '65-004', name: 'Paneer 65', tamilName: 'பன்னீர் 65', description: 'Crispy fried paneer with spices', price: 180, category: 'special-65', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🌶️', preparationTime: '12-15 min', image: images.paneer65 },

  // Special Starters (12:30 PM – 10:30 PM)
  { id: 'st-001', name: 'Gobi Pakoda', tamilName: 'கோபி பக்கோடா', description: 'Crispy cauliflower fritters', price: 170, category: 'starters', isVeg: true, isBestseller: true, placeholderColor: '#FFB74D', emoji: '🍽️', preparationTime: '10-12 min', image: images.pakoda },
  { id: 'st-002', name: 'Baby Corn Pakoda', tamilName: 'பேபி கார்ன் பக்கோடா', description: 'Crispy baby corn fritters', price: 170, category: 'starters', isVeg: true, isBestseller: false, placeholderColor: '#FFD54F', emoji: '🍽️', preparationTime: '10-12 min', image: images.pakoda },
  { id: 'st-003', name: 'Mushroom Pakoda', tamilName: 'காளான் பக்கோடா', description: 'Crispy mushroom fritters', price: 170, category: 'starters', isVeg: true, isBestseller: false, placeholderColor: '#BCAAA4', emoji: '🍽️', preparationTime: '10-12 min', image: images.pakoda },
  { id: 'st-004', name: 'Paneer Pakoda', tamilName: 'பன்னீர் பக்கோடா', description: 'Crispy paneer fritters', price: 180, category: 'starters', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍽️', preparationTime: '10-12 min', image: images.paneerPakoda },
  { id: 'st-005', name: 'Paneer Tikka', tamilName: 'பன்னீர் டிக்கா', description: 'Grilled marinated paneer cubes', price: 190, category: 'starters', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🍢', preparationTime: '15-18 min', image: images.paneerTikka },
  { id: 'st-006', name: 'Cashew Pakoda', tamilName: 'முந்திரி பக்கோடா', description: 'Crispy cashew fritters', price: 200, category: 'starters', isVeg: true, isBestseller: false, placeholderColor: '#FFCC80', emoji: '🥜', preparationTime: '10-12 min', image: images.pakoda },

  // Special Dry & Fry (12:30 PM – 10:30 PM)
  { id: 'df-001', name: 'Gobi Dragon Fry', tamilName: 'கோபி டிராகன் ஃப்ரை', description: 'Spicy dragon style cauliflower', price: 170, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#F44336', emoji: '🔥', preparationTime: '12-15 min', image: images.manchurian },
  { id: 'df-002', name: 'Baby Corn Dragon Fry', tamilName: 'பேபி கார்ன் டிராகன் ஃப்ரை', description: 'Spicy dragon style baby corn', price: 180, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#E53935', emoji: '🔥', preparationTime: '12-15 min', image: images.babyCorn65 },
  { id: 'df-003', name: 'Mushroom Dragon Fry', tamilName: 'காளான் டிராகன் ஃப்ரை', description: 'Spicy dragon style mushroom', price: 180, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#D32F2F', emoji: '🔥', preparationTime: '12-15 min', image: images.mushroomFry },
  { id: 'df-004', name: 'Paneer Dragon Fry', tamilName: 'பன்னீர் டிராகன் ஃப்ரை', description: 'Spicy dragon style paneer', price: 190, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#C62828', emoji: '🔥', preparationTime: '12-15 min', image: images.chilliPaneer },
  { id: 'df-005', name: 'Mushroom Chukka', tamilName: 'காளான் சுக்கா', description: 'Dry spiced mushroom preparation', price: 180, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#8D6E63', emoji: '🍄', preparationTime: '12-15 min', image: images.mushroomFry },
  { id: 'df-006', name: 'Mushroom Pepper Fry', tamilName: 'காளான் மிளகு வறுவல்', description: 'Mushroom with black pepper', price: 180, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#6D4C41', emoji: '🍄', preparationTime: '12-15 min', image: images.mushroomFry },
  { id: 'df-007', name: 'Paneer Pepper Fry', tamilName: 'பன்னீர் மிளகு வறுவல்', description: 'Paneer with black pepper', price: 190, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#5D4037', emoji: '🧀', preparationTime: '12-15 min', image: images.chilliPaneer },
  { id: 'df-008', name: 'Ginger Garlic Paneer', tamilName: 'இஞ்சி பூண்டு பன்னீர்', description: 'Paneer with ginger garlic sauce', price: 190, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#FFC107', emoji: '🧀', preparationTime: '12-15 min', image: images.chilliPaneer },
  { id: 'df-009', name: 'Paneer 555', tamilName: 'பன்னீர் 555', description: 'Special spiced paneer preparation', price: 190, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#FF9800', emoji: '🧀', preparationTime: '12-15 min', image: images.chilliPaneer },
  { id: 'df-010', name: 'Gobi Manchurian', tamilName: 'கோபி மஞ்சூரியன்', description: 'Indo-Chinese cauliflower in manchurian sauce', price: 170, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#FF5722', emoji: '🥡', preparationTime: '12-15 min', image: images.manchurian },
  { id: 'df-011', name: 'Baby Corn Manchurian', tamilName: 'பேபி கார்ன் மஞ்சூரியன்', description: 'Baby corn in manchurian sauce', price: 180, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#FF7043', emoji: '🥡', preparationTime: '12-15 min', image: images.manchurian },
  { id: 'df-012', name: 'Mushroom Manchurian', tamilName: 'காளான் மஞ்சூரியன்', description: 'Mushroom in manchurian sauce', price: 180, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#FF8A65', emoji: '🥡', preparationTime: '12-15 min', image: images.manchurian },
  { id: 'df-013', name: 'Paneer Manchurian', tamilName: 'பன்னீர் மஞ்சூரியன்', description: 'Paneer in manchurian sauce', price: 190, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🥡', preparationTime: '12-15 min', image: images.manchurian },
  { id: 'df-014', name: 'Chilli Gobi', tamilName: 'சில்லி கோபி', description: 'Spicy Indo-Chinese cauliflower', price: 170, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#EF5350', emoji: '🌶️', preparationTime: '12-15 min', image: images.manchurian },
  { id: 'df-015', name: 'Chilli Baby Corn', tamilName: 'சில்லி பேபி கார்ன்', description: 'Spicy Indo-Chinese baby corn', price: 180, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#E57373', emoji: '🌶️', preparationTime: '12-15 min', image: images.babyCorn65 },
  { id: 'df-016', name: 'Chilli Mushroom', tamilName: 'சில்லி காளான்', description: 'Spicy Indo-Chinese mushroom', price: 180, category: 'dry-fry', isVeg: true, isBestseller: false, placeholderColor: '#EF9A9A', emoji: '🌶️', preparationTime: '12-15 min', image: images.mushroomFry },
  { id: 'df-017', name: 'Chilli Paneer', tamilName: 'சில்லி பன்னீர்', description: 'Spicy Indo-Chinese paneer', price: 190, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#FFCDD2', emoji: '🌶️', preparationTime: '12-15 min', image: images.chilliPaneer },
  { id: 'df-018', name: 'Paneer Bhurji', tamilName: 'பன்னீர் பூர்ஜி', description: 'Scrambled spiced paneer', price: 200, category: 'dry-fry', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🧀', preparationTime: '12-15 min', image: images.paneerBhurji },

  // Special Noodles / Fried Rice (12:30 PM – 10:30 PM)
  { id: 'nf-001', name: 'Veg Noodles', tamilName: 'காய்கறி நூடுல்ஸ்', description: 'Stir fried noodles with vegetables', price: 140, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFF176', emoji: '🍜', preparationTime: '12-15 min', image: images.vegNoodles },
  { id: 'nf-002', name: 'Veg Fried Rice', tamilName: 'காய்கறி ஃப்ரைட் ரைஸ்', description: 'Fried rice with mixed vegetables', price: 140, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍚', preparationTime: '12-15 min', image: images.friedRice },
  { id: 'nf-003', name: 'Gobi Noodles', tamilName: 'கோபி நூடுல்ஸ்', description: 'Noodles with cauliflower', price: 150, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#FFEE58', emoji: '🍜', preparationTime: '12-15 min', image: images.vegNoodles },
  { id: 'nf-004', name: 'Gobi Fried Rice', tamilName: 'கோபி ஃப்ரைட் ரைஸ்', description: 'Fried rice with cauliflower', price: 150, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#FFEB3B', emoji: '🍚', preparationTime: '12-15 min', image: images.friedRice },
  { id: 'nf-005', name: 'Baby Corn Noodles', tamilName: 'பேபி கார்ன் நூடுல்ஸ்', description: 'Noodles with baby corn', price: 150, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#FDD835', emoji: '🍜', preparationTime: '12-15 min', image: images.vegNoodles },
  { id: 'nf-006', name: 'Baby Corn Fried Rice', tamilName: 'பேபி கார்ன் ஃப்ரைட் ரைஸ்', description: 'Fried rice with baby corn', price: 150, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#FBC02D', emoji: '🍚', preparationTime: '12-15 min', image: images.friedRice },
  { id: 'nf-007', name: 'Mushroom Noodles', tamilName: 'காளான் நூடுல்ஸ்', description: 'Noodles with mushroom', price: 150, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#D7CCC8', emoji: '🍜', preparationTime: '12-15 min', image: images.vegNoodles },
  { id: 'nf-008', name: 'Mushroom Fried Rice', tamilName: 'காளான் ஃப்ரைட் ரைஸ்', description: 'Fried rice with mushroom', price: 150, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#BCAAA4', emoji: '🍚', preparationTime: '12-15 min', image: images.friedRice },
  { id: 'nf-009', name: 'Paneer Noodles', tamilName: 'பன்னீர் நூடுல்ஸ்', description: 'Noodles with paneer', price: 160, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFF9C4', emoji: '🍜', preparationTime: '12-15 min', image: images.vegNoodles },
  { id: 'nf-010', name: 'Paneer Fried Rice', tamilName: 'பன்னீர் ஃப்ரைட் ரைஸ்', description: 'Fried rice with paneer', price: 160, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍚', preparationTime: '12-15 min', image: images.friedRice },
  { id: 'nf-011', name: 'Schezwan Noodles', tamilName: 'செஷ்வான் நூடுல்ஸ்', description: 'Spicy schezwan style noodles', price: 160, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FF5722', emoji: '🍜', preparationTime: '12-15 min', image: images.schezwanNoodles },
  { id: 'nf-012', name: 'Schezwan Fried Rice', tamilName: 'செஷ்வான் ஃப்ரைட் ரைஸ்', description: 'Spicy schezwan fried rice', price: 160, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FF7043', emoji: '🍚', preparationTime: '12-15 min', image: images.schezwanRice },
  { id: 'nf-013', name: 'Schezwan Gobi Noodles', tamilName: 'செஷ்வான் கோபி நூடுல்ஸ்', description: 'Schezwan noodles with gobi', price: 170, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#FF8A65', emoji: '🍜', preparationTime: '12-15 min', image: images.schezwanNoodles },
  { id: 'nf-014', name: 'Schezwan Paneer Noodles', tamilName: 'செஷ்வான் பன்னீர் நூடுல்ஸ்', description: 'Schezwan noodles with paneer', price: 180, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🍜', preparationTime: '12-15 min', image: images.schezwanNoodles },
  { id: 'nf-015', name: 'Singapore Noodles', tamilName: 'சிங்கப்பூர் நூடுல்ஸ்', description: 'Singapore style spicy noodles', price: 165, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍜', preparationTime: '12-15 min', image: images.hakkaNoodles },
  { id: 'nf-016', name: 'Kashmiri Noodles', tamilName: 'காஷ்மீரி நூடுல்ஸ்', description: 'Sweet and mild noodles', price: 180, category: 'noodles-rice', isVeg: true, isBestseller: false, placeholderColor: '#FFE0B2', emoji: '🍜', preparationTime: '12-15 min', image: images.vegNoodles },
  { id: 'nf-017', name: 'Mixed Noodles', tamilName: 'மிக்ஸ்ட் நூடுல்ஸ்', description: 'Noodles with mixed toppings', price: 170, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFECB3', emoji: '🍜', preparationTime: '12-15 min', image: images.hakkaNoodles },
  { id: 'nf-018', name: 'Hong Kong Noodles', tamilName: 'ஹாங்காங் நூடுல்ஸ்', description: 'Crispy Hong Kong style noodles', price: 170, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFD54F', emoji: '🍜', preparationTime: '15-18 min', image: images.hakkaNoodles },
  { id: 'nf-019', name: 'Veg Hakka Noodles', tamilName: 'காய்கறி ஹக்கா நூடுல்ஸ்', description: 'Classic Hakka style noodles', price: 170, category: 'noodles-rice', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🍜', preparationTime: '12-15 min', image: images.hakkaNoodles },

  // Special Soup Bowl (3:00 PM – 10:30 PM)
  { id: 'sp-001', name: 'Veg Soup', tamilName: 'காய்கறி சூப்', description: 'Clear vegetable soup', price: 80, category: 'soup', isVeg: true, isBestseller: true, placeholderColor: '#A5D6A7', emoji: '🍲', preparationTime: '8-10 min', image: images.vegSoup },
  { id: 'sp-002', name: 'Garlic Soup', tamilName: 'பூண்டு சூப்', description: 'Aromatic garlic soup', price: 80, category: 'soup', isVeg: true, isBestseller: false, placeholderColor: '#C5E1A5', emoji: '🍲', preparationTime: '8-10 min', image: images.vegSoup },
  { id: 'sp-003', name: 'Cream of Mushroom Soup', tamilName: 'கிரீம் ஆஃப் மஷ்ரூம் சூப்', description: 'Creamy mushroom soup', price: 80, category: 'soup', isVeg: true, isBestseller: true, placeholderColor: '#D7CCC8', emoji: '🍲', preparationTime: '10-12 min', image: images.mushroomSoup },
  { id: 'sp-004', name: 'Milagu Dhaniya Soup', tamilName: 'மிளகு தனியா சூப்', description: 'Pepper coriander soup', price: 95, category: 'soup', isVeg: true, isBestseller: true, placeholderColor: '#BCAAA4', emoji: '🍲', preparationTime: '8-10 min', image: images.vegSoup },
  { id: 'sp-005', name: 'Hot & Sour Soup', tamilName: 'ஹாட் & சவர் சூப்', description: 'Spicy and tangy soup', price: 95, category: 'soup', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🍲', preparationTime: '10-12 min', image: images.hotSourSoup },
  { id: 'sp-006', name: 'Manchow Soup', tamilName: 'மான்சோ சூப்', description: 'Indo-Chinese style soup', price: 95, category: 'soup', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🍲', preparationTime: '10-12 min', image: images.hotSourSoup },

  // Special Biryani & Pulao (12:30 PM – 10:30 PM)
  { id: 'br-001', name: 'Spl Veg Biryani', tamilName: 'ஸ்பெஷல் காய்கறி பிரியாணி', description: 'Special vegetable biryani', price: 140, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#FFF176', emoji: '🍚', preparationTime: '18-22 min', image: images.vegBiryani },
  { id: 'br-002', name: 'Spl Mushroom Biryani', tamilName: 'ஸ்பெஷல் காளான் பிரியாணி', description: 'Mushroom loaded biryani', price: 160, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#D7CCC8', emoji: '🍚', preparationTime: '18-22 min', image: images.hyderabadiBiryani },
  { id: 'br-003', name: 'Spl Paneer Biryani', tamilName: 'ஸ்பெஷல் பன்னீர் பிரியாணி', description: 'Paneer loaded biryani', price: 170, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍚', preparationTime: '18-22 min', image: images.vegBiryani },
  { id: 'br-004', name: 'Spl Hyderabad Biryani', tamilName: 'ஸ்பெஷல் ஹைதராபாத் பிரியாணி', description: 'Authentic Hyderabadi style biryani', price: 180, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍚', preparationTime: '20-25 min', image: images.hyderabadiBiryani },
  { id: 'br-005', name: 'Spl Kashmiri Biryani', tamilName: 'ஸ்பெஷல் காஷ்மீரி பிரியாணி', description: 'Sweet and aromatic Kashmiri biryani', price: 190, category: 'biryani', isVeg: true, isBestseller: false, placeholderColor: '#FFE0B2', emoji: '🍚', preparationTime: '20-25 min', image: images.vegBiryani },
  { id: 'br-006', name: 'Spl Amman Biryani', tamilName: 'ஸ்பெஷல் அம்மன் பிரியாணி', description: 'House special signature biryani', price: 190, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🍚', preparationTime: '20-25 min', image: images.hyderabadiBiryani },
  { id: 'br-007', name: 'Veg Pulao', tamilName: 'காய்கறி புலாவ்', description: 'Fragrant vegetable pulao', price: 150, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#C8E6C9', emoji: '🍚', preparationTime: '15-18 min', image: images.pulao },
  { id: 'br-008', name: 'Green Peas Pulao', tamilName: 'பட்டாணி புலாவ்', description: 'Pulao with green peas', price: 150, category: 'biryani', isVeg: true, isBestseller: false, placeholderColor: '#A5D6A7', emoji: '🍚', preparationTime: '15-18 min', image: images.pulao },
  { id: 'br-009', name: 'Mushroom Pulao', tamilName: 'காளான் புலாவ்', description: 'Pulao with mushrooms', price: 160, category: 'biryani', isVeg: true, isBestseller: false, placeholderColor: '#BCAAA4', emoji: '🍚', preparationTime: '15-18 min', image: images.pulao },
  { id: 'br-010', name: 'Paneer Pulao', tamilName: 'பன்னீர் புலாவ்', description: 'Pulao with paneer', price: 170, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#FFF9C4', emoji: '🍚', preparationTime: '15-18 min', image: images.pulao },
  { id: 'br-011', name: 'Kashmiri Pulao', tamilName: 'காஷ்மீரி புலாவ்', description: 'Sweet Kashmiri style pulao', price: 180, category: 'biryani', isVeg: true, isBestseller: false, placeholderColor: '#FFECB3', emoji: '🍚', preparationTime: '15-18 min', image: images.pulao },
  { id: 'br-012', name: 'Amman Spl Pulao', tamilName: 'அம்மன் ஸ்பெஷல் புலாவ்', description: 'House special signature pulao', price: 190, category: 'biryani', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🍚', preparationTime: '18-22 min', image: images.pulao },

  // Special Parotta (12:30 PM – 10:30 PM)
  { id: 'pr-001', name: 'Parotta (1 Pc)', tamilName: 'பரோட்டா (1 பீஸ்)', description: 'Flaky layered parotta', price: 30, category: 'parotta', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🫓', preparationTime: '8-10 min', image: images.parotta },
  { id: 'pr-002', name: 'Mushroom Masala Parotta', tamilName: 'காளான் மசாலா பரோட்டா', description: 'Parotta with mushroom masala', price: 100, category: 'parotta', isVeg: true, isBestseller: false, placeholderColor: '#BCAAA4', emoji: '🫓', preparationTime: '12-15 min', image: images.parotta },
  { id: 'pr-003', name: 'Chilli Parotta', tamilName: 'சில்லி பரோட்டா', description: 'Spicy chilli parotta', price: 120, category: 'parotta', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🫓', preparationTime: '12-15 min', image: images.parotta },
  { id: 'pr-004', name: 'Green Peas Parotta', tamilName: 'பட்டாணி பரோட்டா', description: 'Parotta with green peas', price: 120, category: 'parotta', isVeg: true, isBestseller: false, placeholderColor: '#A5D6A7', emoji: '🫓', preparationTime: '12-15 min', image: images.parotta },
  { id: 'pr-005', name: 'Mushroom Piece Parotta', tamilName: 'காளான் பீஸ் பரோட்டா', description: 'Parotta with mushroom pieces', price: 140, category: 'parotta', isVeg: true, isBestseller: true, placeholderColor: '#D7CCC8', emoji: '🫓', preparationTime: '12-15 min', image: images.parotta },
  { id: 'pr-006', name: 'Paneer Piece Parotta', tamilName: 'பன்னீர் பீஸ் பரோட்டா', description: 'Parotta with paneer pieces', price: 150, category: 'parotta', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🫓', preparationTime: '12-15 min', image: images.parotta },

  // Special Chapathi (12:30 PM – 10:30 PM)
  { id: 'ch-001', name: 'Chapathi (1 Pc)', tamilName: 'சப்பாத்தி (1 பீஸ்)', description: 'Soft whole wheat chapathi', price: 40, category: 'chapathi', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🫓', preparationTime: '5-8 min', image: images.chapathi },
  { id: 'ch-002', name: 'Chilli Chapathi', tamilName: 'சில்லி சப்பாத்தி', description: 'Spicy chilli chapathi', price: 130, category: 'chapathi', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🫓', preparationTime: '12-15 min', image: images.chapathi },
  { id: 'ch-003', name: 'Masala Chapathi', tamilName: 'மசாலா சப்பாத்தி', description: 'Chapathi with masala', price: 130, category: 'chapathi', isVeg: true, isBestseller: false, placeholderColor: '#FFB74D', emoji: '🫓', preparationTime: '12-15 min', image: images.chapathi },
  { id: 'ch-004', name: 'Paneer Roll Chapathi', tamilName: 'பன்னீர் ரோல் சப்பாத்தி', description: 'Chapathi rolled with paneer', price: 150, category: 'chapathi', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🫓', preparationTime: '12-15 min', image: images.chapathi },

  // Special Idiyappam (4:00 PM – 10:30 PM)
  { id: 'id-001', name: 'Idiyappam (3 Pcs)', tamilName: 'இடியாப்பம் (3 பீஸ்)', description: 'Soft string hoppers', price: 65, category: 'idiyappam', isVeg: true, isBestseller: true, placeholderColor: '#FFFFFF', emoji: '🍛', preparationTime: '10-12 min', image: images.idiyappam },
  { id: 'id-002', name: 'Idiyappam Fry', tamilName: 'இடியாப்பம் ஃப்ரை', description: 'Stir fried string hoppers', price: 105, category: 'idiyappam', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🍛', preparationTime: '12-15 min', image: images.idiyappam },
  { id: 'id-003', name: 'Garlic Idiyappam Fry', tamilName: 'பூண்டு இடியாப்பம் ஃப்ரை', description: 'Garlic flavored idiyappam fry', price: 115, category: 'idiyappam', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍛', preparationTime: '12-15 min', image: images.idiyappam },
  { id: 'id-004', name: 'Mushroom Idiyappam Fry', tamilName: 'காளான் இடியாப்பம் ஃப்ரை', description: 'Idiyappam fry with mushroom', price: 120, category: 'idiyappam', isVeg: true, isBestseller: false, placeholderColor: '#D7CCC8', emoji: '🍛', preparationTime: '12-15 min', image: images.idiyappam },
  { id: 'id-005', name: 'Paneer Idiyappam Fry', tamilName: 'பன்னீர் இடியாப்பம் ஃப்ரை', description: 'Idiyappam fry with paneer', price: 130, category: 'idiyappam', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍛', preparationTime: '12-15 min', image: images.idiyappam },
  { id: 'id-006', name: 'Mundhiri Idiyappam Fry', tamilName: 'முந்திரி இடியாப்பம் ஃப்ரை', description: 'Idiyappam fry with cashews', price: 140, category: 'idiyappam', isVeg: true, isBestseller: false, placeholderColor: '#FFE082', emoji: '🍛', preparationTime: '12-15 min', image: images.idiyappam },

  // Special Idli Fry (5:00 PM – 10:30 PM)
  { id: 'if-001', name: 'Chilli Idli', tamilName: 'சில்லி இட்லி', description: 'Spicy chilli tossed idli', price: 120, category: 'idli-fry', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🍥', preparationTime: '10-12 min', image: images.idli },
  { id: 'if-002', name: 'Podi Idli', tamilName: 'பொடி இட்லி', description: 'Idli with spice powder', price: 120, category: 'idli-fry', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🍥', preparationTime: '10-12 min', image: images.idli },
  { id: 'if-003', name: 'Fry Idli', tamilName: 'ஃப்ரை இட்லி', description: 'Crispy fried idli', price: 120, category: 'idli-fry', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🍥', preparationTime: '10-12 min', image: images.idli },
  { id: 'if-004', name: 'Pepper Idli', tamilName: 'மிளகு இட்லி', description: 'Black pepper flavored idli', price: 120, category: 'idli-fry', isVeg: true, isBestseller: false, placeholderColor: '#D7CCC8', emoji: '🍥', preparationTime: '10-12 min', image: images.idli },
  { id: 'if-005', name: 'Fry Button Idli', tamilName: 'ஃப்ரை பட்டன் இட்லி', description: 'Crispy mini fried idlis', price: 120, category: 'idli-fry', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍥', preparationTime: '10-12 min', image: images.idli },
  { id: 'if-006', name: 'Idli Manchurian', tamilName: 'இட்லி மஞ்சூரியன்', description: 'Idli in manchurian sauce', price: 125, category: 'idli-fry', isVeg: true, isBestseller: true, placeholderColor: '#FF7043', emoji: '🍥', preparationTime: '12-15 min', image: images.idli },
  { id: 'if-007', name: 'Mushroom Fry Idli', tamilName: 'காளான் ஃப்ரை இட்லி', description: 'Fried idli with mushroom', price: 130, category: 'idli-fry', isVeg: true, isBestseller: false, placeholderColor: '#BCAAA4', emoji: '🍥', preparationTime: '12-15 min', image: images.idli },
  { id: 'if-008', name: 'Chettinad Fry Idli', tamilName: 'செட்டிநாடு ஃப்ரை இட்லி', description: 'Spicy Chettinad style fried idli', price: 130, category: 'idli-fry', isVeg: true, isBestseller: true, placeholderColor: '#FF5722', emoji: '🍥', preparationTime: '12-15 min', image: images.idli },
  { id: 'if-009', name: 'Paneer Fry Idli', tamilName: 'பன்னீர் ஃப்ரை இட்லி', description: 'Fried idli with paneer', price: 135, category: 'idli-fry', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍥', preparationTime: '12-15 min', image: images.idli },

  // Special Gravy (12:30 PM – 10:30 PM)
  { id: 'gr-001', name: 'Aloo Masala', tamilName: 'உருளை மசாலா', description: 'Spiced potato curry', price: 160, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🍛', preparationTime: '12-15 min', image: images.alooMasala },
  { id: 'gr-002', name: 'Gobi Masala', tamilName: 'கோபி மசாலா', description: 'Cauliflower curry', price: 160, category: 'gravy', isVeg: true, isBestseller: false, placeholderColor: '#FFF9C4', emoji: '🍛', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'gr-003', name: 'Aloo Gobi Masala', tamilName: 'உருளை கோபி மசாலா', description: 'Potato cauliflower curry', price: 170, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#FFECB3', emoji: '🍛', preparationTime: '12-15 min', image: images.alooMasala },
  { id: 'gr-004', name: 'Green Peas Masala', tamilName: 'பட்டாணி மசாலா', description: 'Green peas curry', price: 170, category: 'gravy', isVeg: true, isBestseller: false, placeholderColor: '#A5D6A7', emoji: '🍛', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'gr-005', name: 'Chana Masala', tamilName: 'சென்னா மசாலா', description: 'Chickpea curry', price: 170, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍛', preparationTime: '12-15 min', image: images.chanaMasala },
  { id: 'gr-006', name: 'Mushroom Masala', tamilName: 'காளான் மசாலா', description: 'Mushroom curry', price: 180, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#D7CCC8', emoji: '🍛', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'gr-007', name: 'Mutter Paneer Masala', tamilName: 'மட்டர் பன்னீர் மசாலா', description: 'Peas and paneer curry', price: 190, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#C8E6C9', emoji: '🍛', preparationTime: '12-15 min', image: images.paneerButterMasala },
  { id: 'gr-008', name: 'Paneer Butter Masala', tamilName: 'பன்னீர் பட்டர் மசாலா', description: 'Creamy butter paneer curry', price: 190, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🍛', preparationTime: '12-15 min', image: images.paneerButterMasala },
  { id: 'gr-009', name: 'Mix Veg Curry', tamilName: 'மிக்ஸ் வெஜ் கறி', description: 'Mixed vegetable curry', price: 180, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#AED581', emoji: '🍛', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'gr-010', name: 'Gobi Tikka Masala', tamilName: 'கோபி டிக்கா மசாலா', description: 'Tikka style cauliflower curry', price: 170, category: 'gravy', isVeg: true, isBestseller: false, placeholderColor: '#FF8A65', emoji: '🍛', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'gr-011', name: 'Mushroom Tikka Masala', tamilName: 'காளான் டிக்கா மசாலா', description: 'Tikka style mushroom curry', price: 180, category: 'gravy', isVeg: true, isBestseller: false, placeholderColor: '#BCAAA4', emoji: '🍛', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'gr-012', name: 'Paneer Tikka Masala', tamilName: 'பன்னீர் டிக்கா மசாலா', description: 'Tikka style paneer curry', price: 190, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🍛', preparationTime: '12-15 min', image: images.paneerButterMasala },
  { id: 'gr-013', name: 'Dal Thadka', tamilName: 'தால் தட்கா', description: 'Tempered lentil curry', price: 180, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#FFD54F', emoji: '🍛', preparationTime: '12-15 min', image: images.dalTadka },
  { id: 'gr-014', name: 'Paneer Sali Kuruma', tamilName: 'பன்னீர் சாளி குருமா', description: 'Paneer in rich kurma gravy', price: 190, category: 'gravy', isVeg: true, isBestseller: false, placeholderColor: '#FFE082', emoji: '🍛', preparationTime: '15-18 min', image: images.paneerButterMasala },
  { id: 'gr-015', name: 'Kaju Masala', tamilName: 'முந்திரி மசாலா', description: 'Rich cashew curry', price: 200, category: 'gravy', isVeg: true, isBestseller: true, placeholderColor: '#FFECB3', emoji: '🍛', preparationTime: '15-18 min', image: images.mixVegCurry },

  // Special Kadai & Kofta (12:30 PM – 10:30 PM)
  { id: 'kk-001', name: 'Kadai Gobi', tamilName: 'கடாய் கோபி', description: 'Cauliflower in kadai style', price: 175, category: 'kadai-kofta', isVeg: true, isBestseller: false, placeholderColor: '#FF8A65', emoji: '🍲', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'kk-002', name: 'Kadai Vegetables', tamilName: 'கடாய் காய்கறிகள்', description: 'Mixed vegetables kadai style', price: 175, category: 'kadai-kofta', isVeg: true, isBestseller: true, placeholderColor: '#AED581', emoji: '🍲', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'kk-003', name: 'Kadai Mushroom', tamilName: 'கடாய் காளான்', description: 'Mushroom in kadai style', price: 185, category: 'kadai-kofta', isVeg: true, isBestseller: false, placeholderColor: '#BCAAA4', emoji: '🍲', preparationTime: '12-15 min', image: images.mixVegCurry },
  { id: 'kk-004', name: 'Kadai Paneer', tamilName: 'கடாய் பன்னீர்', description: 'Paneer in kadai style', price: 195, category: 'kadai-kofta', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍲', preparationTime: '12-15 min', image: images.kadaiPaneer },
  { id: 'kk-005', name: 'Veg Kofta', tamilName: 'காய்கறி கோஃப்தா', description: 'Vegetable dumplings in gravy', price: 200, category: 'kadai-kofta', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍲', preparationTime: '15-18 min', image: images.malaiKofta },
  { id: 'kk-006', name: 'Malai Kofta', tamilName: 'மலாய் கோஃப்தா', description: 'Creamy kofta in rich gravy', price: 200, category: 'kadai-kofta', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🍲', preparationTime: '15-18 min', image: images.malaiKofta },
  { id: 'kk-007', name: 'Paneer Kofta', tamilName: 'பன்னீர் கோஃப்தா', description: 'Paneer dumplings in gravy', price: 200, category: 'kadai-kofta', isVeg: true, isBestseller: true, placeholderColor: '#FFF9C4', emoji: '🍲', preparationTime: '15-18 min', image: images.malaiKofta },

  // Special Tandoori & Kulcha (7:00 PM – 10:30 PM)
  { id: 'tk-001', name: 'Fulka (2 Pcs)', tamilName: 'புல்கா (2 பீஸ்)', description: 'Soft puffed bread', price: 70, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🫓', preparationTime: '8-10 min', image: images.roti },
  { id: 'tk-002', name: 'Tandoor Rotti', tamilName: 'தந்தூர் ரொட்டி', description: 'Tandoor baked bread', price: 70, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🫓', preparationTime: '8-10 min', image: images.roti },
  { id: 'tk-003', name: 'Butter Rotti', tamilName: 'பட்டர் ரொட்டி', description: 'Buttery tandoor bread', price: 80, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🫓', preparationTime: '8-10 min', image: images.roti },
  { id: 'tk-004', name: 'Aloo Parotta', tamilName: 'உருளை பரோட்டா', description: 'Potato stuffed parotta', price: 100, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🫓', preparationTime: '10-12 min', image: images.parotta },
  { id: 'tk-005', name: 'Kulcha', tamilName: 'குல்ச்சா', description: 'Soft leavened bread', price: 90, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🫓', preparationTime: '8-10 min', image: images.kulcha },
  { id: 'tk-006', name: 'Masala Kulcha', tamilName: 'மசாலா குல்ச்சா', description: 'Spiced kulcha', price: 100, category: 'tandoori', isVeg: true, isBestseller: false, placeholderColor: '#FFCC80', emoji: '🫓', preparationTime: '10-12 min', image: images.kulcha },
  { id: 'tk-007', name: 'Butter Kulcha', tamilName: 'பட்டர் குல்ச்சா', description: 'Buttery kulcha', price: 100, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🫓', preparationTime: '8-10 min', image: images.kulcha },
  { id: 'tk-008', name: 'Veg Stuffed Kulcha', tamilName: 'காய்கறி ஸ்டஃப்ட் குல்ச்சா', description: 'Vegetable stuffed kulcha', price: 100, category: 'tandoori', isVeg: true, isBestseller: false, placeholderColor: '#C8E6C9', emoji: '🫓', preparationTime: '10-12 min', image: images.kulcha },
  { id: 'tk-009', name: 'Paneer Kulcha', tamilName: 'பன்னீர் குல்ச்சா', description: 'Paneer stuffed kulcha', price: 110, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFF9C4', emoji: '🫓', preparationTime: '10-12 min', image: images.kulcha },
  { id: 'tk-010', name: 'Naan', tamilName: 'நான்', description: 'Classic tandoor naan', price: 70, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🫓', preparationTime: '8-10 min', image: images.naan },
  { id: 'tk-011', name: 'Butter Naan', tamilName: 'பட்டர் நான்', description: 'Buttery soft naan', price: 80, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🫓', preparationTime: '8-10 min', image: images.butterNaan },
  { id: 'tk-012', name: 'Garlic Naan', tamilName: 'பூண்டு நான்', description: 'Garlic flavored naan', price: 95, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🫓', preparationTime: '8-10 min', image: images.garlicNaan },
  { id: 'tk-013', name: 'Aloo Naan', tamilName: 'உருளை நான்', description: 'Potato stuffed naan', price: 95, category: 'tandoori', isVeg: true, isBestseller: false, placeholderColor: '#FFF59D', emoji: '🫓', preparationTime: '10-12 min', image: images.naan },
  { id: 'tk-014', name: 'Stuffed Naan', tamilName: 'ஸ்டஃப்ட் நான்', description: 'Vegetable stuffed naan', price: 100, category: 'tandoori', isVeg: true, isBestseller: false, placeholderColor: '#C8E6C9', emoji: '🫓', preparationTime: '10-12 min', image: images.naan },
  { id: 'tk-015', name: 'Kashmiri Naan', tamilName: 'காஷ்மீரி நான்', description: 'Sweet dry fruit naan', price: 110, category: 'tandoori', isVeg: true, isBestseller: true, placeholderColor: '#FFECB3', emoji: '🫓', preparationTime: '10-12 min', image: images.naan },

  // Special Lunch SPL Meals (12:30 PM – 3:30 PM)
  { id: 'ml-001', name: 'SPL Meals', tamilName: 'ஸ்பெஷல் மீல்ஸ்', description: 'Special full meals with extras', price: 200, category: 'meals', isVeg: true, isBestseller: true, placeholderColor: '#FFD54F', emoji: '🍽️', preparationTime: '15-20 min', image: images.southIndianMeals },
  { id: 'ml-002', name: 'Meals', tamilName: 'மீல்ஸ்', description: 'Complete South Indian meals', price: 150, category: 'meals', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🍽️', preparationTime: '12-15 min', image: images.southIndianMeals },
  { id: 'ml-003', name: 'Puliyodarai', tamilName: 'புளியோதரை', description: 'Tangy tamarind rice', price: 75, category: 'meals', isVeg: true, isBestseller: true, placeholderColor: '#8D6E63', emoji: '🍚', preparationTime: '8-10 min', image: images.lemonRice },
  { id: 'ml-004', name: 'Lemon Rice', tamilName: 'எலுமிச்சை சாதம்', description: 'Tangy lemon flavored rice', price: 75, category: 'meals', isVeg: true, isBestseller: true, placeholderColor: '#FFF176', emoji: '🍚', preparationTime: '8-10 min', image: images.lemonRice },
  { id: 'ml-005', name: 'Curd Rice', tamilName: 'தயிர் சாதம்', description: 'Cooling yogurt rice', price: 85, category: 'meals', isVeg: true, isBestseller: true, placeholderColor: '#FAFAFA', emoji: '🍚', preparationTime: '8-10 min', image: images.curdRice },
  { id: 'ml-006', name: 'Sambar Rice', tamilName: 'சாம்பார் சாதம்', description: 'Rice mixed with sambar', price: 85, category: 'meals', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍚', preparationTime: '8-10 min', image: images.lemonRice },
  { id: 'ml-007', name: 'Tomato Rice', tamilName: 'தக்காளி சாதம்', description: 'Tangy tomato flavored rice', price: 85, category: 'meals', isVeg: true, isBestseller: false, placeholderColor: '#EF5350', emoji: '🍚', preparationTime: '8-10 min', image: images.lemonRice },
  { id: 'ml-008', name: 'Veg Biryani', tamilName: 'காய்கறி பிரியாணி', description: 'Lunch special veg biryani', price: 90, category: 'meals', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍚', preparationTime: '12-15 min', image: images.vegBiryani },

  // Amman SPL Dosa (4:00 PM – 10:30 PM)
  { id: 'ad-001', name: 'Veg Masala Dosa', tamilName: 'காய்கறி மசாலா தோசை', description: 'Dosa with vegetable masala', price: 115, category: 'dosa', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },
  { id: 'ad-002', name: 'Gobi Masala Dosa', tamilName: 'கோபி மசாலா தோசை', description: 'Dosa with cauliflower masala', price: 115, category: 'dosa', isVeg: true, isBestseller: false, placeholderColor: '#FFF9C4', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },
  { id: 'ad-003', name: 'Chana Masala Dosa', tamilName: 'சென்னா மசாலா தோசை', description: 'Dosa with chickpea masala', price: 115, category: 'dosa', isVeg: true, isBestseller: false, placeholderColor: '#FFCC80', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },
  { id: 'ad-004', name: 'Mushroom Masala Dosa', tamilName: 'காளான் மசாலா தோசை', description: 'Dosa with mushroom masala', price: 125, category: 'dosa', isVeg: true, isBestseller: true, placeholderColor: '#D7CCC8', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },
  { id: 'ad-005', name: 'Vazhaipoo Masala Dosa', tamilName: 'வாழைப்பூ மசாலா தோசை', description: 'Dosa with banana flower masala', price: 125, category: 'dosa', isVeg: true, isBestseller: false, placeholderColor: '#A5D6A7', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },
  { id: 'ad-006', name: 'Green Peas Masala Dosa', tamilName: 'பட்டாணி மசாலா தோசை', description: 'Dosa with green peas masala', price: 125, category: 'dosa', isVeg: true, isBestseller: false, placeholderColor: '#81C784', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },
  { id: 'ad-007', name: 'Mysore Masala Dosa', tamilName: 'மைசூர் மசாலா தோசை', description: 'Spicy Mysore style dosa', price: 125, category: 'dosa', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },
  { id: 'ad-008', name: 'Paneer Masala Dosa', tamilName: 'பன்னீர் மசாலா தோசை', description: 'Dosa with paneer masala', price: 135, category: 'dosa', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🥞', preparationTime: '12-15 min', image: images.masalaDosa },

  // South Indian Evening Special (5:00 PM – 10:30 PM)
  { id: 'si-001', name: 'Idli (1 Pc)', tamilName: 'இட்லி (1 பீஸ்)', description: 'Soft steamed rice cake', price: 24, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FAFAFA', emoji: '🍚', preparationTime: '5-8 min', image: images.idli },
  { id: 'si-002', name: 'Ghee Podi Thattu Idly', tamilName: 'நெய் பொடி தட்டு இட்லி', description: 'Plate idli with ghee and podi', price: 55, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🍚', preparationTime: '8-10 min', image: images.idli },
  { id: 'si-003', name: 'Sambar Idli', tamilName: 'சாம்பார் இட்லி', description: 'Idli served with sambar', price: 70, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🍚', preparationTime: '8-10 min', image: images.idli },
  { id: 'si-004', name: 'Mini Sambar Idli', tamilName: 'மினி சாம்பார் இட்லி', description: 'Mini idlis in sambar', price: 75, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🍚', preparationTime: '10-12 min', image: images.idli },
  { id: 'si-005', name: 'Ghee Podi Idli', tamilName: 'நெய் பொடி இட்லி', description: 'Idli with ghee and spice powder', price: 80, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFAB91', emoji: '🍚', preparationTime: '8-10 min', image: images.idli },
  { id: 'si-006', name: 'Ghee Pongal', tamilName: 'நெய் பொங்கல்', description: 'Creamy rice with ghee', price: 75, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🍲', preparationTime: '12-15 min', image: images.pongal },
  { id: 'si-007', name: 'Poori', tamilName: 'பூரி', description: 'Puffed fried bread with curry', price: 75, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🫓', preparationTime: '10-12 min', image: images.poori },
  { id: 'si-008', name: 'Dosa', tamilName: 'தோசை', description: 'Crispy rice crepe', price: 75, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🥞', preparationTime: '8-10 min', image: images.dosa },
  { id: 'si-009', name: 'SPL Dosa', tamilName: 'ஸ்பெஷல் தோசை', description: 'Special crispy dosa', price: 85, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-010', name: 'Onion Dosa', tamilName: 'வெங்காய தோசை', description: 'Dosa topped with onions', price: 90, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFB74D', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-011', name: 'Masala Dosa', tamilName: 'மசாலா தோசை', description: 'Dosa with potato masala', price: 95, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFA726', emoji: '🥞', preparationTime: '10-12 min', image: images.masalaDosa },
  { id: 'si-012', name: 'Rava Dosa', tamilName: 'ரவா தோசை', description: 'Crispy semolina dosa', price: 90, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🥞', preparationTime: '10-12 min', image: images.ravaDosa },
  { id: 'si-013', name: 'Podi Dosa', tamilName: 'பொடி தோசை', description: 'Dosa with spice powder', price: 90, category: 'south-indian', isVeg: true, isBestseller: false, placeholderColor: '#FFAB91', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-014', name: 'Onion Podi Dosa', tamilName: 'வெங்காய பொடி தோசை', description: 'Onion dosa with podi', price: 100, category: 'south-indian', isVeg: true, isBestseller: false, placeholderColor: '#FF8A65', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-015', name: 'Pepper Dosa', tamilName: 'மிளகு தோசை', description: 'Black pepper flavored dosa', price: 90, category: 'south-indian', isVeg: true, isBestseller: false, placeholderColor: '#D7CCC8', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-016', name: 'Onion Rava Dosa', tamilName: 'வெங்காய ரவா தோசை', description: 'Rava dosa with onions', price: 100, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🥞', preparationTime: '10-12 min', image: images.ravaDosa },
  { id: 'si-017', name: 'Ghee Rava Dosa', tamilName: 'நெய் ரவா தோசை', description: 'Ghee roasted rava dosa', price: 105, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🥞', preparationTime: '10-12 min', image: images.ravaDosa },
  { id: 'si-018', name: 'Adai Aviyal Dosa', tamilName: 'அடை அவியல் தோசை', description: 'Mixed lentil dosa with aviyal', price: 110, category: 'south-indian', isVeg: true, isBestseller: false, placeholderColor: '#C8E6C9', emoji: '🥞', preparationTime: '12-15 min', image: images.dosa },
  { id: 'si-019', name: 'Ghee Roast', tamilName: 'நெய் ரோஸ்ட்', description: 'Crispy ghee roasted dosa', price: 105, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFD54F', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-020', name: 'Butter Roast', tamilName: 'பட்டர் ரோஸ்ட்', description: 'Crispy butter roasted dosa', price: 115, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-021', name: 'Butter Pepper Dosa', tamilName: 'பட்டர் மிளகு தோசை', description: 'Butter dosa with pepper', price: 120, category: 'south-indian', isVeg: true, isBestseller: false, placeholderColor: '#FFCC80', emoji: '🥞', preparationTime: '10-12 min', image: images.dosa },
  { id: 'si-022', name: 'Set Dosa Vada Curry', tamilName: 'செட் தோசை வடை கறி', description: 'Soft set dosa with vada curry', price: 125, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🥞', preparationTime: '12-15 min', image: images.dosa },
  { id: 'si-023', name: 'Ghee Cashew Rava Dosa', tamilName: 'நெய் முந்திரி ரவா தோசை', description: 'Rava dosa with ghee and cashews', price: 135, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFECB3', emoji: '🥞', preparationTime: '12-15 min', image: images.ravaDosa },
  { id: 'si-024', name: 'Ghee Cashew Onion Rava Dosa', tamilName: 'நெய் முந்திரி வெங்காய ரவா தோசை', description: 'Premium rava dosa with all toppings', price: 145, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFE082', emoji: '🥞', preparationTime: '12-15 min', image: images.ravaDosa },
  { id: 'si-025', name: 'Pepper Roast', tamilName: 'மிளகு ரோஸ்ட்', description: 'Pepper flavored roast dosa', price: 145, category: 'south-indian', isVeg: true, isBestseller: false, placeholderColor: '#D7CCC8', emoji: '🥞', preparationTime: '12-15 min', image: images.dosa },
  { id: 'si-026', name: 'Chola Poori', tamilName: 'சோளா பூரி', description: 'Poori with chana masala', price: 120, category: 'south-indian', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🫓', preparationTime: '12-15 min', image: images.poori },

  // Uttapam
  { id: 'ut-001', name: 'Uttapam', tamilName: 'ஊத்தப்பம்', description: 'Thick rice pancake', price: 80, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#FFE0B2', emoji: '🫓', preparationTime: '10-12 min', image: images.uttapam },
  { id: 'ut-002', name: 'Onion Uttapam', tamilName: 'வெங்காய ஊத்தப்பம்', description: 'Uttapam topped with onions', price: 95, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#FFB74D', emoji: '🫓', preparationTime: '10-12 min', image: images.uttapam },
  { id: 'ut-003', name: 'Podi Onion Uttapam', tamilName: 'பொடி வெங்காய ஊத்தப்பம்', description: 'Onion uttapam with podi', price: 100, category: 'uttapam', isVeg: true, isBestseller: false, placeholderColor: '#FFAB91', emoji: '🫓', preparationTime: '10-12 min', image: images.uttapam },
  { id: 'ut-004', name: 'Small Onion Uttapam', tamilName: 'சின்ன வெங்காய ஊத்தப்பம்', description: 'Uttapam with shallots', price: 105, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#FF8A65', emoji: '🫓', preparationTime: '10-12 min', image: images.uttapam },
  { id: 'ut-005', name: 'Gobi Uttapam', tamilName: 'கோபி ஊத்தப்பம்', description: 'Uttapam with cauliflower', price: 115, category: 'uttapam', isVeg: true, isBestseller: false, placeholderColor: '#FFF9C4', emoji: '🫓', preparationTime: '12-15 min', image: images.uttapam },
  { id: 'ut-006', name: 'Garlic Uttapam', tamilName: 'பூண்டு ஊத்தப்பம்', description: 'Garlic flavored uttapam', price: 115, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#FFCC80', emoji: '🫓', preparationTime: '12-15 min', image: images.uttapam },
  { id: 'ut-007', name: 'Mushroom Uttapam', tamilName: 'காளான் ஊத்தப்பம்', description: 'Uttapam with mushroom', price: 120, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#D7CCC8', emoji: '🫓', preparationTime: '12-15 min', image: images.uttapam },
  { id: 'ut-008', name: 'Paneer Uttapam', tamilName: 'பன்னீர் ஊத்தப்பம்', description: 'Uttapam with paneer', price: 125, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#FFF59D', emoji: '🫓', preparationTime: '12-15 min', image: images.uttapam },
  { id: 'ut-009', name: 'Five Taste Uttapam', tamilName: 'ஐந்து சுவை ஊத்தப்பம்', description: 'Uttapam with 5 toppings', price: 145, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#AED581', emoji: '🫓', preparationTime: '15-18 min', image: images.uttapam },
  { id: 'ut-010', name: 'Seven Taste Uttapam', tamilName: 'ஏழு சுவை ஊத்தப்பம்', description: 'Premium uttapam with 7 toppings', price: 175, category: 'uttapam', isVeg: true, isBestseller: true, placeholderColor: '#81C784', emoji: '🫓', preparationTime: '15-18 min', image: images.uttapam },
];
