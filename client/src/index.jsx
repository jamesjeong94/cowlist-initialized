import React from "react";
import ReactDOM from "react-dom";
import CowList from "../components/cowlist";
import CowInput from "../components/cowinput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowData: [],
    };
  }

  componentDidMount() {
    fetch("./api/cows", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((cowData) => {
        console.log(cowData);
        this.setState({ cowData: cowData });
        return cowData;
      });
  }
  render() {
    return (
      <div>
        <ul>
          <CowInput />
          <CowList cowData={this.state.cowData} />
        </ul>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
