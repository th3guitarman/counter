import React, {Component} from 'react'

class Counter extends Component {
  render() {
    return (
      <div className= 'container'>
        <div className= 'navbar'>counter.js</div>
        <div className= 'counter'>
          <h1>{this.state.count}</h1>
          <button type= 'button' onClick= {this.increment10}>increment 10</button>
          <button type= 'button' onClick= {this.increment}>increment</button>
          <button type= 'button' onClick= {this.decrement}>decrement</button>
          <button type= 'button' onClick= {this.decrement10}>decrement 10</button>
        </div>
      </div>
    );
  }
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => { //react function
    this.setState ({
      count: this.state.count + 1
    })
  };
  increment10 = () => { //react function
    this.setState ({
      count: this.state.count + 10
    })
  };
  decrement = () => { //react function
    this.setState ({
      count: this.state.count - 1
    })
  };
  decrement10 = () => { //react function
    this.setState ({
      count: this.state.count - 10
    })
  };
};

export default Counter;
