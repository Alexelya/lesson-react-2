import React, { useState } from "react";

function LoginForm() {
  const sendForm = (event) => {
    event.preventDefault();
    console.log("Отправка формы на сервер", login);
  };

  const handleChange = (event) => {
    setChecked(!checked);
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);


  return (
    <form onSubmit={sendForm}>
      <label>
        Логин:
        <input
          value={login}
          onChange={event => setLogin(event.target.value)}
          name="Login"
          type="text"
        />
      </label>
      <label>
        Пароль:
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          type="password"
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        Запомни меня
      </label>
      <button>Отправить</button>
    </form>
  );
}

export default LoginForm;
