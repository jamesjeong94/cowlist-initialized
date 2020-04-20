import React from "react";
import ReactDOM from "react-dom";

import CowItem from "./cowitem";

class CowList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Cows Cows Cows</h3>
        <ol>
          {this.props.cowData.map((cow) => {
            return <CowItem cowData={cow} key={cow.id} />;
          })}
        </ol>
      </div>
    );
  }
}

export default CowList;
