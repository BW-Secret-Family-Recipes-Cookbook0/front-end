import React from 'react';

function Home(props) {
  const routeToShop = event => {
    event.preventDefault();
    props.history.push('/item-list');
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src=""
        alt=""
      />
      <button onClick={routeToShop} className="md-button shop-button">
        View Recipes Now!
      </button>
    </div>
  );
}

export default Home;