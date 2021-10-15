import React from "react";

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Your Favorite Food!</h1>
      <div>
        <button
          className="Buttons"
          id="order-pizza"
          onClick={() => props.history.push("/pizza")}
        >
          Pizza
        </button>
      </div>
    </div>
  );
};

export default Home;
