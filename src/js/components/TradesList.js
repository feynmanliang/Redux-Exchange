import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Trade from './Trade'
import { removeTrade, TradeTypes } from '../actions'

const { BID, ASK } = TradeTypes

class TradesList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    tradeType: PropTypes.string.isRequired,
    onClickTrade: PropTypes.func.isRequired,
    trades: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired).isRequired
  };
  render() {
    const {title, onClickTrade, trades} = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {trades.map(trade =>
            <Trade
              key={trade.id}
              onClickTrade={onClickTrade}
              {...trade} />
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  (store, ownProps) => {
    switch (ownProps.tradeType) {
      case BID:
        return {
          title: "Bids",
          trades: store.bids
        }
      case ASK:
        return {
          title: "Asks",
          trades: store.asks
        }
      default:
        throw "Unrecognized Trade Type";
    }
  },
  (dispatch) => ({
    onClickTrade: (tradeId) => dispatch(removeTrade(tradeId))
  })
)(TradesList)
