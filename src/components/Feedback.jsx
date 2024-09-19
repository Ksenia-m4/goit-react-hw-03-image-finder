import { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const { value } = e.target;
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    let value = 0;
    for (const key in this.state) {
      value += this.state[key];
    }
    return value;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  }

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" value="good" onClick={this.onLeaveFeedback}>
            Good
          </button>
          <button type="button" value="neutral" onClick={this.onLeaveFeedback}>
            Neutral
          </button>
          <button type="button" value="bad" onClick={this.onLeaveFeedback}>
            Bad
          </button>
        </div>

        <div className="statistics">
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()} </p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </>
    );
  }
}

export default Feedback;
