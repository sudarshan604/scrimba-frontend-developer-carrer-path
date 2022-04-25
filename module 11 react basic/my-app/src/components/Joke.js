import React from "react";

function Joke(props) {
  if (props.punchline === null) {
    props.punchline = "kshetri";
  }

  return (
    <div>
      <h2 style={{ color: !props.punchline && "#888888" }}>
        Question:{props.question}
      </h2>
      <h2 style={{ display: props.punchline ? "block" : "none" }}>
        PunchLine:{props.punchline}
      </h2>
    </div>
  );
}

export default Joke;
