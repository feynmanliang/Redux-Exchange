import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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
        <TradesList
          title="Bids"
          trades={bids} />
        <TradesList
          title="Asks"
          trades={asks} />
        <AddTrade />
      </div>
    )
  }
}


// Wrap the component to inject dispatch and state into
// Note: use https://github.com/faassen/reselect for better connect selector performance.
export default connect(
  (state) => ({
    bids: state.bids,
    asks: state.asks
  })
)(App)
