import React, { useState } from "react";

function Header() {
  const [title, setTitle] = useState("明日やろうはバカヤロー");

  const randomTitle = [
    "今日やり切ったらつえーぞ",
    "できるまでやれば必ずできる",
    "諦めの悪さが1番の才能",
    "君はつよつよエンジニアになりたいか",
    "やる気はまってもこねーぞ",
  ];

  let message;
  const length = randomTitle.length;

  const handleClick = () => {
    message = randomTitle[Math.floor(Math.random() * length)];
    setTitle(message);
  };

  return (
    <header className="top-header">
      <h1 className="title" onClick={handleClick}>
        {title}
      </h1>
    </header>
  );
}

export default Header;
