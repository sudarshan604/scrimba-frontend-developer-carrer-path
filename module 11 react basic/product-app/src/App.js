import React from "react";
import randomColor from "randomcolor";

// import product from "./VschoolProduct";
// import Product from "./Product";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: "",
      isloading: true,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevs) => {
      return {
        count: prevs.count + 1,
      };
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isloading: false }), 1500);

    // console.log("mount");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      const newColor = randomColor();
      this.setState({ color: newColor });
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        {this.state.isloading ? (
          <h1>Loading..</h1>
        ) : (
          <h1>loading succefully</h1>
        )}

        <h2 style={{ color: this.state.color }}>{this.state.count}</h2>

        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}

export default App;
