import React from "react";
import Post from "./Post";
import MyHeader from "./Tryst";
import { Profile } from "./Profile";
import Button from "./Button";
import LoginForm from "./LoginForm";
function TodoText() {
  return(<span>Lorem ipsum dolor sit amen.</span>)
}



function App() {
  return (
    <div className="App">
      <Post/>
      <TodoText/>
      <Profile/>
      <MyHeader/>
      <Button/>
      <hr/>
      <LoginForm/>
    </div>
  );
}

Button.defaultProps = {
  text : "Click me по умолчанию!"
};

export default App;
