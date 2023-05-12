const shortid = require("shortid");
const recipes = [
  {
    shortId: shortid.generate(),
    name: "Pizza",
    calories: 1000,
    description: "Yum italian pizza",
    image: "./recipe_images/pizza.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Lasagna",
    calories: 800,
    description: "Yum italian lasagna, garfield approves",
    image: "./recipe_images/lasagna.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Parmesan",
    calories: 500,
    description: "Yum italian chicken parm, beware lactose people",
    image: "./recipe_images/chicken_parm.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Egg Fried Rice",
    calories: 1200,
    description: "Uncle Roger Approved",
    image: "./recipe_images/egg_fried_rice.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Tonkotsu Ramen",
    calories: 1500,
    description: "Don't worry, not instant",
    image: "./recipe_images/tonkotsu_ramen.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Fruit Bowl",
    calories: 450,
    description: "Fruits... in a bowl... with mint simple syrup and some rum",
    image: "./recipe_images/fruit_bowl.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Pork Katsu Don",
    calories: 1350,
    description: "Rice bowls ftw",
    image: "./recipe_images/pork_katsu_don.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Pad Thai",
    calories: 750,
    description: "Sweet and Spicy Noods",
    image: "./recipe_images/pad_thai.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Fried Chicken",
    calories: 1600,
    description: "The best way to have chicken",
    image: "./recipe_images/fried_chicken.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Steak",
    calories: 500,
    description: "Not Wagyu, but still pretty dam good",
    image: "./recipe_images/steak.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Hamburger",
    calories: 350,
    description: "Dang, it's a cheeseburger without cheese",
    image: "./recipe_images/hamburger.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Cheeseburger",
    calories: 450,
    description: "Dang, it's a hamburger with cheese",
    image: "./recipe_images/cheeseburger.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Apple Pie",
    calories: 2400,
    description: "The classic cinnamon + fruit pie",
    image: "./recipe_images/apple_pie.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Alfredo",
    calories: 1800,
    description: "Creamy deliciousness",
    image: "./recipe_images/chicken_alfredo.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Black Cod",
    calories: 550,
    description: "Nice delicious tender fish. Yum.",
    image: "./recipe_images/black_cod.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Shrimp Po Boy",
    calories: 700,
    description: "A New Orleans Staple",
    image: "./recipe_images/shrimp_po_boy.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Chili Dog",
    calories: 600,
    description: "Meat on Meat in between Buns",
    image: "./recipe_images/chili_dog.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Orange Chicken",
    calories: 900,
    description: "Not Chinese Food, but still pretty good",
    image: "./recipe_images/orange_chicken.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Country Fried Steak",
    calories: 850,
    description: "A classic southern breakfast",
    image: "./recipe_images/country_fried_steak.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Okonomiyaki",
    calories: 1150,
    description: "Yum Savory Pancake",
    image: "./recipe_images/okonomiyaki.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Curry Fishballs",
    calories: 650,
    description: "Yum fish balls dunked in curry",
    image: "./recipe_images/curry_fishballs.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Doughnut",
    calories: 500,
    description: "Yum Fried and Glazed Dough Rings",
    image: "./recipe_images/doughnut.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Peanut Butter and Jelly Sandwich",
    calories: 300,
    description: "You really need a recipe for this one?",
    image: "./recipe_images/pbnj.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Lemon Pepper Chicken Wings",
    calories: 400,
    description: "Tangy chicken wings for those who love flavor",
    image: "./recipe_images/lemon_pepper_chicken_wings.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Chocolate Chip Cookies",
    calories: 150,
    description: "Soft and chewy chocolate chip cookies that everyone loves!",
    image: "./recipe_images/chocolate_chip_cookies.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Cheese Sandwich",
    calories: 300,
    description:
      "Melted cheese between crispy bread slices, a comforting classic.",
    image: "./recipe_images/grilled_cheese_sandwich.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Spaghetti and Meatballs",
    calories: 700,
    description:
      "A hearty meal of spaghetti and savory meatballs, topped with tangy tomato sauce.",
    image: "./recipe_images/spaghetti_and_meatballs.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Roasted Chicken",
    calories: 400,
    description:
      "Juicy and flavorful roasted chicken with crispy skin and tender meat.",
    image: "./recipe_images/roasted_chicken.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Beef Stew",
    calories: 500,
    description:
      "A warm and comforting beef stew, filled with tender meat, veggies, and flavorful broth.",
    image: "./recipe_images/beef_stew.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Banana Bread",
    calories: 200,
    description:
      "Moist and delicious banana bread, perfect for breakfast or a sweet snack.",
    image: "./recipe_images/banana_bread.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Spinach and Feta Stuffed Chicken",
    calories: 600,
    description:
      "Tender chicken breasts filled with spinach and creamy feta cheese.",
    image: "./recipe_images/spinach_and_feta_stuffed_chicken.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Broccoli Stir-Fry",
    calories: 450,
    description:
      "Thinly sliced beef and crisp broccoli florets tossed in a savory sauce.",
    image: "./recipe_images/beef_and_broccoli_stir_fry.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Shrimp Scampi",
    calories: 400,
    description:
      "Buttery shrimp tossed with garlic, lemon, and white wine, served over pasta.",
    image: "./recipe_images/shrimp_scampi.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Mushroom Risotto",
    calories: 550,
    description:
      "Creamy and flavorful arborio rice cooked with mushrooms and parmesan cheese.",
    image: "./recipe_images/mushroom_risotto.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Tikka Masala",
    calories: 800,
    description:
      "A spicy and creamy Indian curry dish with tender chicken and aromatic spices.",
    image: "./recipe_images/chicken_tiki_masala.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Stir-Fry",
    calories: 350,
    description:
      "A colorful and healthy stir-fry loaded with veggies and tossed in a light soy sauce.",
    image: "./recipe_images/vegetable_stir_fry.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Pesto Pasta",
    calories: 500,
    description:
      "Pasta tossed in a vibrant green pesto sauce made with fresh basil, garlic, and pine nuts.",
    image: "./recipe_images/pesto_pasta.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Beef Tacos",
    calories: 300,
    description:
      "Crispy corn tortillas filled with seasoned ground beef, lettuce, tomato, and cheese.",
    image: "./recipe_images/beef_tacos.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Sweet and Sour Chicken",
    calories: 700,
    description:
      "Tangy and sweet chicken stir-fry with colorful bell peppers and pineapple.",
    image: "./recipe_images/sweet_and_sour_chicken.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Blueberry Pancakes",
    calories: 400,
    description:
      "Fluffy and delicious pancakes filled with fresh blueberries and drizzled with maple syrup.",
    image: "./recipe_images/blueberry_pancakes.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Vegetable Stew",
    calories: 500,
    description:
      "A hearty and filling stew with tender beef, potatoes, carrots, and other veggies.",
    image: "./recipe_images/beef_and_vegetable_stew.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Enchiladas",
    calories: 600,
    description:
      "Tortillas filled with seasoned chicken, cheese, and smothered in spicy tomato sauce.",
    image: "./recipe_images/chicken_enchiladas.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Lemon Garlic Shrimp Pasta",
    calories: 450,
    description:
      "Tender shrimp tossed in a garlicky lemon butter sauce with pasta and fresh herbs.",
    image: "./recipe_images/lemon_garlic_shrimp_pasta.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Quinoa Salad",
    calories: 300,
    description:
      "A healthy and flavorful salad with quinoa, veggies, and a tangy vinaigrette dressing.",
    image: "./recipe_images/quinoa_salad.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Mushroom Pie",
    calories: 700,
    description:
      "A savory and delicious pie filled with tender beef, mushrooms, and gravy.",
    image: "./recipe_images/beef_and_mushroom_pie.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Salmon",
    calories: 400,
    description:
      "Juicy and flavorful salmon fillets grilled to perfection with lemon and herbs.",
    image: "./recipe_images/grilled_salmon.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Curry",
    calories: 400,
    description:
      "A colorful and spicy curry dish with an array of veggies, coconut milk, and aromatic spices.",
    image: "./recipe_images/vegetable_curry.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Pulled Pork Sandwich",
    calories: 500,
    description:
      "Slow-cooked pulled pork with tangy barbecue sauce served on a soft bun.",
    image: "./recipe_images/pulled_pork_sandwich.jpg",
  },
  {
    shortId: shortid.generate(),
    name: "Tomato Soup",
    calories: 250,
    description:
      "A classic and comforting soup made with juicy tomatoes, herbs, and cream.",
    image: "./recipe_images/tomato_soup.jpg",
  },
];

module.exports = { recipes };