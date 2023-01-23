import React, { Component } from "react";

const title   = "Spectacle";
const title2  = "Cinema";
const text    = "Post";
const text2   = "Post2";
const img     = "https://www.sostheatre.am/upload/sbig_j37b94e01523690d83ca0b4143b096059.jpeg";
const img2    = "https://cdn.thetealmango.com/wp-content/uploads/2022/12/1138226-avatar-the-way-of-water.jpeg";
const marked  = true;

class Post extends Component {
  /*componentDidMount() {
        console.log("componentDidMount"); // когда компонент загружается
        this.setState({
            text : "Lorem"
        })
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate"); // Обновление стейта от дочерних классов или любое обновление

        // Всегда с условием
    }

    componentWillUnmount() {
        console.log("componentWillUnmount"); // Когда нужно поймать завершение работы какого-то процесса, например выход с страницы
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      
        // Всегда 
        // условие при котором должен сработать принудительно componentDidUpdate
    }*/

  render() {
    return (
      <div>
        <h1>Premieres</h1>
        <span>{marked ? title : title2}</span>
        <p>{text}</p>
        <img src={img} alt="" style={{width: "300px", minHeight: "200px"}} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
    };
  }

  render() {
    setInterval(() => {
      this.setState({ refresh: true });
    }, 3000);
    if (!this.state.refresh) {
      return (
        <div>
          <h1>Premieres</h1>
          <span>{title}</span>
          <p>{text}</p>
          <img src={img} alt="" style={{width: "300px", minHeight: "200px"}} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Premieres</h1>
          <span>{title2}</span>
          <p>{text2}</p>
          <img src={img2} alt="" style={{width: "300px", minHeight: "200px"}}/>
        </div>
      );
    }
  }
  componentDidMount() {
    this.setState({ refresh: false });
  }

}

export default Post;