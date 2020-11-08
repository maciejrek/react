import React, { useState } from "react";
//Import Component
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [name, setName] = useState("Dev Ed");
  const message = "message";
  return (
    <div>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
