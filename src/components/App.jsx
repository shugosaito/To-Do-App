import React, { useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import Login from "./Login";

function App() {
  //stateを使うことで再度ReactDOM.render()せずにページを更新できる & function componentのなかで宣言しないといけない→App()の中で宣言
  const [loginState, setLoginState] = useState(false); ////trueに変更→メモページを表示

  const renderConditionally = () => {
    return loginState ? (
      <div className="app-container">
        <Header />
        <Notes />
      </div>
    ) : (
      <Login setLoginState={setLoginState} />
    );
  };

  return <div>{renderConditionally()}</div>;
}

export default App;
