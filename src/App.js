import React, { useState } from "react";
//Import Component
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("Dev Ed");
  const message = "message";
  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
}

export default App;
