import React from "react";
import pic from "../images/troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={pic} alt="xy" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">BY: Shivam Jha</h4>
    </header>
  );
}
