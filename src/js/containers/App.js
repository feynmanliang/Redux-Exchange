import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Counter from '../components/Counter'

class App extends Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired
  };
  render() {
    // Injected by connect()
    const { dispatch, count } = this.props
    return (
      <div>
        <Counter count={count} />
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    )
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    count: state.count
  }
}

// Wrap the component to inject dispatch and state into
export default connect(select)(App)
