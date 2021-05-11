import React from "react";

class Rank extends React.Component {
  constructor() {
    super();
    this.state = {
      emoji: "",
    };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries) {
      return null;
    }
    this.generateEmoji(this.props.entries);
  }

  generateEmoji = (entries) => {
    fetch(
      `https://9nb4js2g16.execute-api.us-east-2.amazonaws.com/rank?rank=${entries}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ emoji: data.input }))
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <div className=" white f3">{`${this.props.name}, your current entry count is...`}</div>
        <div className=" white f3">{this.props.entries}</div>
        <div className=" white f4">{`Rank Badge: ${this.state.emoji}`}</div>
      </div>
    );
  }
}

export default Rank;
