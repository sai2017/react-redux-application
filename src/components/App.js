import React, {Component} from 'react';

const App = () => (
  <Counter></Counter>
)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  hundlePlusButton() {
    this.setState({count: this.state.count + 1});
  }

  hundleMinusButton() {
    this.setState({count: this.state.count - 1});
  }

  render () {
    return(
      <>
        <div>count: {this.state.count}</div>
        <button onClick={() => {this.hundlePlusButton()}}>+</button>
        <button onClick={() => {this.hundleMinusButton()}}>-</button>
      </>
    )
  };
}

export default App;
