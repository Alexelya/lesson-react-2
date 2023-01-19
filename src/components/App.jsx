import React from "react";
import Post from "./Post";
import MyHeader from "./Tryst";
import { Profile } from "./Profile";
function TodoText() {
  return(<span>Lorem ipsum dolor sit amet.</span>)
}



function App() {
  return (
    <div className="App">
      <Post/>
      <TodoText/>
      <Profile/>
      <MyHeader/>
    </div>
  );
}

export default App;
