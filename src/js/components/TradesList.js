import React, { Component, PropTypes } from 'react'
import Trade from './Trade'

export default class TradesList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onClickTrade: PropTypes.func.isRequired,
    trades: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired).isRequired
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.trades.map(trade =>
            <Trade
              key={trade.id}
              onClickTrade={this.props.onClickTrade}
              {...trade} />
          )}
        </ul>
      </div>
    )
  }
}
