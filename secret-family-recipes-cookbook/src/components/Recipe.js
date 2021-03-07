import React from 'react';
import { Route, NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';

import RecipeInstructions from './RecipeInstructions';

function Recipe(props) {
  const { push } = useHistory();

  const item = props.items.find(
    thing => `${thing.id}` === props.match.params.id
  );

  if (!props.items.length || !item) {
    return <h2>Loading item data...</h2>;
  }

  const handleDeleteItem = e => {
    e.preventDefault();
    axios.delete(`http://localhost:3333${item.id}`)
      .then(res => {
        console.log(res)
        props.setItems(res.data)
        push(`/item-list`)
      })
      .catch(err => console.error(`unable to delete item: ${item.id}: `, err.message))
  }

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.ingredients} alt={item.title} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.title}</h2>
          <h4>${item.source}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink exact to={`/item-list/${item.id}`}>
          the story
        </NavLink>
      </nav>
      <Route
        exact
        path="/item-list/:id"
        render={props => <RecipeInstructions {...props} item={item} />}
      />
      <button onClick={() => push(`/update-item/${item.id}`)} className="md-button">
        Edit
      </button>
      <button onClick={handleDeleteItem} className="md-button">
        Delete
      </button>
    </div>
  );
}

export default Recipe;