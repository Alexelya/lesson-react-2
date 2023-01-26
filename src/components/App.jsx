import React from "react";
import Post from "./Post";
import MyHeader from "./Tryst";
import { Profile } from "./Profile";
import Button from "./Button";
import LoginForm from "./LoginForm";
import BirthdayForm from "./BirthdayForm"
import CardUser from "./CardUser"
import Square from "./Square";
import LoginFormHomeWork from "./LoginFormHomeWork";
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
      <Square/>
      <button onMouseEnter={(event)=>(console.log(event))}>Enter</button>
      <button onMouseLeave={(event)=>(console.log(event))}>Leave</button>
     <hr />
      <button onClick={(event)=>(console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`))}>Position Mouse</button>
      <hr />
      <LoginFormHomeWork/>
    </div>
  );
}

Button.defaultProps = {
  text : "Click me по умолчанию!"
};

export default App;
