import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Trade from './Trade'
import { removeTrade } from '../actions'

class TradesList extends Component {
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

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  onClickTrade: (tradeId) => dispatch(removeTrade(tradeId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradesList)
