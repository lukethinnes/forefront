import React, {Component} from 'react';

export default class Counter extends Component {
  
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}>
          +
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onDecrement(this.props.counter)}>
         - 
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.props.counters.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const {value} = this.props.counters;
    return value === 0 ? 'Zero' : value;
  }
}
