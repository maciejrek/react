import React from "react";

const Tweet = ({ name, message }) => {
  const tweetDate = "24/06/2001"; // cannot pass it from child component to parent. It only goes down [ App -> comp1 -> comp2 ]
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{message}</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
