import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTrade, removeTrade } from '../actions'
import TradesList from '../components/TradesList'
import AddTrade from '../components/AddTrade'

class App extends Component {
  static propTypes = {
    bids: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired).isRequired,
    asks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired).isRequired
  };
  render() {
    // Injected by connect()
    const { dispatch, bids, asks } = this.props
    return (
      <div>
        <TradesList trades={bids}/>
        <TradesList trades={asks}/>
        <AddTrade onAddClick={(trade) => dispatch(addTrade(trade))} />
      </div>
    )
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    ...state
  }
}

// Wrap the component to inject dispatch and state into
export default connect(select)(App)
