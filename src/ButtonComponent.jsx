import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrIcons } from "./Icons";

const ButtonComponent = () => {
  const [currentIcon, setCurrentIcon] = React.useState(
    arrIcons[Math.floor(Math.random() * arrIcons.length)],
  );

  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * arrIcons.length);
    const randomIcon = arrIcons[randomIndex];
    setTimeout(() => {
      setCurrentIcon(randomIcon);
    }, 3000);
  };
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "40vmin",
        height: "40vmin",
        backgroundColor: "#72a6e0",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "30px",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
      }}>
      <div style={{ backgroundColor: "#d74184", borderRadius: "10px", padding: "1vmin" }}>
        <FontAwesomeIcon color='#72a6e0' size='3x' icon={currentIcon} />
      </div>
      <button
        style={{
          width: "60%",
          height: "26%",
          border: "none",
          color: "white",
          fontSize: "calc(5px + 2vmin)",
          backgroundColor: "#d74184",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={() => getRandomIcon()}>
        Change icon
      </button>
    </div>
  );
};

export default ButtonComponent;
