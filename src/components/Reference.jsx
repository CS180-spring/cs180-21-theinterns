import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

function Reference() {
  //Api
  const [recipes, setRecipes] = useState([]);

  //User input when searching api references
  const [input, setInput] = useState("");

  //Reads
  const [read, setRead] = useState([]);

  //updates
  const [update, setUpdate] = useState(false);

  //const leftBracket = "&lt;";
  //const rightBracket = "&gt;";

  //This function runs whenever the person presses enter key
  function useEnterKey(e) {
    if (e.key === "enter" || e.key === "Enter") {
      const inp = input.split(" "); //splits all the words
      const first_input = inp[0]; //first word
      const second_input = inp[1]; //second word
      const third_input = inp[2]; //third word for like read id 3

      //create
      if (first_input === "post") {
        //names could have many words so i have to becareful when splicing
        //check where it begins with a number
        const index = inp.findIndex((int) => /\d/.test(int));
        setInput("");
        //post food calories description
        //post chicken 4000 chicken is really good
        //food is only one word
        if (index == 2) {
          const name = inp[1];
          const cal = inp[2];
          const des = inp.slice(3).join(" ");

          const post = {
            method: "POST",
            body: JSON.stringify({ name, calories: cal, description: des }),
            headers: {
              "Content-Type": "application/json",
            },
          };

          fetch("http://localhost:4000/recipes", post)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        } else {
          console.log(index);
          const name = inp.slice(1, index);
          const cal = inp[index];
          const des = inp.slice(index + 1).join(" ");
          const post = {
            method: "POST",
            body: JSON.stringify({ name, calories: cal, description: des }),
            headers: {
              "Content-Type": "application/json",
            },
          };

          fetch("http://localhost:4000/recipes", post)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
        }
      }

      //delete off id
      if (first_input === "delete" || first_input === "Delete") {
        fetch(`http://localhost:4000/recipes/${second_input}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              fetchRecipes();
              setInput(""); //resets the search bar to empty
            } else {
              console.log("Error deleting recipe");
            }
          })
          .catch((error) => console.error(error));
      }

      //read
      if (first_input === "read" || first_input === "Read") {
        //read off id
        if (second_input === "id") {
          fetch(`http://localhost:4000/recipes/search?shortId=${third_input}`)
            .then((response) => response.json())
            .then((data) => {
              if (data) {
                setRead([data]);
              } else {
                console.log("Erroring getting the stuff");
              }
            });
          setInput("");
        }
      }

      //update
      if (first_input === "update") {
        fetchRecipes();
        setUpdate(true);
        setInput("");
      }
      e.preventDefault();
    }
  }

  function fetchRecipes() {
    fetch("http://localhost:4000/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }

  /*
  async function fetchRecipes() {
    try {
      const response = await fetch("http://localhost:4000/recipes");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error(error);
    }
  };*/

  //This runs whenver the program mounts
  useEffect(() => {
    console.log("use effect runs");
    fetchRecipes();
  }, []); //Add a value inside [] and whenever it changes this will run again

  return (
    <div>
      <ApiDirections>
        <h1>Commands</h1>
        <h2>update</h2>
        <h2>delete &lt;id&gt;</h2>
        <h2>post &lt;food&gt; &lt;calories&gt; &lt;description&gt;</h2>
        <h2>read id &lt;idnumber&gt;</h2>
      </ApiDirections>
      <SearchBar>
        <input
          className="search-bar"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            setUpdate(false);
          }}
          value={input}
          onKeyDown={useEnterKey}
        ></input>
      </SearchBar>
      <UpdateTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Calories</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {update &&
            recipes.map((recipe) => (
              <tr key={recipe.shortId}>
                <td>{recipe.shortId}</td>
                <td>
                  {Array.isArray(recipe.name)
                    ? recipe.name.join(" ")
                    : recipe.name}
                </td>
                <td>{recipe.calories}</td>
                <td>{recipe.description}</td>
              </tr>
            ))}
        </tbody>
      </UpdateTable>
      <div>
        {read.map((recipe) => (
          <div>
            <span>{recipe.id}</span>
            <span>{recipe.name}</span>
            <span>{recipe.calories}</span>
            <span>{recipe.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .search-bar {
    border: 2px solid black;
    padding: 10px;
    width: 1000px;
    font-size: 1.2rem;
    font-family: "Open-sans", sans-serif;
  }
  @media screen and (max-width: 768px) {
    .search-bar {
      width: 100%;
    }
  }
`;
const ApiDirections = styled.div`
  h1 {
    font-family: "Red Hat Display", sans-serif;
    text-align: center;
    font-size: 2.5rem;
  }
  h2 {
    font-family: "Open-sans", sans-serif;
    text-align: center;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;

const UpdateTable = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  font-family: "Open-sans", sans-serif;
  font-size: 1.2rem;
  th,
  td {
    text-align: center;
    padding: 10px;
  }
`;

export default Reference;
