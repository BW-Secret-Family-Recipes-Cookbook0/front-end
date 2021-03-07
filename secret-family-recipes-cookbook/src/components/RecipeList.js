import React from "react";

function RecipeList(props) {
  function routeToItem(ev, item) {
    ev.preventDefault();
    props.history.push(`/recipes/${item.id}`);
  }
  return (
    <div className="items-list-wrapper">
      {props.items.map(item => (
        <div
          onClick={ev => routeToItem(ev, item)}
          className="item-card"
          key={item.id}
        >
          <img
            className="item-list-image"
            src={item.ingreidents}
            alt={item.title}
          />
          <p>{item.title}</p>
          <p>${item.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;