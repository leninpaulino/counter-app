import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;

    return (
      <div>
        <div className="row">
          <button className="btn btn-primary btn-sm" onClick={onReset}>
            Reset
          </button>
        </div>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
