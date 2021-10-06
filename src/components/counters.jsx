import React, {Component} from 'react';
import Counter from './counter';

export default class Counters extends Component {

  render() {
    return (
      <div>
        <button 
          className="btn btn-primary btn-sm m-2" 
        >
        Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            counter={counter}
            id={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}
