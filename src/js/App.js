import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
let store = createStore(counter)

const Counter = ({
  count
}) => {
  return (
    <div>{count}</div>
  )
};

class App extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired,
    count: React.PropTypes.number.isRequired
  };
  render() {
    const { count, store } = this.props
    return (
      <div>
        <Counter count={count} />
        <button onClick={() => store.dispatch({
          type: 'INCREMENT'
        })}>+</button>
        <button onClick={() => store.dispatch({
          type: 'DECREMENT'
        })}>-</button>
      </div>
    )
  }
}

const render = () => ReactDOM.render(
    <App store={store} {...store.getState()} />,
      document.getElementById('root'));
store.subscribe(render)
render()
