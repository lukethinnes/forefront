import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {

  render() {
      const { onReset, counter, onDelete, onIncrement } = this.props
    return (
      <div>
        <button 
          className="btn btn-primary btn-sm m-2" 
          onClick={onReset}
        >
        Reset
        </button>
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onDecrement={this.props.onDecrement}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
      </div>
    );
  }
}
