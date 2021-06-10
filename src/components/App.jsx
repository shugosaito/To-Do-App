import React, { useState } from "react";
import Header from "./Header";
import Notes from "./Notes";
import Login from "./Login";

function App() {
  const [loginState, setLoginState] = useState(false);

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
