const express = require("express");
const app = express();
app.use(express.json());

//So it can run locally
app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

//Api items
const recipes = [
    {id: 1, name: "Pizza", calories: 1000, description: "Yum italian pizza"},
    {id: 2, name: "Lasagna", calories: 800, description: "Yum italian lasagna, garfield approves"},
    {id: 3, name: "Chicken Parmesan", calories: 500, description: "Yum italian chicken parm, beware lactose people"}
];

app.post("/recipes", (req,res) =>{
    const {name, calories, description} = req.body;
    const id = recipes.length + 1;
    const new_recipe = {id, name, calories, description};
    recipes.push(new_recipe);
});

//deleting based off id, only one id works so far
app.delete("/recipes/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const recipe_index = recipes.findIndex((recipe) => recipe.id === id);
    if(recipe_index !== -1){
        recipes.splice(recipe_index, 1); //only removes one item
        res.send("Deleted id: ${id}");
    }
    else{
        res.send("Could not find index ${id}");
    }
});

//welcome world
app.get("/", (req, res) => { 
    res.send("Build back-end api here");
});

//get all the recipes
app.get("/recipes", (req,res) => { 
    res.json(recipes);
});

//gets recipes based on what you search
app.get("/recipes/search", (req, res) => {
    const { id, name, calories, description } = req.query;
  
    if (id) {
      const recipe = recipes.find((recipe) => recipe.id === parseInt(id));
      return res.json(recipe);
    }
  
    if (name) {
      const recipe = recipes.find((recipe) => recipe.name === name);
      return res.json(recipe);
    }
  
    if (calories) {
      const recipe = recipes.find((recipe) => recipe.calories === parseInt(calories));
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