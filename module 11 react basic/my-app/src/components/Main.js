import React from "react";

function Main() {
  let time = new Date();
  let timeFormat = "";

  let style = {
    color: "blue",
  };
  if (time.getHours() % 10 < 12 && time.getHours() < 5) {
    timeFormat = "day";
  } else if (time.getHours() % 10 > 5) {
    timeFormat = "night";
    style.color = "red";
  } else timeFormat = "morning";

  return (
    <main>
      <p style={style}>this is {timeFormat}</p>
    </main>
  );
}

export default Main;
