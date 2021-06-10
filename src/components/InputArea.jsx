import React, { useState } from "react";

//一番関連のあるコンポーネント内で関数やフックを記述(inputValueなど)

function InputArea({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    //e.target.value & e.target.nameの二つ使うからdestructuringでまとめる && nameを使うことでどちらのinputか判別できる
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value, //prevValueの[name]のみ値を更新 && object's key as variable→[variable]
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
