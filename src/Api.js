const express = require("express");
const app = express();
const shortid = require("shortid");
//npm install shortid
app.use(express.json());

//So it can run locally
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Api items
const recipes = [
  {
    shortId: shortid.generate(),
    name: "Classic Chocolate Chip Cookies",
    calories: 150,
    description: "Soft and chewy chocolate chip cookies that everyone loves!",
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Cheese Sandwich",
    calories: 300,
    description:
      "Melted cheese between crispy bread slices, a comforting classic.",
  },
  {
    shortId: shortid.generate(),
    name: "Spaghetti and Meatballs",
    calories: 700,
    description:
      "A hearty meal of spaghetti and savory meatballs, topped with tangy tomato sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Roasted Chicken",
    calories: 400,
    description:
      "Juicy and flavorful roasted chicken with crispy skin and tender meat.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef Stew",
    calories: 500,
    description:
      "A warm and comforting beef stew, filled with tender meat, veggies, and flavorful broth.",
  },
  {
    shortId: shortid.generate(),
    name: "Banana Bread",
    calories: 200,
    description:
      "Moist and delicious banana bread, perfect for breakfast or a sweet snack.",
  },
  {
    shortId: shortid.generate(),
    name: "Spinach and Feta Stuffed Chicken",
    calories: 600,
    description:
      "Tender chicken breasts filled with spinach and creamy feta cheese.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Broccoli Stir-Fry",
    calories: 450,
    description:
      "Thinly sliced beef and crisp broccoli florets tossed in a savory sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Shrimp Scampi",
    calories: 400,
    description:
      "Buttery shrimp tossed with garlic, lemon, and white wine, served over pasta.",
  },
  {
    shortId: shortid.generate(),
    name: "Mushroom Risotto",
    calories: 550,
    description:
      "Creamy and flavorful arborio rice cooked with mushrooms and parmesan cheese.",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Tikka Masala",
    calories: 800,
    description:
      "A spicy and creamy Indian curry dish with tender chicken and aromatic spices.",
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Stir-Fry",
    calories: 350,
    description:
      "A colorful and healthy stir-fry loaded with veggies and tossed in a light soy sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Pesto Pasta",
    calories: 500,
    description:
      "Pasta tossed in a vibrant green pesto sauce made with fresh basil, garlic, and pine nuts.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef Tacos",
    calories: 300,
    description:
      "Crispy corn tortillas filled with seasoned ground beef, lettuce, tomato, and cheese.",
  },
  {
    shortId: shortid.generate(),
    name: "Sweet and Sour Chicken",
    calories: 700,
    description:
      "Tangy and sweet chicken stir-fry with colorful bell peppers and pineapple.",
  },
  {
    shortId: shortid.generate(),
    name: "Blueberry Pancakes",
    calories: 400,
    description:
      "Fluffy and delicious pancakes filled with fresh blueberries and drizzled with maple syrup.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Vegetable Stew",
    calories: 500,
    description:
      "A hearty and filling stew with tender beef, potatoes, carrots, and other veggies.",
  },
  {
    shortId: shortid.generate(),
    name: "Chicken Enchiladas",
    calories: 600,
    description:
      "Tortillas filled with seasoned chicken, cheese, and smothered in spicy tomato sauce.",
  },
  {
    shortId: shortid.generate(),
    name: "Lemon Garlic Shrimp Pasta",
    calories: 450,
    description:
      "Tender shrimp tossed in a garlicky lemon butter sauce with pasta and fresh herbs.",
  },
  {
    shortId: shortid.generate(),
    name: "Quinoa Salad",
    calories: 300,
    description:
      "A healthy and flavorful salad with quinoa, veggies, and a tangy vinaigrette dressing.",
  },
  {
    shortId: shortid.generate(),
    name: "Beef and Mushroom Pie",
    calories: 700,
    description:
      "A savory and delicious pie filled with tender beef, mushrooms, and gravy.",
  },
  {
    shortId: shortid.generate(),
    name: "Grilled Salmon",
    calories: 400,
    description:
      "Juicy and flavorful salmon fillets grilled to perfection with lemon and herbs.",
  },
  {
    shortId: shortid.generate(),
    name: "Vegetable Curry",
    calories: 400,
    description:
      "A colorful and spicy curry dish with an array of veggies, coconut milk, and aromatic spices.",
  },
  {
    shortId: shortid.generate(),
    name: "Fettuccine Alfredo",
    calories: 600,
    description:
      "Rich and creamy pasta dish with fettuccine noodles, parmesan cheese, and garlic.",
  },
  {
    shortId: shortid.generate(),
    name: "Pulled Pork Sandwich",
    calories: 500,
    description:
      "Slow-cooked pulled pork with tangy barbecue sauce served on a soft bun.",
  },
  {
    shortId: shortid.generate(),
    name: "Tomato Soup",
    calories: 250,
    description:
      "A classic and comforting soup made with juicy tomatoes, herbs, and cream.",
  },
];

app.post("/recipes", (req, res) => {
  const { name, calories, description } = req.body;
  const new_recipe = {
    shortId: shortid.generate(),
    name,
    calories,
    description,
  };
  recipes.push(new_recipe);
  res.status(201).json(new_recipe);
});

//deleting based off id, only one id works so far
app.delete("/recipes/:shortId", (req, res) => {
  const { shortId } = req.params;
  const recipe_index = recipes.findIndex(
    (recipe) => recipe.shortId === shortId
  );
  if (recipe_index !== -1) {
    recipes.splice(recipe_index, 1); //only removes one item
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

//welcome world
app.get("/", (req, res) => {
  res.send("Build back-end api here");
});

//get all the recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

//gets recipes based on what you search
app.get("/recipes/search", (req, res) => {
  const { shortId, name, calories, description } = req.query;

  if (shortId) {
    const recipe = recipes.find((recipe) => recipe.shortId === shortId);
    return res.json(recipe);
  }

  if (name) {
    const recipe = recipes.find((recipe) => recipe.name === name);
    return res.json(recipe);
  }

  if (calories) {
    const recipe = recipes.find(
      (recipe) => recipe.calories === parseInt(calories)
    );
    return res.json(recipe);
  }

  if (description) {
    const recipe = recipes.find((recipe) => recipe.description === description);
    return res.json(recipe);
  }

  res.status(400).send("Invalid query parameters");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
