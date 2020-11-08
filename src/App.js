import React from "react";
//Import Component
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  //here is the place to write code
  const name = "Dev Ed";
  const message = "I went to sleep today wow.";
  //Create our functions
  const sayHelloHandler = (e) => {
    console.log(`Hello`);
    console.log(e);
  };
  return (
    <div>
      <h1>Hello React</h1>
      {/* <CreateTweet /> */}
      {/* <TweetList name={name} message={message} /> */}
      <button onClick={sayHelloHandler}>Click</button>
    </div>
  );
}

export default App;
