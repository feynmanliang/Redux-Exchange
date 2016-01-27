import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TradesList from '../components/TradesList'
import AddTrade from '../components/AddTrade'
import { TradeTypes } from '../actions'

const { BID, ASK } = TradeTypes

class App extends Component {
  render() {
    // Injected by connect()
    return (
      <div>
        <TradesList
          tradeType={BID} />
        <TradesList
          tradeType={ASK} />
        <AddTrade />
      </div>
    )
  }
}


// Wrap the component to inject dispatch and state into
// Note: use https://github.com/faassen/reselect for better connect selector performance.
export default connect()(App)
