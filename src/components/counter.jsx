import React, {Component} from 'react';

export default class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  styles = {
    fontSize: 10,
    fontWeight: 'bold',
  };

  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}>
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const {value} = this.state;
    return value === 0 ? 'Zero' : value;
  }
}
