import React, { useState } from "react";

function Square() {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [color, setColor] = useState(getRandomColor);

  const changeColor = (event) => {
    event.preventDefault();
    console.log(event);
    setColor(getRandomColor);
  };

  return (
    <div
      onMouseEnter={(event) => changeColor(event)}
      onMouseOver={() => setColor("transparent")}
      style={{ width: "500px", height: "500px", background: color }}
    ></div>
  );
}

export default Square;
