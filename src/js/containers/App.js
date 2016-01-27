import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTrade } from '../actions'
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

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
const mapStateToProps = (state) => ({
  bids: state.bids,
  asks: state.asks
})
const mapDispatchToProps = (dispatch) => ({})

// Wrap the component to inject dispatch and state into
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
