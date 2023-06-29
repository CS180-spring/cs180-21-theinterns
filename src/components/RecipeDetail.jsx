import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { RecipeDetailDiv, UpdateForm } from "./Styles";
import { useNavigate } from "react-router-dom";

function RecipeDetail() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    calories: "",
    ingredients: "",
    instructions: "",
  });
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  //For Image Upload
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  function fetchCurrentUser() {
    fetch("http://localhost:4000/users/current")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
        } else {
          console.log("Error", data);
        }
        if (data === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch((error) => console.error(error));
  }

  const recipe = recipes.find((recipe) =>
    Array.isArray(recipe.name)
      ? recipe.name.join(" ").toLowerCase() ===
        name.replace(",", " ").toLowerCase()
      : recipe.name.toLowerCase() === name.toLowerCase()
  );

  function fetchRecipes() {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }

  const handleImage = () => {
    setIsLoading(false);
  };

  const handleDoubleClick = () => {
    setIsEdit(true);
  };

  const handleUpdate = () => {
    setIsUpdate(true);
    setFormValues({
      name: recipe.name,
      calories: recipe.calories,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe_index = recipes.findIndex(
      (item) => item.shortId === recipe.shortId
    );
    const updatedRecipe = {
      ...recipe,
      name: formValues.name,
      calories: formValues.calories,
      ingredients: formValues.ingredients,
      instructions: formValues.instructions,
    };
    fetch(`http://localhost:4000/recipes/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRecipe),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setIsUpdate(false);
        fetchRecipes();
        navigate(`/${updatedRecipe.name}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  //Image Upload functions

  /*
  function handleImageFile(event) {
    setImage(event.target.files[0])
  }

  function handleImageUpload() {
    const formData = new FormData()
    formData.append('image', image)
    axios.post('url', formData).then((res) => {
      console.log(res)
    })

    /*
    fetch(
      'url',
      {
        method: "POST",
        body: formData
      }
    ).then((response) => response.json())
    .then(
      (result) => {
      console.log('success', result)
    })
    .catch(error => {
      console.error("Error:", error)
    })
    
  }*/

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    const imageName = file.name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = '350px';
        canvas.height = '350px';
        canvas.border = '2px solid black';
        canvas.objectFit = 'cover';
        canvas.marginBottom = '10px';
        canvas.marginRight = '10px';
        canvas.marginLeft = '40px';
        canvas.marginRight = '30px';
      }
    }
    setImage(file);
    recipe.image={imageName};
  }

  //Get the recipes
  useEffect(() => {
    fetchRecipes();
    fetchCurrentUser();
  }, []);

  return (
    <RecipeDetailDiv>
      {recipe && !isUpdate ? (
        <div className="recipe-card" onDoubleClick={handleDoubleClick}>
          <div className="first">
            <h2 className="name">
              {Array.isArray(recipe.name) ? recipe.name.join(" ") : recipe.name}
            </h2>
            {isAdmin ? (
              <div>
                <div onClick={(handleImageClick)}>
                  {image ? 
                    <img 
                      src={URL.createObjectURL(image)} 
                      alt="" 
                      className="image" 
                    /> 
                    : 
                    <img 
                      src={recipe.image} 
                      alt="" 
                      className="image" 
                    />
                  }
                  <input 
                    type="file" 
                    ref={inputRef} 
                    onChange={handleImageChange} 
                    style = {{ display: "none" }}
                  />
                </div>
              </div>
            ) : (
              <img 
                src={recipe.image} 
                className="image" 
                onLoad={handleImage} 
              />
            )
            }
            <div className="second">
              <p className="calories">{recipe.calories} calories</p>
              {isAdmin ? (
                <button className="update" onClick={handleUpdate}>
                  Update Form
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="third">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.split(",").map((r) => {
                const sentence = r.trim();
                return sentence && <li className="ingredients">{sentence}</li>;
              })}
            </ul>
            <h3>Instructions</h3>
            <ul>
              {recipe.instructions.split(".").map((r) => {
                const sentence = r.trim();
                return sentence && <li className="instructions">{sentence}</li>;
              })}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {recipe && isUpdate ? (
        <UpdateForm onSubmit={handleSubmit}>
          <label htmlFor="food">Food</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="calories">Calories</label>
          <input
            type="text"
            name="calories"
            id="calories"
            value={formValues.calories}
            onChange={handleChange}
          ></input>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formValues.ingredients}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="instructions">Instructions</label>
          <textarea
            name="instructions"
            id="instructions"
            value={formValues.instructions}
            onChange={handleChange}
          ></textarea>
          <button type="submit">update</button>
        </UpdateForm>
      ) : (
        ""
      )}
    </RecipeDetailDiv>
  );
}

export default RecipeDetail;
