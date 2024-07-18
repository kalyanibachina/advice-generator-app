import React from "react";

import axios from "axios";

import "./App.css";
class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      
        <div className="advice_app">
          <div className="advice_card">
            <h1 className="advice_heading">{advice}</h1>
            <button className="advice_button" onClick={this.fetchAdvice}>
              <span>GIVE ME ADVICE!</span>
              </button>
          </div>
        </div>
     
    );
  }
}

export default App;
