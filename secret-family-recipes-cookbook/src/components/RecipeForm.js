import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialItem = {
  title: "",
  source: "",
  ingredients: "",
  instructions: "",
  category: "",
};

const RecipeForm = props => {
  const [item, setItem] = useState(initialItem);
  const { push } = useHistory();

  const changeHandler = e => {
    console.log("recipe form change handler", item)
    // e.persist();
    // let value = e.target.value;

    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };
    

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('https://bw-secret-family-recipes0.herokuapp.com/api/recipes', item)
      .then(res => {
        console.log("succesfully added recipe", item)
        // props.setItems(res.data)
        // push('/recipes')
      })
       .catch(err => console.error("cannot post recipe ", {err}));
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={item.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="source"
          onChange={changeHandler}
          placeholder="Source"
          value={item.source}
        />
        <div className="baseline" />

        <input
          type="text"
          name="ingredients"
          onChange={changeHandler}
          placeholder="Ingredients"
          value={item.ingredients}
        />
        <div className="baseline" />

        <input
          type="text"
          name="instructions"
          onChange={changeHandler}
          placeholder="Instructions"
          value={item.instructions}
        />
        <div className="baseline" />

        <input
          type="text"
          name="category"
          onChange={changeHandler}
          placeholder="Category"
          value={item.category}
        />
        <div className="baseline" />

        <button className="md-button form-button">Add New Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;