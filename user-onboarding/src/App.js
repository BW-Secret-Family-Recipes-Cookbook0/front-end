import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import UpdateRecipe from "./components/UpdateRecipe";
import RecipeList from "./components/RecipeList";
import { RecipesContext } from "./contexts/RecipesContext";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import "./App.css";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const deleteRecipe = (id) => {
    axiosWithAuth()
      .delete(`localhost:3000/${id}`)
      .then((res) => {
        console.log(res);
        const newList = recipeList.filter((item) => id !== item.id);
        setRecipeList(newList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <RecipesContext.Provider
        value={{ recipeList, setRecipeList, deleteRecipe }}
      >
        <Route path="/login" component={Login} />
      </RecipesContext.Provider>
    </div>
  );
}

export default App;
