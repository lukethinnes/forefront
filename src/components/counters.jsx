import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {

  render() {
    return (
      <div>
        <button 
          className="btn btn-primary btn-sm m-2" 
          onClick={this.props.onReset}
        >
        Reset
        </button>
          <Counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
      </div>
    );
  }
}
