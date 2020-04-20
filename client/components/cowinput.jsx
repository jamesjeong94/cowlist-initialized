import React from "react";

class CowInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cowName: "", cowDesc: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    //add to database
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Cow:
          <input
            type="text"
            id="cowName"
            value={this.state.cowName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            id="cowDesc"
            value={this.state.cowDesc}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CowInput;
