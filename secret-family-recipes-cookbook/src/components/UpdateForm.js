import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialItem = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
};

const UpdateForm = props => {
  const { push, goBack } = useHistory();
  const { id } = useParams();
  // const foundItem = props.items.find(itm => itm.id == id)
  const [item, setItem] = useState(initialItem);

  useEffect(() => {
    axios.get(`http://localhost:3333//${id}`)
      .then(res => {
        setItem(res.data)
      })
      .catch(err => console.error(`unable to get item: ${id}: `, err.message))
  }, []);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "price") {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios.put(`http://localhost:3333//${id}`, item)
      .then(res => {
        console.log(res)
        // goBack();
        props.setItems(res.data)
        push(`//${id}`)
      })
      .catch(err => console.error(`error saving item: ${id}: `, err.message))
  };

  return (
    <div>
      <h2>Update recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
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

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;