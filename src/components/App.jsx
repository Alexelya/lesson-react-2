import React from "react";
import Post from "./Post";
import MyHeader from "./Tryst";
import { Profile } from "./Profile";
import Button from "./Button";
import LoginForm from "./LoginForm";
import BirthdayForm from "./BirthdayForm"
import CardUser from "./CardUser"
function TodoText() {
  return(<span>Lorem ipsum dolor sit amen.</span>)
}



function App() {
  return (
    <div className="App">
      <Post/>
      <CardUser/>
      <TodoText/>
      <Profile/>
      <hr/>
      <BirthdayForm/>
      <hr/>
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
