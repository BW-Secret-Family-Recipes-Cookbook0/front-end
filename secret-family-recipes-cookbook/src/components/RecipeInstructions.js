import React from 'react';

function RecipeInstructions(props) {
  return (
    <div>
      <p className="item-description">{props.item.description}</p>
    </div>
  );
}

export default RecipeInstructions;