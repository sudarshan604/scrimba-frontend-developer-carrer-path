import React from "react";

import Joke from "./components/Joke.js";

import JokeData from "./components/JokesData.js";
function App() {
  const JokeComponent = JokeData.map((jokedata) => (
    <Joke question={jokedata.question} punchline={jokedata.punchline} />
  ));

  return <div>{JokeComponent}</div>;
}
export default App;
