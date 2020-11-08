import React, { useState } from "react";

const CreateTweet = () => {
  //State
  const [textInput, setTextInput] = useState("");
  //Functions
  const userInputHanlder = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <form>
      <textarea
        value={textInput}
        onChange={userInputHanlder}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
