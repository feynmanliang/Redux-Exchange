import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTrade, TradeTypes } from '../actions'

const { BID, ASK } = TradeTypes

class AddTrade extends Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
        <select defaultValue="bid" ref="tradeType">
          <option value={BID}>Bid</option>
          <option value={ASK}>Ask</option>
        </select>
        <input type="number" min="0" max="100" step="0.01" defaultValue="0" ref='price' />
        <button onClick={(e) => this.handleClick(e)}>
          Place Trade
        </button>
      </div>
    )
  }

  handleClick(e) {
    const price = parseFloat(this.refs.price.value.trim());
    const tradeType = this.refs.tradeType.value;
    const user = "TODO: change this in AddTrade";
    this.props.onAddClick({user, price, tradeType});
    this.refs.price.value = 0
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
  onAddClick: (trade) => dispatch(addTrade(trade))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTrade)
