import React, { useState } from "react";

function Note({ note, id, handleDelete }) {
  const [mouseOver, setMouseOver] = useState(false);
  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <div
      className="noteContainer"
      style={{ backgroundColor: mouseOver ? "#efefef" : "white" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h3 className="noteTitle">
        <span className="noteId">{id + 1}</span>
        {note.title}
      </h3>
      <p className="noteContent">{note.content}</p>

      {/* onClickの関数内でhandleDeleteを呼ぶことでクリック時に呼ばれる
       (onClick={handleDelete(id)}→引数を使用する際は()がつく＝レンダリング時に関数が実行されてしまう) */}
      <p className="noteDelete" onClick={() => handleDelete(id)}>
        Delete
      </p>
    </div>
  );
}

export default Note;
