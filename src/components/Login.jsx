import React, { useState } from "react";

function Login({ setLoginState }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

  const loggedIn = () => {
    console.log("logged in successfully");
    setLoginState(true);
  };

  return (
    <div>
      <header className="top-header">
        <h2 className="title">新規登録の方</h2>
      </header>

      <form action="/" className="loginForm">
        <p className="loginName">初めまして {name}</p>

        <input
          className="loginInput"
          type="text"
          placeholder="ユーザーネーム"
          value={name}
          onChange={handleChange}
        />

        <input
          className="loginInput"
          type="password"
          placeholder="パスワード"
        />

        <button type="submit" onClick={loggedIn} className="loginBtn">
          サインイン
        </button>

        <p onClick={loggedIn} className="loginLink">
          ログインはこちら
        </p>
      </form>
    </div>
  );
}

export default Login;
