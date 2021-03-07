import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const initialItem = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
};

const RecipeForm = props => {
  const [item, setItem] = useState(initialItem);
  const { push } = useHistory();

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'price') {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios.post('http://localhost:3333/', item)
      .then(res => {
        props.setItems(res.data)
        push('/recipes')
      })

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
          type="string"
          name="ingredients"
          onChange={changeHandler}
          placeholder="Ingredients"
          value={item.ingredients}
        />
        <div className="baseline" />

        <input
          type="string"
          name="instructions"
          onChange={changeHandler}
          placeholder="Instructions"
          value={item.instructions}
        />
        <div className="baseline" />

        <input
          type="string"
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