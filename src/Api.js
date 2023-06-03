const express = require("express");
const app = express();

const shortid = require("shortid");
const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.use(express.json());

//So it can run locally
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

let recipes = [];
//reads json files with the recipes
fs.readFile("./src/recipes.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
  } else {
    recipes = JSON.parse(data);
  }
});

let users = [];
//read json files with the users
fs.readFile("./src/users.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
  } else {
    users = JSON.parse(data);
  }
});

app.post("/users/login", (req, res) => {
  const { name, password } = req.body;
  const input = { name, password };
  const user = users.find((user) => user.name === req.body.name);
  console.log(user);
});

app.post("/users/register", async (req, res) => {
  const { name, password } = req.body;
  const input = { name, password };
  const hash = await bcrypt.hash(input.password, 10);
  users.push({
    username: input.name,
    password: hash,
  });

  fs.writeFile(
    "./src/users.json",
    JSON.stringify(users, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file", err);
      } else {
        res.status(201).json(input.name, hash);
        console.log(input.name, hash);
      }
    }
  );
});

//update
app.put("/recipes/update", (req, res) => {
  const updatedRecipe = req.body;
  const recipe_index = recipes.findIndex(
    (recipe) => recipe.shortId === updatedRecipe.shortId
  );
  if (recipe_index !== -1) {
    recipes[recipe_index] = updatedRecipe;
    fs.writeFile(
      "./src/recipes.json",
      JSON.stringify(recipes, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing file", err);
          res.status(500).send(err);
        } else {
          res.status(200).json(updatedRecipe);
          console.log("Updated the recipe: ", updatedRecipe);
        }
      }
    );
  } else {
    res.status(404).send();
  }
});

//create
app.post("/recipes", (req, res) => {
  const {
    name,
    calories,
    description,
    image,
    cuisine,
    ingredients,
    instructions,
  } = req.body;

  const new_recipe = {
    shortId: shortid.generate(),
    name,
    calories,
    description,
    image,
    cuisine,
    ingredients,
    instructions,
  };
  recipes.push(new_recipe);

  fs.writeFile(
    "./src/recipes.json",
    JSON.stringify(recipes, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file", err);
      } else {
        res.status(201).json(new_recipe);
        console.log("Added a new recipe: ", new_recipe);
      }
    }
  );
});

//delete
app.delete("/recipes/delete", (req, res) => {
  const { shortId, name, calories } = req.query;
  //id
  if (shortId) {
    const recipe_index = recipes.findIndex(
      (recipe) => recipe.shortId === shortId
    );
    if (recipe_index !== -1) {
      recipes.splice(recipe_index, 1); //only removes one item
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  }

  //name
  if (name) {
    const recipe_index = recipes.findIndex((recipe) => {
      let recipeName = Array.isArray(recipe.name)
        ? recipe.name.join(" ")
        : recipe.name;
      return recipeName.toLowerCase() === name.toLowerCase();
    });
    if (recipe_index !== -1) {
      recipes.splice(recipe_index, 1); //only removes one item
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  }

  //calories
  if (calories) {
    const filteredIndexes = recipes
      .map((recipe, index) => {
        if (parseInt(recipe.calories) === parseInt(calories)) {
          return index;
        }
      })
      .filter((index) => index !== undefined);
    filteredIndexes.sort((a, b) => b - a);
    filteredIndexes.forEach((index) => {
      recipes.splice(index, 1);
    });
  }

  //made the deletion permament
  fs.writeFile(
    "./src/recipes.json",
    JSON.stringify(recipes, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file", err);
      } else {
        console.log(
          "Deleted a recipe",
          shortId ? shortId : name ? name : calories
        );
      }
    }
  );
});

//get all the recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

//gets recipes based on what you search
app.get("/recipes/search", (req, res) => {
  const { shortId, name, calories } = req.query;
  console.log(shortId, name, calories);
  if (shortId) {
    const recipe = recipes.find((recipe) => recipe.shortId === shortId);
    console.log("Printing id: ", recipe);
    return res.json(recipe);
  }

  if (name) {
    const recipe = recipes.find((recipe) => {
      let recipeName = Array.isArray(recipe.name)
        ? recipe.name.join(" ")
        : recipe.name;
      return recipeName.toLowerCase() === name.toLowerCase();
    });
    console.log("Returning name: ", recipe);
    return res.json(recipe);
  }

  if (calories) {
    const recipe = recipes.filter(
      (recipe) => parseInt(recipe.calories) === parseInt(calories)
    );
    console.log("Returning calories: ", recipe);
    return res.json(recipe);
  }
  res.status(400).send("Invalid query parameters");
});

//starts the server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
