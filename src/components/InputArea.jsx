import React, { useState } from "react";

function InputArea({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <form className="addItemContainer">
      <input
        className="newItemInput"
        type="text"
        placeholder="タイトル"
        name="title"
        value={note.title}
        onChange={handleChange}
      />
      <input
        className="newItemInput"
        type="text"
        placeholder="内容"
        name="content"
        value={note.content}
        onChange={handleChange}
      />
      <button className="newItemBtn" type="submit" onClick={onSubmit}>
        追加
      </button>
    </form>
  );
}

export default InputArea;
