import React, { useState } from "react";

function LoginFormHomeWork() {
  const sendForm = (event) => {
    event.preventDefault();
    console.log([{ login }, { password }, { passwordConfirmation }]);
  };

  const [login, setLogin] = useState("");
  const [loginErr, setLoginErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  const validate = (event) => {
    event.preventDefault();
    if (!validEmail.test(login)) {
      setLoginErr(true);
    }
  };

  return (
    <form onSubmit={sendForm} style={{ backgroundColor: "gray" }}>
      <label>
        Login:
        <input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          id="email"
          type="text"
          placeholder="example@domain.com"
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
          name="password"
          type="password"
        />
      </label>
      <br />
      <br />
      <label>
        Password confirmation:
        <input
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          placeholder="Enter Confirm Password"
          name="passwordConfirmation"
          type="password"
        />
        {passwordConfirmation === "" ? (
          ""
        ) : password === passwordConfirmation ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            {" "}
            Passwords match{" "}
          </p>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>
            {" "}
            Passwords not match{" "}
          </p>
        )}
      </label>

      <button type="submit">console output</button>
      <div>
        <button onClick={validate}>Validate</button>
      </div>
      {loginErr && <p>Your email is invalid</p>}
    </form>
  );
}

export default LoginFormHomeWork;
