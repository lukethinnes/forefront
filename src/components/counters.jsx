import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {

  render() {
      const { onReset, counters, onDelete, onIncrement } = this.props
    return (
      <div>
        <button 
          className="btn btn-primary btn-sm m-2" 
          onClick={onReset}
        >
        Reset
        </button>
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
      </div>
    );
  }
}
